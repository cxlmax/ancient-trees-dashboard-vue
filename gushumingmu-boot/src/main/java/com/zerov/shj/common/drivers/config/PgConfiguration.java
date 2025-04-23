package com.zerov.shj.common.drivers.config;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PgConfiguration extends JdbcConfiguration {

    private String driver = "org.postgresql.Driver";

    public String getJdbc() {
        return "jdbc:postgresql://HOSTNAME:PORT/DATABASE"
                .replace("HOSTNAME", getHost().trim())
                .replace("PORT", getPort().toString().trim())
                .replace("DATABASE", getDataBase().trim());

    }
}