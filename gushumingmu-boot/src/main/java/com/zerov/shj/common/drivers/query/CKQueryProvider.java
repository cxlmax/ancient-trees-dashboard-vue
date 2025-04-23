package com.zerov.shj.common.drivers.query;

import com.zerov.shj.common.drivers.QueryProvider;
import org.springframework.stereotype.Service;

/**
 * @Author gin
 * @Date 2021/5/17 2:43 下午
 */
@Service("ckQueryProvider")
public class CKQueryProvider extends QueryProvider {

    @Override
    public Integer transFieldType(String field) {
        field = field.toUpperCase();
        if (field.indexOf("ARRAY") > -1) {
            field = "ARRAY";
        }
        if (field.indexOf("DATETIME64") > -1) {
            field = "DATETIME64";
        }
        switch (field) {
            case "STRING":
            case "VARCHAR":
            case "TEXT":
            case "TINYTEXT":
            case "MEDIUMTEXT":
            case "LONGTEXT":
            // 文本
            case "ENUM":
                return 0;
            case "DATE":
            case "DATETIME":
            case "DATETIME64":
            // 时间
            case "TIMESTAMP":
                return 1;
            case "INT8":
            case "INT16":
            case "INT32":
            case "INT64":
            case "UINT8":
            case "UINT16":
            case "UINT32":
            // 整型
            case "UINT64":
                return 2;
            case "FLOAT32":
            case "FLOAT64":
            // 浮点
            case "DECIMAL":
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
    public Integer transFieldSize(String field) {
        Integer type = transFieldType(field);
        switch (type) {
            case 0:
                return 65533;
            case 1:
                return 60;
            case 2:
                return 0;
            case 3:
                return 0;
            case 4:
                return 0;
            default:
                return 65533;
        }
    }

    @Override
    public String createSQLPreview(String sql, String orderBy) {
        return "SELECT * FROM (" + sqlFix(sql) + ") AS tmp " + " LIMIT 0,1000";
    }


}
