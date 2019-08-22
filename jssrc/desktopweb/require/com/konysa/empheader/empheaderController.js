define("com/konysa/empheader/userempheaderController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            isFilterEnabled = false;
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        toggleProfile: function() {
            if (this.onUserFlxClick !== null && this.onUserFlxClick !== undefined) {
                this.onUserFlxClick("userProfile");
            }
        },
    };
});
define("com/konysa/empheader/empheaderControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_cf9bd7a72d52468996d6fda64e9cf7f5: function AS_FlexContainer_cf9bd7a72d52468996d6fda64e9cf7f5(eventobject) {
        var self = this;
        return self.toggleProfile.call(this);
    }
});
define("com/konysa/empheader/empheaderController", ["com/konysa/empheader/userempheaderController", "com/konysa/empheader/empheaderControllerActions"], function() {
    var controller = require("com/konysa/empheader/userempheaderController");
    var actions = require("com/konysa/empheader/empheaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
