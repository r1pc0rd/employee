define("flxLocation", function() {
    return function(controller) {
        var flxLocation = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLocation",
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
        flxLocation.setDefaultUnit(kony.flex.DP);
        var flxHeaderLocation = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxHeaderLocation",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0ad8e0e4445dc4a",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeaderLocation.setDefaultUnit(kony.flex.DP);
        var lblLocationValue = new kony.ui.Label({
            "centerY": "50%",
            "height": "90%",
            "id": "lblLocationValue",
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
        var flxEdit = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "12px",
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_d04a166a94704c82b66b340bdd5cb777,
            "right": "43px",
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
            "onClick": controller.AS_FlexContainer_b0767af9578d4a089f82e4aace33c2d5,
            "right": "23px",
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
            "onClick": controller.AS_FlexContainer_i2d62408465c4f949bd1c120a37c7346,
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
        flxHeaderLocation.add(lblLocationValue, flxEdit, flxRemove, flxImageContainer);
        var flxAddress = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAddress",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxAddress.setDefaultUnit(kony.flex.DP);
        var flxCity = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxCity",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0ec1bc489e2324d",
            "top": "100dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxCity.setDefaultUnit(kony.flex.DP);
        var lblCityValue = new kony.ui.Label({
            "centerY": "50%",
            "height": "54.29%",
            "id": "lblCityValue",
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
        var lblCity = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCity",
            "isVisible": true,
            "left": "50px",
            "skin": "sknLblHeader",
            "text": "City",
            "top": "7dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCity.add(lblCityValue, lblCity);
        var flxLocality = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxLocality",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxLocality.setDefaultUnit(kony.flex.DP);
        var lblLocalityValue = new kony.ui.Label({
            "centerY": "50%",
            "height": "90%",
            "id": "lblLocalityValue",
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
        var lblLocality = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblLocality",
            "isVisible": true,
            "left": "50px",
            "skin": "sknLblHeader",
            "text": "Locality",
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxLocality.add(lblLocalityValue, lblLocality);
        var flxAddress1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxAddress1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxAddress1.setDefaultUnit(kony.flex.DP);
        var lblAddressValue = new kony.ui.Label({
            "centerY": "50%",
            "height": "90%",
            "id": "lblAddressValue",
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
        var lblAddress = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblAddress",
            "isVisible": true,
            "left": "50px",
            "skin": "sknLblHeader",
            "text": "Address",
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAddress1.add(lblAddressValue, lblAddress);
        var flxCoutry = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxCoutry",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "150dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxCoutry.setDefaultUnit(kony.flex.DP);
        var lblCountryValue = new kony.ui.Label({
            "centerY": "50%",
            "height": "90%",
            "id": "lblCountryValue",
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
        var lblCountry = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCountry",
            "isVisible": true,
            "left": "50px",
            "skin": "sknLblHeader",
            "text": "Country",
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCoutry.add(lblCountryValue, lblCountry);
        var flxZipcode = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxZipcode",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "200px",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxZipcode.setDefaultUnit(kony.flex.DP);
        var lblZipCodevalue = new kony.ui.Label({
            "centerY": "50%",
            "height": "90%",
            "id": "lblZipCodevalue",
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
        var lblZipCode = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblZipCode",
            "isVisible": true,
            "left": "50px",
            "skin": "sknLblHeader",
            "text": "Zip Code",
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxZipcode.add(lblZipCodevalue, lblZipCode);
        flxAddress.add(flxCity, flxLocality, flxAddress1, flxCoutry, flxZipcode);
        flxLocation.add(flxHeaderLocation, flxAddress);
        return flxLocation;
    }
})