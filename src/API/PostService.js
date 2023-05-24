import axios from "axios";

export default class {
    static async getPosts(limit, page){
        const request = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
        const data = await request.json()

        return data
    }

    static async getPostById(id){
        const request = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        const data = await request.json()
        return data
    }

    static async getCommentsById(id){
        const request = await fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
        const data = await request.json()
        return data
    }
}