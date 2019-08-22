define("userflxDesignationController", {
    //Type your controller code here 
});
define("flxDesignationControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDesignationController", ["userflxDesignationController", "flxDesignationControllerActions"], function() {
    var controller = require("userflxDesignationController");
    var controllerActions = ["flxDesignationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
