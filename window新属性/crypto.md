# crypto
window.crypto接口提供了基本的加密功能

## 属性
### subtle
返回一个SubtleCrypto对象，可以保存和访问公共的哈希、签名、加密以及解密
## 方法
### getRandomValues
使用使用 cryptographically sound 随机数填充类型化数组，比如Int8Array
```
let data = new Uint16Array(8)
window.crypto.getRandomValues(data)
// [58939, 32991, 61160, 25909, 49823, 61871, 58788, 38683]
```