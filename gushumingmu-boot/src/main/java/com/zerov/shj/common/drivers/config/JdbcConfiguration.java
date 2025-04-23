package com.zerov.shj.common.drivers.config;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JdbcConfiguration {

    /**
     * 主机
     */
    private String host;

    /**
     * 端口
     */
    private Integer port;

    /**
     * 用户
     */
    private String username;

    /**
     * 密码
     */
    private String password;

    /**
     * 数据库
     */
    private String dataBase;

    /**
     * 表
     */
    private String schema;

    /**
     * 类型
     */
    private String dataSourceType = "jdbc";

    /**
     * 驱动
     */
    private String customDriver = "default";

    /**
     * 认证方法
     */
    private String authMethod = "passwd";

    /**
     * 字符
     */
    private String charset;

    /**
     * 字符集
     */
    private String targetCharset;

    private int initialPoolSize = 5;
    private int minPoolSize = 5;
    private int maxPoolSize = 50;
    private int queryTimeout = 30;
}
