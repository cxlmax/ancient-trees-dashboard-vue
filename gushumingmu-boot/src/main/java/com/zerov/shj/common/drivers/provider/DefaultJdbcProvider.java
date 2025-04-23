package com.zerov.shj.common.drivers.provider;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.fastjson2.JSONObject;
import com.zerov.shj.common.drivers.Provider;
import com.zerov.shj.common.drivers.config.JdbcConfiguration;
import com.zerov.shj.common.drivers.entity.DatasourceRequest;
import com.zerov.shj.common.drivers.entity.TableField;
import com.zerov.shj.common.drivers.plugins.ExtendedJdbcClassLoader;
import com.zerov.shj.common.exception.DatasourceException;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.core.io.ClassPathResource;

import javax.annotation.PostConstruct;
import java.io.File;
import java.net.URL;
import java.sql.*;
import java.util.*;

public abstract class DefaultJdbcProvider extends Provider {
    protected Map<String, DruidDataSource> jdbcConnection = new HashMap<>();
    protected ExtendedJdbcClassLoader extendedJdbcClassLoader;
    List<String> jarList = new ArrayList(Arrays.asList("clickhouse-jdbc-0.4.3.jar",
            "DmJdbcDriver18.jar", "mysql-connector-java-5.1.46.jar", "ojdbc8-12.2.0.1.jar", "postgresql-42.3.6.jar", "sqljdbc4-4.0.jar"));
    final String property = System.getProperty("user.dir");

    abstract public boolean isUseDatasourcePool();

