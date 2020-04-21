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
                    // Why are my thought objects undefined?
                console.log(this.thoughts)
            })
            .then(() => {
                this.render()
            })
    }

    render() {
        const secondContainer = document.getElementById('secondary-container')
        let p = document.createElement("p")
        secondContainer.appendChild(p)
        secondContainer.innerText = 'my thoughts here'
        console.log('my notes are', this.thoughts)
    }
}