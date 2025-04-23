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
public class ShjPage2ApiController {
  private final IShjApiService shjApiService;

    @GetMapping("/ISqfyt")
    public Object ISqfyt() throws Exception {
        Datasource ds = new Datasource();
        ds.setId("dsywXBux");
        ds.setConfig("{\"port\":3307,\"username\":\"gushumingmu\",\"password\":\"hdG5C7mNpikA5NXf\",\"dataBase\":\"gushumingmu\",\"host\":\"8.134.12.16\"}");
        ds.setType(DatasourceTypes.mysql.getType());
        ds.setName("gushushu");
        ds.setSql("SELECT       disaster_type AS 'disaster_type',      DATE_FORMAT(alert_time, '%Y-%m') AS 'month',      COUNT(*) AS 'count'  FROM       tree_alerts  WHERE       disaster_type IS NOT NULL      AND alert_time IS NOT NULL  GROUP BY       disaster_type,       DATE_FORMAT(alert_time, '%Y-%m')  ORDER BY       disaster_type,      DATE_FORMAT(alert_time, '%Y-%m');");
        return shjApiService.connectDataBase(ds);
    }
    @GetMapping("/JSMQJb")
    public Object JSMQJb() throws Exception {
        Datasource ds = new Datasource();
        ds.setId("AakDMEqK");
        ds.setConfig("{\"port\":3307,\"username\":\"gushumingmu\",\"password\":\"hdG5C7mNpikA5NXf\",\"dataBase\":\"gushumingmu\",\"host\":\"8.134.12.16\"}");
        ds.setType(DatasourceTypes.mysql.getType());
        ds.setName("gushushu");
        ds.setSql("SELECT * FROM `hunan_tree_distribution`");
        return shjApiService.connectDataBase(ds);
    }
    @GetMapping("/SDEwCg")
    public Object SDEwCg() throws Exception {
        Datasource ds = new Datasource();
        ds.setId("WggYzHOm");
        ds.setConfig("{\"port\":3307,\"username\":\"gushumingmu\",\"password\":\"hdG5C7mNpikA5NXf\",\"dataBase\":\"gushumingmu\",\"host\":\"8.134.12.16\"}");
        ds.setType(DatasourceTypes.mysql.getType());
        ds.setName("gushushu");
        ds.setSql("SELECT * FROM `tree_distribution`");
        return shjApiService.connectDataBase(ds);
    }
    @GetMapping("/pbNGid")
    public Object pbNGid() throws Exception {
        Datasource ds = new Datasource();
        ds.setId("CTzBrxSs");
        ds.setConfig("{\"port\":3307,\"username\":\"gushumingmu\",\"password\":\"hdG5C7mNpikA5NXf\",\"dataBase\":\"gushumingmu\",\"host\":\"8.134.12.16\"}");
        ds.setType(DatasourceTypes.mysql.getType());
        ds.setName("gushushu");
        ds.setSql("SELECT * FROM `tree_distribution`");
        return shjApiService.connectDataBase(ds);
    }
}