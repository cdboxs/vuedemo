## 阻止冒泡
- 事件
    - @click.stop 阻止冒泡
    、、、、、、
        stopPropagation 阻止事件传播
        cancelBubble=true
    、、、、、、
    - @click.capture 捕获事件
        addEventListener('click',fn
    - @click.prevent
            组织默认行为
            preventDefult，returnValue=false
    - @click.once
        jquery once 事件指出发一次
## 全局api
- filter 过滤器
- 全局过滤器
        Vue.filter('my',function(){});
- 局部过滤器
        let vm=new Vue({
            el:'#app',
            filters:{
                方法名(){}
            }
        });
- computed 计算“属性” 不是计算方法
        1.方法不会缓存，computed 会根据以来的属性进行缓存   
        2.两部分组成 get() 和 set() [不能只写set--一般情况下通过js影响其他或者表单元素设置值的时候会调用set()]
        3.computed  不支持异步
        4.watch mysider computed 的区别？



