define("flxTemplateEmpListTab", function() {
    return function(controller) {
        var flxTemplateEmpListTab = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTemplateEmpListTab",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skbFlxf9f9fb",
            "top": "0dp",
            "width": "100%"
        }, {}, {
            "hoverSkin": "sknFlxWhiteBG"
        });
        flxTemplateEmpListTab.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
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
            "width": "300px",
            "zIndex": 0
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var designation = new kony.ui.Label({
            "centerY": "50%",
            "height": "90%",
            "id": "designation",
            "isVisible": true,
            "left": "200px",
            "skin": "skinLblH",
            "text": "IT Administrator",
            "textStyle": {},
            "width": "300px",
            "zIndex": 1
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
            "isVisible": true,
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
            "isVisible": false,
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
            "onClick": controller.AS_FlexContainer_dfb034d354ad4fc3868ca81f34e426ee,
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
            "onClick": controller.AS_FlexContainer_a9f83f95b8854f26bd6a6e1f3e111c70,
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
            "height": "50dp",
            "id": "flxImageContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_c92eaf7cab8049fe8e319b6c611a9a47,
            "skin": "slFbox",
            "width": "50dp",
            "zIndex": 50
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
        flxHeader.add(fullName, designation, userIon, flxEdit, flxRemove, flxImageContainer);
        var flxDepAndId = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "flxDepAndId",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDepAndId.setDefaultUnit(kony.flex.DP);
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
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDepartment.setDefaultUnit(kony.flex.DP);
        var department = new kony.ui.Label({
            "centerY": "50%",
            "height": "54.20%",
            "id": "department",
            "isVisible": true,
            "left": "180px",
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
            "left": "40px",
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
            "top": "50dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxId.setDefaultUnit(kony.flex.DP);
        var empID = new kony.ui.Label({
            "centerY": "50%",
            "height": "54.29%",
            "id": "empID",
            "isVisible": true,
            "left": "180px",
            "skin": "skinLblH",
            "text": "1234",
            "textStyle": {},
            "width": "7%",
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
            "left": "40px",
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
        flxDepAndId.add(flxDepartment, flxId);
        flxTemplateEmpListTab.add(flxHeader, flxDepAndId);
        return flxTemplateEmpListTab;
    }
})