package com.zerov.shj.common.drivers;

import com.alibaba.druid.pool.DruidDataSource;
import com.zerov.shj.common.drivers.config.JdbcConfiguration;
import com.zerov.shj.common.drivers.entity.DatasourceRequest;

import java.beans.PropertyVetoException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public abstract class Provider {

    abstract public Map<String, List> fetchResultAndField(DatasourceRequest datasourceRequest) throws Exception;

    public Connection getConnection(DatasourceRequest datasourceRequest) throws Exception {
        return null;
    }
    public Connection getConnectionFromPool(DatasourceRequest datasourceRequest) throws Exception {
        return null;
    }

    public void handleDatasource(DatasourceRequest datasourceRequest, String type) throws Exception {
    }
    abstract public String checkStatus(DatasourceRequest datasourceRequest) throws Exception;

    public void addToPool(DatasourceRequest datasourceRequest) throws PropertyVetoException, SQLException, Exception {
    }

    public JdbcConfiguration setCredential(DatasourceRequest datasourceRequest, DruidDataSource dataSource) throws Exception {
        return null;
    }
    public String getTablesSql(DatasourceRequest datasourceRequest) throws Exception {
        return null;
    }
}
