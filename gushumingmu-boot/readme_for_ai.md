# 古树名木智慧监测系统

## 项目概述
这是一个基于Spring Boot的Java应用程序，用于古树名木的智慧监测系统。

## 技术栈
- Java 8
- Spring Boot 2.4.2
- Maven

## 项目结构
- 主应用类：`com.zerov.shj.ShjApplication`
- 端口：8080
- 上下文路径：/

## Docker部署方案
项目使用Docker进行容器化部署，采用主机网络模式（network_mode: host）直接使用宿主机网络，以便容器可以直接访问主机的网络接口。

### Dockerfile
Dockerfile定义了如何构建Java应用的Docker镜像：
1. 使用OpenJDK 8作为基础镜像
2. 将编译好的JAR文件复制到容器中
3. 设置容器启动命令

### docker-compose.yml
docker-compose.yml文件用于定义和运行Docker应用：
1. 定义服务名称和构建配置
2. 设置网络模式为host
3. 配置容器重启策略
4. 设置环境变量

## 部署步骤
1. 构建Java应用：`mvn clean package`
2. 构建Docker镜像：`docker-compose build`
3. 启动容器：`docker-compose up -d`

## 访问应用
应用部署后，可通过以下URL访问：`http://主机IP:8080/`
