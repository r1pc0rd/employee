define("frmEmpDetails", function() {
    return function(controller) {
        function addWidgetsfrmEmpDetails() {
            this.setDefaultUnit(kony.flex.PX);
            var flxRoot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1032px",
                "id": "flxRoot",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "minWidth": "1200px",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_cbf161949265483fb3a25ffda5bad164,
                "skin": "sknFlxLightGrey",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoot.setDefaultUnit(kony.flex.DP);
            var flxMenuContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMenuContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTransparentBG",
                "top": "88dp",
                "width": "0%",
                "zIndex": 200
            }, {}, {});
            flxMenuContainer.setDefaultUnit(kony.flex.DP);
            var leftmenu = new com.sa.leftmenu({
                "clipBounds": true,
                "height": "100%",
                "id": "leftmenu",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-260dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxLeftMenu",
                "top": "0px",
                "width": "260px",
                "zIndex": 10,
                "overrides": {
                    "imgDirectory": {
                        "src": "list_icon_hover.png"
                    },
                    "imgYellowBorderSettings": {
                        "isVisible": false
                    },
                    "leftmenu": {
                        "left": "-260dp",
                        "top": "0px",
                        "width": "260px",
                        "zIndex": 10
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            leftmenu.DirectoryMenuItemMouseover.onClick = controller.AS_FlexContainer_af9b92edea594f6ebd51d02273df024b;
            leftmenu.SettingsMenu.onClick = controller.AS_FlexContainer_bc7c86f86f9e40c7aac552e1160a9816;
            var flxGreyBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxGreyBg",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_fb0d86edfa714e6ca077509680ea4bb7,
                "skin": "sknFlxOverlayTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGreyBg.setDefaultUnit(kony.flex.DP);
            flxGreyBg.add();
            flxMenuContainer.add(leftmenu, flxGreyBg);
            var leftmenu2 = new com.sa.leftmenu({
                "clipBounds": true,
                "height": "100%",
                "id": "leftmenu2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxLeftMenu",
                "top": "88px",
                "width": "260px",
                "zIndex": 100,
                "overrides": {
                    "imgDirectory": {
                        "src": "list_icon_hover.png"
                    },
                    "imgYellowBorderSettings": {
                        "isVisible": false
                    },
                    "leftmenu": {
                        "isVisible": false,
                        "left": "0dp",
                        "top": "88px",
                        "width": "260px"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            leftmenu2.SettingsMenu.onClick = controller.AS_FlexContainer_f34ed8b4c5f448859b3e5d1b5f16eb6a;
            var empheader = new com.konysa.empheader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60px",
                "id": "empheader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "skin2f2bc440",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "empheader": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            empheader.onUserFlxClick = controller.AS_UWI_bcf419b0a31d4368b84adca095b91995;
            var empHeader1 = new com.konyemp.empHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60px",
                "id": "empHeader1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "skin2f2bc440",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "empHeader": {
                        "height": "60px",
                        "isVisible": true
                    },
                    "empTextMoblie": {
                        "isVisible": false
                    },
                    "flxHamburger": {
                        "isVisible": false
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            empHeader1.flxHamburger.onClick = controller.AS_FlexContainer_c752f79ba4d9490db0559e601134131e;
            empHeader1.flxUserInfo.onClick = controller.AS_FlexContainer_bdbcaf843f394502a060e2104b18c70c;
            var flxProfileContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "902px",
                "id": "flxProfileContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "308dp",
                "isModalContainer": false,
                "right": "48px",
                "skin": "slFbox",
                "top": "130dp",
                "zIndex": 100
            }, {}, {});
            flxProfileContainer.setDefaultUnit(kony.flex.DP);
            var flxEditProfileHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "skind188dcd0",
                "height": "40px",
                "id": "flxEditProfileHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "skind188dcd0",
                "top": "0%",
                "width": "100%",
                "zIndex": 0
            }, {}, {});
            flxEditProfileHeader.setDefaultUnit(kony.flex.DP);
            var flxClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "35px",
                "id": "flxClose",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0px",
                "skin": "sknFlxTransparentBGPointer",
                "width": "114px",
                "zIndex": 2
            }, {}, {
                "hoverSkin": "CopysknFlxTransparentBGPointer0df561a4a32cf4c"
            });
            flxClose.setDefaultUnit(kony.flex.DP);
            var btnClose = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "35px",
                "id": "btnClose",
                "isVisible": true,
                "right": "0px",
                "skin": "skind18affb0",
                "text": "Close",
                "width": "114px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "Copyskind0edd600b098d14a"
            });
            flxClose.add(btnClose);
            var flxEditSave = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0e0221aa01c724c",
                "height": "35px",
                "id": "flxEditSave",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0px",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_g95363b8bca440fba8c99a9559552407,
                "skin": "sknFlxEditSave",
                "top": "780px",
                "width": "114px",
                "zIndex": 1
            }, {}, {});
            flxEditSave.setDefaultUnit(kony.flex.DP);
            var btnEdiSaveBottom = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "CopydefBtnFocus0fdf392e1cc2240",
                "height": "35px",
                "id": "btnEdiSaveBottom",
                "isVisible": true,
                "onClick": controller.AS_Button_acda5789137445ab8ca71f23a1c26842,
                "skin": "sknBtnEditSaveBottom",
                "text": "Save",
                "width": "114px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopydefBtnNormal0ce7fb8f097a140"
            });
            flxEditSave.add(btnEdiSaveBottom);
            var flxEditSaveTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "55%",
                "clipBounds": true,
                "height": "35px",
                "id": "flxEditSaveTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "130px",
                "skin": "sknFlxTransparentBGPointer",
                "width": "114px",
                "zIndex": 2
            }, {}, {
                "hoverSkin": "CopysknFlxTransparentBGPointer0eb50a92ed66f4f"
            });
            flxEditSaveTop.setDefaultUnit(kony.flex.DP);
            var btnEdiSaveTop = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "height": "35px",
                "id": "btnEdiSaveTop",
                "isVisible": true,
                "skin": "skind18affb0",
                "text": "Save",
                "top": 0,
                "width": "114px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "Copyskind0bda01e89883f4f"
            });
            flxEditSaveTop.add(btnEdiSaveTop);
            var lblEditProfileHeading = new kony.ui.Label({
                "height": "100%",
                "id": "lblEditProfileHeading",
                "isVisible": true,
                "left": "0%",
                "skin": "skind189ee40",
                "text": "Edit Profile",
                "top": "3.92%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var profileDetails = new kony.ui.Label({
                "height": "100%",
                "id": "profileDetails",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknLblProfileHeading",
                "text": "Profile Details",
                "top": "4%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEditProfileHeader.add(flxClose, flxEditSave, flxEditSaveTop, lblEditProfileHeading, profileDetails);
            var EditProfile = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "focusSkin": "Copyskind0dfc826b58c3845",
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "EditProfile",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0px",
                "minWidth": "600px",
                "pagingEnabled": false,
                "right": "-12px",
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "Copyskind0d0acfc65c9514c",
                "top": "0px",
                "verticalScrollIndicator": true,
                "zIndex": 0
            }, {}, {});
            EditProfile.setDefaultUnit(kony.flex.DP);
            var flxEmployeeInfo = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "175px",
                "id": "flxEmployeeInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 35
            }, {}, {});
            flxEmployeeInfo.setDefaultUnit(kony.flex.DP);
            var flxProfilePickSelection = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxProfilePickSelection",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxTransparentBGPointer",
                "top": "0%",
                "width": "148px",
                "zIndex": 23
            }, {}, {});
            flxProfilePickSelection.setDefaultUnit(kony.flex.DP);
            var flxProfileImage = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "140px",
                "id": "flxProfileImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "skinFlexRoundGreyBorder",
                "top": "5px",
                "width": "148px"
            }, {}, {});
            flxProfileImage.setDefaultUnit(kony.flex.DP);
            var imgEmpImage = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgEmpImage",
                "isVisible": true,
                "skin": "slImage",
                "src": "imagedrag.png",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProfileImage.add(imgEmpImage);
            var UpdateProfilePictu = new kony.ui.Label({
                "centerX": "50%",
                "height": "12.43%",
                "id": "UpdateProfilePictu",
                "isVisible": true,
                "skin": "skind1970da0",
                "text": "Update Profile Picture",
                "top": "5px",
                "width": "144px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProfilePickSelection.add(flxProfileImage, UpdateProfilePictu);
            var flxEmpNameDept = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxEmpNameDept",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "301px",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "50%",
                "zIndex": 12
            }, {}, {});
            flxEmpNameDept.setDefaultUnit(kony.flex.DP);
            var lblTitleFullName = new kony.ui.Label({
                "centerY": "45%",
                "height": "40px",
                "id": "lblTitleFullName",
                "isVisible": true,
                "left": "0%",
                "skin": "skind189ee40",
                "text": "Jeremiah Crosman",
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTitleDesignation = new kony.ui.Label({
                "centerY": "60%",
                "height": "30px",
                "id": "lblTitleDesignation",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18e5b10",
                "text": "IT Administrator",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmpNameDept.add(lblTitleFullName, lblTitleDesignation);
            flxEmployeeInfo.add(flxProfilePickSelection, flxEmpNameDept);
            var lineDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "skind1892af1",
                "height": "1px",
                "id": "lineDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "skind1892af1",
                "top": "0.50%",
                "width": "88.79%",
                "zIndex": 1
            }, {}, {});
            lineDummy.setDefaultUnit(kony.flex.DP);
            lineDummy.add();
            var flxEmployeeDetails = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "510px",
                "id": "flxEmployeeDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 35
            }, {}, {});
            flxEmployeeDetails.setDefaultUnit(kony.flex.DP);
            var flxEmpId = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "50px",
                "id": "flxEmpId",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEmpId.setDefaultUnit(kony.flex.DP);
            var lblEmpId = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmpId",
                "isVisible": true,
                "left": "0px",
                "skin": "skind18dbed0",
                "text": "ID",
                "top": "0%",
                "width": "300px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtEmpId = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "skind1938b30",
                "height": "100%",
                "id": "txtEmpId",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "301px",
                "placeholder": "Employee ID",
                "right": "0px",
                "secureTextEntry": false,
                "skin": "sknTxtBoxWhiteBG646e83",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "zIndex": 21
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblEmpIdValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmpIdValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "CopysknEmpDetailsValue0b6c9cf0860dd49",
                "text": "Employee ID",
                "top": "0%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmpId.add(lblEmpId, txtEmpId, lblEmpIdValue);
            var lblHLine0 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine0",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxFirstName = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "50px",
                "id": "flxFirstName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFirstName.setDefaultUnit(kony.flex.DP);
            var lblEmployeeFirstName = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmployeeFirstName",
                "isVisible": true,
                "left": "0px",
                "skin": "skind18dbed0",
                "text": "First Name",
                "top": "0%",
                "width": "300px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtFirstName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "skind1938b30",
                "height": "100%",
                "id": "txtFirstName",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "301px",
                "right": "0px",
                "secureTextEntry": false,
                "skin": "skind1938b30",
                "text": "Jeremaiah",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "zIndex": 21
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblEmployeeFirstNameValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmployeeFirstNameValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "First Name",
                "top": "0%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFirstName.add(lblEmployeeFirstName, txtFirstName, lblEmployeeFirstNameValue);
            var lblHLine1 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLastName = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "50px",
                "id": "flxLastName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLastName.setDefaultUnit(kony.flex.DP);
            var lblLastName = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblLastName",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Last Name",
                "width": "28.57%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtLastName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "skind1938b30",
                "height": "100%",
                "id": "txtLastName",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "301px",
                "right": "0px",
                "secureTextEntry": false,
                "skin": "skind1938b30",
                "text": "Crosman",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "zIndex": 21
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblLastNameValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblLastNameValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Last Name",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLastName.add(lblLastName, txtLastName, lblLastNameValue);
            var lblHLine2 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDesignation = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "50px",
                "id": "flxDesignation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDesignation.setDefaultUnit(kony.flex.DP);
            var lblDesignation = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblDesignation",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Designation",
                "width": "28.57%",
                "zIndex": 13
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var listboxDesignation = new kony.ui.ListBox({
                "centerY": "50%",
                "focusSkin": "defListBoxFocus",
                "height": "100%",
                "id": "listboxDesignation",
                "isVisible": false,
                "left": "301px",
                "masterData": [
                    ["lb1", "Placeholder One"],
                    ["lb2", "Placeholder Two"],
                    ["lb3", "Placeholder Three"]
                ],
                "right": "0px",
                "selectedKey": "lb1",
                "selectedKeyValue": ["lb1", "Placeholder One"],
                "skin": "sknListBox",
                "zIndex": 35
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            var lblDesignationValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblDesignationValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Designation",
                "width": "70%",
                "zIndex": 13
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDesignation.add(lblDesignation, listboxDesignation, lblDesignationValue);
            var lblHLine3 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine3",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDepartment = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "50px",
                "id": "flxDepartment",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDepartment.setDefaultUnit(kony.flex.DP);
            var lblDepartment = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblDepartment",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Department",
                "width": "28.57%",
                "zIndex": 15
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var listboxDepartment = new kony.ui.ListBox({
                "centerY": "50%",
                "focusSkin": "defListBoxFocus",
                "height": "100%",
                "id": "listboxDepartment",
                "isVisible": false,
                "left": "301px",
                "masterData": [
                    ["lb1", "Placeholder One"],
                    ["lb2", "Placeholder Two"],
                    ["lb3", "Placeholder Three"]
                ],
                "right": "0px",
                "skin": "sknListBox",
                "zIndex": 35
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            var lblDepartmentValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblDepartmentValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Department",
                "zIndex": 15
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDepartment.add(lblDepartment, listboxDepartment, lblDepartmentValue);
            var lblHLine4 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine4",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxReporting = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "50px",
                "id": "flxReporting",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReporting.setDefaultUnit(kony.flex.DP);
            var lblReportingTo = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblReportingTo",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Reporting To",
                "width": "28.57%",
                "zIndex": 16
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var listboxManager = new kony.ui.ListBox({
                "centerY": "50%",
                "focusSkin": "defListBoxFocus",
                "height": "100%",
                "id": "listboxManager",
                "isVisible": false,
                "left": "301px",
                "masterData": [
                    ["lb1", "Placeholder One"],
                    ["lb2", "Placeholder Two"],
                    ["lb3", "Placeholder Three"]
                ],
                "right": "0px",
                "skin": "sknListBox",
                "zIndex": 35
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            var lblReportingToValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblReportingToValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Reporting To",
                "zIndex": 16
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxReporting.add(lblReportingTo, listboxManager, lblReportingToValue);
            var lblHLine5 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine5",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxMobNumber = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "50px",
                "id": "flxMobNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMobNumber.setDefaultUnit(kony.flex.DP);
            var lblMobileNumber = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblMobileNumber",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Mobile Number",
                "width": "28.57%",
                "zIndex": 19
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtMobileNumber = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "skind1938b30",
                "height": "100%",
                "id": "txtMobileNumber",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "301px",
                "right": "0px",
                "secureTextEntry": false,
                "skin": "skind1938b30",
                "text": "040 66784675",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "zIndex": 21
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblMobileNumberValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblMobileNumberValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Reporting To",
                "zIndex": 16
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMobNumber.add(lblMobileNumber, txtMobileNumber, lblMobileNumberValue);
            var lblHLine6 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine6",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxWorkNumber = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "50px",
                "id": "flxWorkNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWorkNumber.setDefaultUnit(kony.flex.DP);
            var lblWorkNumber = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblWorkNumber",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Work Number",
                "width": "28.57%",
                "zIndex": 20
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtWorkNumber = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "skind1938b30",
                "height": "100%",
                "id": "txtWorkNumber",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "301px",
                "right": "0px",
                "secureTextEntry": false,
                "skin": "skind1938b30",
                "text": "9823874923",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "zIndex": 21
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblWorkNumberValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblWorkNumberValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Work Number",
                "zIndex": 20
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWorkNumber.add(lblWorkNumber, txtWorkNumber, lblWorkNumberValue);
            var lblHLine7 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine7",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEmail = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "50px",
                "id": "flxEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEmail.setDefaultUnit(kony.flex.DP);
            var lblEmailId = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmailId",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Email ID",
                "width": "28.57%",
                "zIndex": 19
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtEmailId = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "skind1938b30",
                "height": "100%",
                "id": "txtEmailId",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "301px",
                "right": "0px",
                "secureTextEntry": false,
                "skin": "skind1938b30",
                "text": "jeremaiah@kony.com",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "zIndex": 21
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblEmailIdValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmailIdValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknEmpDetailsValue",
                "text": "Email ID",
                "zIndex": 19
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmail.add(lblEmailId, txtEmailId, lblEmailIdValue);
            var blHLine8 = new kony.ui.Label({
                "height": "1px",
                "id": "blHLine8",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLocation = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "50px",
                "id": "flxLocation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLocation.setDefaultUnit(kony.flex.PX);
            var lblLocation = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblLocation",
                "isVisible": true,
                "left": "0%",
                "skin": "skind18dbed0",
                "text": "Location",
                "width": "28.57%",
                "zIndex": 20
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var listBoxLocation = new kony.ui.ListBox({
                "centerY": "50%",
                "focusSkin": "CopydefListBoxFocus0iafe70309c7b48",
                "height": "100%",
                "id": "listBoxLocation",
                "isVisible": false,
                "left": "301px",
                "masterData": [
                    ["lb1", "Placeholder One"],
                    ["lb2", "Placeholder Two"],
                    ["lb3", "Placeholder Three"]
                ],
                "right": "0px",
                "skin": "sknListBoxWhiteBGFont646e83",
                "zIndex": 35
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            var lblLocationValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblLocationValue",
                "isVisible": true,
                "left": "301px",
                "right": "0px",
                "skin": "sknLblTransBGFont646e83",
                "text": "Location",
                "zIndex": 20
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLocation.add(lblLocation, listBoxLocation, lblLocationValue);
            var lblHLine9 = new kony.ui.Label({
                "height": "1px",
                "id": "lblHLine9",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHLine",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmployeeDetails.add(flxEmpId, lblHLine0, flxFirstName, lblHLine1, flxLastName, lblHLine2, flxDesignation, lblHLine3, flxDepartment, lblHLine4, flxReporting, lblHLine5, flxMobNumber, lblHLine6, flxWorkNumber, lblHLine7, flxEmail, blHLine8, flxLocation, lblHLine9);
            var lblFooter = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblFooter",
                "isVisible": true,
                "skin": "sknLblFooter",
                "text": "© Copyright 2018 Kony, Inc. All Rights Reserved.",
                "top": "100px",
                "width": "100%",
                "zIndex": 35
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDummey = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDummey",
                "isVisible": true,
                "skin": "sknLblFooter",
                "top": "20px",
                "width": "100%",
                "zIndex": 35
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            EditProfile.add(flxEmployeeInfo, lineDummy, flxEmployeeDetails, lblFooter, lblDummey);
            flxProfileContainer.add(flxEditProfileHeader, EditProfile);
            var flxViewProfileHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60px",
                "id": "flxViewProfileHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "11dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0g883b46f071241",
                "top": "3dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxViewProfileHeader.setDefaultUnit(kony.flex.DP);
            var lblViewProfile = new kony.ui.Label({
                "id": "lblViewProfile",
                "isVisible": true,
                "left": "39dp",
                "skin": "CopydefLabel0b28822d0a7bf40",
                "text": "Label",
                "top": "27dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCloseDetails = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxCloseDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "328dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_e6b995af4c0d464cb982413eefeadf49,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCloseDetails.setDefaultUnit(kony.flex.DP);
            var imgCloseFilter = new kony.ui.Image2({
                "height": "150dp",
                "id": "imgCloseFilter",
                "isVisible": true,
                "left": "379dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "1dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCloseDetails.add(imgCloseFilter);
            var btnEdit = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnEdit",
                "isVisible": true,
                "left": "331dp",
                "onClick": controller.AS_Button_g7d68fc5faa140039a83143173f0d621,
                "skin": "sknEdit",
                "text": "Button",
                "top": "22dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30px",
                "id": "flxHamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "32px",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_bb2ed5886f354b238a8ebb55b3bd91fc,
                "skin": "slFbox",
                "top": "30px",
                "width": "32px",
                "zIndex": 3
            }, {}, {});
            flxHamburger.setDefaultUnit(kony.flex.DP);
            var imgHamburger = new kony.ui.Image2({
                "height": "100%",
                "id": "imgHamburger",
                "isVisible": true,
                "left": "0px",
                "skin": "slImage",
                "src": "hamburger_menu.png",
                "top": "0px",
                "width": "100%",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHamburger.add(imgHamburger);
            flxViewProfileHeader.add(lblViewProfile, flxCloseDetails, btnEdit, flxHamburger);
            var flxEditHeader = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxEditHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "11dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0g883b46f071241",
                "top": "3dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxEditHeader.setDefaultUnit(kony.flex.DP);
            var lblEditMode = new kony.ui.Label({
                "id": "lblEditMode",
                "isVisible": true,
                "left": "39dp",
                "skin": "defLabel",
                "text": "Label",
                "top": "27dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCloseEditMode = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxCloseEditMode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "328dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_j7c3a2b805d94a29bf5cdf039ce4aa88,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCloseEditMode.setDefaultUnit(kony.flex.DP);
            var CopyimgCloseFilter0add9bba11a0247 = new kony.ui.Image2({
                "height": "150dp",
                "id": "CopyimgCloseFilter0add9bba11a0247",
                "isVisible": true,
                "left": "379dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "1dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCloseEditMode.add(CopyimgCloseFilter0add9bba11a0247);
            var btnSaveMode = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnSaveMode",
                "isVisible": true,
                "left": "331dp",
                "onClick": controller.AS_Button_cc4061dc5dfd4c5ebd2770848f8eb330,
                "skin": "sknEdit",
                "text": "Button",
                "top": "22dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEditHeader.add(lblEditMode, flxCloseEditMode, btnSaveMode);
            flxRoot.add(flxMenuContainer, leftmenu2, empheader, empHeader1, flxProfileContainer, flxViewProfileHeader, flxEditHeader);
            var flxOverlay = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1032px",
                "id": "flxOverlay",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_hdb2384aecd343e5b59944a15403dc35,
                "skin": "sknFlxOverlayTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxOverlay.setDefaultUnit(kony.flex.DP);
            var flxProfileMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "190px",
                "id": "flxProfileMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "40px",
                "skin": "sknFlxProfileMain",
                "top": "57px",
                "width": "154px",
                "zIndex": 100
            }, {}, {});
            flxProfileMain.setDefaultUnit(kony.flex.DP);
            var imgProfileDropDown = new kony.ui.Image2({
                "centerX": "50%",
                "height": "15px",
                "id": "imgProfileDropDown",
                "isVisible": true,
                "left": "6dp",
                "skin": "slImage",
                "src": "drop_down_menu.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxProfile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxProfile",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxProfile",
                "top": "-5px",
                "width": "100%",
                "zIndex": 500
            }, {}, {});
            flxProfile.setDefaultUnit(kony.flex.DP);
            var flxEditProfile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35px",
                "id": "flxEditProfile",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20px",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15px",
                "width": "120px",
                "zIndex": 50
            }, {}, {});
            flxEditProfile.setDefaultUnit(kony.flex.DP);
            var lblEditProfile = new kony.ui.Label({
                "centerY": "50%",
                "height": "18px",
                "id": "lblEditProfile",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblProfileNormal",
                "text": "Edit Profile",
                "top": "6dp",
                "width": "120px",
                "zIndex": 50
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "sknLablProfileFocus"
            });
            flxEditProfile.add(lblEditProfile);
            var lblLineEditProfile = new kony.ui.Label({
                "height": "1px",
                "id": "lblLineEditProfile",
                "isVisible": true,
                "left": "17px",
                "skin": "SknLblLine",
                "top": "0px",
                "width": "120px",
                "zIndex": 500
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLogout = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35px",
                "id": "flxLogout",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20px",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_bf0e3552f7da49e3a72d795b03d899f9,
                "skin": "slFbox",
                "top": "0px",
                "width": "120px",
                "zIndex": 1
            }, {}, {});
            flxLogout.setDefaultUnit(kony.flex.DP);
            var lblLogout = new kony.ui.Label({
                "centerY": "50%",
                "height": "100px",
                "id": "lblLogout",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblProfileNormal",
                "text": "Logout",
                "top": "6dp",
                "width": "120px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "sknLablProfileFocus"
            });
            flxLogout.add(lblLogout);
            var lblLineLogout = new kony.ui.Label({
                "height": "1px",
                "id": "lblLineLogout",
                "isVisible": true,
                "left": "17px",
                "skin": "SknLblLine",
                "top": "0px",
                "width": "120px",
                "zIndex": 500
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProfile.add(flxEditProfile, lblLineEditProfile, flxLogout, lblLineLogout);
            flxProfileMain.add(imgProfileDropDown, flxProfile);
            flxOverlay.add(flxProfileMain);
            var flxAlertContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": 300,
                "clipBounds": true,
                "height": "1450px",
                "id": "flxAlertContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "minWidth": "1372px",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_a5f3ee6c3fba4645a931e6fc41cb0e38,
                "skin": "sknFlxOverlayTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxAlertContainer.setDefaultUnit(kony.flex.DP);
            var flxAlertMasterContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "180px",
                "id": "flxAlertMasterContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "200px",
                "width": "300px",
                "zIndex": 1
            }, {}, {});
            flxAlertMasterContainer.setDefaultUnit(kony.flex.DP);
            var alertmsg = new com.konyemp.alertmsg.alertmsg({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "alertmsg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxOverlayTrans",
                "width": "100%",
                "overrides": {
                    "alertmsg": {
                        "left": "viz.val_cleared",
                        "right": "viz.val_cleared",
                        "top": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            alertmsg.onAlertFlexClick = controller.AS_UWI_j026c7d502e743ff87894936e1be76c9;
            flxAlertMasterContainer.add(alertmsg);
            flxAlertContainer.add(flxAlertMasterContainer);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1350,
                "480": {
                    "flxRoot": {},
                    "flxMenuContainer": {
                        "isVisible": true,
                        "top": {
                            "type": "string",
                            "value": "60dp"
                        }
                    },
                    "leftmenu": {
                        "isVisible": true
                    },
                    "leftmenu2": {
                        "left": {
                            "type": "string",
                            "value": "-260dp"
                        },
                        "instanceId": "leftmenu2"
                    },
                    "empHeader1": {
                        "isVisible": false,
                        "instanceId": "empHeader1"
                    },
                    "empHeader1.flxHamburger": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "isVisible": true
                    },
                    "empHeader1.flxLogo": {
                        "width": {
                            "type": "string",
                            "value": "100px"
                        }
                    },
                    "empHeader1.flxUserInfo": {
                        "isVisible": false,
                        "right": {
                            "type": "string",
                            "value": "40px"
                        }
                    },
                    "empHeader1.imgHeading": {
                        "isVisible": false
                    },
                    "flxProfileContainer": {
                        "left": {
                            "type": "string",
                            "value": "15dp"
                        },
                        "right": {
                            "type": "string",
                            "value": "20px"
                        },
                        "top": {
                            "type": "string",
                            "value": "60dp"
                        }
                    },
                    "flxEditProfileHeader": {
                        "isVisible": false,
                        "top": {
                            "type": "string",
                            "value": "9px"
                        }
                    },
                    "EditProfile": {
                        "minWidth": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "-15px"
                        },
                        "top": {
                            "type": "string",
                            "value": "0px"
                        }
                    },
                    "flxEmployeeInfo": {
                        "height": {
                            "type": "string",
                            "value": "180px"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "22px"
                        }
                    },
                    "flxProfilePickSelection": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "125px"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "160px"
                        }
                    },
                    "flxProfileImage": {
                        "height": {
                            "type": "string",
                            "value": "100px"
                        },
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100px"
                        }
                    },
                    "UpdateProfilePictu": {
                        "height": {
                            "type": "string",
                            "value": "20dp"
                        }
                    },
                    "flxEmpNameDept": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "55px"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblTitleFullName": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                        "height": {
                            "type": "string",
                            "value": "30px"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblTitleDesignation": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                        "height": {
                            "type": "string",
                            "value": "25px"
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        }
                    },
                    "lineDummy": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "isVisible": true,
                        "top": {
                            "type": "string",
                            "value": "9px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "flxEmployeeDetails": {
                        "height": {
                            "type": "string",
                            "value": "927px"
                        },
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "20px"
                        },
                        "width": {
                            "type": "string",
                            "value": "97%"
                        }
                    },
                    "flxEmpId": {
                        "height": {
                            "type": "string",
                            "value": "75px"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL
                    },
                    "lblEmpId": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "25px"
                        },
                        "skin": "sknLblFontA1A1A1",
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "txtEmpId": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknTxtBoxWhiteBG646e83",
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblEmpIdValue": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknLblTransBGFont646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblHLine0": {
                        "isVisible": false
                    },
                    "flxFirstName": {
                        "height": {
                            "type": "string",
                            "value": "75px"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "top": {
                            "type": "string",
                            "value": "18dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblEmployeeFirstName": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "25dp"
                        },
                        "skin": "sknLblFontA1A1A1",
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "txtFirstName": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknTxtBoxWhiteBG646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblEmployeeFirstNameValue": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "right": {
                            "type": "string",
                            "value": ""
                        },
                        "skin": "sknLblTransBGFont646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblHLine1": {
                        "isVisible": false
                    },
                    "flxLastName": {
                        "height": {
                            "type": "string",
                            "value": "75px"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "top": {
                            "type": "string",
                            "value": "18dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblLastName": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "25px"
                        },
                        "skin": "sknLblFontA1A1A1",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "txtLastName": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknTxtBoxWhiteBG646e83",
                        "top": {
                            "type": "number",
                            "value": "0"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblLastNameValue": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "right": {
                            "type": "string",
                            "value": ""
                        },
                        "skin": "sknLblTransBGFont646e83",
                        "top": {
                            "type": "number",
                            "value": "0"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblHLine2": {
                        "isVisible": false
                    },
                    "flxDesignation": {
                        "bottom": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "75px"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "top": {
                            "type": "string",
                            "value": "18dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblDesignation": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "25px"
                        },
                        "skin": "sknLblFontA1A1A1",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "listboxDesignation": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "focusSkin": "sknListBoxWhiteBGFont646e83",
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknListBoxWhiteBGFont646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblDesignationValue": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "right": {
                            "type": "string",
                            "value": ""
                        },
                        "skin": "sknLblTransBGFont646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblHLine3": {
                        "isVisible": false
                    },
                    "flxDepartment": {
                        "height": {
                            "type": "string",
                            "value": "75px"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "top": {
                            "type": "string",
                            "value": "18dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblDepartment": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "25px"
                        },
                        "skin": "sknLblFontA1A1A1",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "listboxDepartment": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "focusSkin": "sknListBoxWhiteBGFont646e83",
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknListBoxWhiteBGFont646e83",
                        "top": {
                            "type": "number",
                            "value": "0"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblDepartmentValue": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknLblTransBGFont646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblHLine4": {
                        "isVisible": false
                    },
                    "flxReporting": {
                        "height": {
                            "type": "string",
                            "value": "75px"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "top": {
                            "type": "string",
                            "value": "18dp"
                        }
                    },
                    "lblReportingTo": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "25px"
                        },
                        "skin": "sknLblFontA1A1A1",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "listboxManager": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "focusSkin": "sknListBoxWhiteBGFont646e83",
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknListBoxWhiteBGFont646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblReportingToValue": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknLblTransBGFont646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblHLine5": {
                        "isVisible": false
                    },
                    "flxMobNumber": {
                        "height": {
                            "type": "string",
                            "value": "75px"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "top": {
                            "type": "string",
                            "value": "18dp"
                        }
                    },
                    "lblMobileNumber": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "25px"
                        },
                        "skin": "sknLblFontA1A1A1",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "txtMobileNumber": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknTxtBoxWhiteBG646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblMobileNumberValue": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "right": {
                            "type": "string",
                            "value": ""
                        },
                        "skin": "sknLblTransBGFont646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblHLine6": {
                        "isVisible": false
                    },
                    "flxWorkNumber": {
                        "height": {
                            "type": "string",
                            "value": "75px"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "top": {
                            "type": "string",
                            "value": "18dp"
                        }
                    },
                    "lblWorkNumber": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "25px"
                        },
                        "skin": "sknLblFontA1A1A1",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "txtWorkNumber": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknTxtBoxWhiteBG646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblWorkNumberValue": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknLblTransBGFont646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblHLine7": {
                        "isVisible": false
                    },
                    "flxEmail": {
                        "height": {
                            "type": "string",
                            "value": "75px"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "top": {
                            "type": "string",
                            "value": "18dp"
                        }
                    },
                    "lblEmailId": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "25dp"
                        },
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "skin": "sknLblFontA1A1A1",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "txtEmailId": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknTxtBoxWhiteBG646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblEmailIdValue": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknLblTransBGFont646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "blHLine8": {
                        "isVisible": false
                    },
                    "flxLocation": {
                        "height": {
                            "type": "string",
                            "value": "90px"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "top": {
                            "type": "string",
                            "value": "18dp"
                        }
                    },
                    "lblLocation": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "25px"
                        },
                        "skin": "sknLblFontA1A1A1",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "listBoxLocation": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "focusSkin": "sknListBoxWhiteBGFont646e83",
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknListBoxWhiteBGFont646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblLocationValue": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "65px"
                        },
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "padding": [2, 0, 0, 0],
                        "skin": "sknLblTransBGFont646e83",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "flxViewProfileHeader": {
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "skin": "CopyslFbox0g883b46f071241",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        }
                    },
                    "lblViewProfile": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "30px"
                        },
                        "left": {
                            "type": "string",
                            "value": "50px"
                        },
                        "skin": "CopydefLabel0b28822d0a7bf40",
                        "text": "View Profile",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100px"
                        }
                    },
                    "flxCloseDetails": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "30px"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "30px"
                        },
                        "width": {
                            "type": "string",
                            "value": "30px"
                        }
                    },
                    "imgCloseFilter": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "60%"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "0px"
                        },
                        "src": "close_icon.png",
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "60%"
                        },
                        "zIndex": 1
                    },
                    "btnEdit": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "focusSkin": "sknEdit",
                        "height": {
                            "type": "string",
                            "value": "20px"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "70px"
                        },
                        "skin": "sknEdit",
                        "text": "Edit",
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "40px"
                        }
                    },
                    "flxHamburger": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "15px"
                        },
                        "top": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "flxEditHeader": {
                        "height": {
                            "type": "string",
                            "value": "60px"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "skin": "CopyslFbox0g883b46f071241",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        }
                    },
                    "lblEditMode": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "30px"
                        },
                        "left": {
                            "type": "string",
                            "value": "50px"
                        },
                        "skin": "CopydefLabel0b28822d0a7bf40",
                        "text": "View Profile",
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100px"
                        }
                    },
                    "flxCloseEditMode": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "30px"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "30px"
                        },
                        "width": {
                            "type": "string",
                            "value": "30px"
                        }
                    },
                    "CopyimgCloseFilter0add9bba11a0247": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "60%"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "0px"
                        },
                        "src": "close_icon.png",
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "60%"
                        },
                        "zIndex": 1
                    },
                    "btnSaveMode": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "focusSkin": "sknEdit",
                        "height": {
                            "type": "string",
                            "value": "20px"
                        },
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "70px"
                        },
                        "skin": "sknEdit",
                        "text": "Save",
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "40px"
                        }
                    },
                    "flxAlertContainer": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "minWidth": {
                            "type": "string",
                            "value": ""
                        }
                    }
                },
                "780": {
                    "flxMenuContainer": {},
                    "leftmenu": {
                        "isVisible": true
                    },
                    "flxGreyBg": {
                        "isVisible": false
                    },
                    "leftmenu2": {
                        "left": {
                            "type": "string",
                            "value": "-260dp"
                        },
                        "instanceId": "leftmenu2"
                    },
                    "empHeader1": {
                        "height": {
                            "type": "string",
                            "value": "88px"
                        },
                        "instanceId": "empHeader1"
                    },
                    "empHeader1.empTextMoblie": {
                        "isVisible": false
                    },
                    "empHeader1.flxCancelAndSearch": {
                        "isVisible": false
                    },
                    "empHeader1.flxHamburger": {
                        "isVisible": true
                    },
                    "empHeader1.flxUserInfo": {
                        "right": {
                            "type": "string",
                            "value": "32px"
                        }
                    },
                    "empHeader1.imgHeading": {
                        "centerY": {
                            "type": "string",
                            "value": "40%"
                        },
                        "isVisible": true
                    },
                    "flxProfileContainer": {
                        "left": {
                            "type": "string",
                            "value": "32dp"
                        },
                        "right": {
                            "type": "string",
                            "value": "32px"
                        }
                    },
                    "flxEditProfileHeader": {
                        "right": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "EditProfile": {
                        "height": {
                            "type": "string",
                            "value": "81%"
                        },
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "top": {
                            "type": "string",
                            "value": "40px"
                        }
                    },
                    "lineDummy": {
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "flxEmployeeDetails": {
                        "height": {
                            "type": "string",
                            "value": "540px"
                        },
                        "right": {
                            "type": "string",
                            "value": "12px"
                        },
                        "width": {
                            "type": "string",
                            "value": "98%"
                        }
                    },
                    "flxEmpId": {
                        "right": {
                            "type": "string",
                            "value": "12px"
                        }
                    },
                    "listboxDesignation": {
                        "isVisible": false,
                        "top": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "lblDesignationValue": {
                        "width": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "flxLocation": {
                        "height": {
                            "type": "string",
                            "value": "80px"
                        }
                    },
                    "flxViewProfileHeader": {
                        "isVisible": false
                    },
                    "flxEditHeader": {
                        "height": {
                            "type": "string",
                            "value": "0px"
                        },
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        }
                    },
                    "flxAlertContainer": {
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "minWidth": {
                            "type": "string",
                            "value": ""
                        }
                    }
                },
                "1350": {
                    "flxMenuContainer": {
                        "width": {
                            "type": "string",
                            "value": "260px"
                        }
                    },
                    "leftmenu": {
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        }
                    },
                    "empHeader1": {
                        "height": {
                            "type": "string",
                            "value": "88px"
                        },
                        "isVisible": true,
                        "zIndex": 10,
                        "instanceId": "empHeader1"
                    },
                    "empHeader1.empTextMoblie": {},
                    "empHeader1.flxCancelAndSearch": {
                        "isVisible": false
                    },
                    "empHeader1.flxHamburger": {
                        "height": {
                            "type": "string",
                            "value": "0px"
                        },
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "top": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "0px"
                        }
                    },
                    "empHeader1.flxLogo": {
                        "width": {
                            "type": "string",
                            "value": "350px"
                        }
                    },
                    "flxEditProfileHeader": {
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "right": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "flxEditSave": {
                        "isVisible": false
                    },
                    "btnEdiSaveBottom": {
                        "isVisible": true
                    },
                    "lblEditProfileHeading": {
                        "top": {
                            "type": "string",
                            "value": "4%"
                        }
                    },
                    "EditProfile": {
                        "height": {
                            "type": "string",
                            "value": "81%"
                        },
                        "top": {
                            "type": "string",
                            "value": "40px"
                        }
                    },
                    "flxEmployeeDetails": {
                        "height": {
                            "type": "string",
                            "value": "515px"
                        },
                        "width": {
                            "type": "string",
                            "value": "98%"
                        }
                    },
                    "flxViewProfileHeader": {
                        "isVisible": false
                    },
                    "flxEditHeader": {
                        "height": {
                            "type": "string",
                            "value": "0px"
                        },
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "0%"
                        },
                        "zIndex": 1
                    },
                    "lblEditMode": {
                        "isVisible": false
                    },
                    "flxCloseEditMode": {
                        "isVisible": false
                    },
                    "CopyimgCloseFilter0add9bba11a0247": {
                        "isVisible": false
                    },
                    "btnSaveMode": {
                        "isVisible": false
                    },
                    "flxOverlay": {
                        "isVisible": false
                    },
                    "flxAlertContainer": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "isVisible": false,
                        "left": {
                            "type": "number",
                            "value": "0"
                        },
                        "minWidth": {
                            "type": "string",
                            "value": ""
                        }
                    }
                }
            }
            this.add(flxRoot, flxOverlay, flxAlertContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmEmpDetails,
            "enabledForIdleTimeout": false,
            "id": "frmEmpDetails",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_d19e3990,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [480, 780, 1350],
            "onBreakpointChange": controller.AS_Form_fad6611de20d4ba4830a9fb1f6d5ae26
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