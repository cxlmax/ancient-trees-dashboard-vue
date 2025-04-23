package com.zerov.shj.common.drivers.query;

import com.zerov.shj.common.drivers.QueryProvider;
import com.zerov.shj.common.drivers.constants.DeTypeConstants;
import org.springframework.stereotype.Service;


@Service("pgQueryProvider")
public class PgQueryProvider extends QueryProvider {

    @Override
    public Integer transFieldType(String field) {
        field = field.toLowerCase();
        switch (field) {
            // 文本
            case "bpchar":
            case "varchar":
            case "text":
            case "tsquery":
            case "tsvector":
            case "uuid":
            case "xml":
            case "json":
            case "bit":
            case "jsonb":
            case "cidr":
            case "inet":
            case "macaddr":
            case "txid_snapshot":
            case "box":
            case "circle":
            case "line":
            case "lseg":
            case "path":
            case "point":
            case "polygon":
            case "bool":
            case "interval":
                return DeTypeConstants.DE_STRING;
            // 时间
            case "date":
            case "time":
            case "timestamp":
            case "timestamptz":
                return DeTypeConstants.DE_TIME;
            // 整型
            case "int2":
            case "int4":
            case "int8":
            case "INTEGER":
            case "BIGINT":
                return DeTypeConstants.DE_INT;
            // 浮点
            case "numeric":
            case "float4":
            case "float8":
            case "money":
                return DeTypeConstants.DE_FLOAT;
            // 布尔
            case "TINYINT":
                return DeTypeConstants.DE_BOOL;
            // 二进制
            case "bytea":
                return DeTypeConstants.DE_BINARY;
            default:
                return DeTypeConstants.DE_STRING;
        }
    }

    @Override
    public String createSQLPreview(String sql, String orderBy) {
        return "SELECT * FROM (" + sqlFix(sql) + ") AS tmp   " + " LIMIT 1000 offset 0";
    }



}
