// importing axios and lodash
// import * as lodashlib from 'lodash'
import * as axioslib from 'axios'

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you the answer without a question!'
    },
    watch: {
        //whenever question change this func will run
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing';
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark!';
                return
            }
            this.answer = 'Thiniking...';
            var vm = this
            axioslib.default.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer);
                })
                .catch(function (error) {
                    vm.answer = "Error! Couldn't reach the API " + error
                })
        }
    }
})