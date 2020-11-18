var app = new Vue ({
    el: '#app',

    data: {
        todo: "",
        list: []
    },
    methods: {
        aggiungi: function(){
            this.list.push(this.todo)
        },

        delete: function(){
            this.list.splice(this.todo(index))
        }
    }

});