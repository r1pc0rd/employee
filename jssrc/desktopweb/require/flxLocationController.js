define("userflxLocationController", {
    showSegmentData: function(widget, context) {
        this.executeOnParent("expandLocationDetail", context);
    },
    onEditLocation: function(widget, context) {
        debugger;
        this.executeOnParent("editLocation", context.widgetInfo.selectedItems[0]);
    },
    onRemoveLocation: function(widget, context) {
        //this.executeOnParent("removeLocation",context.widgetInfo.selectedItems[0]);
        var locationObj = {
            "rowItem": context.widgetInfo.selectedItems[0],
            "rowIndex": context.rowIndex
        }
        this.executeOnParent("removeLocation", locationObj);
    }
});
define("flxLocationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_d04a166a94704c82b66b340bdd5cb777: function AS_FlexContainer_d04a166a94704c82b66b340bdd5cb777(eventobject, context) {
        var self = this;
        this.onEditLocation(eventobject, context);
    },
    AS_FlexContainer_b0767af9578d4a089f82e4aace33c2d5: function AS_FlexContainer_b0767af9578d4a089f82e4aace33c2d5(eventobject, context) {
        var self = this;
        return self.onRemoveLocation.call(this, eventobject, context);
    },
    AS_FlexContainer_i2d62408465c4f949bd1c120a37c7346: function AS_FlexContainer_i2d62408465c4f949bd1c120a37c7346(eventobject, context) {
        var self = this;
        return self.showSegmentData.call(this, eventobject, context);
    }
});
define("flxLocationController", ["userflxLocationController", "flxLocationControllerActions"], function() {
    var controller = require("userflxLocationController");
    var controllerActions = ["flxLocationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
