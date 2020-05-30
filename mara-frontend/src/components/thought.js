class Thought {
    constructor(thoughtJSON) {
        this.id = thoughtJSON.id
        this.text = thoughtJSON.text
        this.category = thoughtJSON.category
    }

    renderLi() {
        return `<li>${this.text}</li>`
    }
}