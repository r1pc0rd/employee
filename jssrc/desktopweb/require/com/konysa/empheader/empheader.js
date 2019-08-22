define(function() {
    return function(controller) {
        var empheader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "80px",
            "id": "empheader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skin2f2bc440",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "empheader"), extendConfig({}, controller.args[1], "empheader"), extendConfig({}, controller.args[2], "empheader"));
        empheader.setDefaultUnit(kony.flex.DP);
        var flxUserInfo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxUserInfo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_cf9bd7a72d52468996d6fda64e9cf7f5,
            "right": "40px",
            "skin": "slFbox",
            "top": "0dp",
            "width": "160px",
            "zIndex": 1
        }, controller.args[0], "flxUserInfo"), extendConfig({}, controller.args[1], "flxUserInfo"), extendConfig({}, controller.args[2], "flxUserInfo"));
        flxUserInfo.setDefaultUnit(kony.flex.DP);
        var imgDropDown = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "7px",
            "id": "imgDropDown",
            "isVisible": true,
            "right": "0px",
            "skin": "slImage",
            "src": "imgtriangle140369768619648.png",
            "width": "11px",
            "zIndex": 1
        }, controller.args[0], "imgDropDown"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgDropDown"), extendConfig({}, controller.args[2], "imgDropDown"));
        var lblEmpName = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblEmpName",
            "isVisible": true,
            "right": "4px",
            "skin": "lblSkinAdminName",
            "text": "Alex Sion",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEmpName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 0, 1, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmpName"), extendConfig({}, controller.args[2], "lblEmpName"));
        var imgAdminUser = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "34px",
            "id": "imgAdminUser",
            "isVisible": true,
            "right": "2px",
            "skin": "slImage",
            "src": "empdefaultimageicon.png",
            "width": "34px",
            "zIndex": 1
        }, controller.args[0], "imgAdminUser"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAdminUser"), extendConfig({}, controller.args[2], "imgAdminUser"));
        flxUserInfo.add(imgDropDown, lblEmpName, imgAdminUser);
        var flxLogo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxLogo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "260px",
            "zIndex": 3
        }, controller.args[0], "flxLogo"), extendConfig({}, controller.args[1], "flxLogo"), extendConfig({}, controller.args[2], "flxLogo"));
        flxLogo.setDefaultUnit(kony.flex.DP);
        var imgHeading = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgHeading",
            "isVisible": true,
            "skin": "slImage",
            "src": "employee_directory2.png",
            "width": "200dp",
            "zIndex": 3
        }, controller.args[0], "imgHeading"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgHeading"), extendConfig({}, controller.args[2], "imgHeading"));
        flxLogo.add(imgHeading);
        empheader.add(flxUserInfo, flxLogo);
        return empheader;
    }
})