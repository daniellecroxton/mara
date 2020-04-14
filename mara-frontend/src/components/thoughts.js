class Thoughts {
    constructor() {
        this.thoughts = []
        this.adapter = new ThoughtsAdapter()
        this.bindEventListeners()
        this.fetchAndLoadNotes()
    }

    fetchAndLoadThoughts() {
        this.adapter.getThoughts().then(thoughts => {
            console.log(thoughts)
        })
    }
}