class Dep{
    constructor(){
        this.watchers = []
    }

    addSub(watcher){
        this.watchers.push(watcher)
    }

    notify(){
        this.watchers.forEach(watcher => {
            watcher.update()
        })
    }
}

export default Dep