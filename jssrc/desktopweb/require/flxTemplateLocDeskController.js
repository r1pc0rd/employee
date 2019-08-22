// define({ 
//  //Type your controller code here 
//   howSegmentData:function(widget, context){
//       this.executeOnParent("expandLocationDetail",context);
//   },
//    onEditLocation:function(widget,context){
//      //desktop web edit location method
//      debugger;
//     this.executeOnParent("editLocation",context.widgetInfo.selectedItems[0]);
//   },
//   onRemoveLocation:function(widget,context){
//     debugger;
//     this.executeOnParent("removeItem",context.widgetInfo.selectedItems[0]);
//   }
//  });
define("userflxTemplateLocDeskController", {
    //Type your controller code here 
    howSegmentData: function(widget, context) {
        this.executeOnParent("expandLocationDetail", context);
    },
    onEditLocation: function(widget, context) {
        //desktop web edit location method
        debugger;
        this.executeOnParent("editLocation", context.widgetInfo.selectedItems[0]);
    },
    onRemoveLocation: function(widget, context) {
        debugger;
        var locationObj = {
            "rowItem": context.widgetInfo.selectedItems[0],
            "rowIndex": context.rowIndex
        }
        this.executeOnParent("removeLocation", locationObj);
    }
});
define("flxTemplateLocDeskControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_ad3ffe78985f4304914c3a9ff83ec56c: function AS_FlexContainer_ad3ffe78985f4304914c3a9ff83ec56c(eventobject, context) {
        var self = this;
        return self.onEditLocation.call(this, eventobject, context);
    },
    AS_FlexContainer_a36023040348411689e6ea803749f197: function AS_FlexContainer_a36023040348411689e6ea803749f197(eventobject, context) {
        var self = this;
        return self.onRemoveLocation.call(this, eventobject, context);
    }
});
define("flxTemplateLocDeskController", ["userflxTemplateLocDeskController", "flxTemplateLocDeskControllerActions"], function() {
    var controller = require("userflxTemplateLocDeskController");
    var controllerActions = ["flxTemplateLocDeskControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
