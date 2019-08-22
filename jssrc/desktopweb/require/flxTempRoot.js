define("flxTempRoot", function() {
    return function(controller) {
        var flxTempRoot = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55px",
            "id": "flxTempRoot",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {
            "hoverSkin": "sknFlxWhiteBG"
        });
        flxTempRoot.setDefaultUnit(kony.flex.DP);
        var lblLocation = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblLocation",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblLocation",
            "text": "Location",
            "width": "113px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblAddress1 = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblAddress1",
            "isVisible": true,
            "left": "133px",
            "skin": "sknLblLocation",
            "text": "Location",
            "width": "24.40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblAddress2 = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblAddress2",
            "isVisible": true,
            "right": "351px",
            "skin": "sknLblLocation",
            "text": "Location",
            "width": "23.60%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCountry = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblCountry",
            "isVisible": true,
            "right": "228px",
            "skin": "sknLblLocation",
            "text": "Country",
            "width": "69px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCity = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblCity",
            "isVisible": true,
            "right": "133px",
            "skin": "sknLblLocation",
            "text": "City",
            "width": "84px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblZip = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblZip",
            "isVisible": true,
            "right": "53px",
            "skin": "sknLblLocation",
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
            "right": "30px",
            "skin": "slFbox",
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
            "right": "0px",
            "skin": "slFbox",
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
            "isVisible": true,
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
        flxTempRoot.add(lblLocation, lblAddress1, lblAddress2, lblCountry, lblCity, lblZip, flxEdit, flxRemove, lblId);
        return flxTempRoot;
    }
})