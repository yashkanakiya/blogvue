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
    add() {
        axios.post('v1/posts',this.blog).then(data =>{
        console.log(data)
        this.blog = ""
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
        })
    }
}
})