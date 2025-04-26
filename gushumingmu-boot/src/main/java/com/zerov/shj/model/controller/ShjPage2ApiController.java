package com.zerov.shj.model.controller;

import com.zerov.shj.common.drivers.entity.Datasource;
import com.zerov.shj.common.drivers.enums.DatasourceTypes;
import com.zerov.shj.common.entity.R;
import com.zerov.shj.model.service.IShjApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

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

    @GetMapping("/iswarning")
    public Object isWarning() throws Exception {
        Datasource ds = new Datasource();
        ds.setId("CTzBrxSss");
        ds.setConfig("{\"port\":3307,\"username\":\"gushumingmu\",\"password\":\"hdG5C7mNpikA5NXf\",\"dataBase\":\"gushumingmu\",\"host\":\"8.134.12.16\"}");
        ds.setType(DatasourceTypes.mysql.getType());
        ds.setName("gushushu");
        ds.setSql("SELECT * FROM `is_warning`");
        return shjApiService.connectDataBase(ds);
    }

    @GetMapping("/setwarning")
    public Object setWarning(@RequestParam("value") int value) throws Exception {
        Connection conn = null;
        PreparedStatement stmt = null;
        PreparedStatement provinceStmt = null;
        Map<String, Object> result = new HashMap<>();

        try {
            // 加载MySQL驱动
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 创建数据库连接
            String url = "jdbc:mysql://8.134.12.16:3307/gushumingmu?characterEncoding=UTF-8&connectTimeout=5000&useSSL=false&allowPublicKeyRetrieval=true&zeroDateTimeBehavior=convertToNull";
            String username = "gushumingmu";
            String password = "hdG5C7mNpikA5NXf";
            conn = DriverManager.getConnection(url, username, password);
            
            // 开始事务
            conn.setAutoCommit(false);

            // 1. 更新 is_warning 表
            String sql = "UPDATE `is_warning` SET iswarning = ? WHERE id = 1";
            stmt = conn.prepareStatement(sql);
            stmt.setInt(1, value);
            int warningRowsAffected = stmt.executeUpdate();
            
            // 2. 根据入参 value 的值更新 province_data 表
            int provinceValue = 0;
            if (value == 1) {
                provinceValue = 5555;
            } else if (value == 0) {
                provinceValue = 450;
            }
            
            if (value == 0 || value == 1) {
                String provinceSql = "UPDATE `province_data` SET value = ? WHERE province_name = '湖南省' or province_name = '长沙市'";
                provinceStmt = conn.prepareStatement(provinceSql);
                provinceStmt.setInt(1, provinceValue);
                int provinceRowsAffected = provinceStmt.executeUpdate();
                
                // 提交事务
                conn.commit();
                
                // 返回结果
                result.put("success", true);
                result.put("message", "成功更新 is_warning 表 " + warningRowsAffected + " 条记录，province_data 表 " + provinceRowsAffected + " 条记录");
                result.put("warningRowsAffected", warningRowsAffected);
                result.put("provinceRowsAffected", provinceRowsAffected);
            } else {
                // 提交事务
                conn.commit();
                
                // 返回结果
                result.put("success", true);
                result.put("message", "成功更新 is_warning 表 " + warningRowsAffected + " 条记录");
                result.put("warningRowsAffected", warningRowsAffected);
            }
            
            return result;
        } catch (Exception e) {
            // 发生异常，回滚事务
            if (conn != null) {
                try {
                    conn.rollback();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
            
            e.printStackTrace();
            result.put("success", false);
            result.put("message", "更新失败: " + e.getMessage());
            return result;
        } finally {
            // 关闭资源
            try {
                if (stmt != null) stmt.close();
                if (provinceStmt != null) provinceStmt.close();
                if (conn != null) {
                    conn.setAutoCommit(true); // 恢复自动提交
                    conn.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}