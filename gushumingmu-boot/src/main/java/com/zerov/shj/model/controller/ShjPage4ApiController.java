package com.zerov.shj.model.controller;

import com.zerov.shj.common.drivers.entity.Datasource;
import com.zerov.shj.common.drivers.enums.DatasourceTypes;
import com.zerov.shj.common.entity.R;
import com.zerov.shj.model.service.IShjApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin
public class ShjPage4ApiController {
  private final IShjApiService shjApiService;

    @GetMapping("/dSnrPg")
    public Object dSnrPg() throws Exception {
        Datasource ds = new Datasource();
        ds.setId("XZvmnUgq");
        ds.setConfig("{\"port\":3307,\"username\":\"gushumingmu\",\"password\":\"hdG5C7mNpikA5NXf\",\"dataBase\":\"gushumingmu\",\"host\":\"8.134.12.16\"}");
        ds.setType(DatasourceTypes.mysql.getType());
        ds.setName("gushushu");
        ds.setSql("SELECT '健康诊断' AS category, '叶片' AS series, leaf_score AS value FROM tree_health WHERE tree_id = '43010400038'  UNION ALL  SELECT '健康诊断' AS category, '树枝' AS series, branch_score AS value FROM tree_health WHERE tree_id = '43010400038'  UNION ALL  SELECT '健康诊断' AS category, '树干' AS series, trunk_score AS value FROM tree_health WHERE tree_id = '43010400038'  UNION ALL  SELECT '健康诊断' AS category, '根系' AS series, root_score AS value FROM tree_health WHERE tree_id = '43010400038'  UNION ALL  SELECT '健康诊断' AS category, '生长环境' AS series, environment_score AS value FROM tree_health WHERE tree_id = '43010400038'  UNION ALL  SELECT '健康诊断' AS category, '病虫' AS series, pest_score AS value FROM tree_health WHERE tree_id = '43010400038';");
        return shjApiService.connectDataBase(ds);
    }
}