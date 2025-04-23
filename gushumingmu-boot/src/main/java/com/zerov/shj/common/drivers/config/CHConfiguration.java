package com.zerov.shj.common.drivers.config;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CHConfiguration extends JdbcConfiguration {

    private String driver = "com.clickhouse.jdbc.ClickHouseDriver";

    public String getJdbc() {
        return "jdbc:clickhouse://HOSTNAME:PORT/DATABASE"
                .replace("HOSTNAME", getHost().trim())
                .replace("PORT", getPort().toString().trim())
                .replace("DATABASE", getDataBase().trim());

    }
}