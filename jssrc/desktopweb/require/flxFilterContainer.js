define("flxFilterContainer", function() {
    return function(controller) {
        var flxFilterContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30px",
            "id": "flxFilterContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxFilterContainer.setDefaultUnit(kony.flex.DP);
        var flxDepartment0 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDepartment0",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDepartment0.setDefaultUnit(kony.flex.DP);
        var lblDepartment0 = new kony.ui.Label({
            "centerY": "50%",
            "height": "80%",
            "id": "lblDepartment0",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLblTransBG",
            "text": "Product Management",
            "top": "13%",
            "width": "85%",
            "zIndex": 31
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgDepartment0 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "100%",
            "id": "imgDepartment0",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "unselected.png",
            "top": "0dp",
            "width": "12%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDepartment0.add(lblDepartment0, imgDepartment0);
        flxFilterContainer.add(flxDepartment0);
        return flxFilterContainer;
    }
})