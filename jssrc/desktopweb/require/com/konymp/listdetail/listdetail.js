define(function() {
    return function(controller) {
        var listdetail = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "listdetail",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "postShow": controller.AS_FlexContainer_afd78b7d52b04e8ab206f9fa2baf344c,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_d48faa04f64a4456b0b4afd846519a51(eventobject);
            },
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "listdetail"), extendConfig({}, controller.args[1], "listdetail"), extendConfig({}, controller.args[2], "listdetail"));
        listdetail.setDefaultUnit(kony.flex.DP);
        var flxDetailsScreen = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDetailsScreen",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "100%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxDetailsScreen1",
            "top": "0%",
            "width": "100%",
            "zIndex": 12
        }, controller.args[0], "flxDetailsScreen"), extendConfig({}, controller.args[1], "flxDetailsScreen"), extendConfig({}, controller.args[2], "flxDetailsScreen"));
        flxDetailsScreen.setDefaultUnit(kony.flex.DP);
        var flxDetailsHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "42.25%",
            "id": "flxDetailsHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_f6df64dd64f74897b5e5222b966ca473,
            "skin": "Copykonympmflex",
            "top": "0%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxDetailsHeader"), extendConfig({}, controller.args[1], "flxDetailsHeader"), extendConfig({}, controller.args[2], "flxDetailsHeader"));
        flxDetailsHeader.setDefaultUnit(kony.flex.DP);
        var flxHeaderBar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flxHeaderBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxHeaderBar"), extendConfig({}, controller.args[1], "flxHeaderBar"), extendConfig({}, controller.args[2], "flxHeaderBar"));
        flxHeaderBar.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgBack",
            "isVisible": true,
            "left": "3%",
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "arrow_left_white_icon_1.png",
            "top": "25%",
            "width": "30dp",
            "zIndex": 3
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        var btnBack = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympbtn1",
            "height": "100%",
            "id": "btnBack",
            "isVisible": true,
            "left": "1%",
            "onClick": controller.AS_Button_g77a2744b51f4489b1c8a1bd18fdbcc8,
            "skin": "CopykonympsknBtnInVisible",
            "top": "0%",
            "width": "12%",
            "zIndex": 4
        }, controller.args[0], "btnBack"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnBack"), extendConfig({}, controller.args[2], "btnBack"));
        flxHeaderBar.add(imgBack, btnBack);
        var flxEmployeeName = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35.40%",
            "id": "flxEmployeeName",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "Copykonympbeforeanim",
            "top": "64.60%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxEmployeeName"), extendConfig({}, controller.args[1], "flxEmployeeName"), extendConfig({}, controller.args[2], "flxEmployeeName"));
        flxEmployeeName.setDefaultUnit(kony.flex.DP);
        flxEmployeeName.add();
        var flxEmployeeProfilePic = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "23.40%",
            "centerX": "50%",
            "clipBounds": false,
            "height": "38%",
            "id": "flxEmployeeProfilePic",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "28%",
            "zIndex": 3
        }, controller.args[0], "flxEmployeeProfilePic"), extendConfig({}, controller.args[1], "flxEmployeeProfilePic"), extendConfig({}, controller.args[2], "flxEmployeeProfilePic"));
        flxEmployeeProfilePic.setDefaultUnit(kony.flex.DP);
        var flxImageHolder = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxImageHolder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxImageHolder",
            "top": "0%",
            "width": "100%",
            "zIndex": 6
        }, controller.args[0], "flxImageHolder"), extendConfig({}, controller.args[1], "flxImageHolder"), extendConfig({}, controller.args[2], "flxImageHolder"));
        flxImageHolder.setDefaultUnit(kony.flex.DP);
        var imgEmployee = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgEmployee",
            "imageWhileDownloading": "cover_1.png",
            "isVisible": true,
            "left": "0%",
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "user_profile2.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgEmployee"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgEmployee"), extendConfig({}, controller.args[2], "imgEmployee"));
        flxImageHolder.add(imgEmployee);
        var flxOnline = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "5%",
            "clipBounds": true,
            "height": "17%",
            "id": "flxOnline",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "7%",
            "skin": "CopykonympsknFlxOnline",
            "width": "17%",
            "zIndex": 8
        }, controller.args[0], "flxOnline"), extendConfig({}, controller.args[1], "flxOnline"), extendConfig({}, controller.args[2], "flxOnline"));
        flxOnline.setDefaultUnit(kony.flex.DP);
        var lblInvisible = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblInvisible",
            "isVisible": true,
            "left": "0%",
            "skin": "CopykonympsknLblOnline",
            "textStyle": {},
            "top": "0%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "lblInvisible"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblInvisible"), extendConfig({}, controller.args[2], "lblInvisible"));
        flxOnline.add(lblInvisible);
        flxEmployeeProfilePic.add(flxImageHolder, flxOnline);
        var FlxBackGround = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "FlxBackGround",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopykonympsknDarkHeaderBg",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "FlxBackGround"), extendConfig({}, controller.args[1], "FlxBackGround"), extendConfig({}, controller.args[2], "FlxBackGround"));
        FlxBackGround.setDefaultUnit(kony.flex.DP);
        var imgCover = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgCover",
            "imageWhenFailed": "profile_1.png",
            "imageWhileDownloading": "arrow_left_white_icon_1.png",
            "isVisible": true,
            "left": "0%",
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "imagedrag_1_1.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "imgCover"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCover"), extendConfig({}, controller.args[2], "imgCover"));
        FlxBackGround.add(imgCover);
        var flxWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18%",
            "id": "flxWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "78%",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxWrapper"), extendConfig({}, controller.args[1], "flxWrapper"), extendConfig({}, controller.args[2], "flxWrapper"));
        flxWrapper.setDefaultUnit(kony.flex.DP);
        var lblEmployeeName = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "44.40%",
            "id": "lblEmployeeName",
            "isVisible": true,
            "skin": "Copykonympbelabel",
            "text": "Alfred Kevin",
            "textStyle": {},
            "top": "0%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "lblEmployeeName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmployeeName"), extendConfig({}, controller.args[2], "lblEmployeeName"));
        var lblEmployeeDesignation = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "55.60%",
            "id": "lblEmployeeDesignation",
            "isVisible": true,
            "skin": "Copykonympbdlabel",
            "text": "program manager",
            "textStyle": {},
            "top": "44.40%",
            "width": "80%",
            "zIndex": 2
        }, controller.args[0], "lblEmployeeDesignation"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmployeeDesignation"), extendConfig({}, controller.args[2], "lblEmployeeDesignation"));
        flxWrapper.add(lblEmployeeName, lblEmployeeDesignation);
        flxDetailsHeader.add(flxHeaderBar, flxEmployeeName, flxEmployeeProfilePic, FlxBackGround, flxWrapper);
        var flxBody = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxBody",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "42.25%",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxBody"), extendConfig({}, controller.args[1], "flxBody"), extendConfig({}, controller.args[2], "flxBody"));
        flxBody.setDefaultUnit(kony.flex.DP);
        var flxCategory = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxCategory",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxF",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxCategory"), extendConfig({}, controller.args[1], "flxCategory"), extendConfig({}, controller.args[2], "flxCategory"));
        flxCategory.setDefaultUnit(kony.flex.DP);
        var flxCategorySeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxCategorySeparator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopykonympsknFlxA",
            "width": "0.20%",
            "zIndex": 2
        }, controller.args[0], "flxCategorySeparator"), extendConfig({}, controller.args[1], "flxCategorySeparator"), extendConfig({}, controller.args[2], "flxCategorySeparator"));
        flxCategorySeparator.setDefaultUnit(kony.flex.DP);
        flxCategorySeparator.add();
        var btnCategoryDetails = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympbtn2",
            "height": "95%",
            "id": "btnCategoryDetails",
            "isVisible": true,
            "left": "0%",
            "skin": "Copykonympbtn",
            "text": "Details",
            "top": "0%",
            "width": "50%",
            "zIndex": 2
        }, controller.args[0], "btnCategoryDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCategoryDetails"), extendConfig({}, controller.args[2], "btnCategoryDetails"));
        var btnCategoryHierarchy = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympbtn2",
            "height": "95%",
            "id": "btnCategoryHierarchy",
            "isVisible": true,
            "right": "0%",
            "skin": "Copykonympbtn3",
            "text": "Hierarchy",
            "top": "0%",
            "width": "50%",
            "zIndex": 2
        }, controller.args[0], "btnCategoryHierarchy"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCategoryHierarchy"), extendConfig({}, controller.args[2], "btnCategoryHierarchy"));
        var lblDetailsColor = new kony.ui.Label(extendConfig({
            "bottom": "0%",
            "height": "4%",
            "id": "lblDetailsColor",
            "isVisible": true,
            "left": "0%",
            "skin": "Copykonympcolorvis",
            "textStyle": {},
            "width": "50%",
            "zIndex": 2
        }, controller.args[0], "lblDetailsColor"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsColor"), extendConfig({}, controller.args[2], "lblDetailsColor"));
        var flxCategoryLineThin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1%",
            "id": "flxCategoryLineThin",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxA",
            "top": "99%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxCategoryLineThin"), extendConfig({}, controller.args[1], "flxCategoryLineThin"), extendConfig({}, controller.args[2], "flxCategoryLineThin"));
        flxCategoryLineThin.setDefaultUnit(kony.flex.DP);
        flxCategoryLineThin.add();
        flxCategory.add(flxCategorySeparator, btnCategoryDetails, btnCategoryHierarchy, lblDetailsColor, flxCategoryLineThin);
        var flxShadowLine = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "3%",
            "id": "flxShadowLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknShadowDivider",
            "top": "0%",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxShadowLine"), extendConfig({}, controller.args[1], "flxShadowLine"), extendConfig({}, controller.args[2], "flxShadowLine"));
        flxShadowLine.setDefaultUnit(kony.flex.DP);
        flxShadowLine.add();
        var flxScrollDetails = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": false,
            "clipBounds": false,
            "enableScrolling": false,
            "height": "88%",
            "horizontalScrollIndicator": true,
            "id": "flxScrollDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "CopykonympsknSrclFAFAF",
            "top": "0%",
            "verticalScrollIndicator": false,
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxScrollDetails"), extendConfig({}, controller.args[1], "flxScrollDetails"), extendConfig({}, controller.args[2], "flxScrollDetails"));
        flxScrollDetails.setDefaultUnit(kony.flex.DP);
        var callMobileFlex = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "callMobileFlex",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "1%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "callMobileFlex"), extendConfig({}, controller.args[1], "callMobileFlex"), extendConfig({}, controller.args[2], "callMobileFlex"));
        callMobileFlex.setDefaultUnit(kony.flex.DP);
        var lblCallMobile = new kony.ui.Label(extendConfig({
            "id": "lblCallMobile",
            "isVisible": true,
            "left": "7%",
            "skin": "Copykonympmajortitle",
            "text": "CALL MOBILE",
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblCallMobile"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCallMobile"), extendConfig({}, controller.args[2], "lblCallMobile"));
        var lblCallMobileValue = new kony.ui.Label(extendConfig({
            "id": "lblCallMobileValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopykonympkonympslLabel",
            "text": "9876543210",
            "textStyle": {},
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCallMobileValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCallMobileValue"), extendConfig({}, controller.args[2], "lblCallMobileValue"));
        var flxLine1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxA",
            "width": "86%",
            "zIndex": 2
        }, controller.args[0], "flxLine1"), extendConfig({}, controller.args[1], "flxLine1"), extendConfig({}, controller.args[2], "flxLine1"));
        flxLine1.setDefaultUnit(kony.flex.DP);
        flxLine1.add();
        var flxMobileImageHolder = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "60%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxMobileImageHolder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_b147835de3ec49aa950dd7e2163ca033,
            "right": "4%",
            "skin": "konympkonympslFbox5",
            "width": "20dp",
            "zIndex": 2
        }, controller.args[0], "flxMobileImageHolder"), extendConfig({}, controller.args[1], "flxMobileImageHolder"), extendConfig({}, controller.args[2], "flxMobileImageHolder"));
        flxMobileImageHolder.setDefaultUnit(kony.flex.DP);
        var imgMobile = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgMobile",
            "isVisible": true,
            "src": "listphone_1.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgMobile"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgMobile"), extendConfig({}, controller.args[2], "imgMobile"));
        flxMobileImageHolder.add(imgMobile);
        callMobileFlex.add(lblCallMobile, lblCallMobileValue, flxLine1, flxMobileImageHolder);
        var callWorkFlex = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "callWorkFlex",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "callWorkFlex"), extendConfig({}, controller.args[1], "callWorkFlex"), extendConfig({}, controller.args[2], "callWorkFlex"));
        callWorkFlex.setDefaultUnit(kony.flex.DP);
        var lblCallWork = new kony.ui.Label(extendConfig({
            "id": "lblCallWork",
            "isVisible": true,
            "left": "7%",
            "skin": "Copykonympmajortitle",
            "text": "CALL WORK",
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblCallWork"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCallWork"), extendConfig({}, controller.args[2], "lblCallWork"));
        var lblCallWorkValue = new kony.ui.Label(extendConfig({
            "id": "lblCallWorkValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopykonympkonympslLabel",
            "text": "040-12345678",
            "textStyle": {},
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCallWorkValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCallWorkValue"), extendConfig({}, controller.args[2], "lblCallWorkValue"));
        var flxLine2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxA",
            "width": "86%",
            "zIndex": 2
        }, controller.args[0], "flxLine2"), extendConfig({}, controller.args[1], "flxLine2"), extendConfig({}, controller.args[2], "flxLine2"));
        flxLine2.setDefaultUnit(kony.flex.DP);
        flxLine2.add();
        var flxWorkImageHolder = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "60%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxWorkImageHolder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_de06731104394227b49eb2c2c460dd21,
            "right": "4%",
            "skin": "konympkonympslFbox5",
            "width": "20dp",
            "zIndex": 2
        }, controller.args[0], "flxWorkImageHolder"), extendConfig({}, controller.args[1], "flxWorkImageHolder"), extendConfig({}, controller.args[2], "flxWorkImageHolder"));
        flxWorkImageHolder.setDefaultUnit(kony.flex.DP);
        var imgWork = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgWork",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "listphone_1.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgWork"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgWork"), extendConfig({}, controller.args[2], "imgWork"));
        flxWorkImageHolder.add(imgWork);
        callWorkFlex.add(lblCallWork, lblCallWorkValue, flxLine2, flxWorkImageHolder);
        var emailFlex = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "emailFlex",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "emailFlex"), extendConfig({}, controller.args[1], "emailFlex"), extendConfig({}, controller.args[2], "emailFlex"));
        emailFlex.setDefaultUnit(kony.flex.DP);
        var lblEmail = new kony.ui.Label(extendConfig({
            "id": "lblEmail",
            "isVisible": true,
            "left": "7%",
            "skin": "Copykonympmajortitle",
            "text": "EMAIL",
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblEmail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmail"), extendConfig({}, controller.args[2], "lblEmail"));
        var lblEmailValue = new kony.ui.Label(extendConfig({
            "id": "lblEmailValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopykonympkonympslLabel",
            "text": "bala.carcharla@kony.com",
            "textStyle": {},
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEmailValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmailValue"), extendConfig({}, controller.args[2], "lblEmailValue"));
        var flxLine3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxA",
            "width": "86%",
            "zIndex": 2
        }, controller.args[0], "flxLine3"), extendConfig({}, controller.args[1], "flxLine3"), extendConfig({}, controller.args[2], "flxLine3"));
        flxLine3.setDefaultUnit(kony.flex.DP);
        flxLine3.add();
        var flxEmailHolder = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "60%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxEmailHolder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_eb1809bad585436bb641f6f20bd92dec,
            "right": "4%",
            "skin": "konympkonympslFbox5",
            "width": "20dp",
            "zIndex": 2
        }, controller.args[0], "flxEmailHolder"), extendConfig({}, controller.args[1], "flxEmailHolder"), extendConfig({}, controller.args[2], "flxEmailHolder"));
        flxEmailHolder.setDefaultUnit(kony.flex.DP);
        var imgEmail = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgEmail",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "mailicon_1.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgEmail"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgEmail"), extendConfig({}, controller.args[2], "imgEmail"));
        flxEmailHolder.add(imgEmail);
        emailFlex.add(lblEmail, lblEmailValue, flxLine3, flxEmailHolder);
        var departmentFlex = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "departmentFlex",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "departmentFlex"), extendConfig({}, controller.args[1], "departmentFlex"), extendConfig({}, controller.args[2], "departmentFlex"));
        departmentFlex.setDefaultUnit(kony.flex.DP);
        var lblDepartment = new kony.ui.Label(extendConfig({
            "id": "lblDepartment",
            "isVisible": true,
            "left": "7%",
            "skin": "Copykonympmajortitle",
            "text": "DEPARTMENT",
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblDepartment"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDepartment"), extendConfig({}, controller.args[2], "lblDepartment"));
        var lblDepartmentValue = new kony.ui.Label(extendConfig({
            "id": "lblDepartmentValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopykonympkonympslLabel",
            "text": "Release Management",
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDepartmentValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDepartmentValue"), extendConfig({}, controller.args[2], "lblDepartmentValue"));
        var flxLine4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxA",
            "top": "15dp",
            "width": "86%",
            "zIndex": 2
        }, controller.args[0], "flxLine4"), extendConfig({}, controller.args[1], "flxLine4"), extendConfig({}, controller.args[2], "flxLine4"));
        flxLine4.setDefaultUnit(kony.flex.DP);
        flxLine4.add();
        departmentFlex.add(lblDepartment, lblDepartmentValue, flxLine4);
        var reportingToFlex = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "reportingToFlex",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "reportingToFlex"), extendConfig({}, controller.args[1], "reportingToFlex"), extendConfig({}, controller.args[2], "reportingToFlex"));
        reportingToFlex.setDefaultUnit(kony.flex.DP);
        var lblReportingTo = new kony.ui.Label(extendConfig({
            "id": "lblReportingTo",
            "isVisible": true,
            "left": "7%",
            "skin": "Copykonympmajortitle",
            "text": "REPORTING TO",
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblReportingTo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReportingTo"), extendConfig({}, controller.args[2], "lblReportingTo"));
        var lblReportingToValue = new kony.ui.Label(extendConfig({
            "id": "lblReportingToValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopykonympkonympslLabel",
            "text": "Dave Shrink",
            "textStyle": {},
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReportingToValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReportingToValue"), extendConfig({}, controller.args[2], "lblReportingToValue"));
        var flxLine5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxA",
            "width": "86%",
            "zIndex": 2
        }, controller.args[0], "flxLine5"), extendConfig({}, controller.args[1], "flxLine5"), extendConfig({}, controller.args[2], "flxLine5"));
        flxLine5.setDefaultUnit(kony.flex.DP);
        flxLine5.add();
        var flxImageReportingManagerHolder = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "60%",
            "clipBounds": true,
            "height": "32dp",
            "id": "flxImageReportingManagerHolder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "84%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxRoundNoBorder",
            "width": "32dp",
            "zIndex": 2
        }, controller.args[0], "flxImageReportingManagerHolder"), extendConfig({}, controller.args[1], "flxImageReportingManagerHolder"), extendConfig({}, controller.args[2], "flxImageReportingManagerHolder"));
        flxImageReportingManagerHolder.setDefaultUnit(kony.flex.DP);
        var imgReportingTo = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgReportingTo",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "me_1.png",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "imgReportingTo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgReportingTo"), extendConfig({}, controller.args[2], "imgReportingTo"));
        flxImageReportingManagerHolder.add(imgReportingTo);
        reportingToFlex.add(lblReportingTo, lblReportingToValue, flxLine5, flxImageReportingManagerHolder);
        var locationFlex = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "locationFlex",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "locationFlex"), extendConfig({}, controller.args[1], "locationFlex"), extendConfig({}, controller.args[2], "locationFlex"));
        locationFlex.setDefaultUnit(kony.flex.DP);
        var lblLocation = new kony.ui.Label(extendConfig({
            "id": "lblLocation",
            "isVisible": true,
            "left": "7%",
            "skin": "Copykonympmajortitle",
            "text": "LOCATION",
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblLocation"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLocation"), extendConfig({}, controller.args[2], "lblLocation"));
        var lblLocationValue = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblLocationValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopykonympkonympslLabel",
            "text": "7th floor,phoenix infocity",
            "textStyle": {},
            "top": "10%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblLocationValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLocationValue"), extendConfig({}, controller.args[2], "lblLocationValue"));
        var flxLine6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxA",
            "width": "86%",
            "zIndex": 2
        }, controller.args[0], "flxLine6"), extendConfig({}, controller.args[1], "flxLine6"), extendConfig({}, controller.args[2], "flxLine6"));
        flxLine6.setDefaultUnit(kony.flex.DP);
        flxLine6.add();
        var flxMapHolder = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "60%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxMapHolder",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "4%",
            "skin": "konympkonympslFbox5",
            "width": "20dp",
            "zIndex": 2
        }, controller.args[0], "flxMapHolder"), extendConfig({}, controller.args[1], "flxMapHolder"), extendConfig({}, controller.args[2], "flxMapHolder"));
        flxMapHolder.setDefaultUnit(kony.flex.DP);
        var imgLocation = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgLocation",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "mappin_1.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgLocation"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLocation"), extendConfig({}, controller.args[2], "imgLocation"));
        flxMapHolder.add(imgLocation);
        locationFlex.add(lblLocation, lblLocationValue, flxLine6, flxMapHolder);
        var wksFlex = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "wksFlex",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "wksFlex"), extendConfig({}, controller.args[1], "wksFlex"), extendConfig({}, controller.args[2], "wksFlex"));
        wksFlex.setDefaultUnit(kony.flex.DP);
        var lblWKS = new kony.ui.Label(extendConfig({
            "id": "lblWKS",
            "isVisible": true,
            "left": "7%",
            "skin": "Copykonympmajortitle",
            "text": "WKS",
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblWKS"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWKS"), extendConfig({}, controller.args[2], "lblWKS"));
        var lblWKSValue = new kony.ui.Label(extendConfig({
            "id": "lblWKSValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopykonympkonympslLabel",
            "text": "D7-132",
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblWKSValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWKSValue"), extendConfig({}, controller.args[2], "lblWKSValue"));
        var flxLine7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxA",
            "top": "15dp",
            "width": "86%",
            "zIndex": 2
        }, controller.args[0], "flxLine7"), extendConfig({}, controller.args[1], "flxLine7"), extendConfig({}, controller.args[2], "flxLine7"));
        flxLine7.setDefaultUnit(kony.flex.DP);
        flxLine7.add();
        wksFlex.add(lblWKS, lblWKSValue, flxLine7);
        var empFlex = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "empFlex",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "empFlex"), extendConfig({}, controller.args[1], "empFlex"), extendConfig({}, controller.args[2], "empFlex"));
        empFlex.setDefaultUnit(kony.flex.DP);
        var lblEmpType = new kony.ui.Label(extendConfig({
            "id": "lblEmpType",
            "isVisible": true,
            "left": "7%",
            "skin": "Copykonympmajortitle",
            "text": "EMP TYPE",
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblEmpType"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmpType"), extendConfig({}, controller.args[2], "lblEmpType"));
        var lblEmpTypeValue = new kony.ui.Label(extendConfig({
            "id": "lblEmpTypeValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopykonympkonympslLabel",
            "text": "Customer Facing",
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEmpTypeValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmpTypeValue"), extendConfig({}, controller.args[2], "lblEmpTypeValue"));
        var flxLine8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxA",
            "top": "15dp",
            "width": "86%",
            "zIndex": 2
        }, controller.args[0], "flxLine8"), extendConfig({}, controller.args[1], "flxLine8"), extendConfig({}, controller.args[2], "flxLine8"));
        flxLine8.setDefaultUnit(kony.flex.DP);
        flxLine8.add();
        empFlex.add(lblEmpType, lblEmpTypeValue, flxLine8);
        var skypeFlex = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "skypeFlex",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "skypeFlex"), extendConfig({}, controller.args[1], "skypeFlex"), extendConfig({}, controller.args[2], "skypeFlex"));
        skypeFlex.setDefaultUnit(kony.flex.DP);
        var lblSkype = new kony.ui.Label(extendConfig({
            "id": "lblSkype",
            "isVisible": true,
            "left": "7%",
            "skin": "Copykonympmajortitle",
            "text": "SKYPE",
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblSkype"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSkype"), extendConfig({}, controller.args[2], "lblSkype"));
        var lblSkypeValue = new kony.ui.Label(extendConfig({
            "id": "lblSkypeValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopykonympkonympslLabel",
            "text": "bala.carcharla",
            "textStyle": {},
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSkypeValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSkypeValue"), extendConfig({}, controller.args[2], "lblSkypeValue"));
        var flxLine9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine9",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxA",
            "width": "86%",
            "zIndex": 2
        }, controller.args[0], "flxLine9"), extendConfig({}, controller.args[1], "flxLine9"), extendConfig({}, controller.args[2], "flxLine9"));
        flxLine9.setDefaultUnit(kony.flex.DP);
        flxLine9.add();
        var flxSkypeImageHolder = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "60%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxSkypeImageHolder",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "4%",
            "skin": "konympkonympslFbox5",
            "width": "20dp",
            "zIndex": 2
        }, controller.args[0], "flxSkypeImageHolder"), extendConfig({}, controller.args[1], "flxSkypeImageHolder"), extendConfig({}, controller.args[2], "flxSkypeImageHolder"));
        flxSkypeImageHolder.setDefaultUnit(kony.flex.DP);
        var imgSkype = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgSkype",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "listskypeicon_1.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgSkype"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSkype"), extendConfig({}, controller.args[2], "imgSkype"));
        flxSkypeImageHolder.add(imgSkype);
        skypeFlex.add(lblSkype, lblSkypeValue, flxLine9, flxSkypeImageHolder);
        var addressFlex = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "addressFlex",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0.00%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0.00%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "addressFlex"), extendConfig({}, controller.args[1], "addressFlex"), extendConfig({}, controller.args[2], "addressFlex"));
        addressFlex.setDefaultUnit(kony.flex.DP);
        var lblAddress = new kony.ui.Label(extendConfig({
            "id": "lblAddress",
            "isVisible": true,
            "left": "7%",
            "skin": "Copykonympmajortitle",
            "text": "ADDRESS",
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblAddress"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddress"), extendConfig({}, controller.args[2], "lblAddress"));
        var lblAddressValue = new kony.ui.Label(extendConfig({
            "id": "lblAddressValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopykonympkonympslLabel",
            "text": "Baseball, Cycling, Surfing, Birdwatching, Travelling, Photography, Golfing",
            "textStyle": {},
            "top": "15dp",
            "width": "86%",
            "zIndex": 1
        }, controller.args[0], "lblAddressValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressValue"), extendConfig({}, controller.args[2], "lblAddressValue"));
        var flxLine10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine10",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxA",
            "top": "15dp",
            "width": "86%",
            "zIndex": 2
        }, controller.args[0], "flxLine10"), extendConfig({}, controller.args[1], "flxLine10"), extendConfig({}, controller.args[2], "flxLine10"));
        flxLine10.setDefaultUnit(kony.flex.DP);
        flxLine10.add();
        addressFlex.add(lblAddress, lblAddressValue, flxLine10);
        var timezoneFlex = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "timezoneFlex",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "timezoneFlex"), extendConfig({}, controller.args[1], "timezoneFlex"), extendConfig({}, controller.args[2], "timezoneFlex"));
        timezoneFlex.setDefaultUnit(kony.flex.DP);
        var lblTimeZone = new kony.ui.Label(extendConfig({
            "id": "lblTimeZone",
            "isVisible": true,
            "left": "7%",
            "skin": "Copykonympmajortitle",
            "text": "TIME ZONE",
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblTimeZone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTimeZone"), extendConfig({}, controller.args[2], "lblTimeZone"));
        var lblTimeZoneValue = new kony.ui.Label(extendConfig({
            "id": "lblTimeZoneValue",
            "isVisible": true,
            "left": "7.00%",
            "skin": "CopykonympkonympslLabel",
            "text": "IST + 5.30",
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTimeZoneValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTimeZoneValue"), extendConfig({}, controller.args[2], "lblTimeZoneValue"));
        var flxLine11 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine11",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxA",
            "top": "15dp",
            "width": "86%",
            "zIndex": 2
        }, controller.args[0], "flxLine11"), extendConfig({}, controller.args[1], "flxLine11"), extendConfig({}, controller.args[2], "flxLine11"));
        flxLine11.setDefaultUnit(kony.flex.DP);
        flxLine11.add();
        timezoneFlex.add(lblTimeZone, lblTimeZoneValue, flxLine11);
        var groupsFlex = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "groupsFlex",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "groupsFlex"), extendConfig({}, controller.args[1], "groupsFlex"), extendConfig({}, controller.args[2], "groupsFlex"));
        groupsFlex.setDefaultUnit(kony.flex.DP);
        var lblGroups = new kony.ui.Label(extendConfig({
            "id": "lblGroups",
            "isVisible": true,
            "left": "7%",
            "skin": "Copykonympmajortitle",
            "text": "GROUPS",
            "textStyle": {},
            "top": 10,
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblGroups"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblGroups"), extendConfig({}, controller.args[2], "lblGroups"));
        var lblGroupsValue = new kony.ui.Label(extendConfig({
            "id": "lblGroupsValue",
            "isVisible": true,
            "left": "7%",
            "skin": "CopykonympkonympslLabel",
            "text": "Cycling,Trecking and Adventure",
            "textStyle": {},
            "top": "15dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblGroupsValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblGroupsValue"), extendConfig({}, controller.args[2], "lblGroupsValue"));
        var flxLine12 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine12",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxA",
            "top": "15dp",
            "width": "86%",
            "zIndex": 2
        }, controller.args[0], "flxLine12"), extendConfig({}, controller.args[1], "flxLine12"), extendConfig({}, controller.args[2], "flxLine12"));
        flxLine12.setDefaultUnit(kony.flex.DP);
        flxLine12.add();
        groupsFlex.add(lblGroups, lblGroupsValue, flxLine12);
        flxScrollDetails.add(callMobileFlex, callWorkFlex, emailFlex, departmentFlex, reportingToFlex, locationFlex, wksFlex, empFlex, skypeFlex, addressFlex, timezoneFlex, groupsFlex);
        var flxScrollHierarchy = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": false,
            "clipBounds": true,
            "enableScrolling": false,
            "height": "88%",
            "horizontalScrollIndicator": true,
            "id": "flxScrollHierarchy",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "100%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "CopykonympsknSrclFAFAF",
            "top": "12%",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxScrollHierarchy"), extendConfig({}, controller.args[1], "flxScrollHierarchy"), extendConfig({}, controller.args[2], "flxScrollHierarchy"));
        flxScrollHierarchy.setDefaultUnit(kony.flex.DP);
        flxScrollHierarchy.add();
        flxBody.add(flxCategory, flxShadowLine, flxScrollDetails, flxScrollHierarchy);
        flxDetailsScreen.add(flxDetailsHeader, flxBody);
        var flxListScreen = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxListScreen",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympContentMenuClosed",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxListScreen"), extendConfig({}, controller.args[1], "flxListScreen"), extendConfig({}, controller.args[2], "flxListScreen"));
        flxListScreen.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknDarkHeaderBg",
            "top": "0%",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var lblHeader = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "40%",
            "id": "lblHeader",
            "isVisible": true,
            "skin": "Copykonympdirectoryheadlabelskin",
            "text": "Directory",
            "textStyle": {},
            "top": "6%",
            "width": "65%"
        }, controller.args[0], "lblHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeader"), extendConfig({}, controller.args[2], "lblHeader"));
        var flxMenu = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "37%",
            "id": "flxMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "5%",
            "width": "12%",
            "zIndex": 3
        }, controller.args[0], "flxMenu"), extendConfig({}, controller.args[1], "flxMenu"), extendConfig({}, controller.args[2], "flxMenu"));
        flxMenu.setDefaultUnit(kony.flex.DP);
        var btnMenu = new kony.ui.Button(extendConfig({
            "focusSkin": "CopykonympsknBtnInVisible",
            "height": "100%",
            "id": "btnMenu",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_leftMenuClick_c1c4db38103244dcb79bbff5946598b1,
            "skin": "CopykonympsknBtnInVisible",
            "top": "0%",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "btnMenu"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnMenu"), extendConfig({}, controller.args[2], "btnMenu"));
        var imgMenu = new kony.ui.Image2(extendConfig({
            "bottom": 0,
            "centerX": "50%",
            "centerY": "50%",
            "height": "24dp",
            "id": "imgMenu",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "menu_icon_1.png",
            "width": "24dp",
            "zIndex": 1
        }, controller.args[0], "imgMenu"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgMenu"), extendConfig({}, controller.args[2], "imgMenu"));
        flxMenu.add(btnMenu, imgMenu);
        var flxFilter = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "37%",
            "id": "flxFilter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "88%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "5%",
            "width": "12%",
            "zIndex": 3
        }, controller.args[0], "flxFilter"), extendConfig({}, controller.args[1], "flxFilter"), extendConfig({}, controller.args[2], "flxFilter"));
        flxFilter.setDefaultUnit(kony.flex.DP);
        var btnFilter = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "CopykonympsknBtnInVisible",
            "height": "100%",
            "id": "btnFilter",
            "isVisible": true,
            "onClick": controller.AS_rightMenuClick_b2c5de3cc5f048359b99d3036fceae30,
            "skin": "CopykonympsknBtnInVisible",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "btnFilter"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFilter"), extendConfig({}, controller.args[2], "btnFilter"));
        var imgFilter = new kony.ui.Image2(extendConfig({
            "bottom": 0,
            "centerX": "50%",
            "centerY": "50%",
            "height": "24dp",
            "id": "imgFilter",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "filter_icon_1.png",
            "width": "24dp",
            "zIndex": 1
        }, controller.args[0], "imgFilter"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFilter"), extendConfig({}, controller.args[2], "imgFilter"));
        flxFilter.add(btnFilter, imgFilter);
        var flxSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "26%",
            "id": "flxSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "konympkonympslFbox5",
            "top": "56%",
            "width": "90.80%",
            "zIndex": 1
        }, controller.args[0], "flxSearch"), extendConfig({}, controller.args[1], "flxSearch"), extendConfig({}, controller.args[2], "flxSearch"));
        flxSearch.setDefaultUnit(kony.flex.DP);
        var tbxSearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "Copykonymprealsearch",
            "height": "100%",
            "id": "tbxSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "onDone": controller.AS_TextField_j328ffcea9224964ae7d5ff055623688,
            "onTextChange": controller.AS_TextField_dac994a052e5468e9f5e33a6c4e423e6,
            "onTouchStart": controller.AS_TextField_ged422dc471e41628e8c11033e545a63,
            "secureTextEntry": false,
            "skin": "Copykonymprealsearch",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "tbxSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxSearch"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "Copykonymprealsearch"
        }, controller.args[2], "tbxSearch"));
        var imgSearchCenter = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "17dp",
            "id": "imgSearchCenter",
            "isVisible": true,
            "left": "43%",
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "search_2.png",
            "width": "17dp",
            "zIndex": 2
        }, controller.args[0], "imgSearchCenter"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearchCenter"), extendConfig({}, controller.args[2], "imgSearchCenter"));
        var lblSearchPlaceholder = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "90%",
            "id": "lblSearchPlaceholder",
            "isVisible": true,
            "left": "49%",
            "skin": "CopykonympslLabel",
            "text": "Search",
            "textStyle": {},
            "width": "20%",
            "zIndex": 3
        }, controller.args[0], "lblSearchPlaceholder"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSearchPlaceholder"), extendConfig({}, controller.args[2], "lblSearchPlaceholder"));
        var imgSearchLeft = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "17dp",
            "id": "imgSearchLeft",
            "isVisible": false,
            "left": "3%",
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "search_2.png",
            "width": "17dp",
            "zIndex": 2
        }, controller.args[0], "imgSearchLeft"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearchLeft"), extendConfig({}, controller.args[2], "imgSearchLeft"));
        var btnSearchCancel = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "Copykonympendcancel",
            "height": "90%",
            "id": "btnSearchCancel",
            "isVisible": false,
            "onClick": controller.AS_Button_bb359a0eaa85462785e865cfc2d01417,
            "right": "0%",
            "skin": "Copykonympendcancel",
            "text": "Cancel",
            "width": "16%",
            "zIndex": 4
        }, controller.args[0], "btnSearchCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSearchCancel"), extendConfig({}, controller.args[2], "btnSearchCancel"));
        var flxSearchBg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSearchBg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknSearchInactive",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSearchBg"), extendConfig({}, controller.args[1], "flxSearchBg"), extendConfig({}, controller.args[2], "flxSearchBg"));
        flxSearchBg.setDefaultUnit(kony.flex.DP);
        flxSearchBg.add();
        flxSearch.add(tbxSearch, imgSearchCenter, lblSearchPlaceholder, imgSearchLeft, btnSearchCancel, flxSearchBg);
        var lblSecret1 = new kony.ui.Label(extendConfig({
            "id": "lblSecret1",
            "isVisible": false,
            "left": "0%",
            "skin": "CopykonympsknAvailable",
            "textStyle": {},
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSecret1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecret1"), extendConfig({}, controller.args[2], "lblSecret1"));
        var lblSecret2 = new kony.ui.Label(extendConfig({
            "id": "lblSecret2",
            "isVisible": false,
            "left": "0%",
            "skin": "CopykonympsknAway",
            "textStyle": {},
            "top": "170%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 4
        }, controller.args[0], "lblSecret2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecret2"), extendConfig({}, controller.args[2], "lblSecret2"));
        var lblSecret3 = new kony.ui.Label(extendConfig({
            "id": "lblSecret3",
            "isVisible": false,
            "left": "0%",
            "skin": "CopykonympsknMeeting",
            "textStyle": {},
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 4
        }, controller.args[0], "lblSecret3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecret3"), extendConfig({}, controller.args[2], "lblSecret3"));
        var btnSecret = new kony.ui.Button(extendConfig({
            "focusSkin": "konympslButtonGlossRed4",
            "height": "0%",
            "id": "btnSecret",
            "isVisible": false,
            "left": "0%",
            "skin": "CopykonympsknAssignBeforeAfter",
            "top": "0%",
            "width": "0%",
            "zIndex": 1
        }, controller.args[0], "btnSecret"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSecret"), extendConfig({}, controller.args[2], "btnSecret"));
        var lblSecret4 = new kony.ui.Label(extendConfig({
            "id": "lblSecret4",
            "isVisible": true,
            "left": "0%",
            "skin": "CopykonympsknLblColor",
            "textStyle": {},
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 4
        }, controller.args[0], "lblSecret4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecret4"), extendConfig({}, controller.args[2], "lblSecret4"));
        flxHeader.add(lblHeader, flxMenu, flxFilter, flxSearch, lblSecret1, lblSecret2, lblSecret3, btnSecret, lblSecret4);
        var flxList = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80%",
            "id": "flxList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxDetailsScreen1",
            "top": "20%",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxList"), extendConfig({}, controller.args[1], "flxList"), extendConfig({}, controller.args[2], "flxList"));
        flxList.setDefaultUnit(kony.flex.DP);
        var flxShadowEmployeeHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxShadowEmployeeHeader",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxShadow",
            "top": "0%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxShadowEmployeeHeader"), extendConfig({}, controller.args[1], "flxShadowEmployeeHeader"), extendConfig({}, controller.args[2], "flxShadowEmployeeHeader"));
        flxShadowEmployeeHeader.setDefaultUnit(kony.flex.DP);
        flxShadowEmployeeHeader.add();
        var flxSeg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSeg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "92%",
            "zIndex": 2
        }, controller.args[0], "flxSeg"), extendConfig({}, controller.args[1], "flxSeg"), extendConfig({}, controller.args[2], "flxSeg"));
        flxSeg.setDefaultUnit(kony.flex.DP);
        var segEmployees = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "groupCells": false,
            "height": "100%",
            "id": "segEmployees",
            "isVisible": false,
            "left": "0dp",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_b210797367534a1dbe39e0d2e36f7621,
            "onTouchEnd": controller.AS_Segment_fe00262da69643f584f8d3bb53619c02,
            "onTouchMove": controller.AS_Segment_c39eae6681ff45cebeed6a4520def782,
            "pageOffDotImage": "pageoffdot_1_1.png",
            "pageOnDotImage": "pageondot_1_1.png",
            "retainSelection": false,
            "rowFocusSkin": "konympseg4",
            "rowSkin": "konympseg3",
            "sectionHeaderSkin": "konympsliPhoneSegmentHeader2",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "64646400",
            "separatorRequired": false,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "colorflx": "colorflx",
                "datacontainer": "datacontainer",
                "department": "department",
                "designation": "designation",
                "empID": "empID",
                "empimage": "empimage",
                "empname": "empname",
                "flxImageHolder": "flxImageHolder",
                "flxOnline": "flxOnline",
                "lblChild": "lblChild",
                "lblInvisible": "lblInvisible"
            },
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "segEmployees"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segEmployees"), extendConfig({}, controller.args[2], "segEmployees"));
        flxSeg.add(segEmployees);
        var lblNoSegmentDataFound = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "25%",
            "height": "8%",
            "id": "lblNoSegmentDataFound",
            "isVisible": false,
            "skin": "CopykonympsknLgDarkText",
            "text": "No Data Found",
            "textStyle": {},
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblNoSegmentDataFound"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoSegmentDataFound"), extendConfig({}, controller.args[2], "lblNoSegmentDataFound"));
        var flxDictionary = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "99%",
            "id": "flxDictionary",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onTouchEnd": controller.AS_FlexContainer_ad927d78c7f54f13b9bb21c51f840826,
            "onTouchMove": controller.AS_FlexContainer_faf02aafc6ce4f75a1ac57b007df031c,
            "right": "1%",
            "skin": "CopykonympslFbox2",
            "top": "1%",
            "width": "8%",
            "zIndex": 3
        }, controller.args[0], "flxDictionary"), extendConfig({}, controller.args[1], "flxDictionary"), extendConfig({}, controller.args[2], "flxDictionary"));
        flxDictionary.setDefaultUnit(kony.flex.DP);
        var A = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.50%",
            "id": "A",
            "isVisible": true,
            "onClick": controller.AS_Button_f3349a0f18314a7ba0d234fa12420e6d,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "A",
            "top": "0%",
            "width": "56%",
            "zIndex": 10
        }, controller.args[0], "A"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "A"), extendConfig({}, controller.args[2], "A"));
        var B = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "B",
            "isVisible": true,
            "onClick": controller.AS_Button_g303b696c4a84cccadc50428b71acab2,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "B",
            "top": "3.80%",
            "width": "56%",
            "zIndex": 10
        }, controller.args[0], "B"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "B"), extendConfig({}, controller.args[2], "B"));
        var C = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "C",
            "isVisible": true,
            "onClick": controller.AS_Button_a90be174cf5d4452ae81f3c4fffde5b5,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "C",
            "top": "7.60%",
            "width": "56%",
            "zIndex": 10
        }, controller.args[0], "C"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "C"), extendConfig({}, controller.args[2], "C"));
        var D = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "D",
            "isVisible": true,
            "onClick": controller.AS_Button_f1aa774d42f84c95aa957f4e3e1e06a5,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "D",
            "top": "11.40%",
            "width": "56%",
            "zIndex": 10
        }, controller.args[0], "D"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "D"), extendConfig({}, controller.args[2], "D"));
        var E = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "E",
            "isVisible": true,
            "onClick": controller.AS_Button_b1cf07ccb7614fa79390c708ead550ea,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "E",
            "top": "15.20%",
            "width": "56%",
            "zIndex": 10
        }, controller.args[0], "E"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "E"), extendConfig({}, controller.args[2], "E"));
        var F = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "F",
            "isVisible": true,
            "onClick": controller.AS_Button_acaf49cc9f03463d897d5699a530230b,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "F",
            "top": "19%",
            "width": "56%",
            "zIndex": 10
        }, controller.args[0], "F"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "F"), extendConfig({}, controller.args[2], "F"));
        var G = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "G",
            "isVisible": true,
            "onClick": controller.AS_Button_i961c68a66c34920a36e2fbca20adc4a,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "G",
            "top": "22.80%",
            "width": "56%",
            "zIndex": 10
        }, controller.args[0], "G"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "G"), extendConfig({}, controller.args[2], "G"));
        var H = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "H",
            "isVisible": true,
            "onClick": controller.AS_Button_dc7da8d6671f4c129089a222b9be1ad2,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "H",
            "top": "26.60%",
            "width": "56%"
        }, controller.args[0], "H"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "H"), extendConfig({}, controller.args[2], "H"));
        var I = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "I",
            "isVisible": true,
            "onClick": controller.AS_Button_ce7558a6bc64407dbcc612bafd05888a,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "I",
            "top": "30.40%",
            "width": "56%"
        }, controller.args[0], "I"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "I"), extendConfig({}, controller.args[2], "I"));
        var J = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "J",
            "isVisible": true,
            "onClick": controller.AS_Button_fc53d5698fa74a6bac7bf32425ace6be,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "J",
            "top": "34.20%",
            "width": "56%"
        }, controller.args[0], "J"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "J"), extendConfig({}, controller.args[2], "J"));
        var K = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "K",
            "isVisible": true,
            "onClick": controller.AS_Button_a05acd5d98764fe99833f0f44bb1412b,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "K",
            "top": "38%",
            "width": "56%"
        }, controller.args[0], "K"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "K"), extendConfig({}, controller.args[2], "K"));
        var L = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "L",
            "isVisible": true,
            "onClick": controller.AS_Button_j98cb5de0a524202affdbd89b32cb12c,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "L",
            "top": "41.80%",
            "width": "56%"
        }, controller.args[0], "L"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "L"), extendConfig({}, controller.args[2], "L"));
        var M = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "M",
            "isVisible": true,
            "onClick": controller.AS_Button_e2559448fcf64741abd614625303fe9b,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "M",
            "top": "45.60%",
            "width": "56%"
        }, controller.args[0], "M"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "M"), extendConfig({}, controller.args[2], "M"));
        var N = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "N",
            "isVisible": true,
            "onClick": controller.AS_Button_e5ebb6fdeffa4db5b583872c80353de0,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "N",
            "top": "49.40%",
            "width": "56%"
        }, controller.args[0], "N"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "N"), extendConfig({}, controller.args[2], "N"));
        var O = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "O",
            "isVisible": true,
            "onClick": controller.AS_Button_j2d6ff4bb71b4299ad3b7c78a06aadf5,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "O",
            "top": "53.20%",
            "width": "56%"
        }, controller.args[0], "O"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "O"), extendConfig({}, controller.args[2], "O"));
        var P = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "P",
            "isVisible": true,
            "onClick": controller.AS_Button_d9b7af48da9e4f5ebb60996fd44c23fe,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "P",
            "top": "57%",
            "width": "56%"
        }, controller.args[0], "P"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "P"), extendConfig({}, controller.args[2], "P"));
        var Q = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "Q",
            "isVisible": true,
            "onClick": controller.AS_Button_f4d8a97ce49f4a68ad87ffdf9b2ce4d5,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "Q",
            "top": "60.80%",
            "width": "56%"
        }, controller.args[0], "Q"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Q"), extendConfig({}, controller.args[2], "Q"));
        var R = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "R",
            "isVisible": true,
            "onClick": controller.AS_Button_h43ff28c7f174037939d5b28070366fa,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "R",
            "top": "64.60%",
            "width": "56%"
        }, controller.args[0], "R"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "R"), extendConfig({}, controller.args[2], "R"));
        var S = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "S",
            "isVisible": true,
            "onClick": controller.AS_Button_g188a32644f84b72b50b0160071afa8e,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "S",
            "top": "68.40%",
            "width": "56%"
        }, controller.args[0], "S"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "S"), extendConfig({}, controller.args[2], "S"));
        var T = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "T",
            "isVisible": true,
            "onClick": controller.AS_Button_eedbdf08549a417399eeef6355ec0b58,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "T",
            "top": "72.20%",
            "width": "56%"
        }, controller.args[0], "T"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "T"), extendConfig({}, controller.args[2], "T"));
        var U = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "U",
            "isVisible": true,
            "onClick": controller.AS_Button_f2abef3d28e445df9642ee5b34b6efc7,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "U",
            "top": "76%",
            "width": "56%"
        }, controller.args[0], "U"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "U"), extendConfig({}, controller.args[2], "U"));
        var V = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "V",
            "isVisible": true,
            "onClick": controller.AS_Button_f5a9244fb7ab4bed9eabe5b71c474739,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "V",
            "top": "79.80%",
            "width": "56%"
        }, controller.args[0], "V"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "V"), extendConfig({}, controller.args[2], "V"));
        var W = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "W",
            "isVisible": true,
            "onClick": controller.AS_Button_bdd71a5d3965445a913b67267e743f60,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "W",
            "top": "83.60%",
            "width": "56%"
        }, controller.args[0], "W"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "W"), extendConfig({}, controller.args[2], "W"));
        var X = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "X",
            "isVisible": true,
            "onClick": controller.AS_Button_a8c97df3211e464182f9860afe9e172a,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "X",
            "top": "87.40%",
            "width": "56%"
        }, controller.args[0], "X"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "X"), extendConfig({}, controller.args[2], "X"));
        var Y = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "Y",
            "isVisible": true,
            "onClick": controller.AS_Button_f6958142b14147e3ba0eb758136e0f3e,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "Y",
            "top": "91.20%",
            "width": "56%"
        }, controller.args[0], "Y"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Y"), extendConfig({}, controller.args[2], "Y"));
        var Z = new kony.ui.Button(extendConfig({
            "focusSkin": "Copykonympsortbuttonskin",
            "height": "3.40%",
            "id": "Z",
            "isVisible": true,
            "onClick": controller.AS_Button_e339be8e7d7e494f885674fdd8ad7990,
            "right": "6%",
            "skin": "Copykonympsortbuttonskin",
            "text": "Z",
            "top": "95%",
            "width": "56%"
        }, controller.args[0], "Z"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Z"), extendConfig({}, controller.args[2], "Z"));
        flxDictionary.add(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z);
        var flxTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0.10%",
            "id": "flxTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "99%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "1%",
            "width": "0.10%",
            "zIndex": 10
        }, controller.args[0], "flxTop"), extendConfig({}, controller.args[1], "flxTop"), extendConfig({}, controller.args[2], "flxTop"));
        flxTop.setDefaultUnit(kony.flex.DP);
        var topLabel = new kony.ui.Label(extendConfig({
            "id": "topLabel",
            "isVisible": true,
            "left": "0%",
            "textStyle": {},
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 15
        }, controller.args[0], "topLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "topLabel"), extendConfig({}, controller.args[2], "topLabel"));
        flxTop.add(topLabel);
        var flxBottom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0.10%",
            "id": "flxBottom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "99%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "99%",
            "width": "1%",
            "zIndex": 10
        }, controller.args[0], "flxBottom"), extendConfig({}, controller.args[1], "flxBottom"), extendConfig({}, controller.args[2], "flxBottom"));
        flxBottom.setDefaultUnit(kony.flex.DP);
        var bottomLabel = new kony.ui.Label(extendConfig({
            "id": "bottomLabel",
            "isVisible": true,
            "left": "0%",
            "skin": "defLabel",
            "textStyle": {},
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 15
        }, controller.args[0], "bottomLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "bottomLabel"), extendConfig({}, controller.args[2], "bottomLabel"));
        flxBottom.add(bottomLabel);
        var lblDisplaySelectedIndex = new kony.ui.Label(extendConfig({
            "height": "9%",
            "id": "lblDisplaySelectedIndex",
            "isVisible": false,
            "right": "9%",
            "skin": "CopykonympsknDragButtonFlex",
            "text": "A",
            "textStyle": {},
            "top": "130dp",
            "width": "13%",
            "zIndex": 5
        }, controller.args[0], "lblDisplaySelectedIndex"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDisplaySelectedIndex"), extendConfig({}, controller.args[2], "lblDisplaySelectedIndex"));
        flxList.add(flxShadowEmployeeHeader, flxSeg, lblNoSegmentDataFound, flxDictionary, flxTop, flxBottom, lblDisplaySelectedIndex);
        flxListScreen.add(flxHeader, flxList);
        var btnKFclicked = new kony.ui.Button(extendConfig({
            "bottom": "4%",
            "focusSkin": "CopykonympslButtonGlossRed",
            "height": "70dp",
            "id": "btnKFclicked",
            "isVisible": true,
            "onClick": controller.AS_Button_id26018336f44335b9a5c82902023688,
            "right": "4%",
            "skin": "CopykonympslButtonGlossBlue1",
            "width": "70dp",
            "zIndex": 12
        }, controller.args[0], "btnKFclicked"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnKFclicked"), extendConfig({}, controller.args[2], "btnKFclicked"));
        listdetail.add(flxDetailsScreen, flxListScreen, btnKFclicked);
        return listdetail;
    }
})