class Thoughts {
    constructor() {
        this.thoughts = []
        this.adapter = new ThoughtsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadThoughts()
    }


    initBindingsAndEventListeners() {
        this.secondContainer = document.getElementById('secondary-container');
        this.newThoughtBody = document.getElementById('new-thought-text')
        this.thoughtForm = document.getElementById('new-thought-form')
        console.log(this)
        this.thoughtForm.addEventListener('submit', this.createThought.bind(this))
    }

    createThought(e) {
        e.preventDefault()
        const value = this.newThoughtBody.value

        this.adapter.createThought(value).then(thought => {

            console.log(thought)
            this.thoughts.push(new Thought(thought))
            this.newThoughtBody.value = ''
            this.render()

        })
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