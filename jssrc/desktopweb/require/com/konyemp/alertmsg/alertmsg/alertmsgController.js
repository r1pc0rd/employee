define("com/konyemp/alertmsg/alertmsg/useralertmsgController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            debugger;
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            debugger;
        },
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
        },
        setUIForChannel: function(channel) {
            switch (channel) {
                case "desktop":
                    this.view.flxAlertMsg.height = "180px";
                    this.view.flxAlertMsg.width = "500px";
                    this.view.flxAlertTitle.lblTitle.txt = "desktop";
                    break;
                case "tablet":
                    this.view.flxAlertMsg.height = "160px";
                    this.view.flxAlertMsg.width = "350px";
                    this.view.flxAlertTitle.lblTitle.txt = "desktop";
                    break;
                case "mobile":
                    this.view.flxAlertMsg.height = "150px";
                    this.view.flxAlertMsg.width = "250px";
                    this.view.flxAlertTitle.lblTitle.txt = "desktop";
            }
            this.view.forceLayout();
        }
    };
});
define("com/konyemp/alertmsg/alertmsg/alertmsgControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_d3c5ffe2b0a34bd1860b4bccf759c62a: function AS_FlexContainer_d3c5ffe2b0a34bd1860b4bccf759c62a(eventobject) {
        var self = this;
        this.hideAlert();
    },
    AS_Image_i013f2f973fc47eb9b54e39e9dd11679: function AS_Image_i013f2f973fc47eb9b54e39e9dd11679(eventobject, x, y) {
        var self = this;
        this.hideAlert();
    }
});
define("com/konyemp/alertmsg/alertmsg/alertmsgController", ["com/konyemp/alertmsg/alertmsg/useralertmsgController", "com/konyemp/alertmsg/alertmsg/alertmsgControllerActions"], function() {
    var controller = require("com/konyemp/alertmsg/alertmsg/useralertmsgController");
    var actions = require("com/konyemp/alertmsg/alertmsg/alertmsgControllerActions");
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
