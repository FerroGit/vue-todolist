var app = new Vue ({
    el: '#app',

    data: {
        title: "TODO LIST",
        todo: "",
        list: []
    },
    methods: {
        addEvent: function(){

            (this.list.includes(this.todo)) ? alert("hai gia inserito questo elemento") : this.list.push(this.todo),
            this.todo= ''
        },

        deleteEvent: function(index){
            this.$delete(this.list, index)
        },
        deleteallEvent: function () {
            this.list = []
        }
    }

});