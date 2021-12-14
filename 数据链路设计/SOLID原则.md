https://www.cnblogs.com/stonecutter/archive/2019/06/15/11028470.html
面向对象虽然为软件开发带来了新的开发设计模式，开发者可以以类的方式组织具有关联的功能和数据，但是还是没有减少混乱和不可维护的程序
因此Martin先生发展了5条准则来帮助开发者创建可读且易维护的程序
S.O.L.I.D原则
单一功能原则
一个类只负责一件事。如果一个类有多项责任，它就变耦合了。一个功能的变动会造成另外一个功能改变
When designing our classes, we should aim to put related features together,
so whenever they tend to change they change for the same reason.
And we should try to separate features if they will change for different reasons. 

开闭原则
软件应当对扩展开放，而对变更关闭
例如店铺需要给不同的顾客打不同的折扣
```
class Discount {
  getDiscount(){
    return this.price * 0.6
  }
}
```
当需要添加新的折扣等级的客户，就可能得这样修改类
```
class Discount {
  getDiscount() {
    if(this.customer == 'ordinary'){
      return this.price * 0.6
    } else if(this.customer == 'vip'){
      return this.price * 0.4
    }
  }
}
```
这就不符合开闭原则，如果添加新的折扣，就需要添加新的逻辑
为了让他符合开闭原则，我们需要添加一个类来扩展Discount类
```
class VIPDiscount extends Discount{
  getDiscount() {
    return super.getDiscount() * 0.5
  }
}
```

里氏替换
子类一定能用父级类替换

接口分离
接口应该细粒度，类不需要拥有不会用的方法

依赖反转
DI-dependency injection依赖注入
IoC
https://blog.csdn.net/ji1127780204/article/details/80291266
https://zhuanlan.zhihu.com/p/53832991