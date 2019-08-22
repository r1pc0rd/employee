define("frmEmpList", function() {
    return function(controller) {
        function addWidgetsfrmEmpList() {
            this.setDefaultUnit(kony.flex.DP);
            var flxRoot = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "1032px",
                "id": "flxRoot",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0px",
                "minWidth": "1374px",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_c1de1e75561d4fd5a8b6d12047422bef,
                "skin": "sknFlxRoot",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxRoot.setDefaultUnit(kony.flex.DP);
            var empHeader1 = new com.konyemp.empHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "88px",
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
                        "height": "88px"
                    },
                    "flxUserInfo": {
                        "right": "48px"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            empHeader1.btnCancelsearch.onClick = controller.AS_Button_b4900b7cfe6f4fb983c319933a6d6e73;
            empHeader1.btnCancelsearch.onTouchEnd = controller.AS_Button_f6dc0ebdd65640488af853d876bcb0fe;
            empHeader1.flxHamburger.onClick = controller.AS_FlexContainer_ieeca972529d4effa9f3e778fa6a7756;
            empHeader1.flxImgSearch.onClick = controller.AS_FlexContainer_cb9183d1735c4e7dac4d9e52e35475e5;
            empHeader1.flxUserInfo.onClick = controller.AS_FlexContainer_a8e3c62b0e434776970071f6672bd987;
            var empheader = new com.konysa.empheader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "88px",
                "id": "empheader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "skin2f2bc440",
                "top": "0dp",
                "width": "100%",
                "zIndex": 50,
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
            empheader.onUserFlxClick = controller.AS_UWI_ab2a8e35a9e34246be947c938a5a7255;
            var flxMenuContainer = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxMenuContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTransparentBG",
                "top": "88dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMenuContainer.setDefaultUnit(kony.flex.DP);
            var leftmenu = new com.sa.leftmenu({
                "clipBounds": true,
                "height": "100%",
                "id": "leftmenu",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
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
                        "left": "0dp",
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
            leftmenu.DirectoryMenuItemMouseover.onClick = controller.AS_FlexContainer_c208e1a054b44435961eb46be76c8062;
            leftmenu.SettingsMenu.onClick = controller.AS_FlexContainer_e30cd5ba092f490c8251af8d527246cd;
            var flxGreyBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxGreyBg",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_daae6224e5a747c2b38b0e8d1c2c0aa6,
                "skin": "sknFlxOverlayTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGreyBg.setDefaultUnit(kony.flex.DP);
            flxGreyBg.add();
            flxMenuContainer.add(leftmenu, flxGreyBg);
            var flxList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80%",
                "id": "flxList",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "308px",
                "minWidth": "1011px",
                "isModalContainer": false,
                "right": "48px",
                "skin": "slFbox",
                "top": "120px"
            }, {}, {});
            flxList.setDefaultUnit(kony.flex.DP);
            var flxListHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknHeader",
                "height": "40px",
                "id": "flxListHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "isModalContainer": false,
                "skin": "sknHeader",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 25
            }, {}, {});
            flxListHeader.setDefaultUnit(kony.flex.DP);
            var flxBtnAddNewEmployee = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "35px",
                "id": "flxBtnAddNewEmployee",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_jbd614b975ea4ca6ab5882e27b740812,
                "right": "0px",
                "width": "20%",
                "zIndex": 500
            }, {}, {});
            flxBtnAddNewEmployee.setDefaultUnit(kony.flex.DP);
            var Rectangle6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "skin2de8dff0",
                "height": "35px",
                "id": "Rectangle6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxTransparentBGPointer",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Rectangle6.setDefaultUnit(kony.flex.DP);
            var AddNewEmployee = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "AddNewEmployee",
                "isVisible": false,
                "skin": "CopysknAddNew0f073c84c96a14b",
                "text": "Add New Employee",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "Copyskind0j106bdb0d19e49"
            });
            var btnAddNewEmp = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknButtonGreenBG",
                "height": "100%",
                "id": "btnAddNewEmp",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_d54b47820677405ea2faed36533ac5f1,
                "skin": "sknButtonGreenBG",
                "text": "Add New Employee",
                "top": "0dp",
                "width": "100%",
                "zIndex": 50
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            Rectangle6.add(AddNewEmployee, btnAddNewEmp);
            flxBtnAddNewEmployee.add(Rectangle6);
            var EmployeeListDire = new kony.ui.Label({
                "centerY": "50%",
                "height": "40px",
                "id": "EmployeeListDire",
                "isVisible": true,
                "left": "0%",
                "skin": "CopysknEmpHeading0b2484bed534c4b",
                "text": "Employee List / Directory",
                "width": "350px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxListHeader.add(flxBtnAddNewEmployee, EmployeeListDire);
            var lblLine = new kony.ui.Label({
                "height": "1dp",
                "id": "lblLine",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknDummyLine",
                "top": "5px",
                "width": "100%",
                "zIndex": 31
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSearchHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknSearchBar",
                "height": "30px",
                "id": "flxSearchHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknSearchBar",
                "top": "3%",
                "width": "100%",
                "zIndex": 31
            }, {}, {});
            flxSearchHeader.setDefaultUnit(kony.flex.DP);
            var Group = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "81.82%",
                "id": "Group",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_c9c6a29e0bda4fe5bd2ef0b65c8c9435,
                "right": "2px",
                "top": "9.09%",
                "width": "7%",
                "zIndex": 1
            }, {}, {});
            Group.setDefaultUnit(kony.flex.DP);
            var imgDropDown = new kony.ui.Image2({
                "centerY": "50%",
                "height": "7px",
                "id": "imgDropDown",
                "isVisible": true,
                "right": "0px",
                "skin": "slImage",
                "src": "imgtriangle140369768619648.png",
                "width": "11px",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Filter = new kony.ui.Label({
                "height": "100%",
                "id": "Filter",
                "isVisible": true,
                "left": "5px",
                "right": "5px",
                "skin": "sknFilterNormal",
                "text": "Filter",
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            Group.add(imgDropDown, Filter);
            var flxSearchImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "16px",
                "id": "flxSearchImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "top": "13.64%",
                "width": "16px",
                "zIndex": 3
            }, {}, {});
            flxSearchImage.setDefaultUnit(kony.flex.DP);
            var Shape = new kony.ui.FlexContainer({
                "clipBounds": false,
                "focusSkin": "skina052bb10",
                "height": "93.75%",
                "id": "Shape",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2.78%",
                "isModalContainer": false,
                "skin": "skina052bb10",
                "top": "2.78%",
                "width": "93.75%",
                "zIndex": 0
            }, {}, {});
            Shape.setDefaultUnit(kony.flex.DP);
            Shape.add();
            flxSearchImage.add(Shape);
            var txtSearchInput = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "CopydefTextBoxFocus0dbb37b024b054a",
                "height": "120%",
                "id": "txtSearchInput",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "3%",
                "minWidth": "40%",
                "onTextChange": controller.AS_TextField_f617ed9cace648b497e24440d8707fad,
                "placeholder": "Search",
                "secureTextEntry": false,
                "skin": "sknSearchTxtBx",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 31
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "CopydefTextBoxPlaceholder0e10355bc71ba43"
            });
            flxSearchHeader.add(Group, flxSearchImage, txtSearchInput);
            var lblLine2 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblLine2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknDummyLine",
                "top": "1%",
                "width": "100%",
                "zIndex": 31
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEmpListHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40px",
                "id": "flxEmpListHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3%",
                "width": "100%"
            }, {}, {});
            flxEmpListHeader.setDefaultUnit(kony.flex.DP);
            var hdrfullName = new kony.ui.Label({
                "centerY": "50%",
                "height": "40px",
                "id": "hdrfullName",
                "isVisible": true,
                "left": "5px",
                "skin": "sknEmpListHeader",
                "text": "NAME",
                "textStyle": {},
                "width": "25%",
                "zIndex": 0
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var hdrdesignation = new kony.ui.Label({
                "centerY": "50%",
                "height": "40px",
                "id": "hdrdesignation",
                "isVisible": true,
                "left": "28.50%",
                "skin": "sknEmpListHeader",
                "text": "DESIGNATION",
                "textStyle": {},
                "width": "20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var hdrdepartment = new kony.ui.Label({
                "centerY": "50%",
                "height": "40px",
                "id": "hdrdepartment",
                "isVisible": true,
                "left": "59%",
                "skin": "sknEmpListHeader",
                "text": "DEPARTMENT",
                "textStyle": {},
                "width": "25%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var hdrEmpID = new kony.ui.Label({
                "centerY": "50%",
                "height": "40px",
                "id": "hdrEmpID",
                "isVisible": true,
                "left": "85%",
                "skin": "sknEmpListHeader",
                "text": "ID",
                "textStyle": {},
                "width": "7%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmpListHeader.add(hdrfullName, hdrdesignation, hdrdepartment, hdrEmpID);
            var lblLine3 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblLine3",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknDummyLine",
                "top": "0%",
                "width": "100%",
                "zIndex": 31
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSegMentContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "600dp",
                "id": "flxSegMentContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSegMentContainer.setDefaultUnit(kony.flex.DP);
            var segEmployeeList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "department": "Admin",
                    "designation": "IT Administrator",
                    "empID": "1234",
                    "empimage": "newempdefaultimageicon.png",
                    "empimagemask": "profilimagemask.png",
                    "fullName": "Jeremiah Crosman",
                    "imgEdit": "empediticon.png",
                    "imgRemove": "empremoveicon.png"
                }, {
                    "department": "Admin",
                    "designation": "IT Administrator",
                    "empID": "1234",
                    "empimage": "newempdefaultimageicon.png",
                    "empimagemask": "profilimagemask.png",
                    "fullName": "Jeremiah Crosman",
                    "imgEdit": "empediticon.png",
                    "imgRemove": "empremoveicon.png"
                }, {
                    "department": "Admin",
                    "designation": "IT Administrator",
                    "empID": "1234",
                    "empimage": "newempdefaultimageicon.png",
                    "empimagemask": "profilimagemask.png",
                    "fullName": "Jeremiah Crosman",
                    "imgEdit": "empediticon.png",
                    "imgRemove": "empremoveicon.png"
                }, {
                    "department": "Admin",
                    "designation": "IT Administrator",
                    "empID": "1234",
                    "empimage": "newempdefaultimageicon.png",
                    "empimagemask": "profilimagemask.png",
                    "fullName": "Jeremiah Crosman",
                    "imgEdit": "empediticon.png",
                    "imgRemove": "empremoveicon.png"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segEmployeeList",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_cec36e013cc54f8db5ae879fbabe5480,
                "onTouchEnd": controller.AS_Segment_a36db9b5894c4a58a9d8c1ebc524bf49,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "right": "-15px",
                "rowFocusSkin": "Copyseg0fc7c2ee0704f44",
                "rowSkin": "sknSegEmpList",
                "rowTemplate": "flxTemplateEmpList",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "f0f0f000",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "department": "department",
                    "designation": "designation",
                    "empID": "empID",
                    "empimage": "empimage",
                    "empimagemask": "empimagemask",
                    "flxEdit": "flxEdit",
                    "flxRemove": "flxRemove",
                    "flxTemplateEmpList": "flxTemplateEmpList",
                    "fullName": "fullName",
                    "imgEdit": "imgEdit",
                    "imgRemove": "imgRemove",
                    "userIon": "userIon"
                },
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegMentContainer.add(segEmployeeList);
            flxList.add(flxListHeader, lblLine, flxSearchHeader, lblLine2, flxEmpListHeader, lblLine3, flxSegMentContainer);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0px",
                "clipBounds": true,
                "height": "50px",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "260px",
                "isModalContainer": false,
                "right": "0px",
                "skin": "slFbox"
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var lblFooter = new kony.ui.Label({
                "bottom": "10px",
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblFooter",
                "isVisible": true,
                "skin": "sknLblFooter",
                "text": "© Copyright 2018 Kony, Inc. All Rights Reserved.",
                "width": "100%",
                "zIndex": 35
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFooter.add(lblFooter);
            var btnFilter = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnFilter",
                "isVisible": true,
                "left": "55dp",
                "onClick": controller.AS_Button_ffd8b2bf409644cda6fd159611c385c5,
                "skin": "CopydefBtnNormal0cf5c65afac1942",
                "text": "Button",
                "top": "977dp",
                "width": "260dp",
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRoot.add(empHeader1, empheader, flxMenuContainer, flxList, flxFooter, btnFilter);
            var flxOverlay = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "1032px",
                "id": "flxOverlay",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_h80782c1af084f609cc0457d4f9ef348,
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
                "right": "55px",
                "skin": "sknFlxProfileMain",
                "top": "55px",
                "width": "154px",
                "zIndex": 1
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
                "onClick": controller.AS_FlexContainer_c1b4c672c23742c78bf15faf6c35eff3,
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
            var flxFilterMain = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "260px",
                "id": "flxFilterMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "42px",
                "skin": "slFbox",
                "top": "210dp",
                "width": "330px",
                "zIndex": 100
            }, {}, {});
            flxFilterMain.setDefaultUnit(kony.flex.DP);
            var imgFilter = new kony.ui.Image2({
                "height": "22dp",
                "id": "imgFilter",
                "isVisible": true,
                "right": "10px",
                "skin": "slImage",
                "src": "drop_down_menu.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 31
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxFilterMobHeader = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxFilterMobHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0e4d7cde1bf6f4a",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFilterMobHeader.setDefaultUnit(kony.flex.DP);
            var lblFilterHeading = new kony.ui.Label({
                "id": "lblFilterHeading",
                "isVisible": true,
                "left": "26dp",
                "skin": "CopydefLabel0jf0c68c3b00d44",
                "text": "Label",
                "top": "6dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnClearAll = new kony.ui.Button({
                "focusSkin": "CopydefBtnFocus0cab4493b2d8d41",
                "height": "6%",
                "id": "btnClearAll",
                "isVisible": true,
                "left": "3%",
                "onClick": controller.AS_Button_f0d5f4ee4ced403bb7cf7e860e03f42d,
                "skin": "sknBtnClear",
                "text": "Clear All",
                "top": "90%",
                "width": "18%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxClose = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxClose",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "328dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_bd8f054127b14faa96ae4b6f5829a2d4,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxClose.setDefaultUnit(kony.flex.DP);
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
            flxClose.add(imgCloseFilter);
            flxFilterMobHeader.add(lblFilterHeading, btnClearAll, flxClose);
            var flxFilter = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "95%",
                "horizontalScrollIndicator": true,
                "id": "flxFilter",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopysknFlxFilter0h81008cfb74a4f",
                "top": "5%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFilter.setDefaultUnit(kony.flex.DP);
            var flxDepartment = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "90%",
                "id": "flxDepartment",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "reverseLayoutDirection": false,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlxDesig",
                "top": "0.00%",
                "width": "46%",
                "zIndex": 1
            }, {}, {});
            flxDepartment.setDefaultUnit(kony.flex.DP);
            var lblDepartmentF = new kony.ui.Label({
                "height": "10%",
                "id": "lblDepartmentF",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLblDept",
                "text": "Department",
                "top": "2%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 31
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var segDept = new kony.ui.SegmentedUI2({
                "data": [{
                    "imgDepartment0": "unselected.png",
                    "lblDepartment0": "Product Management"
                }],
                "groupCells": false,
                "height": "88%",
                "id": "segDept",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_d9774190f1114a0a94011eaf84896df4,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxFilterContainer",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgDepartment0",
                    "selectedStateImage": "selected.png",
                    "unselectedStateImage": "unselected.png"
                },
                "separatorColor": "e6e1e600",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxDepartment0": "flxDepartment0",
                    "flxFilterContainer": "flxFilterContainer",
                    "imgDepartment0": "imgDepartment0",
                    "lblDepartment0": "lblDepartment0"
                },
                "width": "112%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDepartment.add(lblDepartmentF, segDept);
            var flxDesignation = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "90%",
                "id": "flxDesignation",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "reverseLayoutDirection": false,
                "left": "3%",
                "isModalContainer": false,
                "skin": "sknFlxDesig",
                "top": "0%",
                "width": "46%",
                "zIndex": 1
            }, {}, {});
            flxDesignation.setDefaultUnit(kony.flex.DP);
            var lblDesignation = new kony.ui.Label({
                "height": "10%",
                "id": "lblDesignation",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLblDept",
                "text": "Designation",
                "top": "2%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 31
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var segDesignation = new kony.ui.SegmentedUI2({
                "data": [{
                    "imgDepartment0": "unselected.png",
                    "lblDesignation": "Product Management"
                }, {
                    "imgDepartment0": "unselected.png",
                    "lblDesignation": "Product Management"
                }, {
                    "imgDepartment0": "unselected.png",
                    "lblDesignation": "Product Management"
                }],
                "groupCells": false,
                "height": "120dp",
                "id": "segDesignation",
                "isVisible": true,
                "left": "10dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_e897f7298a33440b87c656b99e719415,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxDesignation",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgDepartment0",
                    "selectedStateImage": "selected.png",
                    "unselectedStateImage": "unselected.png"
                },
                "separatorColor": "e6e1e600",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "53dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxDepartment0": "flxDepartment0",
                    "flxDesignation": "flxDesignation",
                    "imgDepartment0": "imgDepartment0",
                    "lblDesignation": "lblDesignation"
                },
                "width": "100%",
                "zIndex": 31
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDesignation.add(lblDesignation, segDesignation);
            var clearAll = new kony.ui.Button({
                "focusSkin": "CopydefBtnFocus0cab4493b2d8d41",
                "height": "6%",
                "id": "clearAll",
                "isVisible": true,
                "left": "3%",
                "onClick": controller.AS_Button_a8a2951345324586826d4bc6752f8f74,
                "skin": "sknBtnClear",
                "text": "Clear All",
                "top": "90%",
                "width": "18%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFilter.add(flxDepartment, flxDesignation, clearAll);
            var btnApplyFilter = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnApplyFilter",
                "isVisible": true,
                "left": "55dp",
                "onClick": controller.AS_Button_fdd8d95f53f6445c871c5e80705bd63b,
                "skin": "CopydefBtnNormal0cf5c65afac1942",
                "text": "Button",
                "top": "977dp",
                "width": "260dp",
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFilterMain.add(imgFilter, flxFilterMobHeader, flxFilter, btnApplyFilter);
            flxOverlay.add(flxProfileMain, flxFilterMain);
            var flxAlertContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1450px",
                "id": "flxAlertContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0px",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_h18737e83f0742b8aa5c2f4e861668b1,
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
                "skin": "slFbox",
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
            alertmsg.onAlertFlexClick = controller.AS_UWI_ee005ed35c9946409cf368f650407d1c;
            flxAlertMasterContainer.add(alertmsg);
            flxAlertContainer.add(flxAlertMasterContainer);
            var leftmenu1 = new com.sa.leftMenuTab.leftmenu({
                "clipBounds": true,
                "height": "100%",
                "id": "leftmenu1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "39%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "20%",
                "zIndex": 100,
                "overrides": {
                    "leftmenu": {
                        "isVisible": false,
                        "left": "39%",
                        "width": "20%",
                        "zIndex": 100
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            leftmenu1.SettingsMenu.onClick = controller.AS_FlexContainer_a1885387a1b748269c2559b18069d595;
            var flxGreyBackground = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxGreyBackground",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "51dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxGreyBackground.setDefaultUnit(kony.flex.DP);
            flxGreyBackground.add();
            var flxMobFilter = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxMobFilter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxMobFilter.setDefaultUnit(kony.flex.DP);
            var filterHEader = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "filterHEader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0e4d7cde1bf6f4a",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            filterHEader.setDefaultUnit(kony.flex.DP);
            var Label0e9ce70d099f343 = new kony.ui.Label({
                "id": "Label0e9ce70d099f343",
                "isVisible": true,
                "left": "26dp",
                "skin": "defLabel",
                "text": "Label",
                "top": "6dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopybtnClearAll0f386a0c1196b46 = new kony.ui.Button({
                "focusSkin": "CopydefBtnFocus0cab4493b2d8d41",
                "height": "6%",
                "id": "CopybtnClearAll0f386a0c1196b46",
                "isVisible": true,
                "left": "3%",
                "onClick": controller.AS_Button_c602b9c7701944598172099a66e71de1,
                "skin": "sknBtnClear",
                "text": "Clear All",
                "top": "90%",
                "width": "18%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxImage = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "409dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_cd10fed2732541fe922a34a93e0d119c,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxImage.setDefaultUnit(kony.flex.DP);
            var imgClose = new kony.ui.Image2({
                "height": "150dp",
                "id": "imgClose",
                "isVisible": true,
                "left": "405dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "4dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImage.add(imgClose);
            filterHEader.add(Label0e9ce70d099f343, CopybtnClearAll0f386a0c1196b46, flxImage);
            flxMobFilter.add(filterHEader);
            var flxSearch = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_g93588a3aec24223bd55f423ab75c869,
                "skin": "CopyslFbox0d5d38aa15eef45",
                "top": "1dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var flxSearchBar = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxSearchBar",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "41dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f164b538b4054a",
                "top": "9dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSearchBar.setDefaultUnit(kony.flex.DP);
            var flxImgSearch = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxImgSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxImgSearch.setDefaultUnit(kony.flex.DP);
            var imgSearch = new kony.ui.Image2({
                "height": "150dp",
                "id": "imgSearch",
                "isVisible": true,
                "left": "7dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgSearch.add(imgSearch);
            var txtBxSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "txtBxSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "30dp",
                "onTextChange": controller.AS_TextField_ja9150d585e0480abb910b1324296030,
                "placeholder": "Type Keyword",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0b5c51c1a8c5f48",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "4dp",
                "width": "260dp",
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
            var flxCloseSearch = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxCloseSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_fa1547aabf9b4fca9cd7a8f9d33762b0,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCloseSearch.setDefaultUnit(kony.flex.DP);
            var imgCancelSearch = new kony.ui.Image2({
                "height": "150dp",
                "id": "imgCancelSearch",
                "isVisible": true,
                "left": "7dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCloseSearch.add(imgCancelSearch);
            flxSearchBar.add(flxImgSearch, txtBxSearch, flxCloseSearch);
            flxSearch.add(flxSearchBar);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1350,
                "480": {
                    "flxRoot": {
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "minWidth": {
                            "type": "string",
                            "value": "1374px"
                        }
                    },
                    "empHeader1.btnCancelsearch": {
                        "isVisible": false,
                        "zIndex": 150
                    },
                    "empHeader1": {
                        "height": {
                            "type": "string",
                            "value": "60px"
                        },
                        "isVisible": true,
                        "instanceId": "empHeader1"
                    },
                    "empHeader1.empTextMoblie": {
                        "centerX": {
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
                            "value": "60px"
                        },
                        "top": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "empHeader1.flxCancelAndSearch": {
                        "right": {
                            "type": "string",
                            "value": "60px"
                        }
                    },
                    "empHeader1.flxHamburger": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "left": {
                            "type": "string",
                            "value": "15px"
                        }
                    },
                    "empHeader1.flxLogo": {
                        "centerY": {
                            "type": "string",
                            "value": "50.26%"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        }
                    },
                    "empHeader1.flxUserInfo": {
                        "isVisible": true,
                        "right": {
                            "type": "string",
                            "value": "20px"
                        },
                        "width": {
                            "type": "string",
                            "value": "35px"
                        }
                    },
                    "empHeader1.imgAdminUser": {
                        "isVisible": true,
                        "right": {
                            "type": "string",
                            "value": ""
                        },
                        "zIndex": 100
                    },
                    "empHeader1.imgDropDown": {
                        "isVisible": false
                    },
                    "empHeader1.imgHeading": {
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "30px"
                        }
                    },
                    "empHeader1.lblEmpName": {
                        "isVisible": false
                    },
                    "flxMenuContainer": {
                        "height": {
                            "type": "string",
                            "value": "1032px"
                        },
                        "isVisible": true,
                        "top": {
                            "type": "string",
                            "value": "60dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "0%"
                        }
                    },
                    "leftmenu": {
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "-260dp"
                        },
                        "instanceId": "leftmenu"
                    },
                    "flxList": {
                        "bottom": {
                            "type": "string",
                            "value": "50px"
                        },
                        "left": {
                            "type": "string",
                            "value": "15px"
                        },
                        "minWidth": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "20px"
                        },
                        "top": {
                            "type": "string",
                            "value": "80px"
                        },
                        "width": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "flxBtnAddNewEmployee": {
                        "centerY": {
                            "type": "string",
                            "value": "50.00%"
                        },
                        "right": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "170px"
                        }
                    },
                    "EmployeeListDire": {
                        "skin": "CopysknEmpHeading0b2484bed534c4b",
                        "text": "Employee List "
                    },
                    "lblLine": {
                        "isVisible": false
                    },
                    "flxSearchHeader": {
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "10px"
                        },
                        "top": {
                            "type": "string",
                            "value": "3%"
                        },
                        "width": {
                            "type": "string",
                            "value": "95%"
                        }
                    },
                    "imgDropDown": {
                        "isVisible": false
                    },
                    "Filter": {
                        "isVisible": false
                    },
                    "txtSearchInput": {
                        "left": {
                            "type": "string",
                            "value": "5%"
                        }
                    },
                    "hdrfullName": {},
                    "hdrdesignation": {
                        "isVisible": false
                    },
                    "hdrdepartment": {
                        "isVisible": false
                    },
                    "hdrEmpID": {
                        "isVisible": false
                    },
                    "flxSegMentContainer": {
                        "bottom": {
                            "type": "string",
                            "value": "0px"
                        }
                    },
                    "segEmployeeList": {},
                    "flxFooter": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "btnFilter": {
                        "bottom": {
                            "type": "string",
                            "value": "0px"
                        },
                        "focusSkin": "CopydefBtnNormal0cf5c65afac1942",
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "skin": "CopydefBtnNormal0cf5c65afac1942",
                        "text": "Filter",
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "zIndex": 200
                    },
                    "flxOverlay": {
                        "height": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "flxProfileMain": {
                        "right": {
                            "type": "string",
                            "value": "10px"
                        }
                    },
                    "flxProfile": {
                        "zIndex": 600
                    },
                    "flxFilterMain": {
                        "bottom": {
                            "type": "string",
                            "value": "0px"
                        },
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        },
                        "right": {
                            "type": "string",
                            "value": "0px"
                        },
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "imgFilter": {
                        "isVisible": false
                    },
                    "flxFilterMobHeader": {
                        "height": {
                            "type": "string",
                            "value": "50px"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "skin": "CopyslFbox0e4d7cde1bf6f4a"
                    },
                    "lblFilterHeading": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "skin": "CopydefLabel0jf0c68c3b00d44",
                        "text": "Filter your employee lists"
                    },
                    "btnClearAll": {
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
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "60px"
                        },
                        "text": "Clear All",
                        "width": {
                            "type": "string",
                            "value": "60px"
                        }
                    },
                    "flxClose": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "20px"
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
                            "value": "20px"
                        }
                    },
                    "imgCloseFilter": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "70%"
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
                            "value": "70%"
                        },
                        "zIndex": 1
                    },
                    "flxFilter": {
                        "bottom": {
                            "type": "string",
                            "value": "0%"
                        },
                        "height": {
                            "type": "string",
                            "value": ""
                        },
                        "isVisible": true,
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "left": {
                            "type": "number",
                            "value": "0"
                        },
                        "skin": "CopysknFlxFilter0h81008cfb74a4f",
                        "top": {
                            "type": "string",
                            "value": "50px"
                        }
                    },
                    "flxDepartment": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "265px"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "maxHeight": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "95%"
                        }
                    },
                    "lblDepartmentF": {
                        "height": {
                            "type": "string",
                            "value": "25dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100px"
                        }
                    },
                    "segDept": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "240px"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "maxHeight": {
                            "type": "string",
                            "value": "180dp"
                        },
                        "maxWidth": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "flxDesignation": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "265px"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "maxWidth": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "95%"
                        }
                    },
                    "lblDesignation": {
                        "height": {
                            "type": "string",
                            "value": "25dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100px"
                        }
                    },
                    "segDesignation": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "240px"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "maxHeight": {
                            "type": "string",
                            "value": "180dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        }
                    },
                    "clearAll": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "30px"
                        },
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "160px"
                        },
                        "width": {
                            "type": "string",
                            "value": "60px"
                        }
                    },
                    "btnApplyFilter": {
                        "bottom": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "focusSkin": "CopydefBtnNormal0cf5c65afac1942",
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "skin": "CopydefBtnNormal0cf5c65afac1942",
                        "text": "Apply filter",
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "flxAlertContainer": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "isVisible": false
                    },
                    "flxAlertMasterContainer": {
                        "width": {
                            "type": "string",
                            "value": "320px"
                        }
                    },
                    "leftmenu1": {
                        "isVisible": false,
                        "instanceId": "leftmenu1"
                    },
                    "flxGreyBackground": {
                        "isVisible": false
                    },
                    "flxMobFilter": {
                        "height": {
                            "type": "string",
                            "value": "1032dp"
                        },
                        "isVisible": false,
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "width": {
                            "type": "string",
                            "value": "102%"
                        }
                    },
                    "filterHEader": {
                        "height": {
                            "type": "string",
                            "value": "45px"
                        },
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "skin": "CopyslFbox0e4d7cde1bf6f4a"
                    },
                    "Label0e9ce70d099f343": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "skin": "CopydefLabel0jf0c68c3b00d44",
                        "text": "Filter your employee list"
                    },
                    "CopybtnClearAll0f386a0c1196b46": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "50%"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "85px"
                        },
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "15%"
                        }
                    },
                    "flxImage": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "15px"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "70px"
                        },
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "15px"
                        }
                    },
                    "imgClose": {
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "src": "closewhite_1.png",
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "flxSearch": {
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
                            "value": "1032px"
                        },
                        "isVisible": false,
                        "skin": "CopyslFbox0d5d38aa15eef45",
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        }
                    },
                    "flxSearchBar": {
                        "height": {
                            "type": "string",
                            "value": "60px"
                        },
                        "layoutType": kony.flex.FREE_FORM,
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "skin": "CopyslFbox0f164b538b4054a",
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "zIndex": 10
                    },
                    "flxImgSearch": {
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
                            "value": "100%"
                        },
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
                            "value": "50px"
                        }
                    },
                    "imgSearch": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "15px"
                        },
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "src": "search_1.png",
                        "width": {
                            "type": "string",
                            "value": "15px"
                        }
                    },
                    "txtBxSearch": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "focusSkin": "CopydefTextBoxFocus0b53e5ff0543944",
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "55dp"
                        },
                        "right": {
                            "type": "string",
                            "value": "55px"
                        },
                        "skin": "CopydefTextBoxNormal0b5c51c1a8c5f48",
                        "text": "",
                        "width": {
                            "type": "string",
                            "value": ""
                        },
                        "hoverSkin": "CopydefTextBoxNormal0feb21a46a52745"
                    },
                    "flxCloseSearch": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "0px"
                        },
                        "top": {
                            "type": "string",
                            "value": "10px"
                        },
                        "width": {
                            "type": "string",
                            "value": "50px"
                        }
                    },
                    "imgCancelSearch": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "15px"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "src": "close_icon.png",
                        "top": {
                            "type": "string",
                            "value": ""
                        },
                        "width": {
                            "type": "string",
                            "value": "15px"
                        }
                    }
                },
                "780": {
                    "flxRoot": {},
                    "empHeader1.btnCancelsearch": {
                        "isVisible": false
                    },
                    "empHeader1.empTextMoblie": {
                        "isVisible": false
                    },
                    "empHeader1.flxCancelAndSearch": {
                        "isVisible": false
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
                    "flxMenuContainer": {
                        "width": {
                            "type": "string",
                            "value": "0%"
                        }
                    },
                    "leftmenu": {
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "-260dp"
                        },
                        "instanceId": "leftmenu"
                    },
                    "flxList": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "left": {
                            "type": "string",
                            "value": "32px"
                        },
                        "minWidth": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "32px"
                        },
                        "width": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "flxListHeader": {
                        "layoutType": kony.flex.FREE_FORM,
                        "left": {
                            "type": "string",
                            "value": "0%"
                        }
                    },
                    "flxBtnAddNewEmployee": {
                        "right": {
                            "type": "string",
                            "value": "0%"
                        },
                        "width": {
                            "type": "string",
                            "value": "180px"
                        }
                    },
                    "AddNewEmployee": {
                        "right": {
                            "type": "string",
                            "value": "18%"
                        }
                    },
                    "btnAddNewEmp": {
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "EmployeeListDire": {
                        "left": {
                            "type": "string",
                            "value": "4px"
                        }
                    },
                    "flxSearchHeader": {
                        "left": {
                            "type": "string",
                            "value": "15px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "zIndex": 150
                    },
                    "Group": {
                        "right": {
                            "type": "string",
                            "value": "0px"
                        },
                        "width": {
                            "type": "string",
                            "value": "10%"
                        },
                        "zIndex": 150
                    },
                    "txtSearchInput": {
                        "left": {
                            "type": "string",
                            "value": "5%"
                        }
                    },
                    "flxEmpListHeader": {
                        "left": {
                            "type": "string",
                            "value": "0%"
                        }
                    },
                    "hdrfullName": {},
                    "hdrdesignation": {
                        "left": {
                            "type": "string",
                            "value": "40%"
                        }
                    },
                    "hdrdepartment": {
                        "isVisible": false
                    },
                    "hdrEmpID": {
                        "isVisible": false
                    },
                    "segEmployeeList": {
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "top": {
                            "type": "string",
                            "value": "0.00%"
                        }
                    },
                    "flxFooter": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "left": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "btnFilter": {
                        "isVisible": false
                    },
                    "flxOverlay": {},
                    "flxProfileMain": {
                        "isVisible": false
                    },
                    "flxFilterMain": {
                        "height": {
                            "type": "string",
                            "value": "480px"
                        },
                        "layoutType": kony.flex.FREE_FORM,
                        "right": {
                            "type": "string",
                            "value": "30px"
                        },
                        "width": {
                            "type": "string",
                            "value": "165px"
                        }
                    },
                    "flxFilterMobHeader": {
                        "isVisible": false
                    },
                    "btnClearAll": {
                        "height": {
                            "type": "string",
                            "value": "4%"
                        },
                        "top": {
                            "type": "string",
                            "value": "93%"
                        },
                        "width": {
                            "type": "string",
                            "value": "50px"
                        }
                    },
                    "flxFilter": {
                        "height": {
                            "type": "string",
                            "value": "95%"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "skin": "CopysknFlxFilter0d1f1d8bab19742",
                        "top": {
                            "type": "string",
                            "value": "15px"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "flxDepartment": {
                        "height": {
                            "type": "string",
                            "value": "215px"
                        },
                        "skin": "CopysknFlxDesig0d5670b4228f04d",
                        "width": {
                            "type": "string",
                            "value": "105%"
                        }
                    },
                    "segDept": {
                        "height": {
                            "type": "string",
                            "value": "82%"
                        }
                    },
                    "flxDesignation": {
                        "height": {
                            "type": "string",
                            "value": "215px"
                        },
                        "width": {
                            "type": "string",
                            "value": "105%"
                        }
                    },
                    "segDesignation": {
                        "height": {
                            "type": "string",
                            "value": "82%"
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        }
                    },
                    "clearAll": {
                        "height": {
                            "type": "string",
                            "value": "4%"
                        },
                        "left": {
                            "type": "string",
                            "value": "5.00%"
                        },
                        "top": {
                            "type": "number",
                            "value": "0"
                        },
                        "width": {
                            "type": "string",
                            "value": "50px"
                        },
                        "zIndex": 50
                    },
                    "flxGreyBackground": {
                        "isVisible": false
                    },
                    "flxMobFilter": {
                        "isVisible": false
                    },
                    "CopybtnClearAll0f386a0c1196b46": {
                        "width": {
                            "type": "string",
                            "value": "50px"
                        }
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "flxSearchBar": {
                        "isVisible": false
                    },
                    "flxCloseSearch": {
                        "isVisible": false
                    }
                },
                "1350": {
                    "flxRoot": {
                        "skin": "sknFlxRoot",
                        "width": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "empHeader1.btnCancelsearch": {
                        "isVisible": false
                    },
                    "empHeader1.empTextMoblie": {
                        "isVisible": false
                    },
                    "empHeader1.flxCancelAndSearch": {
                        "isVisible": false
                    },
                    "empHeader1.flxHamburger": {
                        "isVisible": false
                    },
                    "flxMenuContainer": {
                        "width": {
                            "type": "string",
                            "value": "260px"
                        }
                    },
                    "flxList": {
                        "width": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "flxListHeader": {},
                    "flxBtnAddNewEmployee": {
                        "width": {
                            "type": "string",
                            "value": "200px"
                        }
                    },
                    "AddNewEmployee": {},
                    "flxSearchHeader": {},
                    "Group": {},
                    "flxEmpListHeader": {},
                    "hdrfullName": {},
                    "segEmployeeList": {},
                    "flxFooter": {
                        "isVisible": true
                    },
                    "btnFilter": {
                        "isVisible": false
                    },
                    "flxOverlay": {},
                    "flxProfileMain": {
                        "isVisible": false
                    },
                    "flxFilterMain": {},
                    "flxFilterMobHeader": {
                        "isVisible": false
                    },
                    "flxFilter": {
                        "layoutType": kony.flex.FREE_FORM,
                        "skin": "CopysknFlxFilter0ba76bc26999a4c"
                    },
                    "flxDepartment": {
                        "right": {
                            "type": "string",
                            "value": ""
                        },
                        "top": {
                            "type": "string",
                            "value": "2%"
                        }
                    },
                    "lblDepartmentF": {
                        "height": {
                            "type": "string",
                            "value": "9%"
                        },
                        "top": {
                            "type": "string",
                            "value": "8px"
                        }
                    },
                    "flxDesignation": {
                        "left": {
                            "type": "string",
                            "value": "50%"
                        },
                        "right": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "lblDesignation": {
                        "top": {
                            "type": "string",
                            "value": "8px"
                        }
                    },
                    "segDesignation": {
                        "height": {
                            "type": "string",
                            "value": "88%"
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "105%"
                        }
                    },
                    "clearAll": {
                        "height": {
                            "type": "string",
                            "value": "8%"
                        },
                        "left": {
                            "type": "string",
                            "value": "2%"
                        },
                        "top": {
                            "type": "string",
                            "value": "90%"
                        }
                    },
                    "flxAlertContainer": {
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "0px"
                        }
                    },
                    "leftmenu1": {
                        "instanceId": "leftmenu1"
                    },
                    "flxGreyBackground": {
                        "isVisible": false
                    },
                    "flxMobFilter": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "flxSearchBar": {
                        "isVisible": false
                    }
                }
            }
            this.add(flxRoot, flxOverlay, flxAlertContainer, leftmenu1, flxGreyBackground, flxMobFilter, flxSearch);
        };
        return [{
            "addWidgets": addWidgetsfrmEmpList,
            "enabledForIdleTimeout": false,
            "id": "frmEmpList",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_j61627ee7e5e4e0f80c7aa8bb08b343c,
            "skin": "CopyslForm0b4b62517562745",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [480, 780, 1350],
            "onBreakpointChange": controller.AS_Form_j95cd5e623b14b06a4bf11558cbe6438
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