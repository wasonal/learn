# Vue keep-alive原理
## 1.\<keep-alive>组件的作用
**官方解释：**\<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

**简单来说其主要作用是保留组件状态和避免重新渲染。**

列子参考官方文档：[动态组件 & 异步组件 — Vue.js (vuejs.org)](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)

## 2.keep-alive组件是怎么实现缓存组件的?
很容易我们可以想到以对象的形式来存储我们需要缓存的组件，
切换组件的时候我们用组件的标识作为索引来对组件存取。
```
interface KeepAliveObj {
    [componentKey: string]: componentInstance
}
```
### 2.1 自己尝试实现一下
组件的标识为key，那么当要渲染\<keep-alive>中的组件的时候，
第一次访问，就去cache中用组件的key作为索引，组件实例化后缓存在对象里面
```cache[key] = component```
将组件缓存，后续的访问，就直接取cache[key]返回
