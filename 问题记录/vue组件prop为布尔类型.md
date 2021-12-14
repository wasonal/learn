给子组件传值prop，如果是布尔类型，不能直接
```<child isMan="true">```
而是需要加":"
```<child :isMan="true">```