class Thoughts {
    constructor() {
        this.thoughts = []
        this.adapter = new ThoughtsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadThoughts()
    }


    initBindingsAndEventListeners() {
        this.secondContainer = document.getElementById('secondary-container');
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
        this.secondContainer.innerHTML = this.thoughts.map(thought => thought.renderLi()).join('')
        console.log('my thoughts are', this.thoughts)
    }
}