import Dep from './dep'
import observe from './observe'
import { compile } from './compile';

class Vue{
    constructor(opts){
        let data = this.data = opts.data;
        observe(data, this)
        let el = document.getElementById(opts.el);
        let documentFragment = compile(el, this);
        el.appendChild(documentFragment)
    }
}

export default Vue