package com.zerov.shj.common.excel;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class ExcelSheetData {

    /**
     * json数组
     */
    private List<Map<String, Object>> jsonArray;

}
