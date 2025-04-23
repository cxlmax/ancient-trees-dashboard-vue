package com.zerov.shj.common.drivers.provider;


import com.alibaba.fastjson2.JSONObject;
import com.zerov.shj.common.drivers.config.DmConfig;
import com.zerov.shj.common.drivers.entity.DatasourceRequest;
import com.zerov.shj.common.drivers.plugins.ExtendedJdbcClassLoader;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;
import java.sql.Connection;
import java.sql.Driver;
import java.util.Properties;


@Component()
public class DmDsProvider extends DefaultJdbcProvider {

    @Override
    public String getType() {
        return "dm";
    }

    @Override
    public boolean isUseDatasourcePool() {
        return false;
    }

    @Override
    public Connection getConnection(DatasourceRequest datasourceRequest) throws Exception {
        DmConfig dmConfig = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), DmConfig.class);

        String defaultDriver = dmConfig.getDriver();

        String url = dmConfig.getJdbc();
        Properties props = new Properties();
        if (StringUtils.isNotEmpty(dmConfig.getAuthMethod()) && dmConfig.getAuthMethod().equalsIgnoreCase("kerberos")) {
            System.setProperty("java.security.krb5.conf", "/opt/dataease/conf/krb5.conf");
            ExtendedJdbcClassLoader classLoader;

            classLoader = extendedJdbcClassLoader;

            Class<?> ConfigurationClass = classLoader.loadClass("org.apache.hadoop.conf.Configuration");
            Method set = ConfigurationClass.getMethod("set", String.class, String.class);
            Object obj = ConfigurationClass.newInstance();
            set.invoke(obj, "hadoop.security.authentication", "Kerberos");

            Class<?> UserGroupInformationClass = classLoader.loadClass("org.apache.hadoop.security.UserGroupInformation");
            Method setConfiguration = UserGroupInformationClass.getMethod("setConfiguration", ConfigurationClass);
            Method loginUserFromKeytab = UserGroupInformationClass.getMethod("loginUserFromKeytab", String.class, String.class);
            setConfiguration.invoke(null, obj);
            loginUserFromKeytab.invoke(null, dmConfig.getUsername(), "/opt/dataease/conf/" + dmConfig.getPassword());
        } else {
            if (StringUtils.isNotBlank(dmConfig.getUsername())) {
                props.setProperty("user", dmConfig.getUsername());
                if (StringUtils.isNotBlank(dmConfig.getPassword())) {
                    props.setProperty("password", dmConfig.getPassword());
                }
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
            conn = driverClass.connect(url, props);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        } finally {
            Thread.currentThread().setContextClassLoader(classLoader);
        }
        return conn;
    }


    @Override
    public String getTablesSql(DatasourceRequest datasourceRequest) throws Exception {
        DmConfig dmConfig = JSONObject.parseObject(datasourceRequest.getDatasource().getConfig(), DmConfig.class);
        dmConfig.setSchema(dmConfig.getDataBase());
        return "select table_name from all_tab_comments where owner='OWNER' AND table_type = 'TABLE' ".replaceAll("OWNER", dmConfig.getSchema());
    }



}
