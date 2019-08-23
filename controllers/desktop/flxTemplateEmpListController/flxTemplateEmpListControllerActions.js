define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_b5d46b5ea8e1442a8cf648cfd36b4582: function AS_FlexContainer_b5d46b5ea8e1442a8cf648cfd36b4582(eventobject, context) {
        var self = this;
        this.onEditEmployee(eventobject, context);
    },
    AS_FlexContainer_j40a804e6c7f4a4b89959043dbb9a6d9: function AS_FlexContainer_j40a804e6c7f4a4b89959043dbb9a6d9(eventobject, context) {
        var self = this;
        kony.print("clicked the remove icon in the segment");
        this.executeOnParent("processRemoveIcon", context.widgetInfo.selecteditems[0]);
    },
});