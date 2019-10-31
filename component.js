/**
 * Created by alexander on 31/10/2019.
 */
//Define a new component called todo-item
Vue.component('todo-item', {
    //the todo component accepts a prop
    //which is like a custom attribute
    //this prop is called a todo
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});

var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            {id: 0, text: 'Vegetables'},
            {id: 1, text: 'Fruits'},
            {id: 2, text: 'Cheese'}
        ]
    }
});
//assigned data object as a key in next vue
var data = {
    a: 1
};

var vm1 = new Vue({
    data: data
});

var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    computed: {
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },

            //setter
            set: function (newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1]
            }
        }
    }
});




