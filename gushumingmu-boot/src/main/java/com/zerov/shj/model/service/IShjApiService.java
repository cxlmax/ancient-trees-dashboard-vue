package com.zerov.shj.model.service;

import com.zerov.shj.common.drivers.entity.Datasource;
import com.zerov.shj.common.entity.R;

public interface IShjApiService {
    /**
     * 连接数据库
     *
     * @param ds
     * @return
     */
    Object connectDataBase(Datasource ds) throws Exception;

    /**
     * 文件解析
     *
     * @param fileName 文件名字
     * @return
     * @throws Exception
     */
    Object fileParse(String fileName) throws Exception;
}
