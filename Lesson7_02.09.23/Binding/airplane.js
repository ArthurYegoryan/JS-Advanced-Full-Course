const airplane = {
    name: "Pegas",

    isFlying: false,

    takeOff: function() {
        this.isFlying = true;
    },

    land: function() {
        this.isFlying = false;
    },
};