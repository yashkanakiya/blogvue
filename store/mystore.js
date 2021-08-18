import { defineStore } from 'pinia'
import axios from 'axios'



export const useStore = defineStore({
id: 'my-store',
state() {
    return {
        blog: {
            title: "",
            body: "",
            user_id: "",
        },
        posts: [],
    }
},
actions: {
    fetchPosts() {
        axios.get('v1/users/63/posts').then(data => {
        this.posts = data.data.data
        })
    },
    add() {
        axios.post('v1/posts',this.blog).then(data =>{
        console.log(data)
        // console.log(this.posts);
        this.posts.push(data.data.data)
        window.location.reload()
        })
    },
    rm(id) {
        axios.delete(`v1/posts/${id}`).then(data => {
        console.log(data)
        window.location.reload()
        })
    },
    editPost(id) {
        axios.get(`v1/posts/${id}`, this.blog).then(data => {
        console.log(data)
        let blog = data.data.data
        this.blog = blog
        })
    },
    up(id) {
        axios.put(`v1/posts/${id}`, this.blog).then(data => {
        console.log(data)
        this.blog = ""
        window.location.reload()
        })
    }
}
})