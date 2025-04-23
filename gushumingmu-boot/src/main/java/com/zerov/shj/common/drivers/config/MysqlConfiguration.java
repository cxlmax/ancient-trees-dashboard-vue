package com.zerov.shj.common.drivers.config;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MysqlConfiguration extends JdbcConfiguration {

    private String driver = "com.mysql.jdbc.Driver";
    private String extraParams = "characterEncoding=UTF-8&connectTimeout=5000&useSSL=false&allowPublicKeyRetrieval=true&zeroDateTimeBehavior=convertToNull";

    public String getJdbc() {
        return "jdbc:mysql://HOSTNAME:PORT/DATABASE?EXTRA_PARAMS"
                .replace("HOSTNAME", getHost().trim())
                .replace("PORT", getPort().toString().trim())
                .replace("DATABASE", getDataBase().trim())
                .replace("EXTRA_PARAMS", getExtraParams().trim());

    }
}