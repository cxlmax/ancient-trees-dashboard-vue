package com.zerov.shj.common.drivers.entity;

import lombok.Data;

import java.util.List;

@Data
public class DataSourceType {
    public String type;
    public String name;
    public String extraParams;
    public List<String> charset;
    public List<String> targetCharset;
    private String keywordPrefix = "";
    private String keywordSuffix = "";
    private String aliasPrefix = "";
    private String aliasSuffix = "";
    private Integer port;

    public DataSourceType(String type, String name, String extraParams, Integer port) {
        this.type = type;
        this.name = name;

        this.extraParams = extraParams;

        this.port = port;
    }
}
