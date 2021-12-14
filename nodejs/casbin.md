# casbin 访问控制模型

访问控制模型 => PERM(Policy(策略), Effect(效果), Request(请求), Matcher(匹配器))


Model：PERM的conf配置文件
Policy：动态存储policy rules，存储在数据库部分
Enforcer：决定一个subject对一个object是否有action的权限

casbin 