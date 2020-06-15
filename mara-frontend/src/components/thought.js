class Thought {
    constructor(thoughtJSON) {
        this.id = thoughtJSON.id
        this.text = thoughtJSON.text
        this.category = thoughtJSON.category
        this.categoryId = thoughtJSON.category.id

    }

    renderLi() {
        return `<li>${this.text} - ${this.category.name}</li>`
    }
}