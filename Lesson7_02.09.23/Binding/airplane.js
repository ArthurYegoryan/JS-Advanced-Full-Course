const airplane = {
    name: "Pegas",

    getName: function() {
        return this.name;
    },

    setName: function(newName) {
        this.name = newName;
    },

    isFlying: false,

    takeOff: function() {
        this.isFlying = true;
    },

    land: function() {
        this.isFlying = false;
    },
};