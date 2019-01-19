

// var delimiters = ['${', '}']

var app = new Vue({
    delimiters: ['${', '}'],
    el: '#app',
    data: {
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
          ]
    }
  })
  
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面载于 ' + new Date().toLocaleDateString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data:{
        seen:true
    }
})


Vue.component('todo-item', {
    props: ['todo'],
    template: '<li> {{ todo.text }} </li>'
})


var app7 = new Vue({
    el: '#app-7',
    delimiters: ['${', '}'],
    data: {
      groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其它什么人吃的东西' }
      ]
    }
  })
// var app4 = new Vue({
//     delimiters: ['${', '}'],
//     el: '#appx',
//     data: {
//         todos: [
//             { text: '学习 JavaScript' },
//             { text: '学习 Vue' },
//             { text: '整个牛项目' }
//           ]
//     }
// })