package com.zerov.shj.common.drivers.query;

import com.zerov.shj.common.drivers.QueryProvider;
import org.springframework.stereotype.Service;


@Service("mysqlQueryProvider")
public class MysqlQueryProvider extends QueryProvider {

    @Override
    public Integer transFieldType(String field) {
        switch (field) {
            // 文本
            case "CHAR":
            case "VARCHAR":
            case "TEXT":
            case "TINYTEXT":
            case "MEDIUMTEXT":
            case "LONGTEXT":
            case "ENUM":
                return 0;
            // 时间
            case "DATE":
            case "TIME":
            case "YEAR":
            case "DATETIME":
            case "TIMESTAMP":
                return 1;
            // 整型
            case "INT":
            case "SMALLINT":
            case "MEDIUMINT":
            case "INTEGER":
            case "BIGINT":
            case "BIGINT UNSIGNED":
            case "LONG":
                return 2;
            // 浮点
            case "FLOAT":
            case "DOUBLE":
            case "DECIMAL":
                return 3;
            case "BIT":
            case "TINYINT":
                return 4;
            default:
                return 0;
        }
    }

    @Override
    public String createSQLPreview(String sql, String orderBy) {
        return "SELECT * FROM (" + sqlFix(sql) + ") AS tmp " + " LIMIT 0,1000";
    }



}
