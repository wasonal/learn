# initComputed
在vue实例上挂载_computedWatchers对象属性
以属性名为键，以实例化后的Watcher为值
调用defineComputed函数

# Watcher(组件实例, exp函数, 回调, 配置, 是否是渲染Watcher)
## 初始化
渲染Watcher挂载到组件实例的_watcher属性 ?
放入_watchers属性队列中
根据配置项配置deep,user,lazy,sync,before属性
dirty=lazy
根据exp函数初始化getter属性
设置value属性
## get方法
将当前Watcher实例放到targetStack数组中
设置Dep.target为当前Watcher

# defineComputed
## createComputedGetter
返回函数，获取组件实例的_computedWatchers对象属性
用key索引获取Watcher
如果Watcher.dirty，那么执行Watcher的evaluate方法
如果Dep.target，那么执行Watcher的depend方法
最后返回Watcher.value属性

# initComputed
初始化
往vue实例上挂载对象属性，computed属性为key，值为Watcher实例
遍历computed的属性，在vue实例上定义属性，并代理到Watcher实例
computed的初始化watcher配置默认为lazy为true
设置watcher的getter方法为computed属性的函数
获取调用
调用的时候是会去调get方法
调用getter方法获取值
