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



app();
app2();