define("userflxSegMainController", {
    //Type your controller code here 
});
define("flxSegMainControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSegMainController", ["userflxSegMainController", "flxSegMainControllerActions"], function() {
    var controller = require("userflxSegMainController");
    var controllerActions = ["flxSegMainControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
