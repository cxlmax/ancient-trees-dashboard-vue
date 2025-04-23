package com.zerov.shj.common.drivers.config;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OracleConfiguration extends JdbcConfiguration {
    private String driver = "oracle.jdbc.driver.OracleDriver";
    public String getJdbc() {
        return "jdbc:oracle:thin:@HOSTNAME:PORT:DATABASE"
                .replace("HOSTNAME", getHost().trim())
                .replace("PORT", getPort().toString().trim())
                .replace("DATABASE", getDataBase().trim());
    }
}
