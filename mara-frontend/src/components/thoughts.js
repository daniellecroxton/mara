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
                thoughts.forEach(thought => this.thoughts.push(new Thought(thought)))
            })
            .then(() => {
                this.render()
            })
    }

    render() {
        const secondContainer = document.getElementById('secondary-container')
        secondContainer.innerHTML = this.thoughts.map(thought => `<li>${thought.text}</li>`).join('')
        console.log('my thoughts are', this.thoughts)
    }
}