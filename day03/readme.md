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
    * 方法不会缓存，computed 会根据以来的属性进行缓存 
    > 不支持异步  
    * 两部分组成 get() 和 set() [不能只写set--一般情况下通过js影响其他或者表单元素设置值的时候会调用set()]
    * computed  不支持异步
    * watch mysider computed 的区别？
- watch 监听值的变化时才会触发，支持异步，其他情况更善于应用 computed
    * 如果有异步逻辑涉及到计算了 一般都是watch，其他情况一般都是computed

## v-if && v-show
- v-if 操作的是dom v-if v-else v-else-if
    * 注意
    > v-if 可以添加在元素上边，也可以使用
    ```
    <template v-if></template>
    ```
    > 如果结构一样dom就会被复用，要想不被dom复用  只需要在相同的元素上边加上key
    ```
    <button @click="cut=!cut">切换</button>
        <template v-if="cut">
            <label for="userName">注册<input type="text" id="userName1" key="1"></label>
        </template>
        <template v-else>
                <label for="userName">登录<input type="text" id="userName2" key="2"></label>
        </template>
    ```
- v-show 操作的是 样式

## 动态绑定属性
- v-bind 绑定属性
    ```
    <img :src="src">
    ``` 
- 比较常用的属性 class  style 
    * 第一种是对象模式｛｝ 第二种是数组模式[]
    ```
       <div :class="{x:flag}">v-bind</div>
         <div :class="{x:flag,y:false}">v-bind</div>
          <div :class="[class1,class2,class3]">v-bind</div>
    ```


