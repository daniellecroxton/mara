class Thoughts {
    constructor() {
        this.thoughts = []
        this.adapter = new ThoughtsAdapter()
            // this.bindEventListeners()
        this.fetchAndLoadThoughts()
    }

    fetchAndLoadThoughts() {
        this.adapter
            .getThoughts()
            .then(thoughts => {
                thoughts.forEach(thought => this.thoughts.push(thought))
            })
            .then(() => {
                this.render()
            })
    }

    render() {
        // Why is this removing all the content of this container instead of just appending to bottom?
        // const mainContainer = document.getElementById('main-container')
        // let p = document.createElement("p")
        // mainContainer.appendChild(p)
        // mainContainer.innerText = 'my thoughts here'
        console.log('my notes are', this.thoughts)
    }
}