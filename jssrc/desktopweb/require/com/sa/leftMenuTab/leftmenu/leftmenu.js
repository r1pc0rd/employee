define(function() {
    return function(controller) {
        var leftmenu = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "leftmenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "50%"
        }, controller.args[0], "leftmenu"), extendConfig({}, controller.args[1], "leftmenu"), extendConfig({}, controller.args[2], "leftmenu"));
        leftmenu.setDefaultUnit(kony.flex.DP);
        var CopyLeftMenu0e1243597416245 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "skinfbb6c740",
            "height": "100%",
            "id": "CopyLeftMenu0e1243597416245",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "skinfbb6c740",
            "top": "0%",
            "width": "100%",
            "zIndex": 115
        }, controller.args[0], "CopyLeftMenu0e1243597416245"), extendConfig({}, controller.args[1], "CopyLeftMenu0e1243597416245"), extendConfig({}, controller.args[2], "CopyLeftMenu0e1243597416245"));
        CopyLeftMenu0e1243597416245.setDefaultUnit(kony.flex.DP);
        var LeftMenu140369810577440 = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "LeftMenu140369810577440",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgleftmenu140369810577440.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 0
        }, controller.args[0], "LeftMenu140369810577440"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LeftMenu140369810577440"), extendConfig({}, controller.args[2], "LeftMenu140369810577440"));
        var MessageMenu = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "4.45%",
            "id": "MessageMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10.38%",
            "isModalContainer": false,
            "skin": "sknFlxTransparentBGPointer",
            "top": "14.94%",
            "width": "89.23%",
            "zIndex": 1
        }, controller.args[0], "MessageMenu"), extendConfig({}, controller.args[1], "MessageMenu"), extendConfig({}, controller.args[2], "MessageMenu"));
        MessageMenu.setDefaultUnit(kony.flex.DP);
        var Group6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60%",
            "id": "Group6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "8.19%",
            "isModalContainer": false,
            "top": "0%",
            "width": "8.62%",
            "zIndex": 0
        }, controller.args[0], "Group6"), extendConfig({}, controller.args[1], "Group6"), extendConfig({}, controller.args[2], "Group6"));
        Group6.setDefaultUnit(kony.flex.DP);
        var Fill1 = new kony.ui.Image2(extendConfig({
            "height": "95.45%",
            "id": "Fill1",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgfill1140369810578016.png",
            "top": "1.41%",
            "width": "100%",
            "zIndex": 0
        }, controller.args[0], "Fill1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill1"), extendConfig({}, controller.args[2], "Fill1"));
        var Fill4 = new kony.ui.Image2(extendConfig({
            "height": "4.55%",
            "id": "Fill4",
            "isVisible": true,
            "left": "28.75%",
            "skin": "skinfbaa6b30",
            "src": "imgfill4140369810558960.png",
            "top": "17.62%",
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "Fill4"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill4"), extendConfig({}, controller.args[2], "Fill4"));
        var Fill6 = new kony.ui.Image2(extendConfig({
            "height": "4.55%",
            "id": "Fill6",
            "isVisible": true,
            "left": "28.75%",
            "skin": "skinfbaa6b30",
            "src": "imgfill6140369810559248.png",
            "top": "27.51%",
            "width": "40%",
            "zIndex": 2
        }, controller.args[0], "Fill6"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill6"), extendConfig({}, controller.args[2], "Fill6"));
        var Fill8 = new kony.ui.Image2(extendConfig({
            "height": "4.55%",
            "id": "Fill8",
            "isVisible": true,
            "left": "28.75%",
            "skin": "skinfbaa6b30",
            "src": "imgfill8140369810559536.png",
            "top": "37.39%",
            "width": "40%",
            "zIndex": 3
        }, controller.args[0], "Fill8"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill8"), extendConfig({}, controller.args[2], "Fill8"));
        var Fill10 = new kony.ui.Image2(extendConfig({
            "height": "4.55%",
            "id": "Fill10",
            "isVisible": true,
            "left": "28.75%",
            "skin": "skinfbaa6b30",
            "src": "imgfill10140369810559824.png",
            "top": "47.28%",
            "width": "25%",
            "zIndex": 4
        }, controller.args[0], "Fill10"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill10"), extendConfig({}, controller.args[2], "Fill10"));
        var Fill12 = new kony.ui.Image2(extendConfig({
            "height": "4.55%",
            "id": "Fill12",
            "isVisible": true,
            "left": "62.84%",
            "skin": "skinfbaa6b30",
            "src": "imgfill12140369810568784.png",
            "top": "87.1%",
            "width": "20%",
            "zIndex": 5
        }, controller.args[0], "Fill12"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill12"), extendConfig({}, controller.args[2], "Fill12"));
        var Fill14 = new kony.ui.Image2(extendConfig({
            "height": "4.55%",
            "id": "Fill14",
            "isVisible": true,
            "left": "86.47%",
            "skin": "skinfbaa6b30",
            "src": "imgfill14140369810569072.png",
            "top": "86.69%",
            "width": "5%",
            "zIndex": 6
        }, controller.args[0], "Fill14"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill14"), extendConfig({}, controller.args[2], "Fill14"));
        Group6.add(Fill1, Fill4, Fill6, Fill8, Fill10, Fill12, Fill14);
        var CopyLine0j52940fa892443 = new kony.ui.Image2(extendConfig({
            "height": "4.76%",
            "id": "CopyLine0j52940fa892443",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgline140369810577728.png",
            "top": "95.24%",
            "width": "91.81%",
            "zIndex": 1
        }, controller.args[0], "CopyLine0j52940fa892443"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLine0j52940fa892443"), extendConfig({}, controller.args[2], "CopyLine0j52940fa892443"));
        var Messages = new kony.ui.Label(extendConfig({
            "height": "52.38%",
            "id": "Messages",
            "isVisible": true,
            "left": "25.86%",
            "skin": "skinLblMenuItemNormal",
            "text": "Messages",
            "textStyle": {},
            "top": "2.38%",
            "width": "74.14%",
            "zIndex": 2
        }, controller.args[0], "Messages"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Messages"), extendConfig({}, controller.args[2], "Messages"));
        MessageMenu.add(Group6, CopyLine0j52940fa892443, Messages);
        var ColleaguesMenuItem = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "4.34%",
            "id": "ColleaguesMenuItem",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10.38%",
            "isModalContainer": false,
            "skin": "sknFlxTransparentBGPointer",
            "top": "8.69%",
            "width": "89.62%",
            "zIndex": 2
        }, controller.args[0], "ColleaguesMenuItem"), extendConfig({}, controller.args[1], "ColleaguesMenuItem"), extendConfig({}, controller.args[2], "ColleaguesMenuItem"));
        ColleaguesMenuItem.setDefaultUnit(kony.flex.DP);
        var Line140369810569360 = new kony.ui.Image2(extendConfig({
            "height": "4.88%",
            "id": "Line140369810569360",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgline140369810569360.png",
            "top": "95.12%",
            "width": "91.42%",
            "zIndex": 0
        }, controller.args[0], "Line140369810569360"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Line140369810569360"), extendConfig({}, controller.args[2], "Line140369810569360"));
        var Colleagues = new kony.ui.Label(extendConfig({
            "height": "53.66%",
            "id": "Colleagues",
            "isVisible": true,
            "left": "25.75%",
            "skin": "skinLblMenuItemNormal",
            "text": "Colleagues",
            "textStyle": {},
            "top": "3.49%",
            "width": "74.25%",
            "zIndex": 1
        }, controller.args[0], "Colleagues"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Colleagues"), extendConfig({}, controller.args[2], "Colleagues"));
        var Fill1140369810555632 = new kony.ui.Image2(extendConfig({
            "height": "60%",
            "id": "Fill1140369810555632",
            "isVisible": true,
            "left": "6.01%",
            "skin": "skinfbaa6b30",
            "src": "imgfill1140369810555632.png",
            "top": "4.88%",
            "width": "12.02%",
            "zIndex": 2
        }, controller.args[0], "Fill1140369810555632"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill1140369810555632"), extendConfig({}, controller.args[2], "Fill1140369810555632"));
        ColleaguesMenuItem.add(Line140369810569360, Colleagues, Fill1140369810555632);
        var DirectoryMenuItemMouseover = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "4.87%",
            "id": "DirectoryMenuItemMouseover",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxTransparentBGPointer",
            "top": "1.8%",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "DirectoryMenuItemMouseover"), extendConfig({}, controller.args[1], "DirectoryMenuItemMouseover"), extendConfig({
            "hoverSkin": "CopysknFlxTransparentBGPointer0d1b916b39ec64f"
        }, controller.args[2], "DirectoryMenuItemMouseover"));
        DirectoryMenuItemMouseover.setDefaultUnit(kony.flex.DP);
        var Line140369810555920 = new kony.ui.Image2(extendConfig({
            "height": "4.35%",
            "id": "Line140369810555920",
            "isVisible": true,
            "left": "10.38%",
            "skin": "skinfbaa6b30",
            "src": "imgline140369810555920.png",
            "top": "95.65%",
            "width": "81.92%",
            "zIndex": 0
        }, controller.args[0], "Line140369810555920"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Line140369810555920"), extendConfig({}, controller.args[2], "Line140369810555920"));
        var DirectoryMenuItem = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "89.13%",
            "id": "DirectoryMenuItem",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "DirectoryMenuItem"), extendConfig({}, controller.args[1], "DirectoryMenuItem"), extendConfig({}, controller.args[2], "DirectoryMenuItem"));
        DirectoryMenuItem.setDefaultUnit(kony.flex.DP);
        var Group5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60%",
            "id": "Group5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "17.69%",
            "isModalContainer": false,
            "top": "15%",
            "width": "6%",
            "zIndex": 0
        }, controller.args[0], "Group5"), extendConfig({}, controller.args[1], "Group5"), extendConfig({}, controller.args[2], "Group5"));
        Group5.setDefaultUnit(kony.flex.DP);
        var Fill1140369810556864 = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "Fill1140369810556864",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgfill1140369810556864.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 0
        }, controller.args[0], "Fill1140369810556864"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill1140369810556864"), extendConfig({}, controller.args[2], "Fill1140369810556864"));
        var Fill3 = new kony.ui.Image2(extendConfig({
            "height": "11.11%",
            "id": "Fill3",
            "isVisible": true,
            "left": "19.23%",
            "skin": "skinfbaa6b30",
            "src": "imgfill3140369810557152.png",
            "top": "23.08%",
            "width": "11.11%",
            "zIndex": 1
        }, controller.args[0], "Fill3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill3"), extendConfig({}, controller.args[2], "Fill3"));
        var Fill5 = new kony.ui.Image2(extendConfig({
            "height": "5.56%",
            "id": "Fill5",
            "isVisible": true,
            "left": "38.46%",
            "skin": "skinfbaa6b30",
            "src": "imgfill5140369810557440.png",
            "top": "23.08%",
            "width": "44.44%",
            "zIndex": 2
        }, controller.args[0], "Fill5"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill5"), extendConfig({}, controller.args[2], "Fill5"));
        var Fill7 = new kony.ui.Image2(extendConfig({
            "height": "11.11%",
            "id": "Fill7",
            "isVisible": true,
            "left": "19.23%",
            "skin": "skinfbaa6b30",
            "src": "imgfill7140369810557728.png",
            "top": "42.31%",
            "width": "11.11%",
            "zIndex": 3
        }, controller.args[0], "Fill7"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill7"), extendConfig({}, controller.args[2], "Fill7"));
        var Fill8140369810594368 = new kony.ui.Image2(extendConfig({
            "height": "5.56%",
            "id": "Fill8140369810594368",
            "isVisible": true,
            "left": "38.46%",
            "skin": "skinfbaa6b30",
            "src": "imgfill8140369810594368.png",
            "top": "46.15%",
            "width": "44.44%",
            "zIndex": 4
        }, controller.args[0], "Fill8140369810594368"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill8140369810594368"), extendConfig({}, controller.args[2], "Fill8140369810594368"));
        var Fill9 = new kony.ui.Image2(extendConfig({
            "height": "11.11%",
            "id": "Fill9",
            "isVisible": true,
            "left": "19.23%",
            "skin": "skinfbaa6b30",
            "src": "imgfill9140369810594656.png",
            "top": "65.38%",
            "width": "11.11%",
            "zIndex": 5
        }, controller.args[0], "Fill9"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill9"), extendConfig({}, controller.args[2], "Fill9"));
        var Fill10140369810594944 = new kony.ui.Image2(extendConfig({
            "height": "11.11%",
            "id": "Fill10140369810594944",
            "isVisible": true,
            "left": "38.46%",
            "skin": "skinfbaa6b30",
            "src": "imgfill10140369810594944.png",
            "top": "62.7%",
            "width": "44.44%",
            "zIndex": 6
        }, controller.args[0], "Fill10140369810594944"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill10140369810594944"), extendConfig({}, controller.args[2], "Fill10140369810594944"));
        Group5.add(Fill1140369810556864, Fill3, Fill5, Fill7, Fill8140369810594368, Fill9, Fill10140369810594944);
        var Directory = new kony.ui.Label(extendConfig({
            "height": "53.66%",
            "id": "Directory",
            "isVisible": true,
            "left": "33.46%",
            "skin": "skinLblMenuItemNormal",
            "text": "Directory",
            "textStyle": {},
            "top": "19.51%",
            "width": "66.54%",
            "zIndex": 1
        }, controller.args[0], "Directory"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Directory"), extendConfig({}, controller.args[2], "Directory"));
        var Rectangle3 = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "Rectangle3",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgrectangle3140369810556576.png",
            "top": "0%",
            "width": "2%",
            "zIndex": 2
        }, controller.args[0], "Rectangle3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Rectangle3"), extendConfig({}, controller.args[2], "Rectangle3"));
        DirectoryMenuItem.add(Group5, Directory, Rectangle3);
        DirectoryMenuItemMouseover.add(Line140369810555920, DirectoryMenuItem);
        var EventsmenuItem = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "4.66%",
            "id": "EventsmenuItem",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10.38%",
            "isModalContainer": false,
            "skin": "sknFlxTransparentBGPointer",
            "top": "21.08%",
            "width": "89.62%",
            "zIndex": 4
        }, controller.args[0], "EventsmenuItem"), extendConfig({}, controller.args[1], "EventsmenuItem"), extendConfig({}, controller.args[2], "EventsmenuItem"));
        EventsmenuItem.setDefaultUnit(kony.flex.DP);
        var Line140369810595232 = new kony.ui.Image2(extendConfig({
            "height": "4.55%",
            "id": "Line140369810595232",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgline140369810595232.png",
            "top": "95.45%",
            "width": "91.42%",
            "zIndex": 0
        }, controller.args[0], "Line140369810595232"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Line140369810595232"), extendConfig({}, controller.args[2], "Line140369810595232"));
        var Events = new kony.ui.Label(extendConfig({
            "height": "50%",
            "id": "Events",
            "isVisible": true,
            "left": "25.75%",
            "skin": "skinLblMenuItemNormal",
            "text": "Events",
            "top": "2.27%",
            "width": "74.25%",
            "zIndex": 1
        }, controller.args[0], "Events"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Events"), extendConfig({}, controller.args[2], "Events"));
        var Group7 = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "52.27%",
            "id": "Group7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "8.15%",
            "isModalContainer": false,
            "top": "0%",
            "width": "9.87%",
            "zIndex": 2
        }, controller.args[0], "Group7"), extendConfig({}, controller.args[1], "Group7"), extendConfig({}, controller.args[2], "Group7"));
        Group7.setDefaultUnit(kony.flex.DP);
        var Group3 = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "100%",
            "id": "Group3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "top": "0%",
            "width": "100%",
            "zIndex": 0
        }, controller.args[0], "Group3"), extendConfig({}, controller.args[1], "Group3"), extendConfig({}, controller.args[2], "Group3"));
        Group3.setDefaultUnit(kony.flex.DP);
        var Clip2 = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "Clip2",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgclip2140369810597920.png",
            "top": "1.67%",
            "width": "100%",
            "zIndex": 0
        }, controller.args[0], "Clip2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Clip2"), extendConfig({}, controller.args[2], "Clip2"));
        var Fill1140369810598208 = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "Fill1140369810598208",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgfill1140369810598208.png",
            "top": "1.67%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "Fill1140369810598208"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill1140369810598208"), extendConfig({}, controller.args[2], "Fill1140369810598208"));
        Group3.add(Clip2, Fill1140369810598208);
        var Fill4140369810597632 = new kony.ui.Image2(extendConfig({
            "height": "21.74%",
            "id": "Fill4140369810597632",
            "isVisible": true,
            "left": "65%",
            "skin": "skinfbaa6b30",
            "src": "imgfill4140369810597632.png",
            "top": "66.81%",
            "width": "21.74%",
            "zIndex": 1
        }, controller.args[0], "Fill4140369810597632"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill4140369810597632"), extendConfig({}, controller.args[2], "Fill4140369810597632"));
        Group7.add(Group3, Fill4140369810597632);
        EventsmenuItem.add(Line140369810595232, Events, Group7);
        var SettingsMenu = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "focusSkin": "CopysknFlxTransparentBGPointer0bfef74074cc744",
            "height": "4.56%",
            "id": "SettingsMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxTransparentBGPointer",
            "top": "27.54%",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "SettingsMenu"), extendConfig({}, controller.args[1], "SettingsMenu"), extendConfig({
            "hoverSkin": "CopysknFlxTransparentBGPointer0f7afc76827fb42"
        }, controller.args[2], "SettingsMenu"));
        SettingsMenu.setDefaultUnit(kony.flex.DP);
        var Line140369810598496 = new kony.ui.Image2(extendConfig({
            "height": "4.65%",
            "id": "Line140369810598496",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgline140369810598496.png",
            "top": "95.35%",
            "width": "91.42%",
            "zIndex": 0
        }, controller.args[0], "Line140369810598496"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Line140369810598496"), extendConfig({}, controller.args[2], "Line140369810598496"));
        var Settings = new kony.ui.Label(extendConfig({
            "height": "51.16%",
            "id": "Settings",
            "isVisible": true,
            "left": "30%",
            "skin": "skinLblMenuItemNormal",
            "text": "Settings",
            "top": "4.65%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "Settings"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Settings"), extendConfig({}, controller.args[2], "Settings"));
        var Group8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60%",
            "id": "Group8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15%",
            "isModalContainer": false,
            "top": "0%",
            "width": "9.87%",
            "zIndex": 2
        }, controller.args[0], "Group8"), extendConfig({}, controller.args[1], "Group8"), extendConfig({}, controller.args[2], "Group8"));
        Group8.setDefaultUnit(kony.flex.DP);
        var Fill1140369810599152 = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "Fill1140369810599152",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgfill1140369810599152.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 0
        }, controller.args[0], "Fill1140369810599152"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill1140369810599152"), extendConfig({}, controller.args[2], "Fill1140369810599152"));
        var Fill4140369810599440 = new kony.ui.Image2(extendConfig({
            "height": "34.78%",
            "id": "Fill4140369810599440",
            "isVisible": true,
            "left": "34.78%",
            "skin": "skinfbaa6b30",
            "src": "imgfill4140369810599440.png",
            "top": "34.78%",
            "width": "34.78%",
            "zIndex": 1
        }, controller.args[0], "Fill4140369810599440"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Fill4140369810599440"), extendConfig({}, controller.args[2], "Fill4140369810599440"));
        Group8.add(Fill1140369810599152, Fill4140369810599440);
        var CopyRectangle0a6bf076a165f42 = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "CopyRectangle0a6bf076a165f42",
            "isVisible": true,
            "left": "0%",
            "skin": "skinfbaa6b30",
            "src": "imgrectangle3140369810556576.png",
            "top": "0%",
            "width": "2%",
            "zIndex": 2
        }, controller.args[0], "CopyRectangle0a6bf076a165f42"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyRectangle0a6bf076a165f42"), extendConfig({}, controller.args[2], "CopyRectangle0a6bf076a165f42"));
        SettingsMenu.add(Line140369810598496, Settings, Group8, CopyRectangle0a6bf076a165f42);
        CopyLeftMenu0e1243597416245.add(LeftMenu140369810577440, MessageMenu, ColleaguesMenuItem, DirectoryMenuItemMouseover, EventsmenuItem, SettingsMenu);
        leftmenu.add(CopyLeftMenu0e1243597416245);
        return leftmenu;
    }
})