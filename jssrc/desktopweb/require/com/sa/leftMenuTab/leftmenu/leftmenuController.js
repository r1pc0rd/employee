define("com/sa/leftMenuTab/leftmenu/userleftmenuController", function() {
    return {};
});
define("com/sa/leftMenuTab/leftmenu/leftmenuControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/sa/leftMenuTab/leftmenu/leftmenuController", ["com/sa/leftMenuTab/leftmenu/userleftmenuController", "com/sa/leftMenuTab/leftmenu/leftmenuControllerActions"], function() {
    var controller = require("com/sa/leftMenuTab/leftmenu/userleftmenuController");
    var actions = require("com/sa/leftMenuTab/leftmenu/leftmenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
