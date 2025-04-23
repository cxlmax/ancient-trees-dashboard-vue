package com.zerov.shj.common.drivers;

/**
 * @Author gin
 * @Date 2021/5/17 2:42 下午
 */
public abstract class QueryProvider {

    public abstract Integer transFieldType(String field);

    public abstract String createSQLPreview(String sql, String orderBy);


    public Integer transFieldSize(String type) {
        return 50;
    }

    public String sqlFix(String sql) {
        if (sql.lastIndexOf(";") == (sql.length() - 1)) {
            sql = sql.substring(0, sql.length() - 1);
        }
        return sql;
    }

}
