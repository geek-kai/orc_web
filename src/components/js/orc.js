import Vue from 'vue'

// eslint-disable-next-line no-new
new Vue({
  el: '#urls',
  data: {
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
