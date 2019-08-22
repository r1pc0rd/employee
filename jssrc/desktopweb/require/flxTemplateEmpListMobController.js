define("userflxTemplateEmpListMobController", {
    showSegmentData: function(widget, context) {
        //debugger;
        this.executeOnParent("expandEmployeeDetailMob", context);
    },
    onEditEmployee: function(widget, context) {
        this.executeOnParent("processEditIcon", context.widgetInfo.selectedItems);
    },
    onRemoveEmployee: function(widget, context) {
        this.executeOnParent("processRemoveIcon", context.widgetInfo.selectedItems);
    }
});
define("flxTemplateEmpListMobControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_adefe6c5b5814dddb6d0db5326039bbb: function AS_FlexContainer_adefe6c5b5814dddb6d0db5326039bbb(eventobject, context) {
        var self = this;
        this.onEditEmployee(eventobject, context);
    },
    AS_FlexContainer_e33201cac38a4986814e0e7a8f0f60ab: function AS_FlexContainer_e33201cac38a4986814e0e7a8f0f60ab(eventobject, context) {
        var self = this;
        kony.print("clicked the remove icon in the segment");
        this.executeOnParent("processRemoveIcon", context.widgetInfo.selecteditems[0]);
    },
    AS_FlexContainer_dac923f885f04875a7827d380da599f6: function AS_FlexContainer_dac923f885f04875a7827d380da599f6(eventobject, context) {
        var self = this;
        return self.showSegmentData.call(this, eventobject, context);
    }
});
define("flxTemplateEmpListMobController", ["userflxTemplateEmpListMobController", "flxTemplateEmpListMobControllerActions"], function() {
    var controller = require("userflxTemplateEmpListMobController");
    var controllerActions = ["flxTemplateEmpListMobControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
