class ThoughtsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/thoughts"
    }

    getThoughts() {
        return fetch(this.baseUrl).then(res => res.json())

    }

    createThought(thought) {
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ thought }),
        }).then(res => res.json())

    }
}