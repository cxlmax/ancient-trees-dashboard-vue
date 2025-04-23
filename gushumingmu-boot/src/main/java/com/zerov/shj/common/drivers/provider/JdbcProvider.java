package com.zerov.shj.common.drivers.provider;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.fastjson2.JSONObject;
import com.zerov.shj.common.drivers.ProviderFactory;
import com.zerov.shj.common.drivers.QueryProvider;
import com.zerov.shj.common.drivers.config.*;
import com.zerov.shj.common.drivers.entity.DatasourceRequest;
import com.zerov.shj.common.drivers.entity.TableField;
import com.zerov.shj.common.drivers.enums.DatasourceTypes;
import com.zerov.shj.common.drivers.plugins.ExtendedJdbcClassLoader;
import com.zerov.shj.common.exception.DatasourceException;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.*;

@Service("jdbc")
public class JdbcProvider extends DefaultJdbcProvider {


    @Override
    public boolean isUseDatasourcePool() {
        return true;
    }

    @Override
    public String getType() {
        return "built-in";
    }
    /**
     * 增加缓存机制 key 由 'provider_sql_' dsr.datasource.id dsr.table dsr.query共4部分组成，命中则使用缓存直接返回不再执行sql逻辑
     * @param dsr
     * @return
     * @throws Exception
     */

    /**
     * 这里使用声明式缓存不是很妥当
     * 改为chartViewService中使用编程式缓存
     *
     * @Cacheable( value = JdbcConstants.JDBC_PROVIDER_KEY,
     * key = "'provider_sql_' + #dsr.datasource.id + '_' + #dsr.table + '_' + #dsr.query",
     * condition = "#dsr.pageSize == null || #dsr.pageSize == 0L"
     * )
     */


    @Override
    public Map<String, List> fetchResultAndField(DatasourceRequest datasourceRequest) throws Exception {
        Map<String, List> result = new HashMap<>();
        List<String[]> dataList;
        List<TableField> fieldList;
        try (Connection connection = getConnectionFromPool(datasourceRequest); Statement stat = connection.createStatement(); ResultSet rs = stat.executeQuery(datasourceRequest.getQuery())) {
            fieldList = fetchResultField(rs, datasourceRequest);
            result.put("fieldList", fieldList);
            dataList = getDataResult(rs, datasourceRequest);
            result.put("dataList", dataList);
            return result;
        } catch (SQLException e) {
            DatasourceException.throwException(e);
        } catch (Exception e) {
            DatasourceException.throwException(e);
        }
        return new HashMap<>();
    }

