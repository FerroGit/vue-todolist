var app = new Vue ({
    el: '#app',
    data: {

        imgTitolo: "img/pen-logo.png",
        title: "NOTE YOUR BUSINESS",
        todo: "",
        list: [],
        isActive: -1
    },
    methods: {
        addEvent: function(){

            (this.list.includes(this.todo)) ? alert("hai gia inserito questo elemento") : this.list.push(this.todo),
            this.todo= ""
        },

        deleteEvent: function(index){
            this.$delete(this.list, index)
        },
        deleteallEvent: function () {
            this.list = []
        },
        active: function(index){
                this.isActive = index         
        }

}

});


