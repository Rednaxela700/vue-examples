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