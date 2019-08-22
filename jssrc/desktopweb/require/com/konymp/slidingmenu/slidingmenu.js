define(function() {
    return function(controller) {
        var slidingmenu = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "slidingmenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_dbb3620741b04b2585320d5a7f56eb23(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 99
        }, controller.args[0], "slidingmenu"), extendConfig({}, controller.args[1], "slidingmenu"), extendConfig({}, controller.args[2], "slidingmenu"));
        slidingmenu.setDefaultUnit(kony.flex.DP);
        var flxMainSlidingMenu = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainSlidingMenu",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "-29.50%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_c45ddee936aa40d19d84291fd1b36315,
            "skin": "CopykonympsmsknFlxFFFFFF",
            "top": "0dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxMainSlidingMenu"), extendConfig({}, controller.args[1], "flxMainSlidingMenu"), extendConfig({}, controller.args[2], "flxMainSlidingMenu"));
        flxMainSlidingMenu.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "23%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30.00%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxImage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "42dp",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "37%",
            "isModalContainer": false,
            "onClick": controller.AS_onProfileClick_h0a282ca17324c44bb1e95890cf93b09,
            "skin": "slFbox",
            "top": "19.76%",
            "width": "46dp",
            "zIndex": 1
        }, controller.args[0], "flxImage"), extendConfig({}, controller.args[1], "flxImage"), extendConfig({}, controller.args[2], "flxImage"));
        flxImage.setDefaultUnit(kony.flex.PERCENTAGE);
        var imgHeader = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgHeader",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "visualizerusername_icon_1.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgHeader"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgHeader"), extendConfig({}, controller.args[2], "imgHeader"));
        flxImage.add(imgHeader);
        var lblHeaderText1 = new kony.ui.Label(extendConfig({
            "id": "lblHeaderText1",
            "isVisible": true,
            "left": "28.38%",
            "skin": "CopykonympsmsknlblSanFranciscoD1",
            "text": "Username",
            "top": "54.91%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHeaderText1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeaderText1"), extendConfig({}, controller.args[2], "lblHeaderText1"));
        var lblHeaderText2 = new kony.ui.Label(extendConfig({
            "id": "lblHeaderText2",
            "isVisible": true,
            "left": "33.60%",
            "skin": "CopykonympsmsknlblSanFranciscoD",
            "text": "Email ID",
            "textStyle": {},
            "top": "74.90%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHeaderText2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeaderText2"), extendConfig({}, controller.args[2], "lblHeaderText2"));
        flxHeader.add(flxImage, lblHeaderText1, lblHeaderText2);
        var flxMenuControl = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": true,
            "allowVerticalBounce": true,
            "bounces": false,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "62%",
            "horizontalScrollIndicator": true,
            "id": "flxMenuControl",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFbox",
            "top": "5%",
            "verticalScrollIndicator": true,
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxMenuControl"), extendConfig({}, controller.args[1], "flxMenuControl"), extendConfig({}, controller.args[2], "flxMenuControl"));
        flxMenuControl.setDefaultUnit(kony.flex.PERCENTAGE);
        var lblMenuContent = new kony.ui.Label(extendConfig({
            "centerX": "78%",
            "centerY": "34%",
            "id": "lblMenuContent",
            "isVisible": true,
            "skin": "CopykonympsmsknlblSanFranciscoD",
            "text": "Menu Options shows up here",
            "textStyle": {},
            "width": "40%",
            "zIndex": 8
        }, controller.args[0], "lblMenuContent"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMenuContent"), extendConfig({}, controller.args[2], "lblMenuContent"));
        flxMenuControl.add(lblMenuContent);
        var flxBotom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "2%",
            "clipBounds": true,
            "height": "9%",
            "id": "flxBotom",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "30%",
            "isModalContainer": false,
            "onClick": controller.AS_onFooterClick_e62614a9a84e462fad4cc8bbe1335bdf,
            "skin": "slFbox",
            "top": 0,
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "flxBotom"), extendConfig({}, controller.args[1], "flxBotom"), extendConfig({}, controller.args[2], "flxBotom"));
        flxBotom.setDefaultUnit(kony.flex.DP);
        var imgFooter = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgFooter",
            "isVisible": true,
            "left": "7%",
            "skin": "slImage",
            "src": "konymp_sm_logout_icon_1.png",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgFooter"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFooter"), extendConfig({}, controller.args[2], "imgFooter"));
        var textFooter = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "textFooter",
            "isVisible": true,
            "left": "2%",
            "skin": "CopykonympsmsknlblSanFranciscoD",
            "text": "logout",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "textFooter"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "textFooter"), extendConfig({}, controller.args[2], "textFooter"));
        flxBotom.add(imgFooter, textFooter);
        var flxBlockContext = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "62%",
            "id": "flxBlockContext",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "-73%",
            "width": "80%",
            "zIndex": 10
        }, controller.args[0], "flxBlockContext"), extendConfig({}, controller.args[1], "flxBlockContext"), extendConfig({}, controller.args[2], "flxBlockContext"));
        flxBlockContext.setDefaultUnit(kony.flex.DP);
        flxBlockContext.add();
        flxMainSlidingMenu.add(flxHeader, flxMenuControl, flxBotom, flxBlockContext);
        var flxTargetContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTargetContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopykonympsmsknFlxFFFFFFop",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxTargetContainer"), extendConfig({}, controller.args[1], "flxTargetContainer"), extendConfig({}, controller.args[2], "flxTargetContainer"));
        flxTargetContainer.setDefaultUnit(kony.flex.DP);
        var flxHamParent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7%",
            "id": "flxHamParent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_hce8d00b25ec4de1a0853d143aedac29,
            "skin": "slFbox",
            "top": "0dp",
            "width": "12%",
            "zIndex": 101
        }, controller.args[0], "flxHamParent"), extendConfig({}, controller.args[1], "flxHamParent"), extendConfig({}, controller.args[2], "flxHamParent"));
        flxHamParent.setDefaultUnit(kony.flex.DP);
        var imgHamIcon = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "25dp",
            "id": "imgHamIcon",
            "isVisible": true,
            "skin": "slImage",
            "src": "hamburger_1.png",
            "width": "25dp",
            "zIndex": 6
        }, controller.args[0], "imgHamIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgHamIcon"), extendConfig({}, controller.args[2], "imgHamIcon"));
        flxHamParent.add(imgHamIcon);
        var flxCover = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCover",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_fec3d0efa79a450489632cf6dbe3fafe,
            "skin": "CopykonympsmflxCoverSkin",
            "top": "0dp",
            "width": "100%",
            "zIndex": 99
        }, controller.args[0], "flxCover"), extendConfig({}, controller.args[1], "flxCover"), extendConfig({}, controller.args[2], "flxCover"));
        flxCover.setDefaultUnit(kony.flex.DP);
        var flxsknroundedCorner = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxsknroundedCorner",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "konympsmsknSlidingMenuRoundedCornerImage",
            "top": "0dp",
            "width": "1dp",
            "zIndex": 1
        }, controller.args[0], "flxsknroundedCorner"), extendConfig({}, controller.args[1], "flxsknroundedCorner"), extendConfig({}, controller.args[2], "flxsknroundedCorner"));
        flxsknroundedCorner.setDefaultUnit(kony.flex.DP);
        flxsknroundedCorner.add();
        var flxskncircle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxskncircle",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "konympsmSknSlidingMenuCircleImage",
            "top": "10dp",
            "width": "1dp",
            "zIndex": 1
        }, controller.args[0], "flxskncircle"), extendConfig({}, controller.args[1], "flxskncircle"), extendConfig({}, controller.args[2], "flxskncircle"));
        flxskncircle.setDefaultUnit(kony.flex.DP);
        flxskncircle.add();
        var flxfocus = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxfocus",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "CopykonympsmflxfocusSkin",
            "top": "10dp",
            "width": "1dp",
            "zIndex": 1
        }, controller.args[0], "flxfocus"), extendConfig({}, controller.args[1], "flxfocus"), extendConfig({}, controller.args[2], "flxfocus"));
        flxfocus.setDefaultUnit(kony.flex.DP);
        flxfocus.add();
        var lbl34px = new kony.ui.Label(extendConfig({
            "id": "lbl34px",
            "isVisible": false,
            "left": "66dp",
            "skin": "CopykonympsmsknlblSanFrancisco",
            "top": "217dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lbl34px"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbl34px"), extendConfig({}, controller.args[2], "lbl34px"));
        var lblnunito = new kony.ui.Label(extendConfig({
            "id": "lblnunito",
            "isVisible": false,
            "left": "76dp",
            "skin": "CopykonympsmsknlblSanFranciscoFFFFFF",
            "top": "227dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblnunito"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblnunito"), extendConfig({}, controller.args[2], "lblnunito"));
        var imgChevron = new kony.ui.Image2(extendConfig({
            "height": "1dp",
            "id": "imgChevron",
            "isVisible": false,
            "left": "73dp",
            "skin": "slImage",
            "src": "konymp_sm_chevron_right_1.png",
            "top": "244dp",
            "width": "1dp",
            "zIndex": 1
        }, controller.args[0], "imgChevron"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgChevron"), extendConfig({}, controller.args[2], "imgChevron"));
        var imgHamIconRight = new kony.ui.Image2(extendConfig({
            "height": "1dp",
            "id": "imgHamIconRight",
            "isVisible": false,
            "left": "48dp",
            "skin": "slImage",
            "src": "konymp_sm_menu_icon_right_1.png",
            "top": "300dp",
            "width": "1dp",
            "zIndex": 1
        }, controller.args[0], "imgHamIconRight"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgHamIconRight"), extendConfig({}, controller.args[2], "imgHamIconRight"));
        var lblSeparatorSkin = new kony.ui.Label(extendConfig({
            "id": "lblSeparatorSkin",
            "isVisible": false,
            "left": "126dp",
            "skin": "CopykonympsmsknlblSeparator",
            "text": "Label",
            "top": "233dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, controller.args[0], "lblSeparatorSkin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparatorSkin"), extendConfig({}, controller.args[2], "lblSeparatorSkin"));
        flxCover.add(flxsknroundedCorner, flxskncircle, flxfocus, lbl34px, lblnunito, imgChevron, imgHamIconRight, lblSeparatorSkin);
        flxTargetContainer.add(flxHamParent, flxCover);
        var lblContent = new kony.ui.Label(extendConfig({
            "centerX": "86%",
            "centerY": "50%",
            "height": "10.05%",
            "id": "lblContent",
            "isVisible": true,
            "skin": "konympsmsknlbl000",
            "text": "Drag App Content Here",
            "width": "24.06%",
            "zIndex": 8
        }, controller.args[0], "lblContent"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContent"), extendConfig({}, controller.args[2], "lblContent"));
        var flxTEMPForDynamicSkins = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxTEMPForDynamicSkins",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "63dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxTEMPForDynamicSkins"), extendConfig({}, controller.args[1], "flxTEMPForDynamicSkins"), extendConfig({}, controller.args[2], "flxTEMPForDynamicSkins"));
        flxTEMPForDynamicSkins.setDefaultUnit(kony.flex.DP);
        var imgTempForDynamicSkins = new kony.ui.Image2(extendConfig({
            "height": "150dp",
            "id": "imgTempForDynamicSkins",
            "isVisible": false,
            "left": "203dp",
            "skin": "slImage",
            "src": "imagedrag_2_1.png",
            "top": "37dp",
            "width": "150dp",
            "zIndex": 1
        }, controller.args[0], "imgTempForDynamicSkins"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgTempForDynamicSkins"), extendConfig({}, controller.args[2], "imgTempForDynamicSkins"));
        var flxDynamicSkin1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0dp",
            "id": "flxDynamicSkin1",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "konympsmSknSlidingMenuCircleImage",
            "top": "0dp",
            "width": "0%",
            "zIndex": 1
        }, controller.args[0], "flxDynamicSkin1"), extendConfig({}, controller.args[1], "flxDynamicSkin1"), extendConfig({}, controller.args[2], "flxDynamicSkin1"));
        flxDynamicSkin1.setDefaultUnit(kony.flex.DP);
        flxDynamicSkin1.add();
        var lblDynamicSkin1 = new kony.ui.Label(extendConfig({
            "id": "lblDynamicSkin1",
            "isVisible": false,
            "left": "211dp",
            "skin": "slLabel",
            "text": "Label",
            "textStyle": {},
            "top": "7dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDynamicSkin1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDynamicSkin1"), extendConfig({}, controller.args[2], "lblDynamicSkin1"));
        flxTEMPForDynamicSkins.add(imgTempForDynamicSkins, flxDynamicSkin1, lblDynamicSkin1);
        slidingmenu.add(flxMainSlidingMenu, flxTargetContainer, lblContent, flxTEMPForDynamicSkins);
        return slidingmenu;
    }
})