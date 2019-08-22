define(function() {
    return function(controller) {
        var login = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "login",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_j808afcaa2034cefbf75af15f6c09dc6(eventobject);
            },
            "skin": "CopykonympslFbox4",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "login"), extendConfig({}, controller.args[1], "login"), extendConfig({}, controller.args[2], "login"));
        login.setDefaultUnit(kony.flex.DP);
        var flxLogin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxLogin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLogin"), extendConfig({}, controller.args[1], "flxLogin"), extendConfig({}, controller.args[2], "flxLogin"));
        flxLogin.setDefaultUnit(kony.flex.DP);
        var flxBottomContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "60%",
            "id": "flxBottomContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopykonympsknslFbox",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxBottomContainer"), extendConfig({}, controller.args[1], "flxBottomContainer"), extendConfig({}, controller.args[2], "flxBottomContainer"));
        flxBottomContainer.setDefaultUnit(kony.flex.DP);
        flxBottomContainer.add();
        var flxlogo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "40%",
            "id": "flxlogo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopykonympslFbox1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxlogo"), extendConfig({}, controller.args[1], "flxlogo"), extendConfig({}, controller.args[2], "flxlogo"));
        flxlogo.setDefaultUnit(kony.flex.DP);
        var imgLogo = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "40%",
            "height": "30%",
            "id": "imgLogo",
            "isVisible": true,
            "skin": "konympslImage4",
            "src": "reusablelogin_logo_1.png",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "imgLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogo"), extendConfig({}, controller.args[2], "imgLogo"));
        flxlogo.add(imgLogo);
        var flxTouchId = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "78%",
            "clipBounds": true,
            "height": "8%",
            "id": "flxTouchId",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_a671cf3d68d94f3fa48a83e7cc7cf98b,
            "skin": "konympkonympslFbox5",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxTouchId"), extendConfig({}, controller.args[1], "flxTouchId"), extendConfig({}, controller.args[2], "flxTouchId"));
        flxTouchId.setDefaultUnit(kony.flex.DP);
        var imgTouchId = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "40dp",
            "id": "imgTouchId",
            "isVisible": true,
            "left": "22%",
            "skin": "konympslImage4",
            "src": "reusablelogin_touch_id_icon_1.png",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "imgTouchId"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgTouchId"), extendConfig({}, controller.args[2], "imgTouchId"));
        var lblTouchId = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTouchId",
            "isVisible": true,
            "left": "37%",
            "skin": "CopykonympslLabel4",
            "text": "Sign in with Touch ID",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTouchId"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTouchId"), extendConfig({}, controller.args[2], "lblTouchId"));
        flxTouchId.add(imgTouchId, lblTouchId);
        var flxSocialLogin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "90.50%",
            "clipBounds": true,
            "height": "19%",
            "id": "flxSocialLogin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxSocialLogin"), extendConfig({}, controller.args[1], "flxSocialLogin"), extendConfig({}, controller.args[2], "flxSocialLogin"));
        flxSocialLogin.setDefaultUnit(kony.flex.DP);
        var flxOr = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40%",
            "id": "flxOr",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0%",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxOr"), extendConfig({}, controller.args[1], "flxOr"), extendConfig({}, controller.args[2], "flxOr"));
        flxOr.setDefaultUnit(kony.flex.DP);
        var lblLine1 = new kony.ui.Label(extendConfig({
            "centerX": "25%",
            "height": "2%",
            "id": "lblLine1",
            "isVisible": true,
            "skin": "CopykonympslLabel3",
            "textStyle": {},
            "top": "50%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblLine1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLine1"), extendConfig({}, controller.args[2], "lblLine1"));
        var lblOr = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "50%",
            "id": "lblOr",
            "isVisible": true,
            "skin": "CopykonympslLabel4",
            "text": "OR",
            "textStyle": {},
            "top": "25%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblOr"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOr"), extendConfig({}, controller.args[2], "lblOr"));
        var lblLine2 = new kony.ui.Label(extendConfig({
            "centerX": "75%",
            "height": "2%",
            "id": "lblLine2",
            "isVisible": true,
            "skin": "CopykonympslLabel3",
            "textStyle": {},
            "top": "50%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblLine2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLine2"), extendConfig({}, controller.args[2], "lblLine2"));
        flxOr.add(lblLine1, lblOr, lblLine2);
        var flxFacebook = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "60%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxFacebook",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_ie37be001b8e451a80e336743b089e62,
            "skin": "konympkonympslFbox5",
            "width": "40dp",
            "zIndex": 8
        }, controller.args[0], "flxFacebook"), extendConfig({}, controller.args[1], "flxFacebook"), extendConfig({}, controller.args[2], "flxFacebook"));
        flxFacebook.setDefaultUnit(kony.flex.DP);
        var imgFaceBook = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgFaceBook",
            "isVisible": true,
            "left": "0%",
            "src": "reusablelogin_facebook_1.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgFaceBook"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFaceBook"), extendConfig({}, controller.args[2], "imgFaceBook"));
        flxFacebook.add(imgFaceBook);
        var flxLinkedin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "65%",
            "centerY": "60%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxLinkedin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "228dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_dc962b25ce95410d89c7b7ffa11bdd1f,
            "skin": "konympkonympslFbox5",
            "top": "22dp",
            "width": "40dp",
            "zIndex": 8
        }, controller.args[0], "flxLinkedin"), extendConfig({}, controller.args[1], "flxLinkedin"), extendConfig({}, controller.args[2], "flxLinkedin"));
        flxLinkedin.setDefaultUnit(kony.flex.DP);
        var imgLinkedIn = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgLinkedIn",
            "isVisible": true,
            "left": "0%",
            "src": "reusablelogin_linkedin_1.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgLinkedIn"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLinkedIn"), extendConfig({}, controller.args[2], "imgLinkedIn"));
        flxLinkedin.add(imgLinkedIn);
        var flxGoogle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "60%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxGoogle",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "157dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_ef8aebce5edf414a9fa8c3747ea2069e,
            "skin": "konympkonympslFbox5",
            "top": "41dp",
            "width": "40dp",
            "zIndex": 8
        }, controller.args[0], "flxGoogle"), extendConfig({}, controller.args[1], "flxGoogle"), extendConfig({}, controller.args[2], "flxGoogle"));
        flxGoogle.setDefaultUnit(kony.flex.DP);
        var imgGoogle = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgGoogle",
            "isVisible": true,
            "left": "0%",
            "src": "google_1.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgGoogle"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgGoogle"), extendConfig({}, controller.args[2], "imgGoogle"));
        flxGoogle.add(imgGoogle);
        var flxOffice365 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "35%",
            "centerY": "60%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxOffice365",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_a5c0e2e83aa44eed83c2a7fd8b7b0082,
            "skin": "konympkonympslFbox5",
            "width": "40dp",
            "zIndex": 8
        }, controller.args[0], "flxOffice365"), extendConfig({}, controller.args[1], "flxOffice365"), extendConfig({}, controller.args[2], "flxOffice365"));
        flxOffice365.setDefaultUnit(kony.flex.DP);
        var imgOffice365 = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgOffice365",
            "isVisible": true,
            "left": "0%",
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "reusablelogin_office365_1.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgOffice365"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgOffice365"), extendConfig({}, controller.args[2], "imgOffice365"));
        flxOffice365.add(imgOffice365);
        flxSocialLogin.add(flxOr, flxFacebook, flxLinkedin, flxGoogle, flxOffice365);
        var flxCredentials = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "43%",
            "id": "flxCredentials",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopykonympskngenericCard",
            "width": "92%",
            "zIndex": 8
        }, controller.args[0], "flxCredentials"), extendConfig({}, controller.args[1], "flxCredentials"), extendConfig({}, controller.args[2], "flxCredentials"));
        flxCredentials.setDefaultUnit(kony.flex.DP);
        var flxUsername = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "flxUsername",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "right": "5%",
            "skin": "konympkonympslFbox5",
            "top": "4%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxUsername"), extendConfig({}, controller.args[1], "flxUsername"), extendConfig({}, controller.args[2], "flxUsername"));
        flxUsername.setDefaultUnit(kony.flex.DP);
        var tbxUsername = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopykonympsknloginTextField",
            "height": "33dp",
            "id": "tbxUsername",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "maxTextLength": 30,
            "onDone": controller.AS_TextField_aab05ac153724a5a9efb070df7c69a26,
            "right": 0,
            "secureTextEntry": false,
            "skin": "CopykonympsknloginTextField",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "15%",
            "width": "100%"
        }, controller.args[0], "tbxUsername"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxUsername"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopykonympsknPlaceholderKA"
        }, controller.args[2], "tbxUsername"));
        var flxBottomUsername = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "12%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBottomUsername",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "CopykonympskntextFieldDivider",
            "zIndex": 1
        }, controller.args[0], "flxBottomUsername"), extendConfig({}, controller.args[1], "flxBottomUsername"), extendConfig({}, controller.args[2], "flxBottomUsername"));
        flxBottomUsername.setDefaultUnit(kony.flex.DP);
        flxBottomUsername.add();
        flxUsername.add(tbxUsername, flxBottomUsername);
        var flxPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "flxPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "right": "5%",
            "skin": "konympkonympslFbox5",
            "top": "21%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxPassword"), extendConfig({}, controller.args[1], "flxPassword"), extendConfig({}, controller.args[2], "flxPassword"));
        flxPassword.setDefaultUnit(kony.flex.DP);
        var tbxPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopykonympsknloginTextField",
            "height": "36dp",
            "id": "tbxPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "maxTextLength": 30,
            "onDone": controller.AS_TextField_eaee50dde2074a7c826d1dce00c9ef48,
            "right": 0,
            "secureTextEntry": true,
            "skin": "CopykonympsknloginTextField",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "15%",
            "width": "100%"
        }, controller.args[0], "tbxPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxPassword"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopykonympsknPlaceholderKA"
        }, controller.args[2], "tbxPassword"));
        var flxBottomPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "12%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBottomPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "CopykonympskntextFieldDivider",
            "zIndex": 1
        }, controller.args[0], "flxBottomPassword"), extendConfig({}, controller.args[1], "flxBottomPassword"), extendConfig({}, controller.args[2], "flxBottomPassword"));
        flxBottomPassword.setDefaultUnit(kony.flex.DP);
        flxBottomPassword.add();
        flxPassword.add(tbxPassword, flxBottomPassword);
        var flxRememberMe = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "34dp",
            "id": "flxRememberMe",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6.97%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_d797f98aab6e47f6b467dfabfc6feb98,
            "right": "5%",
            "skin": "konympkonympslFbox5",
            "top": "40.96%",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "flxRememberMe"), extendConfig({}, controller.args[1], "flxRememberMe"), extendConfig({}, controller.args[2], "flxRememberMe"));
        flxRememberMe.setDefaultUnit(kony.flex.DP);
        var lblRememberMe = new kony.ui.Label(extendConfig({
            "centerY": "50.00%",
            "id": "lblRememberMe",
            "isVisible": true,
            "left": "5%",
            "skin": "Copykonympskn",
            "text": "Remember Me",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRememberMe"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRememberMe"), extendConfig({}, controller.args[2], "lblRememberMe"));
        var imgRememberme = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgRememberme",
            "imageWhenFailed": "checkbox_unselected_1.png",
            "isVisible": false,
            "left": "84%",
            "skin": "konympslImage4",
            "src": "reusablelogin_checkbox_selected_1.png",
            "top": "0dp",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "imgRememberme"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgRememberme"), extendConfig({}, controller.args[2], "imgRememberme"));
        var imgUnselected = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgUnselected",
            "isVisible": true,
            "left": "84%",
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "reusablelogin_checkbox_unselected_1.png",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "imgUnselected"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgUnselected"), extendConfig({}, controller.args[2], "imgUnselected"));
        flxRememberMe.add(lblRememberMe, imgRememberme, imgUnselected);
        var flxForgotPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxForgotPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "80%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxForgotPassword"), extendConfig({}, controller.args[1], "flxForgotPassword"), extendConfig({}, controller.args[2], "flxForgotPassword"));
        flxForgotPassword.setDefaultUnit(kony.flex.DP);
        var btnForgotPassword = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "CopykonympsknsecondaryActionFocus",
            "height": "80%",
            "id": "btnForgotPassword",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_forgotPasswordOnClick_b2de6f8330d14c2489a31088725ac514,
            "skin": "CopykonympsknsecondaryAction",
            "text": "Forgot password?",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnForgotPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnForgotPassword"), extendConfig({}, controller.args[2], "btnForgotPassword"));
        var lblSknHidden = new kony.ui.Label(extendConfig({
            "height": "0%",
            "id": "lblSknHidden",
            "isVisible": true,
            "left": "0%",
            "skin": "CopykonympsknAnimate",
            "textStyle": {},
            "top": "0%",
            "width": "0%",
            "zIndex": 1
        }, controller.args[0], "lblSknHidden"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSknHidden"), extendConfig({}, controller.args[2], "lblSknHidden"));
        flxForgotPassword.add(btnForgotPassword, lblSknHidden);
        var lblPassword = new kony.ui.Label(extendConfig({
            "height": "33dp",
            "id": "lblPassword",
            "isVisible": true,
            "left": "5%",
            "skin": "CopykonympsknLblAnimate",
            "text": "Password",
            "textStyle": {},
            "top": "23%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPassword"), extendConfig({}, controller.args[2], "lblPassword"));
        var btnLogin = new kony.ui.Button(extendConfig({
            "centerX": "50.06%",
            "focusSkin": "CopykonympsknprimaryActionFocus",
            "height": "42dp",
            "id": "btnLogin",
            "isVisible": true,
            "onClick": controller.AS_Button_a7c6ffe0447b4c4fa8cb83acca03efd9,
            "skin": "Copykonymploginbuttonskin",
            "text": "SIGN IN",
            "top": "60.04%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "btnLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLogin"), extendConfig({}, controller.args[2], "btnLogin"));
        var lblUsername = new kony.ui.Label(extendConfig({
            "height": "33dp",
            "id": "lblUsername",
            "isVisible": true,
            "left": "5%",
            "skin": "CopykonympsknLblAnimate",
            "text": "Username",
            "textStyle": {},
            "top": "6%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblUsername"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUsername"), extendConfig({}, controller.args[2], "lblUsername"));
        var flxLblUsername = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "33dp",
            "id": "flxLblUsername",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_b3c40cbaa40740ea8e11c66eabaf175f,
            "skin": "konympkonympslFbox5",
            "top": "6%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxLblUsername"), extendConfig({}, controller.args[1], "flxLblUsername"), extendConfig({}, controller.args[2], "flxLblUsername"));
        flxLblUsername.setDefaultUnit(kony.flex.DP);
        flxLblUsername.add();
        var flxLblPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "33dp",
            "id": "flxLblPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_c9c5db49fc6c40869071ff10d717632f,
            "skin": "konympkonympslFbox5",
            "top": "23%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxLblPassword"), extendConfig({}, controller.args[1], "flxLblPassword"), extendConfig({}, controller.args[2], "flxLblPassword"));
        flxLblPassword.setDefaultUnit(kony.flex.DP);
        flxLblPassword.add();
        flxCredentials.add(flxUsername, flxPassword, flxRememberMe, flxForgotPassword, lblPassword, btnLogin, lblUsername, flxLblUsername, flxLblPassword);
        var flxPopups = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPopups",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknflxMob",
            "top": "0%",
            "width": "100%",
            "zIndex": 9
        }, controller.args[0], "flxPopups"), extendConfig({}, controller.args[1], "flxPopups"), extendConfig({}, controller.args[2], "flxPopups"));
        flxPopups.setDefaultUnit(kony.flex.DP);
        var flxEnableTouchIDPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "27%",
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "40%",
            "id": "flxEnableTouchIDPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxDetailsScreen",
            "width": "89%",
            "zIndex": 10
        }, controller.args[0], "flxEnableTouchIDPopup"), extendConfig({}, controller.args[1], "flxEnableTouchIDPopup"), extendConfig({}, controller.args[2], "flxEnableTouchIDPopup"));
        flxEnableTouchIDPopup.setDefaultUnit(kony.flex.DP);
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "20%",
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btnEnable = new kony.ui.Button(extendConfig({
            "focusSkin": "CopykonympsknBtn",
            "height": "100%",
            "id": "btnEnable",
            "isVisible": true,
            "left": "50%",
            "onClick": controller.AS_Button_e27d44d4f4ae4384a6cd7af30d4e5ab7,
            "skin": "CopykonympsknBtn",
            "text": "Enable",
            "top": "0%",
            "width": "50%",
            "zIndex": 10
        }, controller.args[0], "btnEnable"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnEnable"), extendConfig({}, controller.args[2], "btnEnable"));
        var btnCancel = new kony.ui.Button(extendConfig({
            "focusSkin": "CopykonympsknBtnFA",
            "height": "100%",
            "id": "btnCancel",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_j59a88838022498caa8c99ee0182a7f7,
            "skin": "CopykonympsknBtnFA",
            "text": "Cancel",
            "top": "0%",
            "width": "50%",
            "zIndex": 10
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({}, controller.args[2], "btnCancel"));
        flxButtons.add(btnEnable, btnCancel);
        var flxPopUpTitle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flxPopUpTitle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPopUpTitle"), extendConfig({}, controller.args[1], "flxPopUpTitle"), extendConfig({}, controller.args[2], "flxPopUpTitle"));
        flxPopUpTitle.setDefaultUnit(kony.flex.DP);
        var lblHeader = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblHeader",
            "isVisible": true,
            "skin": "CopykonympslLabel1",
            "text": "Enable Touch ID",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeader"), extendConfig({}, controller.args[2], "lblHeader"));
        flxPopUpTitle.add(lblHeader);
        var flxEnableTouchIdPopupLine = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxEnableTouchIdPopupLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxLineBg",
            "top": "20%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEnableTouchIdPopupLine"), extendConfig({}, controller.args[1], "flxEnableTouchIdPopupLine"), extendConfig({}, controller.args[2], "flxEnableTouchIdPopupLine"));
        flxEnableTouchIdPopupLine.setDefaultUnit(kony.flex.DP);
        flxEnableTouchIdPopupLine.add();
        var imgEnableTouchIDIcon = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "40%",
            "height": "60dp",
            "id": "imgEnableTouchIDIcon",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "touchid_1.png",
            "width": "60dp",
            "zIndex": 10
        }, controller.args[0], "imgEnableTouchIDIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgEnableTouchIDIcon"), extendConfig({}, controller.args[2], "imgEnableTouchIDIcon"));
        var lblMessage = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "65%",
            "id": "lblMessage",
            "isVisible": true,
            "skin": "CopykonympslLabel2",
            "text": "You can use touch ID to Login",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage"), extendConfig({}, controller.args[2], "lblMessage"));
        flxEnableTouchIDPopup.add(flxButtons, flxPopUpTitle, flxEnableTouchIdPopupLine, imgEnableTouchIDIcon, lblMessage);
        var flxTouchIDPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "27%",
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "36%",
            "id": "flxTouchIDPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxDetailsScreen",
            "top": "0%",
            "width": "89%",
            "zIndex": 10
        }, controller.args[0], "flxTouchIDPopup"), extendConfig({}, controller.args[1], "flxTouchIDPopup"), extendConfig({}, controller.args[2], "flxTouchIDPopup"));
        flxTouchIDPopup.setDefaultUnit(kony.flex.DP);
        var flxTouchIDButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "25%",
            "id": "flxTouchIDButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTouchIDButtons"), extendConfig({}, controller.args[1], "flxTouchIDButtons"), extendConfig({}, controller.args[2], "flxTouchIDButtons"));
        flxTouchIDButtons.setDefaultUnit(kony.flex.DP);
        var btnTouchCancel = new kony.ui.Button(extendConfig({
            "focusSkin": "konympslButtonGlossRed4",
            "height": "100%",
            "id": "btnTouchCancel",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_d2e76fafcfee4c6e9ded5f5bb053a430,
            "skin": "CopykonympsknBtnFA",
            "text": "Cancel",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "btnTouchCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTouchCancel"), extendConfig({}, controller.args[2], "btnTouchCancel"));
        flxTouchIDButtons.add(btnTouchCancel);
        var flxTouchIDPopUpTitle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "flxTouchIDPopUpTitle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "konympkonympslFbox5",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTouchIDPopUpTitle"), extendConfig({}, controller.args[1], "flxTouchIDPopUpTitle"), extendConfig({}, controller.args[2], "flxTouchIDPopUpTitle"));
        flxTouchIDPopUpTitle.setDefaultUnit(kony.flex.DP);
        var lblTouchHeader = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblTouchHeader",
            "isVisible": true,
            "skin": "CopykonympslLabel1",
            "text": "Touch ID",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblTouchHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTouchHeader"), extendConfig({}, controller.args[2], "lblTouchHeader"));
        flxTouchIDPopUpTitle.add(lblTouchHeader);
        var flxTouchIDPopupLine = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxTouchIDPopupLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopykonympsknFlxLineBg",
            "top": "25%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTouchIDPopupLine"), extendConfig({}, controller.args[1], "flxTouchIDPopupLine"), extendConfig({}, controller.args[2], "flxTouchIDPopupLine"));
        flxTouchIDPopupLine.setDefaultUnit(kony.flex.DP);
        flxTouchIDPopupLine.add();
        var imgTouchIDPopupIcon = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "40%",
            "height": "50dp",
            "id": "imgTouchIDPopupIcon",
            "isVisible": true,
            "skin": "konympslImage0d81a3bc6f2ff42",
            "src": "touchid_1.png",
            "width": "50dp",
            "zIndex": 10
        }, controller.args[0], "imgTouchIDPopupIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgTouchIDPopupIcon"), extendConfig({}, controller.args[2], "imgTouchIDPopupIcon"));
        var lblTouchMessage = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "65%",
            "id": "lblTouchMessage",
            "isVisible": true,
            "skin": "CopykonympslLabel1",
            "text": "Use Touch ID to Login",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblTouchMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTouchMessage"), extendConfig({}, controller.args[2], "lblTouchMessage"));
        flxTouchIDPopup.add(flxTouchIDButtons, flxTouchIDPopUpTitle, flxTouchIDPopupLine, imgTouchIDPopupIcon, lblTouchMessage);
        flxPopups.add(flxEnableTouchIDPopup, flxTouchIDPopup);
        flxLogin.add(flxBottomContainer, flxlogo, flxTouchId, flxSocialLogin, flxCredentials, flxPopups);
        var flxIdentity = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxIdentity",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxIdentity"), extendConfig({}, controller.args[1], "flxIdentity"), extendConfig({}, controller.args[2], "flxIdentity"));
        flxIdentity.setDefaultUnit(kony.flex.DP);
        var brwsrIdentity = new kony.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableZoom": false,
            "height": "100%",
            "htmlString": "Please wait !!\n",
            "id": "brwsrIdentity",
            "isVisible": true,
            "left": "0%",
            "top": "0%",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "brwsrIdentity"), extendConfig({}, controller.args[1], "brwsrIdentity"), extendConfig({}, controller.args[2], "brwsrIdentity"));
        var flxClose = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxClose",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_ca02a61dc5bc4eadb63fd6709d5be8a8,
            "right": "2%",
            "skin": "konympkonympslFbox5",
            "top": "0.50%",
            "width": "30dp",
            "zIndex": 101
        }, controller.args[0], "flxClose"), extendConfig({}, controller.args[1], "flxClose"), extendConfig({}, controller.args[2], "flxClose"));
        flxClose.setDefaultUnit(kony.flex.DP);
        var imgClose = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgClose",
            "isVisible": true,
            "left": "0%",
            "src": "clear_input_icon_1.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 101
        }, controller.args[0], "imgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClose"), extendConfig({}, controller.args[2], "imgClose"));
        flxClose.add(imgClose);
        flxIdentity.add(brwsrIdentity, flxClose);
        login.add(flxLogin, flxIdentity);
        return login;
    }
})