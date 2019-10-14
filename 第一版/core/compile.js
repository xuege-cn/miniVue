import Watcher from './watcher'

export function compile(el, vm){
    let fragment = document.createDocumentFragment();
    let node;
    
    while(node = el.firstChild){
        compileNode(vm, node)
        fragment.append(node)
    }

    return fragment
}

const reg = /\{\{(.*)\}\}/;
export function compileNode(vm, node){
    let { nodeType, nodeValue, nodeName } = node;

    switch(nodeType){
        case 1:
            if(nodeName == 'INPUT'){
                let bindName;
                let { attributes } = node;
                for(let attr of attributes){
                    if(attr.name === 'v-model'){
                        bindName = attr.value;
                    }
                }
                if(bindName){
                    node.addEventListener('input', e => {
                        vm[bindName] = e.target.value;
                    })
                    new Watcher(vm, node, 'value', bindName)
                }
            }
            break;
        case 3:
            let isModal = reg.test(nodeValue)
            if(isModal){
                let bindName = RegExp.$1 && RegExp.$1.trim();
                new Watcher(vm, node, 'nodeValue', bindName)
            }
            break;
    }
}