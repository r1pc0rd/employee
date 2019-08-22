define("com/sa/leftmenu/userleftmenuController", function() {
    return {};
});
define("com/sa/leftmenu/leftmenuControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/sa/leftmenu/leftmenuController", ["com/sa/leftmenu/userleftmenuController", "com/sa/leftmenu/leftmenuControllerActions"], function() {
    var controller = require("com/sa/leftmenu/userleftmenuController");
    var actions = require("com/sa/leftmenu/leftmenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
