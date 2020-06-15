class Thoughts {
    constructor() {
        this.thoughts = []
        this.adapter = new ThoughtsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadThoughts()
        this.baseUrl = "http://localhost:3000/api/v1/thoughts"
    }


    initBindingsAndEventListeners() {
        this.pastThoughts = document.getElementById('past-thoughts')
        this.newThoughtBody = document.getElementById('new-thought-text')
        this.newThoughtCategory = document.getElementById('category_values')
        this.thoughtForm = document.getElementById('new-thought-form')
        this.thoughtForm.addEventListener('submit', this.createThought.bind(this))
        this.sortButton = document.getElementById('sort_button')
        this.sortButton.addEventListener("click", this.sortThoughts.bind(this))
    }

    createThought(e) {
        e.preventDefault()
        const values = {
            text: this.newThoughtBody.value,
            category_id: this.newThoughtCategory.value
        }

        this.adapter.createThought(values).then(thought => {
            this.thoughts.push(new Thought(thought))
            this.newThoughtBody.value = ''
            this.newThoughtCategory.value = ''
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

    sortThoughts() {
        fetch(this.baseUrl).then(res => res.json())
            .then(thoughts => {
                thoughts.sort(function(a, b) {
                    let textA = a.text.toUpperCase();
                    let textB = b.text.toUpperCase();
                    if (textA < textB) {
                        return -1;
                    }
                    if (textA > textB) {
                        return 1;
                    }
                    return 0;
                })
                this.thoughts = []
                thoughts.forEach(thought => this.thoughts.push(new Thought(thought)))
                this.render()
            })
    }



    render() {
        this.pastThoughts.innerHTML = this.thoughts.map(thought => thought.renderLi()).join('')
    }

}

// 1. Add button to say sort
// 2. Trigger javascript on click (console.log)
// 3. Fetch thoughts, sort, display to DOM

// Display to DOM as homework, and review how I cleared and repopulated DIV with sorted array, 
// book another slot, reviewing homework and scope and hoisting



// categories 
// 1. An h2 for each category
//    a. iterate over categories
//    b. for each category (new function?), create an h2 element with category name
// 2. Each list item to render under the h2 for its category
//    a. this.thoughts.map - is there a way to map only elements with a matching category id?
//    b. use the renderLi