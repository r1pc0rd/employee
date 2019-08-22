define("userflxTempRootController", {
    //Type your controller code here 
});
define("flxTempRootControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTempRootController", ["userflxTempRootController", "flxTempRootControllerActions"], function() {
    var controller = require("userflxTempRootController");
    var controllerActions = ["flxTempRootControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