    @PostConstruct
    public void init() throws Exception {
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        extendedJdbcClassLoader = new ExtendedJdbcClassLoader(new URL[]{}, classLoader);
        try {
            // 循环按顺序
            for (String jarName : jarList) {
                ClassPathResource classPathResource = new ClassPathResource("drivers/" + jarName);
                File jar = new File(property + "/temp/" + jarName);
                FileUtils.copyToFile(classPathResource.getInputStream(), jar);
                extendedJdbcClassLoader.addFile(jar);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    abstract public String getType();


    public Statement getStatement(Connection connection, int queryTimeout) throws Exception {
        if (connection == null) {
            throw new Exception("Failed to get connection!");
        }
        Statement stat = connection.createStatement();
        try {
            stat.setQueryTimeout(queryTimeout);
        } catch (Exception e) {
        }
        return stat;
    }

    @Override
    public Map<String, List> fetchResultAndField(DatasourceRequest datasourceRequest) throws Exception {
        Map<String, List> result = new HashMap<>();
        List<String[]> dataList;
        List<TableField> fieldList;
        JdbcConfiguration jdbcConfiguration = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), JdbcConfiguration.class);
        int queryTimeout = jdbcConfiguration.getQueryTimeout() > 0 ? jdbcConfiguration.getQueryTimeout() : 0;
        try (Connection connection = getConnectionFromPool(datasourceRequest); Statement stat = getStatement(connection, queryTimeout); ResultSet rs = stat.executeQuery(datasourceRequest.getQuery())) {
            fieldList = fetchResultField(rs, datasourceRequest);
            result.put("fieldList", fieldList);
            dataList = getDataResult(rs);
            result.put("dataList", dataList);
            return result;
        } catch (SQLException e) {
            DatasourceException.throwException(e);
        } catch (Exception e) {
            DatasourceException.throwException(e);
        }
        return new HashMap<>();
    }


    @Override
    public Connection getConnectionFromPool(DatasourceRequest datasourceRequest) throws Exception {
        if (!isUseDatasourcePool()) {
            return getConnection(datasourceRequest);
        }

        DruidDataSource dataSource = jdbcConnection.get(datasourceRequest.getDatasource().getId());
        if (dataSource == null) {
            handleDatasource(datasourceRequest, "add");
        }
        dataSource = jdbcConnection.get(datasourceRequest.getDatasource().getId());
        Connection co = dataSource.getConnection();
        return co;
    }

    @Override
    public void handleDatasource(DatasourceRequest datasourceRequest, String type) throws Exception {
        if (!isUseDatasourcePool()) {
            return;
        }
        DruidDataSource dataSource = null;
        switch (type) {
            case "add":
                checkStatus(datasourceRequest);
                dataSource = jdbcConnection.get(datasourceRequest.getDatasource().getId());
                if (dataSource == null) {
                    addToPool(datasourceRequest);
                }
                break;
            default:
                break;
        }
    }

    @Override
    public String checkStatus(DatasourceRequest datasourceRequest) throws Exception {
        String queryStr = getTablesSql(datasourceRequest);
        JdbcConfiguration jdbcConfiguration = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), JdbcConfiguration.class);
        int queryTimeout = jdbcConfiguration.getQueryTimeout() > 0 ? jdbcConfiguration.getQueryTimeout() : 0;
        try (Connection con = getConnection(datasourceRequest); Statement statement = getStatement(con, queryTimeout); ResultSet resultSet = statement.executeQuery(queryStr)) {
        } catch (Exception e) {
            DatasourceException.throwException(e.getMessage());
        }
        return "Success";
    }


    @Override
    public void addToPool(DatasourceRequest datasourceRequest) throws Exception {
        if (!isUseDatasourcePool()) {
            return;
        }
        DruidDataSource druidDataSource = new DruidDataSource();
        JdbcConfiguration jdbcConfiguration = setCredential(datasourceRequest, druidDataSource);
        // 初始连接数
        druidDataSource.setInitialSize(jdbcConfiguration.getInitialPoolSize());
        // 最小连接数
        druidDataSource.setMinIdle(jdbcConfiguration.getMinPoolSize());
        // 最大连接数
        druidDataSource.setMaxActive(jdbcConfiguration.getMaxPoolSize());
        druidDataSource.init();
        jdbcConnection.put(datasourceRequest.getDatasource().getId(), druidDataSource);
    }

    @Override
    public JdbcConfiguration setCredential(DatasourceRequest datasourceRequest, DruidDataSource dataSource) throws Exception {
        return null;
    }

    @Override
    public String getTablesSql(DatasourceRequest datasourceRequest) throws Exception {
        return "show tables;";
    }


    private List<TableField> fetchResultField(ResultSet rs, DatasourceRequest datasourceRequest) throws Exception {
        List<TableField> fieldList = new ArrayList<>();
        ResultSetMetaData metaData = rs.getMetaData();
        int columnCount = metaData.getColumnCount();
        for (int j = 0; j < columnCount; j++) {
            String f = metaData.getColumnName(j + 1);
            String l = StringUtils.isNotEmpty(metaData.getColumnLabel(j + 1)) ? metaData.getColumnLabel(j + 1) : f;
            String t = metaData.getColumnTypeName(j + 1);
            TableField field = new TableField();
            field.setFieldName(l);
            field.setRemarks(l);
            field.setFieldType(t);
            field.setFieldSize(metaData.getColumnDisplaySize(j + 1));
            if (t.equalsIgnoreCase("LONG")) {
                field.setFieldSize(65533);
            } //oracle LONG
            if (StringUtils.isNotEmpty(t) && t.toLowerCase().contains("date") && field.getFieldSize() < 50) {
                field.setFieldSize(50);
            }
            fieldList.add(field);
        }
        return fieldList;
    }


    public List<String[]> getDataResult(ResultSet rs) throws Exception {
        List<String[]> list = new LinkedList<>();
        ResultSetMetaData metaData = rs.getMetaData();
        int columnCount = metaData.getColumnCount();
        while (rs.next()) {
            String[] row = new String[columnCount];
            for (int j = 0; j < columnCount; j++) {
                int columnType = metaData.getColumnType(j + 1);
                switch (columnType) {
                    case Types.DATE:
                        if (rs.getDate(j + 1) != null) {
                            row[j] = rs.getDate(j + 1).toString();
                        }
                        break;
                    case Types.BOOLEAN:
                        row[j] = rs.getBoolean(j + 1) ? "1" : "0";
                        break;

                    case Types.REAL:
                    case Types.FLOAT:
                    case Types.DOUBLE:
                        float aFloat = rs.getFloat(j + 1);
                        if (aFloat % 1 == 0) {
                            // 转换为整数输出
                            row[j] = String.valueOf((int) aFloat);
                        } else {
                            row[j] = rs.getString(j + 1);
                        }
                        break;
                    default:
                        row[j] = rs.getString(j + 1);
                        break;
                }
            }
            list.add(row);
        }
        return list;
    }

}
