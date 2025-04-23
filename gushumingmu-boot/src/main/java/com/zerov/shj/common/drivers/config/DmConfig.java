package com.zerov.shj.common.drivers.config;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DmConfig extends JdbcConfiguration {
    private String driver = "dm.jdbc.driver.DmDriver";
    public String getJdbc() {
        return "jdbc:dm://HOST:PORT/DATABASE"
                .replace("HOST", getHost().trim())
                .replace("PORT", getPort().toString())
                .replace("DATABASE", getDataBase().trim());
    }
}
