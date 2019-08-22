define("userflxFilterContainerController", {
    //Type your controller code here 
});
define("flxFilterContainerControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxFilterContainerController", ["userflxFilterContainerController", "flxFilterContainerControllerActions"], function() {
    var controller = require("userflxFilterContainerController");
    var controllerActions = ["flxFilterContainerControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
