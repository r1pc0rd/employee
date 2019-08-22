define("frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var flexLoginMain = new kony.ui.FlexContainer({
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "65%",
                "id": "flexLoginMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxLogin",
                "width": "38%",
                "zIndex": 1
            }, {}, {});
            flexLoginMain.setDefaultUnit(kony.flex.DP);
            var flexLoginEventLogo = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "15%",
                "id": "flexLoginEventLogo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknHeaderFlx",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexLoginEventLogo.setDefaultUnit(kony.flex.DP);
            var imgLogo = new kony.ui.Image2({
                "centerY": "52%",
                "height": "50dp",
                "id": "imgLogo",
                "isVisible": true,
                "left": "15dp",
                "skin": "slImage",
                "src": "employee_directory2.png",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexLoginEventLogo.add(imgLogo);
            var flexLoginCred = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "83%",
                "id": "flexLoginCred",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxCreds",
                "top": "15%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexLoginCred.setDefaultUnit(kony.flex.DP);
            var lbklSignInTitle = new kony.ui.Label({
                "centerX": "50%",
                "height": "8%",
                "id": "lbklSignInTitle",
                "isVisible": true,
                "left": "77dp",
                "skin": "sknLbl",
                "text": "Sign in to your account",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtUser = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "txtFocusLogin",
                "height": "13%",
                "id": "txtUser",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "placeholder": "Enter your email ID",
                "secureTextEntry": false,
                "skin": "sknTexBxUserid",
                "text": "empdir_admin@kony.com",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "6%",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var flexPass = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "13%",
                "id": "flexPass",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "29dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flexPass.setDefaultUnit(kony.flex.DP);
            var txtPassWord = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "txtFocusLogin",
                "height": "100%",
                "id": "txtPassWord",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "maxTextLength": null,
                "onDone": controller.AS_TextField_f38a41c004c54a74a9ab7cbda138505c,
                "placeholder": "Password",
                "secureTextEntry": true,
                "skin": "sknTexBxUserid",
                "text": "Empdir@1",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var txtPasswordShow = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "txtFocusLogin",
                "height": "100%",
                "id": "txtPasswordShow",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "maxTextLength": null,
                "secureTextEntry": false,
                "skin": "sknTexBxUserid",
                "text": "Empdir@1",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var flxHideNSHow = new kony.ui.FlexContainer({
                "centerY": "50%",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxHideNSHow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_f242b9953b724996baa03da20fbb176e,
                "right": "2.50%",
                "skin": "slFbox",
                "top": "8dp",
                "width": "30dp",
                "zIndex": 10
            }, {}, {});
            flxHideNSHow.setDefaultUnit(kony.flex.DP);
            var imageShowPassword = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imageShowPassword",
                "isVisible": true,
                "right": "2.50%",
                "skin": "slImage",
                "src": "eyeicon.png",
                "top": "19dp",
                "width": "100%",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHideNSHow.add(imageShowPassword);
            flexPass.add(txtPassWord, txtPasswordShow, flxHideNSHow);
            var btnSubmit = new kony.ui.Button({
                "focusSkin": "CopydefBtnNormal0ed0a68b2c3ae44",
                "height": "12%",
                "id": "btnSubmit",
                "isVisible": true,
                "left": "5%",
                "onClick": controller.AS_Button_h6db9ecbd776435ea976fd9cc7c0e167,
                "skin": "sknBtnSubmit",
                "text": "Submit",
                "top": "12%",
                "width": "25%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopydefBtnNormal0f551a569bd1c43"
            });
            var lblError = new kony.ui.Label({
                "centerX": "50%",
                "height": "10%",
                "id": "lblError",
                "isVisible": true,
                "left": "172dp",
                "skin": "sknLblError",
                "text": "The email and password combination you entered is not valid. Please tyr again.",
                "top": "5%",
                "width": "70%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexLoginCred.add(lbklSignInTitle, txtUser, flexPass, btnSubmit, lblError);
            flexLoginMain.add(flexLoginEventLogo, flexLoginCred);
            var lblCopyright = new kony.ui.Label({
                "centerX": "50%",
                "height": "10%",
                "id": "lblCopyright",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLblCpoyRight",
                "text": "© Copyright 2018 Kony, Inc. All Rights Reserved.",
                "top": "90%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1350,
                "480": {
                    "flexLoginMain": {
                        "height": {
                            "type": "string",
                            "value": "450px"
                        },
                        "width": {
                            "type": "string",
                            "value": "90%"
                        }
                    },
                    "imgLogo": {
                        "left": {
                            "type": "string",
                            "value": "15dp"
                        }
                    },
                    "flexLoginCred": {
                        "height": {
                            "type": "string",
                            "value": "85%"
                        }
                    },
                    "btnSubmit": {
                        "height": {
                            "type": "string",
                            "value": "11%"
                        }
                    },
                    "lblError": {
                        "height": {
                            "type": "string",
                            "value": "12%"
                        },
                        "width": {
                            "type": "string",
                            "value": "72%"
                        }
                    },
                    "lblCopyright": {
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "isVisible": false,
                        "top": {
                            "type": "string",
                            "value": "95%"
                        }
                    }
                },
                "780": {
                    "flexLoginMain": {
                        "height": {
                            "type": "string",
                            "value": "470px"
                        },
                        "width": {
                            "type": "string",
                            "value": "65%"
                        }
                    },
                    "imgLogo": {
                        "left": {
                            "type": "string",
                            "value": "5dp"
                        }
                    },
                    "flexLoginCred": {
                        "height": {
                            "type": "string",
                            "value": "85%"
                        }
                    },
                    "lblCopyright": {}
                },
                "1350": {
                    "flexLoginMain": {
                        "height": {
                            "type": "string",
                            "value": "480px"
                        }
                    },
                    "flexLoginEventLogo": {
                        "height": {
                            "type": "string",
                            "value": "15%"
                        }
                    },
                    "imgLogo": {
                        "left": {
                            "type": "string",
                            "value": "15dp"
                        }
                    },
                    "flexLoginCred": {
                        "height": {
                            "type": "string",
                            "value": "85%"
                        }
                    },
                    "lbklSignInTitle": {
                        "skin": "sknLbl",
                        "top": {
                            "type": "string",
                            "value": "4%"
                        }
                    },
                    "txtPassWord": {
                        "left": {
                            "type": "number",
                            "value": "0"
                        },
                        "width": {
                            "type": "string",
                            "value": "99%"
                        }
                    },
                    "txtPasswordShow": {
                        "width": {
                            "type": "string",
                            "value": "99%"
                        }
                    },
                    "btnSubmit": {
                        "height": {
                            "type": "string",
                            "value": "11%"
                        },
                        "width": {
                            "type": "string",
                            "value": "25%"
                        }
                    }
                }
            }
            this.add(flexLoginMain, lblCopyright);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "enabledForIdleTimeout": false,
            "id": "frmLogin",
            "init": controller.AS_Form_g04837b3351e4f77b7068d625f15c457,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmf2f1f1",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [480, 780, 1350]
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});