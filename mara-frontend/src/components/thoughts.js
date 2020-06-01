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
        const values = {
            text: this.newThoughtBody.value,
            category_id: this.newThoughtCategory.value
        }

        this.adapter.createThought(values).then(thought => {
            debugger;
            this.thoughts.push(new Thought(values))
            this.newThoughtBody.innerHTML = ''
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

// categories 
// 1. An h2 for each category
//    a. iterate over categories
//    b. for each category (new function?), create an h2 element with category name
// 2. Each list item to render under the h2 for its category
//    a. this.thoughts.map - is there a way to map only elements with a matching category id?
//    b. use the renderLi