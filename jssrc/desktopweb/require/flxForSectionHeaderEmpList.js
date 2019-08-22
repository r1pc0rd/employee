define("flxForSectionHeaderEmpList", function() {
    return function(controller) {
        var flxForSectionHeaderEmpList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "6%",
            "id": "flxForSectionHeaderEmpList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxForSectionHeaderEmpList.setDefaultUnit(kony.flex.DP);
        var hdrfullName = new kony.ui.Label({
            "height": "54.29%",
            "id": "hdrfullName",
            "isVisible": true,
            "left": "7.49%",
            "skin": "skin090b27c0",
            "text": "Employee Name",
            "textStyle": {},
            "top": "22.86%",
            "width": "15.73%",
            "zIndex": 0
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var hdrdesignation = new kony.ui.Label({
            "height": "54.20%",
            "id": "hdrdesignation",
            "isVisible": true,
            "left": "28.22%",
            "skin": "skinLblH",
            "text": "Designation",
            "textStyle": {},
            "top": "22.86%",
            "width": "20.83%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var hdrdepartment = new kony.ui.Label({
            "height": "54.29%",
            "id": "hdrdepartment",
            "isVisible": true,
            "left": "51.86%",
            "skin": "skinLblH",
            "text": "Department",
            "textStyle": {},
            "top": "22.86%",
            "width": "20.00%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var hdrEmpID = new kony.ui.Label({
            "height": "54.29%",
            "id": "hdrEmpID",
            "isVisible": true,
            "left": "76.5%",
            "skin": "skinLblH",
            "text": "Employee ID",
            "textStyle": {},
            "top": "22.86%",
            "width": "10.46%",
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxForSectionHeaderEmpList.add(hdrfullName, hdrdesignation, hdrdepartment, hdrEmpID);
        return flxForSectionHeaderEmpList;
    }
})