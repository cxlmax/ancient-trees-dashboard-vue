package com.zerov.shj.common.drivers.enums;

import java.util.Arrays;
import java.util.List;

public enum DatasourceTypes {
    //jdbc
    mysql("mysql", "MySQL", "`", "`", "", "", "characterEncoding=UTF-8&connectTimeout=5000&useSSL=false&allowPublicKeyRetrieval=true", true, null, null, true, 3306),
    mariadb("mariadb", "MariaDB", "`", "`", "'", "'", "characterEncoding=UTF-8&connectTimeout=5000&useSSL=false&allowPublicKeyRetrieval=true", true, null, null, true, 3306),
    pg("pg", "PostgreSQL", "\"", "\"", "\"", "\"", "", true, null, null, true, 5432),
    sqlServer("sqlServer", "SQL Server", "\"", "\"", "\"", "\"", "", true, null, null, true, 1433),
    oracle("oracle", "Oracle", "\"", "\"", "\"", "\"", "", true, Arrays.asList("Default", "GBK", "BIG5", "ISO-8859-1", "UTF-8", "UTF-16", "CP850", "EUC_JP", "EUC_KR"), Arrays.asList("Default", "GBK", "UTF-8"), true, 1521),
    ck("ck", "ClickHouse", "`", "`", "", "", "", true,  null, null, true, 8123),
    dm("dm", "dm", "", "", "", "", "", true, null, null, false, null)
    ;
    private String type;
    private String name;
    private String keywordPrefix;
    private String keywordSuffix;
    private String aliasPrefix;
    private String aliasSuffix;
    private String extraParams;
    private boolean isDatasource;
    private boolean isJdbc;
    private List<String> charset;
    private List<String> targetCharset;
    private Integer port;

    DatasourceTypes(String type, String name, String keywordPrefix, String keywordSuffix, String aliasPrefix, String aliasSuffix, String extraParams, boolean isDatasource, List<String> charset, List<String> targetCharset, boolean isJdbc, Integer port) {
        this.type = type;
        this.name = name;
        this.keywordPrefix = keywordPrefix;
        this.keywordSuffix = keywordSuffix;
        this.aliasPrefix = aliasPrefix;
        this.aliasSuffix = aliasSuffix;
        this.extraParams = extraParams;
        this.isDatasource = isDatasource;
        this.charset = charset;
        this.targetCharset = targetCharset;
        this.isJdbc = isJdbc;
        this.port = port;
    }

    public Integer getPort() {
        return port;
    }

    public String getType() {
        return type;
    }

    public String getName() {
        return name;
    }

    public String getKeywordPrefix() {
        return keywordPrefix;
    }

    public String getKeywordSuffix() {
        return keywordSuffix;
    }

    public String getAliasPrefix() {
        return aliasPrefix;
    }

    public String getAliasSuffix() {
        return aliasSuffix;
    }

    public String getExtraParams() {
        return extraParams;
    }

    public List<String> getCharset() {
        return charset;
    }

    public List<String> getTargetCharset() {
        return targetCharset;
    }

    public boolean isDatasource() {
        return isDatasource;
    }

    public boolean isJdbc() {
        return isJdbc;
    }


}

