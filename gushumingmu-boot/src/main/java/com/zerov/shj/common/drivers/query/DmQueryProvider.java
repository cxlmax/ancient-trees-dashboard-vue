package com.zerov.shj.common.drivers.query;

import com.zerov.shj.common.drivers.QueryProvider;
import org.springframework.stereotype.Component;

/**
 * @Author gin
 * @Date 2021/5/17 2:43 下午
 */
@Component()
public class DmQueryProvider extends QueryProvider {

    @Override
    public Integer transFieldType(String field) {
        switch (field) {
            case "CHAR":
            case "VARCHAR2":
            case "VARCHAR":
            case "TEXT":
            case "TINYTEXT":
            case "MEDIUMTEXT":
            case "LONGTEXT":
            case "ENUM":
            case "LONG":
            case "NVARCHAR2":
            // 文本
            case "NCHAR":
                return 0;
            case "DATE":
            case "TIME":
            case "YEAR":
            case "DATETIME":
            // 时间
            case "TIMESTAMP":
                return 1;
            case "INT":
            case "SMALLINT":
            case "MEDIUMINT":
            case "INTEGER":
            // 整型
            case "BIGINT":
                return 2;
            case "NUMBER":
            case "FLOAT":
            case "DOUBLE":
            case "DECIMAL":
            case "DEC":
            // 浮点
            case "NUMERIC":
                return 3;
            case "BIT":
            // 布尔
            case "TINYINT":
                return 4;
            default:
                return 0;
        }
    }

    @Override
    public String createSQLPreview(String sql, String orderBy) {
        return "SELECT * FROM (" + sqlFix(sql) + ") DE_TMP " + " WHERE rownum <= 1000";
    }



}
