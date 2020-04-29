class Thoughts {
    constructor() {
        this.thoughts = []
        this.adapter = new ThoughtsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadThoughts()
    }

    initBindingsAndEventListeners() {
        // On track with code-along, however couldn't get code to function by finding element in this function, so 
        // moved back down to render function. Could be something to do with load order

        // this.secondContainer = document.getElementById('secondary-container');
        // console.log(this.secondContainer)

    }

    fetchAndLoadThoughts() {
        this.adapter
            .getThoughts()
            .then(thoughts => {
                thoughts.forEach(thought => this.thoughts.push(new Thought(thought)))
            })
            .then(() => {
                this.render()
            })
    }

    render() {
        const secondContainer = document.getElementById('secondary-container');
        secondContainer.innerHTML = this.thoughts.map(thought => thought.renderLi()).join('')
        console.log('my thoughts are', this.thoughts)
    }
}