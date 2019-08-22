define(function() {
    return function(controller) {
        var alertmsg = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "alertmsg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_f1d2cb1fda3a482184686f08f7fdb738,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "alertmsg"), extendConfig({}, controller.args[1], "alertmsg"), extendConfig({}, controller.args[2], "alertmsg"));
        alertmsg.setDefaultUnit(kony.flex.DP);
        var flxMainAlert = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainAlert",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "minHeight": "200dp",
            "isModalContainer": false,
            "skin": "sknFlxOverlay",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainAlert"), extendConfig({}, controller.args[1], "flxMainAlert"), extendConfig({}, controller.args[2], "flxMainAlert"));
        flxMainAlert.setDefaultUnit(kony.flex.DP);
        var flxAlertMsg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "160dp",
            "id": "flxAlertMsg",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxAlert",
            "top": "0dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "flxAlertMsg"), extendConfig({}, controller.args[1], "flxAlertMsg"), extendConfig({}, controller.args[2], "flxAlertMsg"));
        flxAlertMsg.setDefaultUnit(kony.flex.DP);
        var flxAlertTitle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "20%",
            "id": "flxAlertTitle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTitle",
            "top": "0dp",
            "width": "95%",
            "zIndex": 1
        }, controller.args[0], "flxAlertTitle"), extendConfig({}, controller.args[1], "flxAlertTitle"), extendConfig({}, controller.args[2], "flxAlertTitle"));
        flxAlertTitle.setDefaultUnit(kony.flex.DP);
        var imgCloseAlert = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgCloseAlert",
            "isVisible": true,
            "onTouchEnd": controller.AS_Image_a42d026dd0ce4b1d873182071a073c66,
            "right": "0dp",
            "skin": "slImage",
            "src": "empremoveicon.png",
            "width": "20dp",
            "zIndex": 10
        }, controller.args[0], "imgCloseAlert"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCloseAlert"), extendConfig({}, controller.args[2], "imgCloseAlert"));
        var lblTitle = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblTitle",
            "text": "Title",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitle"), extendConfig({}, controller.args[2], "lblTitle"));
        flxAlertTitle.add(imgCloseAlert, lblTitle);
        var lblLine = new kony.ui.Label(extendConfig({
            "bottom": "1%",
            "centerX": "50%",
            "height": "1dp",
            "id": "lblLine",
            "isVisible": true,
            "left": "2%",
            "skin": "sknDummyLineAlert",
            "top": "0%",
            "width": "95%",
            "zIndex": 1
        }, controller.args[0], "lblLine"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLine"), extendConfig({}, controller.args[2], "lblLine"));
        var flxAlertDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "72%",
            "id": "flxAlertDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "95%",
            "zIndex": 1
        }, controller.args[0], "flxAlertDescription"), extendConfig({}, controller.args[1], "flxAlertDescription"), extendConfig({}, controller.args[2], "flxAlertDescription"));
        flxAlertDescription.setDefaultUnit(kony.flex.DP);
        var lblMsgDescription = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "96%",
            "id": "lblMsgDescription",
            "isVisible": true,
            "left": "4%",
            "skin": "sknLblDes",
            "text": "Alert Msg here",
            "top": "3%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblMsgDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMsgDescription"), extendConfig({}, controller.args[2], "lblMsgDescription"));
        flxAlertDescription.add(lblMsgDescription);
        flxAlertMsg.add(flxAlertTitle, lblLine, flxAlertDescription);
        flxMainAlert.add(flxAlertMsg);
        alertmsg.add(flxMainAlert);
        return alertmsg;
    }
})