    private List<String[]> getDataResult(ResultSet rs, DatasourceRequest datasourceRequest) throws Exception {
        String charset = null;
        String targetCharset = "UTF-8";
        if (datasourceRequest != null && datasourceRequest.getDatasource().getType().equalsIgnoreCase("oracle")) {
            JdbcConfiguration jdbcConfiguration = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), JdbcConfiguration.class);
            if (StringUtils.isNotEmpty(jdbcConfiguration.getCharset()) && !jdbcConfiguration.getCharset().equalsIgnoreCase("Default")) {
                charset = jdbcConfiguration.getCharset();
            }
            if (StringUtils.isNotEmpty(jdbcConfiguration.getTargetCharset()) && !jdbcConfiguration.getTargetCharset().equalsIgnoreCase("Default")) {
                targetCharset = jdbcConfiguration.getTargetCharset();
            }
        }
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
                        if (metaData.getColumnTypeName(j + 1).toLowerCase().equalsIgnoreCase("blob")) {
                            row[j] = rs.getBlob(j + 1) == null ? "" : rs.getBlob(j + 1).toString();
                        } else {
                            if (charset != null && StringUtils.isNotEmpty(rs.getString(j + 1))) {
                                String originStr = new String(rs.getString(j + 1).getBytes(charset), targetCharset);
                                row[j] = new String(originStr.getBytes("UTF-8"), "UTF-8");
                            } else {
                                row[j] = rs.getString(j + 1);
                            }
                        }

                        break;
                }
            }
            list.add(row);
        }
        return list;
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

            if (datasourceRequest.getDatasource().getType().equalsIgnoreCase(DatasourceTypes.ck.name())) {
                QueryProvider qp = ProviderFactory.getQueryProvider(datasourceRequest.getDatasource().getType());
                field.setFieldSize(qp.transFieldSize(t));
            } else {
                field.setFieldSize(metaData.getColumnDisplaySize(j + 1));
            }
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


    @Override
    public Connection getConnection(DatasourceRequest datasourceRequest) throws Exception {
        String username = null;
        String password = null;
        String defaultDriver = null;
        String jdbcurl = null;
        DatasourceTypes datasourceType = DatasourceTypes.valueOf(datasourceRequest.getDatasource().getType());
        Properties props = new Properties();
        switch (datasourceType) {
            case mysql:
            case mariadb:
                MysqlConfiguration mysqlConfiguration = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), MysqlConfiguration.class);
                username = mysqlConfiguration.getUsername();
                password = mysqlConfiguration.getPassword();
                defaultDriver = "com.mysql.jdbc.Driver";
                jdbcurl = mysqlConfiguration.getJdbc();
                break;
            case sqlServer:
                SqlServerConfiguration sqlServerConfiguration = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), SqlServerConfiguration.class);
                username = sqlServerConfiguration.getUsername();
                password = sqlServerConfiguration.getPassword();
                defaultDriver = sqlServerConfiguration.getDriver();
                jdbcurl = sqlServerConfiguration.getJdbc();
                break;
            case oracle:
                OracleConfiguration oracleConfiguration = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), OracleConfiguration.class);
                username = oracleConfiguration.getUsername();
                password = oracleConfiguration.getPassword();
                defaultDriver = oracleConfiguration.getDriver();
                jdbcurl = oracleConfiguration.getJdbc();
                props.put("oracle.net.CONNECT_TIMEOUT", "5000");
                break;
            case pg:
                PgConfiguration pgConfiguration = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), PgConfiguration.class);
                username = pgConfiguration.getUsername();
                password = pgConfiguration.getPassword();
                defaultDriver = pgConfiguration.getDriver();
                jdbcurl = pgConfiguration.getJdbc();
                break;
            case ck:
                CHConfiguration chConfiguration =JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), CHConfiguration.class);
                username = chConfiguration.getUsername();
                password = chConfiguration.getPassword();
                defaultDriver = chConfiguration.getDriver();
                jdbcurl = chConfiguration.getJdbc();
                break;

            default:
                break;
        }

        if (StringUtils.isNotBlank(username)) {
            props.setProperty("user", username);
            if (StringUtils.isNotBlank(password)) {
                props.setProperty("password", password);
            }
        }

        Connection conn;
        String driverClassName;
        ExtendedJdbcClassLoader jdbcClassLoader;
        driverClassName = defaultDriver;
        jdbcClassLoader = extendedJdbcClassLoader;


        Driver driverClass = (Driver) jdbcClassLoader.loadClass(driverClassName).newInstance();
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        try {
            Thread.currentThread().setContextClassLoader(jdbcClassLoader);
            conn = driverClass.connect(jdbcurl, props);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        } finally {
            Thread.currentThread().setContextClassLoader(classLoader);
        }
        return conn;
    }


    @Override
    public JdbcConfiguration setCredential(DatasourceRequest datasourceRequest, DruidDataSource dataSource) throws Exception {
        DatasourceTypes datasourceType = DatasourceTypes.valueOf(datasourceRequest.getDatasource().getType());
        JdbcConfiguration jdbcConfiguration = new JdbcConfiguration();
        switch (datasourceType) {
            case mysql:
            case mariadb:
                MysqlConfiguration mysqlConfiguration = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), MysqlConfiguration.class);
                dataSource.setUrl(mysqlConfiguration.getJdbc());
                dataSource.setDriverClassName("com.mysql.jdbc.Driver");
                dataSource.setValidationQuery("select 1");
                jdbcConfiguration = mysqlConfiguration;
                break;
            case sqlServer:
                SqlServerConfiguration sqlServerConfiguration = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), SqlServerConfiguration.class);
                dataSource.setDriverClassName(sqlServerConfiguration.getDriver());
                dataSource.setUrl(sqlServerConfiguration.getJdbc());
                dataSource.setValidationQuery("select 1");
                jdbcConfiguration = sqlServerConfiguration;
                break;
            case oracle:
                OracleConfiguration oracleConfiguration =JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), OracleConfiguration.class);
                dataSource.setDriverClassName(oracleConfiguration.getDriver());
                dataSource.setUrl(oracleConfiguration.getJdbc());
                dataSource.setValidationQuery("select 1 from dual");
                jdbcConfiguration = oracleConfiguration;
                break;
            case pg:
                PgConfiguration pgConfiguration = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), PgConfiguration.class);
                dataSource.setDriverClassName(pgConfiguration.getDriver());
                dataSource.setUrl(pgConfiguration.getJdbc());
                jdbcConfiguration = pgConfiguration;
                break;
            case ck:
                CHConfiguration chConfiguration = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), CHConfiguration.class);
                dataSource.setDriverClassName(chConfiguration.getDriver());
                dataSource.setUrl(chConfiguration.getJdbc());
                jdbcConfiguration = chConfiguration;
                break;
            default:
                break;
        }

        dataSource.setUsername(jdbcConfiguration.getUsername());

        ExtendedJdbcClassLoader classLoader = extendedJdbcClassLoader;

        dataSource.setDriverClassLoader(classLoader);
        dataSource.setPassword(jdbcConfiguration.getPassword());

        return jdbcConfiguration;
    }

    @Override
    public String getTablesSql(DatasourceRequest datasourceRequest) throws Exception {
        DatasourceTypes datasourceType = DatasourceTypes.valueOf(datasourceRequest.getDatasource().getType());
        switch (datasourceType) {
            case mysql:
            case mariadb:
                JdbcConfiguration jdbcConfiguration =JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), JdbcConfiguration.class);
                return String.format("SELECT TABLE_NAME,TABLE_COMMENT FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = '%s' ;", jdbcConfiguration.getDataBase());
            case sqlServer:
                SqlServerConfiguration sqlServerConfiguration = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), SqlServerConfiguration.class);
                return "SELECT TABLE_NAME FROM \"DATABASE\".INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE';"
                        .replace("DATABASE", sqlServerConfiguration.getDataBase());
            case oracle:
                return "select count(*) from all_users";
            case pg:
                return "SELECT count(tablename) FROM  pg_tables";
            case ck:
                CHConfiguration chConfiguration = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), CHConfiguration.class);
                return "SELECT name FROM system.tables where database='DATABASE';".replace("DATABASE", chConfiguration.getDataBase());
            default:
                return "show tables;";
        }
    }

}
