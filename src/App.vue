<template>
  <div>
    <!-- Create & Update Post -->
    <div class="flex flex-col items-center space-y-10 py-5 bg-gray-800 md:mx-20">
      <h1 class="text-5xl text-green-300 font-bold uppercase tracking-wider">create blog</h1>
      <div class="flex flex-col items-center space-y-2">
        <label class="text-3xl uppercase text-white">Blog title</label>
        <input type="text" v-model="blog.title" class="border-2 border-black bg-green-400">
      </div>

      <div class="flex flex-col items-center space-y-2 ">
        <label class="text-3xl uppercase text-white">Blog userid</label>
        <input type="text" v-model="blog.user_id" class="border-2 border-black bg-green-400">
      </div>

      <div class="flex flex-col items-center space-y-2 ">
        <label class="text-3xl uppercase text-white">Blog Contant</label>
        <textarea cols="50" rows="10" v-model="blog.body" class="border-2 border-black bg-green-400"></textarea>
      </div>
      <button class="border bg-blue-700 text-white px-3 py-1 uppercase tracking-widest font-semibold" @click="add">create</button>
      <button class="border bg-yellow-300 text-white px-3 py-1 uppercase tracking-widest font-semibold" 
      @click="up(blog.id)">update</button>
    </div>

    <!-- preview post-->
    <div class="flex flex-col  py-5 bg-gray-400 space-y-3 md:mx-20" >
      <p class="text-2xl">BlogTitle: <span class="">{{blog.title}}</span></p>
      <p class="text-2xl">BlogID: <span class="">{{blog.user_id}}</span></p>
      <p class="text-2xl">BlogContant:<br><span class="text-base">{{blog.body}}</span></p>
    </div>
      <div>
        <!-- watch all posts -->
        <div class="flex flex-col items-center py-5  bg-green-500 space-y-3 p-10 md:mx-20">
            <h1 class="text-5xl text-green-300 font-bold uppercase tracking-wider ">all blogs articals</h1>
            <div v-for="post in posts.data" :key="post.title" class="bg-gray-800 text-white p-10 text-center space-y-5">
                <h1 v-if="post" class="text-3xl">{{post.title}}</h1>
                <p v-if="post" class="text-xl">{{post.body}}</p>
                <button class="border bg-red-700 text-white px-3 py-1 uppercase tracking-widest font-semibold"
                @click="rm(post.id)">delete</button>
                <button class="border bg-green-700 text-white px-3 py-1 uppercase tracking-widest font-semibold"
                @click="editPost(post.id)">edit</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { useStore } from '../store/mystore'
import { mapWritableState } from 'pinia'
import { mapActions } from 'pinia'

export default {  
 computed : {
   ...mapWritableState(useStore,['blog']),
   ...mapWritableState(useStore,['posts'])
 },
created() {
  this.axios.get('v1/posts').then(data => {
  console.log(data)
  this.posts = data.data
  })
},
methods: {
  ...mapActions(useStore,['add']),
  ...mapActions(useStore,['rm']),
  ...mapActions(useStore,['editPost']),
  ...mapActions(useStore,['up']),

  actionBlog() {
    this.add(this.blog),
    this.rm(this.post),
    this.editPost(this.blog),
    this.up(this.blog)
  }, 
},

}
</script>

<style>

</style>
