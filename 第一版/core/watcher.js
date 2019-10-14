import uid from 'uid'
import Dep from './dep'

class Watcher{
    constructor(vm, node, type, bindName){
        Dep.target = this;
        this.id = uid();
        this.node = node;
        this.type = type;
        this.bindName = bindName;
        this.vm = vm;
        this.update();
        Dep.target = null;
    }

    update(){
        this.node[this.type] = this.vm[this.bindName];
    }
}

export default Watcher