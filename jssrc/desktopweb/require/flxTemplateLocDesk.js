define("flxTemplateLocDesk", function() {
    return function(controller) {
        var flxTemplateLocDesk = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40px",
            "id": "flxTemplateLocDesk",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTemplateLocDesk.setDefaultUnit(kony.flex.DP);
        var lblLocationValue = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblLocationValue",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblsegRowTitle",
            "text": "Location",
            "width": "113px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblAddressValue = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblAddressValue",
            "isVisible": true,
            "left": "100px",
            "skin": "sknLblsegRowTitle",
            "text": "Location",
            "width": "24.40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblLocalityValue = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblLocalityValue",
            "isVisible": true,
            "left": "320px",
            "skin": "sknLblsegRowTitle",
            "text": "Location",
            "width": "23.60%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCountryValue = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblCountryValue",
            "isVisible": true,
            "left": "520px",
            "skin": "sknLblsegRowTitle",
            "text": "Country",
            "width": "69px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCityValue = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblCityValue",
            "isVisible": true,
            "left": "650px",
            "skin": "sknLblsegRowTitle",
            "text": "City",
            "width": "120px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblZipCodeValue = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblZipCodeValue",
            "isVisible": true,
            "left": "800px",
            "skin": "sknLblsegRowTitle",
            "text": "zip",
            "width": "60px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxEdit = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "12px",
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_ad3ffe78985f4304914c3a9ff83ec56c,
            "right": "40px",
            "skin": "sknFlxTransparentBGPointer",
            "width": "12px",
            "zIndex": 1
        }, {}, {});
        flxEdit.setDefaultUnit(kony.flex.DP);
        var imgEdit = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgEdit",
            "isVisible": true,
            "right": "5%",
            "skin": "slImage",
            "src": "empediticon.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEdit.add(imgEdit);
        var flxRemove = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "19px",
            "id": "flxRemove",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_a36023040348411689e6ea803749f197,
            "right": "15px",
            "skin": "sknFlxTransparentBGPointer",
            "width": "19px",
            "zIndex": 1
        }, {}, {});
        flxRemove.setDefaultUnit(kony.flex.DP);
        var imgRemove = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgRemove",
            "isVisible": true,
            "skin": "slImage",
            "src": "empremoveicon.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRemove.add(imgRemove);
        var lblId = new kony.ui.Label({
            "id": "lblId",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknLblZeroFont",
            "text": "Label",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxTemplateLocDesk.add(lblLocationValue, lblAddressValue, lblLocalityValue, lblCountryValue, lblCityValue, lblZipCodeValue, flxEdit, flxRemove, lblId);
        return flxTemplateLocDesk;
    }
})