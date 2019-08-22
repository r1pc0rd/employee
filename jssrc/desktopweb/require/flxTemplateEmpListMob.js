define("flxTemplateEmpListMob", function() {
    return function(controller) {
        var flxTemplateEmpListMob = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTemplateEmpListMob",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skbFlxf9f9fb",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTemplateEmpListMob.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "4dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0ad8e0e4445dc4a",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var fullName = new kony.ui.Label({
            "centerY": "50%",
            "height": "90%",
            "id": "fullName",
            "isVisible": true,
            "left": "50px",
            "skin": "skin090b27c0",
            "text": "Jeremiah Crosman",
            "textStyle": {},
            "width": "150px",
            "zIndex": 0
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var userIon = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "skin090d4aa0",
            "height": "40px",
            "id": "userIon",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "40px",
            "isModalContainer": false,
            "skin": "skinFlexRound",
            "top": "0%",
            "width": "40px",
            "zIndex": 4
        }, {}, {});
        userIon.setDefaultUnit(kony.flex.DP);
        var empimage = new kony.ui.Image2({
            "centerY": "50%",
            "height": "100%",
            "id": "empimage",
            "isVisible": true,
            "left": "0px",
            "skin": "Copyskin0f3f0f89b9e9549",
            "src": "empdefaultimageicon.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var empimagemask = new kony.ui.Image2({
            "centerY": "50%",
            "height": "100%",
            "id": "empimagemask",
            "isVisible": true,
            "left": "100px",
            "skin": "Copyskin0e4a4e64967a64c",
            "src": "newtranscircular.png",
            "width": "100%",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        userIon.add(empimage, empimagemask);
        var flxEdit = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "12px",
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_adefe6c5b5814dddb6d0db5326039bbb,
            "right": "40px",
            "skin": "slFbox",
            "width": "12px"
        }, {}, {});
        flxEdit.setDefaultUnit(kony.flex.DP);
        var imgEdit = new kony.ui.Image2({
            "height": "100%",
            "id": "imgEdit",
            "isVisible": true,
            "left": "0%",
            "onTouchEnd": controller.AS_Image_h63be57bf083416ab63fd25f6e019219,
            "skin": "skin090d4aa0",
            "src": "empediticon.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 5
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEdit.add(imgEdit);
        var flxRemove = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "14px",
            "id": "flxRemove",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_e33201cac38a4986814e0e7a8f0f60ab,
            "right": "20px",
            "skin": "slFbox",
            "width": "14px"
        }, {}, {});
        flxRemove.setDefaultUnit(kony.flex.DP);
        var imgRemove = new kony.ui.Image2({
            "height": "100%",
            "id": "imgRemove",
            "isVisible": true,
            "left": "0%",
            "onTouchEnd": controller.AS_Image_ae4c4944bf54420a9eac0a4dede32a12,
            "skin": "skin090d4aa0",
            "src": "empremoveicon.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 6
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRemove.add(imgRemove);
        var flxImageContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxImageContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_dac923f885f04875a7827d380da599f6,
            "skin": "slFbox",
            "width": "50dp",
            "zIndex": 100
        }, {}, {});
        flxImageContainer.setDefaultUnit(kony.flex.DP);
        var imgDropDown = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15px",
            "id": "imgDropDown",
            "isVisible": true,
            "left": "15px",
            "skin": "slImage",
            "src": "drop_down.png",
            "width": "15px",
            "zIndex": 50
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImageContainer.add(imgDropDown);
        flxHeader.add(fullName, userIon, flxEdit, flxRemove, flxImageContainer);
        var flxDepIdDesig = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "150dp",
            "id": "flxDepIdDesig",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDepIdDesig.setDefaultUnit(kony.flex.DP);
        var flxDepartment = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxDepartment",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDepartment.setDefaultUnit(kony.flex.DP);
        var department = new kony.ui.Label({
            "centerY": "50%",
            "height": "90%",
            "id": "department",
            "isVisible": true,
            "left": "200px",
            "skin": "skinLblH",
            "text": "IT Administrator",
            "textStyle": {},
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDepartmentText = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDepartmentText",
            "isVisible": true,
            "left": "50px",
            "skin": "sknLblHeader",
            "text": "DEPARTMENT",
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDepartment.add(department, lblDepartmentText);
        var flxId = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxId",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0ec1bc489e2324d",
            "top": "100dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxId.setDefaultUnit(kony.flex.DP);
        var empID = new kony.ui.Label({
            "centerY": "50%",
            "height": "54.29%",
            "id": "empID",
            "isVisible": true,
            "left": "200px",
            "skin": "skinLblH",
            "text": "1234",
            "textStyle": {},
            "width": "100px",
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblIdText = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblIdText",
            "isVisible": true,
            "left": "50px",
            "skin": "sknLblHeader",
            "text": "EMPLOYEE ID",
            "top": "7dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxId.add(empID, lblIdText);
        var flxDesignation = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxDesignation",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDesignation.setDefaultUnit(kony.flex.DP);
        var designation = new kony.ui.Label({
            "centerY": "50%",
            "height": "90%",
            "id": "designation",
            "isVisible": true,
            "left": "200px",
            "right": "0px",
            "skin": "skinLblH",
            "text": "IT Administrator",
            "textStyle": {},
            "width": "40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDesignationText = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDesignationText",
            "isVisible": true,
            "left": "50px",
            "skin": "sknLblHeader",
            "text": "DESIGNATION",
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDesignation.add(designation, lblDesignationText);
        flxDepIdDesig.add(flxDepartment, flxId, flxDesignation);
        flxTemplateEmpListMob.add(flxHeader, flxDepIdDesig);
        return flxTemplateEmpListMob;
    }
})