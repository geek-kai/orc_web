<template>
  <div class="hello" id="orc">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div id="todo-list-example">
      <form >
        <label for="new-todo">Add a url</label>
        <input
      v-model="url"
      id="new-todo"
      placeholder="E.g. Feed the cat"
      >
      <button v-on:click="addUrl">addUrl</button>
</form>
  <ul >
    <li
      is="li-item"
      v-for="(url, index) in urls"
      v-bind:key="url.id"
      v-bind:title="url.title"
      v-on:remove="urls.splice(index, 1)"
    ></li>
  </ul>
</div>
  </div>
</template>

<script>

import Vue from 'vue'

// eslint-disable-next-line no-new
var vm=new Vue({
  el: '#orc',
  data: {
    msg: '图片识别',
    url: '',
    urls: [
      {
        id: 1,
        title: 'Do the dishes'
      },
      {
        id: 2,
        title: 'Take out the trash'
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    urlCount: 4
  },
  methods: {
    addUrl: function () {
      this.urls.push({
        id: this.urlCount++,
        title: this.url
      })
      this.url = ''
    }
  }
})
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '图片识别'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
