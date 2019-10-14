import Dep from './dep'

export default function observe(data, vm){
    Object.keys(data).forEach(key => {
        defineReactive(vm, key, data[key])
    })
}

function defineReactive(vm, key, val){
    let dep = new Dep()
    Object.defineProperty(vm, key, {
        enumerable: true,
        configurable: true,
        get(){
            Dep.target && dep.addSub(Dep.target)
            return val
        },
        set(newVal){
            if(val === newVal) return;
            val = newVal;
            dep.notify()
            return val;
        }
    })
}