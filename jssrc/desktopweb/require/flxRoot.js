define("flxRoot", function() {
    return function(controller) {
        var flxRoot = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50px",
            "id": "flxRoot",
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
        flxRoot.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblName",
            "isVisible": true,
            "left": "0px",
            "skin": "sknLblsegRowTitle",
            "text": "Alabama",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var txtBoxName = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "defTextBoxFocus",
            "height": "100%",
            "id": "txtBoxName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "placeholder": "Placeholder",
            "secureTextEntry": false,
            "skin": "sknTxtBoxWhiteBG",
            "text": "Hello World",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "width": "80%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoCorrect": false,
            "placeholderSkin": "defTextBoxPlaceholder"
        });
        var flxRemove = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30px",
            "id": "flxRemove",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_ic1be977f9d543009e37c9abdc4e949d,
            "right": "0px",
            "skin": "slFbox",
            "width": "30px",
            "zIndex": 1
        }, {}, {});
        flxRemove.setDefaultUnit(kony.flex.DP);
        var imgRemove = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "19px",
            "id": "imgRemove",
            "isVisible": true,
            "skin": "slImage",
            "src": "empremoveicon.png",
            "width": "19px",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRemove.add(imgRemove);
        var flxEdit = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "25px",
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_c22b4e9c800446ddb4f830ba5f6eef86,
            "right": "27px",
            "skin": "slFbox",
            "width": "25px",
            "zIndex": 1
        }, {}, {});
        flxEdit.setDefaultUnit(kony.flex.DP);
        var imgEdit = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "12px",
            "id": "imgEdit",
            "isVisible": true,
            "skin": "slImage",
            "src": "empediticon.png",
            "width": "12px",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEdit.add(imgEdit);
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
        var flxSave = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "25px",
            "id": "flxSave",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_a7c630f0fea442349d5e6965dd2a079b,
            "right": "27px",
            "skin": "slFbox",
            "width": "25px",
            "zIndex": 1
        }, {}, {});
        flxSave.setDefaultUnit(kony.flex.DP);
        var imgSave = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgSave",
            "isVisible": true,
            "skin": "slImage",
            "src": "save.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSave.add(imgSave);
        flxRoot.add(lblName, txtBoxName, flxRemove, flxEdit, lblId, flxSave);
        return flxRoot;
    }
})