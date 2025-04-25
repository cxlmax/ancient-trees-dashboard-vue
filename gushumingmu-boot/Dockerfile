FROM openjdk:8-jdk-alpine

# 设置工作目录
WORKDIR /app

# 添加应用jar包到容器中
COPY target/shj-boot-1.0.jar app.jar

# 设置时区
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 设置JVM参数
ENV JAVA_OPTS="-Xms512m -Xmx1024m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=256m"
ENV TZ=Asia/Shanghai
# 容器启动时执行的命令
ENTRYPOINT ["sh", "-c", "java ${JAVA_OPTS} -jar app.jar"]

# 声明容器使用的端口
EXPOSE 8090
