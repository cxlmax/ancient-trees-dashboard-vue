package com.zerov.shj.common.drivers.config;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SqlServerConfiguration extends JdbcConfiguration {
    private String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";

    public String getJdbc() {

        return "jdbc:sqlserver://HOSTNAME:PORT;DatabaseName=DATABASE"
                .replace("HOSTNAME", getHost().trim())
                .replace("PORT", getPort().toString().trim())
                .replace("DATABASE", getDataBase().trim());
    }
}
