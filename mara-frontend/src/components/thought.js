class Thought {
    constructor(thoughtJSON) {
        this.id = thoughtJSON.id
        this.text = thoughtJSON.text
        this.category = thoughtJSON.category
        this.category.name = thoughtJSON.category.name

    }

    renderLi() {
        // debugger;
        return `<li>${this.text} - ${this.category.name}</li>`
            // return `<li>${this.text}</li>`

    }
}