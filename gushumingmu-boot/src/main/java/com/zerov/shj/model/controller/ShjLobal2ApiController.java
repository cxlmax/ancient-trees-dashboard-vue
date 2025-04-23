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
public class ShjLobal2ApiController {
  private final IShjApiService shjApiService;

    @GetMapping("/dlevFh")
    public Object dlevFh() throws Exception {
        Datasource ds = new Datasource();
        ds.setId("nsNplCGk");
        ds.setConfig("{\"port\":3307,\"username\":\"gushumingmu\",\"password\":\"hdG5C7mNpikA5NXf\",\"dataBase\":\"gushumingmu\",\"host\":\"8.134.12.16\"}");
        ds.setType(DatasourceTypes.mysql.getType());
        ds.setName("gushushu");
        ds.setSql("SELECT * FROM  `province_data`");
        return shjApiService.connectDataBase(ds);
    }
}