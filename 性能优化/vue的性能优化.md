<!--
 * @Descripttion: 
 * @Author: denghuawen3<denghuawen3@jd.com>
 * @Date: 2021-09-15 16:46:31
-->
1. 使用functional组件
函数式组件没有状态，没有响应式数据，没有生命周期，只负责渲染
需要的一些数据都是从父组件传下来的

2. 子组件拆分
vue的更新是组件粒度的，在大组件里面进行子组件的拆分，让原本大组件重新渲染的时候，所有东西重新渲染
优化为
大组件重新渲染，但是子组件没有依赖上传的响应式数据的时候，则不需要进行重新渲染

3. computed计算属性使用局部变量
vue实例上的属性都是响应式的，通过this.key来访问的时候，都会触发属性的getter，从而执行依赖收集相关的逻辑
使用局部变量或者用解构的方式在函数头部获取属性
再次读取的时候就不会触发属性的getter，从而减少不必要的依赖收集的执行

4. v-show代替v-if(空间换时间)

5. keepalive(空间换时间)

6. 通过使用requestAnimationFrame延迟渲染组件
维护一个使用rAF的自增的变量，通过v-if判断子组件设置的值与自增变量相等的时候，则进行渲染

7. 