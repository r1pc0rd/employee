define("userflxRootController", {
    //Type your controller code here 
    onEdit: function(widget, context) {
        kony.print("Widget: " + widget);
        var parent = widget.parent;
        parent.flxRemove.setVisibility(false);
        parent.lblName.setVisibility(false);
        parent.flxEdit.setVisibility(false);
        parent.flxSave.setVisibility(true);
        parent.txtBoxName.setVisibility(true);
        this.view.forceLayout();
    },
    onSave: function(widget, context) {
        var parent = widget.parent;
        parent.flxSave.setVisibility(false);
        parent.txtBoxName.setVisibility(false);
        parent.flxEdit.setVisibility(true);
        parent.flxRemove.setVisibility(true);
        parent.lblName.setVisibility(true);
    },
    onRemove: function(widget, context) {}
});
define("flxRootControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_ic1be977f9d543009e37c9abdc4e949d: function AS_FlexContainer_ic1be977f9d543009e37c9abdc4e949d(eventobject, context) {
        var self = this;
        this.onRemove(eventobject, context);
    },
    AS_FlexContainer_c22b4e9c800446ddb4f830ba5f6eef86: function AS_FlexContainer_c22b4e9c800446ddb4f830ba5f6eef86(eventobject, context) {
        var self = this;
        this.onEdit(eventobject, context);
    },
    AS_FlexContainer_a7c630f0fea442349d5e6965dd2a079b: function AS_FlexContainer_a7c630f0fea442349d5e6965dd2a079b(eventobject, context) {
        var self = this;
        this.onSave(eventobject, context);
    }
});
define("flxRootController", ["userflxRootController", "flxRootControllerActions"], function() {
    var controller = require("userflxRootController");
    var controllerActions = ["flxRootControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
