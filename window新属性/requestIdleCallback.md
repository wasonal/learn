# requestIdleCallback
window.requestIdleCallback方法将在浏览器空闲时段内调用函数。开发者通过这个函数可以在主事件循环中执行低优先级工作而不会影响延迟关键事件。
```
let handleId = window.requestIdleCallback(callback, {timeout})
// handleId是一个标识，开发者可以通过window.cancelIdleCallback(handleId)来取消回调
// timeout是限定毫秒数，如果在timeout毫秒后该回调还没执行，那么就会在下一次空闲时期强制执行
```