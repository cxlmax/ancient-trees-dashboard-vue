package com.zerov.shj.model.service.impl;

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.ExcelReader;
import com.alibaba.excel.read.metadata.ReadSheet;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.zerov.shj.common.drivers.Provider;
import com.zerov.shj.common.drivers.ProviderFactory;
import com.zerov.shj.common.drivers.QueryProvider;
import com.zerov.shj.common.drivers.entity.Datasource;
import com.zerov.shj.common.drivers.entity.DatasourceRequest;
import com.zerov.shj.common.drivers.entity.TableField;
import com.zerov.shj.common.entity.R;
import com.zerov.shj.common.excel.NoModelDataListener;
import com.zerov.shj.model.service.IShjApiService;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
public class ShjApiServiceImpl implements IShjApiService {
    @Override
    public Object connectDataBase(Datasource ds) throws Exception {
        if (ds == null) {
            throw new Exception("数据源不存在！");
        }
        Provider datasourceProvider = ProviderFactory.getProvider(ds.getType());
        DatasourceRequest datasourceRequest = new DatasourceRequest();
        datasourceRequest.setDatasource(ds);
        QueryProvider qp = ProviderFactory.getQueryProvider(ds.getType());
        String sqlAsTable = qp.createSQLPreview(ds.getSql(), null);
        datasourceRequest.setQuery(sqlAsTable);
        Map<String, List> result;
        try {
            result = datasourceProvider.fetchResultAndField(datasourceRequest);
        } catch (Exception e) {
            e.printStackTrace();
            return R.failed(e.getMessage());
        } finally {

        }
        List<String[]> data = result.get("dataList");
        List<TableField> fields = result.get("fieldList");
        String[] fieldArray = fields.stream().map(TableField::getFieldName).toArray(String[]::new);
        if (checkIsRepeat(fieldArray)) {
            return R.success("重复值");
        }

        List<Map<String, Object>> jsonArray = new ArrayList<>();
        if (CollectionUtils.isNotEmpty(data)) {
            jsonArray = data.stream().map(ele -> {
                Map<String, Object> map = new LinkedHashMap<>();
                for (int i = 0; i < ele.length; i++) {
                    map.put(fieldArray[i], ele[i]);
                }
                return map;
            }).collect(Collectors.toList());
        }
        return jsonArray;
    }

    @Override
    public Object fileParse(String fileName) throws Exception {
        // 读取文件路径
        InputStream in = this.getClass().getClassLoader().getResourceAsStream("file/" + fileName);
        return parse(fileName, in);
    }


    /**
     * 判断数组中是否有重复的值
     */
    private static boolean checkIsRepeat(String[] array) {
        HashSet<String> hashSet = new HashSet<>();
        for (String s : array) {
            if (StringUtils.isEmpty(s)) {
                throw new RuntimeException("文件中有空列值");
            }
            hashSet.add(s);
        }
        return hashSet.size() != array.length;
    }

    private Object parse(String filename, InputStream inputStream) throws Exception {
        String suffix = filename.substring(filename.lastIndexOf(".") + 1);
        Object json;
        // 处理json 格式的数据
        if (StringUtils.equalsIgnoreCase(suffix, "json")) {
            json = JSON.parse(IOUtils.toString(inputStream, StandardCharsets.UTF_8));
            inputStream.close();
            return json;
        }

        if (StringUtils.equalsIgnoreCase(suffix, "xlsx") || StringUtils.equalsIgnoreCase(suffix, "xls")) {
            json = excelSheetDataList(inputStream, true);
            inputStream.close();
            return json;
        }
        List<Map<String, Object>> jsonArray = new ArrayList<>();
        if (StringUtils.equalsIgnoreCase(suffix, "csv")) {
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, "GBK"));
            // 首行
            String s = reader.readLine();
            String[] split = s.split(",");
            List<List<String>> data = new ArrayList<>();
            String line;
            while ((line = reader.readLine()) != null) {
                String str;
                line += ",";
                Pattern pCells = Pattern.compile("(\"[^\"]*(\"{2})*[^\"]*\")*[^,]*,");
                Matcher mCells = pCells.matcher(line);
                // 每行记录一个list
                List<String> cells = new ArrayList();
                // 读取每个单元格
                while (mCells.find()) {
                    str = mCells.group();
                    str = str.replaceAll("(?sm)\"?([^\"]*(\"{2})*[^\"]*)\"?.*,", "$1");
                    str = str.replaceAll("(?sm)(\"(\"))", "$2");
                    String s1 = new String(str.getBytes(), "UTF-8");
                    cells.add(s1);
                }
                data.add(cells);
            }
            if (CollectionUtils.isNotEmpty(data)) {
                jsonArray = data.stream().map(ele -> {
                    Map<String, Object> map = new LinkedHashMap<>();
                    for (int i = 0; i < split.length; i++) {
                        map.put(split[i], i < ele.size() ? ele.get(i) : "");
                    }
                    return map;
                }).collect(Collectors.toList());
            }
        }
        inputStream.close();
        return jsonArray;
    }

    public List<Map<String, Object>> excelSheetDataList(InputStream inputStream, Boolean flag) {

        NoModelDataListener noModelDataListener = new NoModelDataListener();
        ExcelReader excelReader = EasyExcel.read(inputStream, noModelDataListener).build();
        List<ReadSheet> sheets = excelReader.excelExecutor().sheetList();
        List<Map<String, Object>> jsonArray = new ArrayList<>();

        HashMap mapData;
        for (ReadSheet readSheet : sheets) {
            noModelDataListener.clear();
            excelReader.read(readSheet);
            String json = JSON.toJSONString(noModelDataListener.getData());
            List<List<String>> data = JSON.parseObject(json, new TypeReference<List<List<String>>>() {});
            data = (flag && noModelDataListener.getData().size() > 1000 ? new ArrayList<>(data.subList(0, 1000)) : data);
            List<Map<String, Object>> array = new ArrayList<>();
            if (CollectionUtils.isNotEmpty(data)) {
                data.stream().forEach(ele -> {
                    Map<String, Object> map = new LinkedHashMap<>();
                    List<String> header = noModelDataListener.getHeader();
                    for (int i = 0; i < header.size(); i++) {
                        map.put(header.get(i), i < ele.size() ? ele.get(i) : "");
                    }
                    array.add(map);
                });
                mapData = new HashMap();
                mapData.put("key", readSheet.getSheetName());
                mapData.put("data", array);
                jsonArray.add(mapData);
            }
        }
        return jsonArray;
    }
}
