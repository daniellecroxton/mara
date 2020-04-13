class ThoughtsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/thoughts"
    }

    getThoughts() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}