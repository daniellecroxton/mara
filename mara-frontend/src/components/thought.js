class Thought {
    constructor(thoughtJSON) {
        this.id = thoughtJSON.id
        this.text = thoughtJSON.text
    }

    renderLi() {
        return `<li>${this.text}</li>`
    }
}