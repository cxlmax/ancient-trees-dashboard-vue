package com.zerov.shj.common.drivers;

import com.zerov.shj.common.drivers.entity.DataSourceType;
import com.zerov.shj.common.drivers.enums.DatasourceTypes;
import com.zerov.shj.common.utils.SpringContextUtil;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
public class ProviderFactory implements ApplicationContextAware {

    private static ApplicationContext context;

    @Override
    public void setApplicationContext(final ApplicationContext ctx) {
        context =  ctx;
        for(final DatasourceTypes d: DatasourceTypes.values()) {
            final ConfigurableListableBeanFactory beanFactory = ((ConfigurableApplicationContext) context).getBeanFactory();
            if(d.isDatasource()){
                DataSourceType dataSourceType = new DataSourceType(d.getType(), d.getName(),  d.getExtraParams(),d.getPort());
                if(dataSourceType.getType().equalsIgnoreCase("oracle")){
                    dataSourceType.setCharset(d.getCharset());
                    dataSourceType.setTargetCharset(d.getTargetCharset());
                }
                dataSourceType.setKeywordSuffix(d.getKeywordSuffix());
                dataSourceType.setKeywordPrefix(d.getKeywordPrefix());
                dataSourceType.setAliasSuffix(d.getAliasSuffix());
                dataSourceType.setAliasPrefix(d.getAliasPrefix());
                beanFactory.registerSingleton(d.getType(), dataSourceType);
            }
        }
    }


    public static Provider getProvider(String type) {
        Map<String, DataSourceType> dataSourceTypeMap = SpringContextUtil.getApplicationContext().getBeansOfType((DataSourceType.class));
        if(dataSourceTypeMap.keySet().contains(type)){
            DatasourceTypes datasourceType = DatasourceTypes.valueOf(type);
            switch (datasourceType) {
                case dm:
                    return SpringContextUtil.getApplicationContext().getBean(type + "DsProvider", Provider.class);
                default:
                    return context.getBean("jdbc", Provider.class);
            }
        }
         return null;

    }

    public static QueryProvider getQueryProvider(String type) {
        switch (type) {
            case "mysql":
            case "mariadb":
                return context.getBean("mysqlQueryProvider", QueryProvider.class);
            default:
                return SpringContextUtil.getApplicationContext().getBean(type + "QueryProvider", QueryProvider.class);
        }

    }

}
