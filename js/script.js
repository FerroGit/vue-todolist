var app = new Vue ({
    el: '#app',

    data: {
        todo: "",
        list: []
    },
    methods: {
        addEvent: function(){
            this.list.push(this.todo);
        },

        deleteEvent: function(index){
            this.$delete(this.list, index)
        }
    }

});