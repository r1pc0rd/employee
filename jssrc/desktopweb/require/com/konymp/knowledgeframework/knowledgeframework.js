define(function() {
    return function(controller) {
        var knowledgeframework = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "knowledgeframework",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 50
        }, controller.args[0], "knowledgeframework"), extendConfig({}, controller.args[1], "knowledgeframework"), extendConfig({}, controller.args[2], "knowledgeframework"));
        knowledgeframework.setDefaultUnit(kony.flex.DP);
        var flxDeveloperCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDeveloperCode",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopykonympsknFullFlex",
            "top": "0%",
            "width": "100%",
            "zIndex": 50
        }, controller.args[0], "flxDeveloperCode"), extendConfig({}, controller.args[1], "flxDeveloperCode"), extendConfig({}, controller.args[2], "flxDeveloperCode"));
        flxDeveloperCode.setDefaultUnit(kony.flex.DP);
        var flxHeadingBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxHeadingBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlx",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxHeadingBar"), extendConfig({}, controller.args[1], "flxHeadingBar"), extendConfig({}, controller.args[2], "flxHeadingBar"));
        flxHeadingBar.setDefaultUnit(kony.flex.DP);
        var flxHeading = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeading"), extendConfig({}, controller.args[1], "flxHeading"), extendConfig({}, controller.args[2], "flxHeading"));
        flxHeading.setDefaultUnit(kony.flex.DP);
        var lblHeading = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "skin": "CopykonympsknLabelHeading",
            "text": "Integration & Orchestration services",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHeading"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeading"), extendConfig({}, controller.args[2], "lblHeading"));
        flxHeading.add(lblHeading);
        var flexCloseClick = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "CopykonympslFbox",
            "height": "48dp",
            "id": "flexCloseClick",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_eacf9dd3df0244ca91e5b61dd6d913ea,
            "right": "0%",
            "skin": "CopykonympslFbox3",
            "top": "12dp",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "flexCloseClick"), extendConfig({}, controller.args[1], "flexCloseClick"), extendConfig({}, controller.args[2], "flexCloseClick"));
        flexCloseClick.setDefaultUnit(kony.flex.DP);
        var btnClose = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "13dp",
            "id": "btnClose",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "closewhite_1.png",
            "top": "21dp",
            "width": "13dp",
            "zIndex": 1
        }, controller.args[0], "btnClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnClose"), extendConfig({}, controller.args[2], "btnClose"));
        flexCloseClick.add(btnClose);
        var flexClickBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "CopykonympslFbox",
            "height": "40dp",
            "id": "flexClickBack",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_h3c069b1145b415696fabe00b508ba97,
            "skin": "CopykonympslFbox3",
            "top": "0%",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "flexClickBack"), extendConfig({}, controller.args[1], "flexClickBack"), extendConfig({}, controller.args[2], "flexClickBack"));
        flexClickBack.setDefaultUnit(kony.flex.DP);
        var btnBack = new kony.ui.Image2(extendConfig({
            "centerX": "50.00%",
            "centerY": "50.28%",
            "height": "20dp",
            "id": "btnBack",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "back_1.png",
            "top": "21dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "btnBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnBack"), extendConfig({}, controller.args[2], "btnBack"));
        flexClickBack.add(btnBack);
        flxHeadingBar.add(flxHeading, flexCloseClick, flexClickBack);
        var flxSegData = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxSegData",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopykonympsknFlx",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSegData"), extendConfig({}, controller.args[1], "flxSegData"), extendConfig({}, controller.args[2], "flxSegData"));
        flxSegData.setDefaultUnit(kony.flex.DP);
        var sgmtAPI = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "groupCells": false,
            "height": "100%",
            "id": "sgmtAPI",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_f4aba72c55a74a019f72161199eea78c,
            "pageOffDotImage": "pageoffdot_3_1.png",
            "pageOnDotImage": "pageondot_3_1.png",
            "retainSelection": false,
            "rowFocusSkin": "konympseg4",
            "rowSkin": "Copykonympseg",
            "sectionHeaderSkin": "konympsliPhoneSegmentHeader2",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "ffffff00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flexAPIs": "flexAPIs",
                "flexFreeAPI": "flexFreeAPI",
                "imgLeftAPI": "imgLeftAPI",
                "lblDummy": "lblDummy",
                "lblNameOfAPI": "lblNameOfAPI"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "sgmtAPI"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "sgmtAPI"), extendConfig({}, controller.args[2], "sgmtAPI"));
        var flxFullScreen = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": false,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100.18%",
            "horizontalScrollIndicator": true,
            "id": "flxFullScreen",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "100%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "CopykonympsknFullKnowledge",
            "top": "0dp",
            "verticalScrollIndicator": false,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFullScreen"), extendConfig({}, controller.args[1], "flxFullScreen"), extendConfig({}, controller.args[2], "flxFullScreen"));
        flxFullScreen.setDefaultUnit(kony.flex.DP);
        var flexAcc1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flexAcc1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_ebae57a728d14d38a05969aef1338c0e,
            "skin": "CopykonympsknFlexDevCode",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flexAcc1"), extendConfig({}, controller.args[1], "flexAcc1"), extendConfig({}, controller.args[2], "flexAcc1"));
        flexAcc1.setDefaultUnit(kony.flex.DP);
        var lblTitleAcc1 = new kony.ui.Label(extendConfig({
            "centerY": "50.20%",
            "height": "100%",
            "id": "lblTitleAcc1",
            "isVisible": true,
            "left": "0.00%",
            "skin": "CopykonympsknlblAccNormal",
            "text": "What's it ?",
            "textStyle": {},
            "top": "3%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblTitleAcc1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitleAcc1"), extendConfig({}, controller.args[2], "lblTitleAcc1"));
        var btnAccordian1 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "18dp",
            "id": "btnAccordian1",
            "isVisible": true,
            "left": "90%",
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "chevron_1.png",
            "top": "21dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "btnAccordian1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAccordian1"), extendConfig({}, controller.args[2], "btnAccordian1"));
        flexAcc1.add(lblTitleAcc1, btnAccordian1);
        var flexScrollDesc1 = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "70%",
            "horizontalScrollIndicator": true,
            "id": "flexScrollDesc1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "konympslFSbox",
            "top": "0%",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flexScrollDesc1"), extendConfig({}, controller.args[1], "flexScrollDesc1"), extendConfig({}, controller.args[2], "flexScrollDesc1"));
        flexScrollDesc1.setDefaultUnit(kony.flex.DP);
        var rchDesc1 = new kony.ui.RichText(extendConfig({
            "id": "rchDesc1",
            "isVisible": true,
            "left": "0%",
            "skin": "CopykonympslRichText",
            "text": "<b>INTEGRATION & ORCHESTRATION</b><br>Learn how to integrate and configure a backend integration to a rest service and then orchestrate the data response to optimize it for the mobile device using Kony MobileFabric.\n\n",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "rchDesc1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rchDesc1"), extendConfig({}, controller.args[2], "rchDesc1"));
        var flexImageVideo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "50%",
            "id": "flexImageVideo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "28dp",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "5%",
            "width": "95%",
            "zIndex": 1
        }, controller.args[0], "flexImageVideo"), extendConfig({}, controller.args[1], "flexImageVideo"), extendConfig({}, controller.args[2], "flexImageVideo"));
        flexImageVideo.setDefaultUnit(kony.flex.DP);
        var imgVideoView1 = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "imgVideoView1",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "vizmf_1.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgVideoView1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgVideoView1"), extendConfig({}, controller.args[2], "imgVideoView1"));
        var btnPlay1 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "36.36%",
            "id": "btnPlay1",
            "isVisible": true,
            "left": "120dp",
            "onClick": controller.AS_Button_a94d38979aa64fa887f5245e9ac16c27,
            "skin": "CopykonympslButtonGlossBlue",
            "top": "69dp",
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "btnPlay1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPlay1"), extendConfig({}, controller.args[2], "btnPlay1"));
        flexImageVideo.add(imgVideoView1, btnPlay1);
        var lblTitlee = new kony.ui.Label(extendConfig({
            "height": "12%",
            "id": "lblTitlee",
            "isVisible": true,
            "left": "0%",
            "textStyle": {},
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTitlee"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitlee"), extendConfig({}, controller.args[2], "lblTitlee"));
        flexScrollDesc1.add(rchDesc1, flexImageVideo, lblTitlee);
        var flexAcc2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flexAcc2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_caa7643d7ce94306b3237d4429cf9db1,
            "skin": "CopykonympsknFlexDevCode",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flexAcc2"), extendConfig({}, controller.args[1], "flexAcc2"), extendConfig({}, controller.args[2], "flexAcc2"));
        flexAcc2.setDefaultUnit(kony.flex.DP);
        var lblTitleAcc2 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblTitleAcc2",
            "isVisible": true,
            "left": "0%",
            "skin": "CopykonympsknlblAccNormal",
            "text": "How to use ?",
            "textStyle": {},
            "top": "3%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblTitleAcc2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitleAcc2"), extendConfig({}, controller.args[2], "lblTitleAcc2"));
        var btnAccordian2 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "18dp",
            "id": "btnAccordian2",
            "isVisible": true,
            "left": "90%",
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "chevron_1.png",
            "top": "21dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "btnAccordian2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAccordian2"), extendConfig({}, controller.args[2], "btnAccordian2"));
        var lblStrip1 = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblStrip1",
            "isVisible": true,
            "left": "0%",
            "skin": "CopykonympsknLabelKnowledge",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblStrip1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStrip1"), extendConfig({}, controller.args[2], "lblStrip1"));
        flexAcc2.add(lblTitleAcc2, btnAccordian2, lblStrip1);
        var flexScrollDesc2 = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "70%",
            "horizontalScrollIndicator": true,
            "id": "flexScrollDesc2",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "konympslFSbox",
            "top": "0%",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flexScrollDesc2"), extendConfig({}, controller.args[1], "flexScrollDesc2"), extendConfig({}, controller.args[2], "flexScrollDesc2"));
        flexScrollDesc2.setDefaultUnit(kony.flex.DP);
        var rchDesc2 = new kony.ui.RichText(extendConfig({
            "id": "rchDesc2",
            "isVisible": true,
            "left": "0%",
            "skin": "CopykonympslRichText",
            "text": "<b>INTEGRATION & ORCHESTRATION</b><br>Learn how to integrate and configure a backend integration to a rest service and then orchestrate the data response to optimize it for the mobile device using Kony MobileFabric.\n\n",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "rchDesc2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rchDesc2"), extendConfig({}, controller.args[2], "rchDesc2"));
        var flexImageVideo2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "50%",
            "id": "flexImageVideo2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "28dp",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "5%",
            "width": "95%",
            "zIndex": 1
        }, controller.args[0], "flexImageVideo2"), extendConfig({}, controller.args[1], "flexImageVideo2"), extendConfig({}, controller.args[2], "flexImageVideo2"));
        flexImageVideo2.setDefaultUnit(kony.flex.DP);
        var imageVideo2 = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "imageVideo2",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "vizmf_1.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imageVideo2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imageVideo2"), extendConfig({}, controller.args[2], "imageVideo2"));
        var btnPlay2 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "konympslButtonGlossRed4",
            "height": "36.36%",
            "id": "btnPlay2",
            "isVisible": true,
            "left": "120dp",
            "onClick": controller.AS_Button_eec28d7b7ac24740bcdf2adb238813f6,
            "skin": "CopykonympslButtonGlossBlue",
            "top": "69dp",
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "btnPlay2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPlay2"), extendConfig({}, controller.args[2], "btnPlay2"));
        flexImageVideo2.add(imageVideo2, btnPlay2);
        var Label0ffb83cb7a75b48 = new kony.ui.Label(extendConfig({
            "height": "12%",
            "id": "Label0ffb83cb7a75b48",
            "isVisible": true,
            "left": "0%",
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "Label0ffb83cb7a75b48"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Label0ffb83cb7a75b48"), extendConfig({}, controller.args[2], "Label0ffb83cb7a75b48"));
        flexScrollDesc2.add(rchDesc2, flexImageVideo2, Label0ffb83cb7a75b48);
        var flexAcc3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flexAcc3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_f7da2e9fb3734b149d4d0d5c94601563,
            "skin": "CopykonympsknFlexDevCode",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flexAcc3"), extendConfig({}, controller.args[1], "flexAcc3"), extendConfig({}, controller.args[2], "flexAcc3"));
        flexAcc3.setDefaultUnit(kony.flex.DP);
        var lblTitleAcc3 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblTitleAcc3",
            "isVisible": true,
            "left": "0%",
            "skin": "CopykonympsknlblAccNormal",
            "text": "Documentation Link",
            "textStyle": {},
            "top": "3%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblTitleAcc3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitleAcc3"), extendConfig({}, controller.args[2], "lblTitleAcc3"));
        var lblStrip3 = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblStrip3",
            "isVisible": true,
            "left": "0%",
            "skin": "CopykonympsknLabelKnowledge",
            "top": "98%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblStrip3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStrip3"), extendConfig({}, controller.args[2], "lblStrip3"));
        var btnAccordian3 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "18dp",
            "id": "btnAccordian3",
            "isVisible": true,
            "left": "90%",
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "chevron_1.png",
            "top": "21dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "btnAccordian3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAccordian3"), extendConfig({}, controller.args[2], "btnAccordian3"));
        var lblStrip4 = new kony.ui.Label(extendConfig({
            "bottom": "0%",
            "height": "1dp",
            "id": "lblStrip4",
            "isVisible": true,
            "left": "0%",
            "skin": "CopykonympsknLabelKnowledge",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblStrip4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStrip4"), extendConfig({}, controller.args[2], "lblStrip4"));
        flexAcc3.add(lblTitleAcc3, lblStrip3, btnAccordian3, lblStrip4);
        var flexScrollDesc3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexScrollDesc3",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_i9406b4218454c6e8c13e2c6fe0fbc3e,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flexScrollDesc3"), extendConfig({}, controller.args[1], "flexScrollDesc3"), extendConfig({}, controller.args[2], "flexScrollDesc3"));
        flexScrollDesc3.setDefaultUnit(kony.flex.DP);
        var rchDesc3 = new kony.ui.RichText(extendConfig({
            "id": "rchDesc3",
            "isVisible": true,
            "left": "0%",
            "linkSkin": "CopykonympslRichText1",
            "skin": "CopykonympslRichText",
            "text": "RichText",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "rchDesc3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rchDesc3"), extendConfig({}, controller.args[2], "rchDesc3"));
        flexScrollDesc3.add(rchDesc3);
        flxFullScreen.add(flexAcc1, flexScrollDesc1, flexAcc2, flexScrollDesc2, flexAcc3, flexScrollDesc3);
        flxSegData.add(sgmtAPI, flxFullScreen);
        flxDeveloperCode.add(flxHeadingBar, flxSegData);
        knowledgeframework.add(flxDeveloperCode);
        return knowledgeframework;
    }
})