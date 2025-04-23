package com.zerov.shj.common.drivers.query;

import com.zerov.shj.common.drivers.QueryProvider;
import com.zerov.shj.common.drivers.constants.DeTypeConstants;
import org.springframework.stereotype.Service;

@Service("sqlServerQueryProvider")
public class SqlserverQueryProvider extends QueryProvider {

    @Override
    public Integer transFieldType(String field) {
        field = field.toUpperCase();
        switch (field) {
            // 文本
            case "CHAR":
            case "NCHAR":
            case "NTEXT":
            case "VARCHAR":
            case "NVARCHAR":
            case "TEXT":
            case "TINYTEXT":
            case "MEDIUMTEXT":
            case "LONGTEXT":
            case "ENUM":
            case "XML":
            case "TIME":
                return DeTypeConstants.DE_STRING;
            // 时间
            case "DATE":
            case "YEAR":
            case "DATETIME":
            case "DATETIME2":
            case "DATETIMEOFFSET":
                return DeTypeConstants.DE_TIME;
            // 整型
            case "INT":
            case "MEDIUMINT":
            case "INTEGER":
            case "BIGINT":
            case "SMALLINT":
                return DeTypeConstants.DE_INT;
            // 浮点
            case "FLOAT":
            case "DOUBLE":
            case "DECIMAL":
            case "MONEY":
            case "NUMERIC":
                return DeTypeConstants.DE_FLOAT;
            // 布尔
            case "BIT":
            case "TINYINT":
                return DeTypeConstants.DE_BOOL;
            // 二进制
            case "TIMESTAMP":
                return DeTypeConstants.DE_BINARY;
            default:
                return DeTypeConstants.DE_STRING;
        }
    }

    @Override
    public String createSQLPreview(String sql, String orderBy) {
        return "SELECT top 1000 * FROM (" + sqlFix(sql) + ") AS tmp";
    }


}
