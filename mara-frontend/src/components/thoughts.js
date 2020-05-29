class Thoughts {
    constructor() {
        this.thoughts = []
        this.adapter = new ThoughtsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadThoughts()
    }


    initBindingsAndEventListeners() {
        this.pastThoughts = document.getElementById('past-thoughts')
        this.newThoughtBody = document.getElementById('new-thought-text')
        this.newThoughtCategory = document.getElementById('category_values')
        this.thoughtForm = document.getElementById('new-thought-form')
        this.thoughtForm.addEventListener('submit', this.createThought.bind(this))
    }

    createThought(e) {
        e.preventDefault()
            // debugger;
        const textValue = this.newThoughtBody.value
        const categoryValue = this.newThoughtCategory.value
        const values = {
            text: textValue,
            category: categoryValue
        }

        this.adapter.createThought(values).then(thought => {

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
        this.pastThoughts.innerHTML = this.thoughts.map(thought => thought.renderLi()).join('')
    }
}