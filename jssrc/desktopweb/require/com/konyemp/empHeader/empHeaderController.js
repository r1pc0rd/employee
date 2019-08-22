define("com/konyemp/empHeader/userempHeaderController", function() {
    return {};
});
define("com/konyemp/empHeader/empHeaderControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_a239dec6c08b4e22a8c99104c0a06a55: function AS_FlexContainer_a239dec6c08b4e22a8c99104c0a06a55(eventobject) {
        var self = this;
        return self.toggleProfile.call(this);
    }
});
define("com/konyemp/empHeader/empHeaderController", ["com/konyemp/empHeader/userempHeaderController", "com/konyemp/empHeader/empHeaderControllerActions"], function() {
    var controller = require("com/konyemp/empHeader/userempHeaderController");
    var actions = require("com/konyemp/empHeader/empHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
