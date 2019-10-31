/**
 * Created by alexander on 31/10/2019.
 */
//Define a new component called todo-item
Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
});

Vue.component('todo-list', {
    template:'<ol>' +
    '<todo-item></todo-item>' +
    '</ol>'
})