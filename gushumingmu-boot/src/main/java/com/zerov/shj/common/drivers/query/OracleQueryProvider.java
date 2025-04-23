package com.zerov.shj.common.drivers.query;

import com.zerov.shj.common.drivers.QueryProvider;
import org.springframework.stereotype.Service;

/**
 * @Author gin
 * @Date 2021/5/17 2:43 下午
 */
@Service("oracleQueryProvider")
public class OracleQueryProvider extends QueryProvider {
    @Override
    public Integer transFieldType(String field) {
        field = field.split("\\(")[0];
        switch (field) {
            // 文本
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
            case "NCHAR":
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
                return 2;
            case "NUMBER":
            case "FLOAT":
            case "DOUBLE":
            case "DECIMAL":
                return 3;
            // 浮点
            case "BIT":
            case "TINYINT":
                return 4;
            // 布尔
            default:
                return 0;
        }
    }

    @Override
    public String createSQLPreview(String sql, String orderBy) {
        System.out.println("SELECT * FROM (" + sqlFix(sql) + ") DE_TMP " + " WHERE rownum <= 1000");
        return "SELECT * FROM (" + sqlFix(sql) + ") DE_TMP " + " WHERE rownum <= 1000";
    }


}
