/**
 * Created by alexander on 31/10/2019.
 */
const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue'
    }
});

app.message = 'hahahahah';

const app2 = new Vue({
    el: '#app2',
    data: {
        message : `You loaded this page on ${new Date().toLocaleString()}`
    }
});

const app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
});

const app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            {text: 'Learn JS'},
            {text: 'Learn Vue'},
            {text: 'Build sth awesome'}
        ]


    }
});

//append new item to todo list
app4.todos.push({text: 'Keep order in arr'});
app4.todos.push({text: 'Keep fucking order in arr'});
app4.todos.push({text: 'Keep fucking order in fucking arr'});
app4.todos.push({text: 'Keep fucking order in fucking arr for fuck sake'});



const app5 = new Vue ({
    el: '#app5',
    data: {
        msg: 'Hello Vue.js'
    },
    methods: {
        reverseMessage: function () {
            this.msg = this.msg.split('').reverse().join('')
        }
    }
});


const app6 = new Vue ({
    el: '#app6',
    data: {
        message: 'Hello Vue!'
    }
});