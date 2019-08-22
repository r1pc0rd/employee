define("com/konyemp/alertmsgTab/alertmsg/useralertmsgController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        setTitle: function(title) {
            if (title !== undefined && title !== null) {
                this.view.lblTitle.text = title;
            }
        },
        setMessage: function(msg) {
            if (msg !== undefined && msg !== null) {
                this.view.lblMsgDescription.text = msg;
            }
        },
        hideAlert: function() {
            if (this.onAlertFlexClick !== null && this.onAlertFlexClick !== undefined) {
                this.onAlertFlexClick();
            }
        }
    };
});
define("com/konyemp/alertmsgTab/alertmsg/alertmsgControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_f1d2cb1fda3a482184686f08f7fdb738: function AS_FlexContainer_f1d2cb1fda3a482184686f08f7fdb738(eventobject) {
        var self = this;
        this.hideAlert();
    },
    AS_Image_a42d026dd0ce4b1d873182071a073c66: function AS_Image_a42d026dd0ce4b1d873182071a073c66(eventobject, x, y) {
        var self = this;
        this.hideAlert();
    }
});
define("com/konyemp/alertmsgTab/alertmsg/alertmsgController", ["com/konyemp/alertmsgTab/alertmsg/useralertmsgController", "com/konyemp/alertmsgTab/alertmsg/alertmsgControllerActions"], function() {
    var controller = require("com/konyemp/alertmsgTab/alertmsg/useralertmsgController");
    var actions = require("com/konyemp/alertmsgTab/alertmsg/alertmsgControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
