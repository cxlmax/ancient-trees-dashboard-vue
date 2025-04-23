package com.zerov.shj.common.drivers.entity;

import lombok.Getter;
import lombok.Setter;

/**
 * @author lgsz
 */
@Getter
@Setter
public class Datasource {

    private static final long serialVersionUID = 983316783088291060L;

    /**
     * ID
     */
    private String id;

    /**
     * 名称
     */
    private String name;

    /**
     * 描述
     */
    private String description;

    /**
     * 类型
     */
    private String type;

    /**
     * 配置详情
     */
    private String config;

    /**
     * sql 语句
     */
    private String sql;

}