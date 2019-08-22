define("flxSegMain", function() {
    return function(controller) {
        var flxSegMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "155dp",
            "id": "flxSegMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0ea96f1f5378948",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSegMain.setDefaultUnit(kony.flex.DP);
        var flxNameField = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxNameField",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0c4a3999ed00946",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxNameField.setDefaultUnit(kony.flex.DP);
        var Image0c55f7ba8810842 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "Image0c55f7ba8810842",
            "isVisible": true,
            "left": "5dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxNameField.add(Image0c55f7ba8810842);
        var flxDeptStatus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "flxDeptStatus",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDeptStatus.setDefaultUnit(kony.flex.DP);
        var flxDepartment = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxDepartment",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0f0d8b86cb7604b",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDepartment.setDefaultUnit(kony.flex.DP);
        flxDepartment.add();
        var flxStatus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxStatus",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxStatus.setDefaultUnit(kony.flex.DP);
        flxStatus.add();
        flxDeptStatus.add(flxDepartment, flxStatus);
        flxSegMain.add(flxNameField, flxDeptStatus);
        return flxSegMain;
    }
})