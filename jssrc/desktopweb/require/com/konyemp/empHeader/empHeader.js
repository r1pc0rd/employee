define(function() {
    return function(controller) {
        var empHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "80px",
            "id": "empHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skin2f2bc440",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "empHeader"), extendConfig({}, controller.args[1], "empHeader"), extendConfig({}, controller.args[2], "empHeader"));
        empHeader.setDefaultUnit(kony.flex.DP);
        var flxUserInfo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxUserInfo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_a239dec6c08b4e22a8c99104c0a06a55,
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
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "290px",
            "zIndex": 3
        }, controller.args[0], "flxLogo"), extendConfig({}, controller.args[1], "flxLogo"), extendConfig({}, controller.args[2], "flxLogo"));
        flxLogo.setDefaultUnit(kony.flex.DP);
        var flxHamburger = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30px",
            "id": "flxHamburger",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "32px",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "30px",
            "width": "32px",
            "zIndex": 3
        }, controller.args[0], "flxHamburger"), extendConfig({}, controller.args[1], "flxHamburger"), extendConfig({}, controller.args[2], "flxHamburger"));
        flxHamburger.setDefaultUnit(kony.flex.DP);
        var imgHamburger = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgHamburger",
            "isVisible": true,
            "left": "0px",
            "skin": "slImage",
            "src": "hamburger_menu.png",
            "top": "0px",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "imgHamburger"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgHamburger"), extendConfig({}, controller.args[2], "imgHamburger"));
        flxHamburger.add(imgHamburger);
        var imgHeading = new kony.ui.Image2(extendConfig({
            "centerY": "45.00%",
            "height": "100%",
            "id": "imgHeading",
            "isVisible": true,
            "left": "20px",
            "skin": "slImage",
            "src": "employee_directory2.png",
            "top": 0,
            "width": "203dp",
            "zIndex": 3
        }, controller.args[0], "imgHeading"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgHeading"), extendConfig({}, controller.args[2], "imgHeading"));
        flxLogo.add(flxHamburger, imgHeading);
        var empTextMoblie = new kony.ui.Label(extendConfig({
            "centerX": "35%",
            "centerY": "50%",
            "id": "empTextMoblie",
            "isVisible": true,
            "left": "98dp",
            "skin": "CopydefLabel0c4c571d377ee4f",
            "text": "Employee Directory",
            "top": "29dp",
            "width": "180px",
            "zIndex": 100
        }, controller.args[0], "empTextMoblie"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "empTextMoblie"), extendConfig({}, controller.args[2], "empTextMoblie"));
        var flxCancelAndSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "50px",
            "id": "flxCancelAndSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "200px",
            "skin": "slFbox",
            "top": "4dp",
            "width": "70px",
            "zIndex": 100
        }, controller.args[0], "flxCancelAndSearch"), extendConfig({}, controller.args[1], "flxCancelAndSearch"), extendConfig({}, controller.args[2], "flxCancelAndSearch"));
        flxCancelAndSearch.setDefaultUnit(kony.flex.DP);
        var btnCancelsearch = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknCancel",
            "height": "100%",
            "id": "btnCancelsearch",
            "isVisible": true,
            "right": "0px",
            "skin": "sknCancel",
            "text": "Cancel",
            "top": "25dp",
            "width": "50px",
            "zIndex": 100
        }, controller.args[0], "btnCancelsearch"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancelsearch"), extendConfig({}, controller.args[2], "btnCancelsearch"));
        var flxImgSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "20px",
            "id": "flxImgSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10px",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "20px",
            "zIndex": 100
        }, controller.args[0], "flxImgSearch"), extendConfig({}, controller.args[1], "flxImgSearch"), extendConfig({}, controller.args[2], "flxImgSearch"));
        flxImgSearch.setDefaultUnit(kony.flex.DP);
        var imgSearchMob = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgSearchMob",
            "isVisible": true,
            "skin": "slImage",
            "src": "search_1.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "imgSearchMob"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearchMob"), extendConfig({}, controller.args[2], "imgSearchMob"));
        flxImgSearch.add(imgSearchMob);
        flxCancelAndSearch.add(btnCancelsearch, flxImgSearch);
        empHeader.add(flxUserInfo, flxLogo, empTextMoblie, flxCancelAndSearch);
        return empHeader;
    }
})