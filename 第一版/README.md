### 第一版迷你VUE：
集成了Observe，Dep，Compile，Watcher四项功能

#### Observe
Observe两个作用：
1. 监听数据变化
2. 实例化Dep，get时收集依赖，set广播📢变化

文件结构：
    function observe: 遍历data，调用defineReactive(vm, key, val)
    function defaineReactive: 
        Object.defineProperty(vm, key, {
            enumable: true,
            configurable: true,
            get(){
              ...收集依赖 ->  订阅的过程
              return val
            },
            set(newVal){
                if(val === newVal) return
                val = newVal;
                ...广播
            }
        })

#### Dep
是Observe和Watcher的纽带，它是个发布订阅对象。

-> 在Observe defineReactive函数之初实例化的dep
-> 订阅发生在：get阶段
-> 广播发生在：set阶段

文件结构：
    class Dep
        watchers: []
        addWatcher(watcher){
            this.watchers.push(watcher)
        },
        notify(){
            this.watchers.forEach(watcher => watcher.update())
        }

什么时候用到Dep？
    1. Observe的get订阅，set广播
    2. Watcher的contructor里面
        2.1 先把Dep.target=this。赋值为当前的watcher实例
        2.2 然后this.node[this.type] = this.vm[this.bindName]，这会触发Observe的get，get里面判断Dep.target有值，就会被添加到Dep的watchers中
        2.3 执行完这些之后，把Dep.target = null赋值为null，之后get就又不能进入订阅了

#### compile
    compile的作用：
        解析出{{name}}和v-model="name"的节点，每个节点对应一个watcher

    目录结构
        function compile:
            let fragment = document.createDocumentFragment();
            compileNode(node)
        function compileNode:
            new Watcher(vm, node, type, bindName)
                type: nodeValue value等
                bindName: 从nodeValue的{{name}}}中解析出name

#### Watcher
    Watcher的作用：
        1. constructor初始化值
        2. 把this赋值给Dep.target
        3. update赋值
    
    目录结构：
        constructor:
            1. Dep.target = this
            2. 初始化赋值：node, type, bindName, vm
            3. Dep.target = null
        update:
            this.node[this.type] = this.vm[this.bindName]
