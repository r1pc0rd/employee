define("userfrmEmpListController", {
    userEmail: null,
    isFilterEnabled: false,
    isProfileEnable: false,
    selectedDepartment: null,
    selectedDesignation: null,
    selecteDepartmentText: "",
    selectedDesignationText: "",
    status: "close",
    employeeList: null,
    departmentList: null,
    designationList: null,
    locationList: null,
    parsedEmployeeList: null,
    mediaList: null,
    profilePicMap: {},
    coverPicMap: {},
    profilePicsBinarydataMap: {},
    /**
     * @function onNavigate
     * @description - This function is the called when we navigate from some other form to frmEmpList.
     **/
    onNavigate: function() {
        this.view.empHeader1.imgHamburger.src = "hamburger_menu.png";
        this.requireModule = require("parsingModule");
        if (this.parsedEmployeeList !== null) {
            return;
        }
        this.view.flxProfileMain.setVisibility(false);
        this.userEmail = kony.store.getItem("EMAIL_ID");
        if (isAdmin(this.userEmail) === false) {
            this.view.flxBtnAddNewEmployee.setVisibility(false);
            this.view.leftmenu.SettingsMenu.setEnabled(false);
        } else {
            this.view.flxBtnAddNewEmployee.setVisibility(true);
            this.view.leftmenu.SettingsMenu.setEnabled(true);
        }
        this.view.segEmployeeList.onRowClick = this.onSegRowClickEvent;
    },
    /**
     * @function : getEmployeeWithEmployeeId
     * @description - This function gets the employee details with employee id.
     *
     */
    getEmployeeWithEmployeeId: function(empId) {
        var searchedEmployee = null
        if (typeof empId === 'string' || typeof empId === 'number') {
            if (Array.isArray(this.parsedEmployeeList)) {
                var employeeLength = this.parsedEmployeeList.length;
                for (var i = 0; i < employeeLength; i++) {
                    if (this.parsedEmployeeList[i]["Employee_id"] === empId) {
                        searchedEmployee = this.parsedEmployeeList[i];
                        break;
                    }
                }
            }
        }
        return searchedEmployee;
    },
    /**
     * @function toggleFilter
     * @description - This function toggles the visibility of the filter popup.
     * @param {JSON } - event object of the clicked flexcontainer.
     **/
    toggleFilter: function(eventobject) {
        var id = eventobject.id;
        if (id === "Group") {
            this.view.flxOverlay.setVisibility(true);
            this.view.flxFilterMain.setVisibility(true);
            this.view.flxProfileMain.setVisibility(false);
        }
    },
    toggleFilterMob: function(eventobject) {
        this.view.flxOverlay.setVisibility(true);
        this.view.flxFilterMain.setVisibility(true);
        this.view.flxProfileMain.setVisibility(false);
    },
    /**
     * @function addDepartmentTofilter
     * @description - Adding the departments to the segment in filter popup.
     * @param {JSON } - Department list from the employee lists form.
     **/
    addDepartmentTofilter: function(departmentList) {
        var departmentList = this.departmentList;
        var departmentLength = departmentList.length;
        var segObj = {};
        var deptList = [];
        var depObj;
        for (var i = 0; i < departmentLength; i++) {
            depObj = departmentList[i];
            segObj = {};
            if (departmentList[i] !== undefined && departmentList[i] !== null && departmentList[i].Name !== undefined && departmentList[i].Name !== null) {
                segObj["lblDepartment0"] = validateText(depObj["Name"]);
                segObj["imgDepartment0"] = "unselected.png";
                deptList.push(segObj);
            }
        }
        this.view.segDept.removeAll();
        this.view.segDept.addAll(deptList);
    },
    /**
     * @function addDesignationTofilter
     * @description - Adding the designaions to the segment in filter popup.
     * @param {JSON } - Designation list from the employee lists form.
     **/
    addDesignationTofilter: function(designationList) {
        var designationLength = designationList.length;
        var segObj = {};
        var desigList = [];
        var desigObj;
        for (var i = 0; i < designationLength; i++) {
            desigObj = designationList[i];
            segObj = {};
            if (designationList[i] !== undefined && designationList[i] !== null && designationList[i].Name !== undefined && designationList[i].Name !== null) {
                segObj["lblDesignation"] = validateText(desigObj["Name"]);
                segObj["imgDepartment0"] = "unselected.png";
                desigList.push(segObj);
            }
        }
        this.view.segDesignation.removeAll();
        this.view.segDesignation.addAll(desigList);
    },
    /**
     * @function onSegmenFilterClick
     * @description - On click of a particular department or designation in filter.
     * @param {JSON} - event object for the clicked row of a segment
     **/
    onSegmenFilterClick: function(eventobject) {
        var selectedItemDept = this.view.segDept.selectedRowItems;
        if (selectedItemDept !== null && selectedItemDept !== undefined && selectedItemDept[0] !== null && selectedItemDept[0] !== undefined && selectedItemDept[0].lblDepartment0 !== null && selectedItemDept[0].lblDepartment0 !== undefined) {
            selectedItemDept = selectedItemDept[0].lblDepartment0;
        } else {
            selectedItemDept = "";
        }
        var selectedItemDesig = this.view.segDesignation.selectedRowItems;
        if (selectedItemDesig !== null && selectedItemDesig !== undefined && selectedItemDesig[0] !== null && selectedItemDesig[0] !== undefined && selectedItemDesig[0].lblDesignation !== null && selectedItemDesig[0].lblDesignation !== undefined) {
            selectedItemDesig = selectedItemDesig[0].lblDesignation;
        } else {
            selectedItemDesig = "";
        }
        this.filter(selectedItemDept, selectedItemDesig);
    },
    /**
     * @function toggleProfile
     * @description - This function toggles the visibility of the profile popup.
     * @param {JSON } - event object of the clicked flexcontainer.
     **/
    toggleProfile: function(eventobject) {
        if (eventobject === "userProfile") {
            this.view.flxOverlay.setVisibility(true);
            this.view.flxProfileMain.setVisibility(true);
            this.view.flxFilterMain.setVisibility(false);
        }
    },
    /**
     * @function ClearFilter
     * @description - This function resets the data in the filter and reset the employee list.
     **/
    ClearFilter: function() {
        this.view.Filter.skin = "sknFilterNormal";
        this.view.forceLayout();
        this.addDepartmentTofilter(this.departmentList);
        this.addDesignationTofilter(this.designationList);
        this.filter("", "");
        this.populateDataToSegment(this.parsedEmployeeList);
    },
    cancelSearchMob: function() {
        this.populateDataToSegment(this.parsedEmployeeList);
        this.view.empHeader1.btnCancelsearch.setVisibility(false);
        this.view.empHeader1.flxImgSearch.setVisibility(true);
        this.view.empHeader1.btnCancelsearch.zIndex = 1;
        this.view.empHeader1.flxImgSearch.zIndex = 10;
        this.view.btnFilter.setVisibility(true);
        this.view.txtBxSearch.text = "";
        this.view.forceLayout();
        this.view.Filter.skin = "sknFilterNormal";
        this.view.forceLayout();
    },
    /**
     * @function filter
     * @description - Filters the employee's despartment and designation wrt to the selected dept or designation from filter.
     * @param {JSON} - Selected department and Designation on click of particular department.
     **/
    filter: function(selectedDept, selectedDesignation) {
        if (selectedDept == "" && selectedDesignation == "") {
            this.view.Filter.skin = "sknFilterNormal";
        } else {
            this.view.Filter.skin = "sknFilterActive";
        }
        this.view.forceLayout();
        var filteredEmployee = [];
        var isDepartmentMatched, isDesignationMatched;
        for (i = 0; i < this.parsedEmployeeList.length; i++) {
            isDepartmentMatched = false;
            isDesignationMatched = false;
            if (selectedDept !== "" && this.parsedEmployeeList[i] !== null && this.parsedEmployeeList[i] !== undefined && this.parsedEmployeeList[i].department[0] !== null && this.parsedEmployeeList[i].department[0] !== undefined && this.parsedEmployeeList[i].department[0].Name !== null && this.parsedEmployeeList[i].department[0].Name !== undefined) {
                if (this.parsedEmployeeList[i].department[0].Name.indexOf(selectedDept) !== -1) {
                    isDepartmentMatched = true;
                }
            }
            if (selectedDesignation !== "" && this.parsedEmployeeList[i] !== null && this.parsedEmployeeList[i] !== undefined && this.parsedEmployeeList[i].designation[0] !== null && this.parsedEmployeeList[i].designation[0] !== undefined && this.parsedEmployeeList[i].designation[0].Name !== null && this.parsedEmployeeList[i].designation[0].Name !== undefined) {
                if (this.parsedEmployeeList[i].designation[0].Name.indexOf(selectedDesignation) !== -1) {
                    isDesignationMatched = true;
                }
            }
            if (isDepartmentMatched || isDesignationMatched) {
                filteredEmployee.push(this.parsedEmployeeList[i]);
            }
        }
        this.populateDataToSegment(filteredEmployee);
    },
    /**
     * @function createNewEmployee
     * @description - Creates a employee object in backend using EmployeeModelSchema object service.
     * @param {JSON - error} - error response from the back end
     **/
    createNewEmployee: function() {
        try {
            var param = {
                "departmentList": this.departmentList,
                "designationList": this.designationList,
                "locationList": this.locationList,
                "employeeList": this.employeeList
            };
            globEmpOperatioMode = "add";
            var navObj = new kony.mvc.Navigation("frmEmpDetails");
            navObj.navigate(param);
        } catch (excp) {
            alert("Exception occured while navigating to the frmEmpDetails: " + JSON.stringify(excp));
        }
    },
    /**
     * @function searchRowByEmpId
     * @description - Finding the row index of a segment in employee list.
     * @param {JSON } - Selected employee's id.
     **/
    searchRowByEmpId: function(selectedEmpID) {
        var searchedEmpRowIndex;
        for (i = 0; i < this.employeeList.length; i++) {
            if (this.employeeList[i].Employee_id == selectedEmpID) searchedEmpRowIndex = i;
        }
        return searchedEmpRowIndex;
    },
    /**
     * @function onSegRowClickEvent
     * @description - Processing the the employee list with selected row of a segment
     * @param {JSON} - Eventobject, sectionnumber and row number of a segment.
     **/
    onSegRowClickEvent: function(eventobject, sectionNumber, rowNumber) {
        var selectedEmpID = eventobject.selectedRowItems[0].empID;
        var searchedEmpRowIndex = this.searchRowByEmpId(selectedEmpID);
        globEmpOperatioMode = "view";
        this.processRowSelection(this.parsedEmployeeList[searchedEmpRowIndex]);
    },
    /**
     * @function fetchAllDetails
     * @description - Fetching all the employee details.
     **/
    fetchAllDetails: function() {
        try {
            kony.print("----------Entering fetchAllDetails Function---------");
            this.view.txtBxSearch.text = "";
            var objectInstance = null;
            var sdkClient = new kony.sdk.getCurrentInstance();
            if (Object.keys(sdkClient).length !== 0) {
                objectInstance = sdkClient.getObjectService("StorageObjectServices", {
                    "access": "online"
                });
            }
            if (objectInstance === null || objectInstance === undefined) {
                dismissLoadingScreen();
                konymp.logger.info("Authorization object null - Connect to MF");
                alert("Please connect app to MF");
                return;
            }
            var dataObject = new kony.sdk.dto.DataObject("getAllDetails");
            var options = {
                "dataObject": dataObject,
                "headers": {}
            };
            showLoadingScreen(this.view);
            if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                objectInstance.fetch(options, this.fetchAllDetailsSuccess.bind(this), this.fetchAllDetailsFailure.bind(this));
            } else {
                dismissLoadingScreen();
                alert("No Network connected");
            }
        } catch (exception) {
            kony.print(JSON.stringify(exception));
        }
        kony.print("----------Exiting fetchAllDetails Function---------");
    },
    /**
     * @function populateDataToSegment
     * @description - Adding all the employee details in the employee list form.
     * @param {JSON} - List of employee array.
     **/
    populateDataToSegment: function(employeeList) {
        if (Array.isArray(employeeList)) {
            var employeeLength = employeeList.length;
            var segObj = {};
            var segList = [];
            var empObj;
            for (var i = 0; i < employeeLength; i++) {
                empObj = employeeList[i];
                segObj = {};
                segObj["fullName"] = validateText(empObj["First_name"]) + " " + validateText(empObj["Last_name"]);
                if (empObj["designation"].length > 0) {
                    segObj["designation"] = validateText(empObj["designation"][0]["Name"]);
                } else {
                    segObj["designation"] = "NA";
                }
                if (empObj["department"].length > 0) {
                    segObj["department"] = validateText(empObj["department"][0]["Name"]);
                } else {
                    segObj["department"] = "NA";
                }
                segObj["empID"] = empObj["Employee_id"];
                if (empObj["empimage"] === undefined) {
                    segObj["empimage"] = {
                        "src": "empdefaultimageicon.png"
                    };
                } else {
                    segObj["empimage"] = empObj["empimage"];
                }
                if (isAdmin(this.userEmail)) {
                    segObj["imgEdit"] = {
                        "isVisible": true,
                        "src": "empediticon.png"
                    };
                    segObj["imgRemove"] = {
                        "isVisible": true,
                        "src": "empremoveicon.png"
                    };
                } else {
                    segObj["imgEdit"] = {
                        "isVisible": false,
                        "src": "empediticon.png"
                    };
                    segObj["imgRemove"] = {
                        "isVisible": false,
                        "src": "empremoveicon.png"
                    };
                }
                segObj["flxDepAndId"] = {
                    "isVisible": false
                };
                segObj["flxDepIdDesig"] = {
                    "isVisible": false
                };
                segObj["imgDropDown"] = {
                    "src": "drop_down.png"
                };
                segObj["lblDepartmentText"] = "DEPARTMENT";
                segObj["lblDesignationText"] = "DESIGNATION";
                segObj["lblIdText"] = "EMPLOYEE ID";
                segList.push(segObj);
            }
            this.view.segEmployeeList.widgetDataMap = {
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
                "userIon": "userIon",
                "flxDepAndId": "flxDepAndId",
                "flxDepIdDesig": "flxDepIdDesig",
                "imgDropDown": "imgDropDown",
                "lblDepartmentText": "lblDepartmentText",
                "lblIdText": "lblIdText",
                "lblDesignationText": "lblDesignationText"
            };
            this.view.segEmployeeList.removeAll();
            this.view.segEmployeeList.addAll(segList);
            this.view.forceLayout();
        }
    },
    /**
     * @function fetchAllDetailsSuccess
     * @description Success Callback for fetchAllDetail
     * @param {Object} response
     * @callback fetchAllDetails
     */
    fetchAllDetailsSuccess: function(response) {
        try {
            kony.print("----------Entering fetchAllDetailsSuccess Function---------");
            this.parsedEmployeeList = this.requireModule.parseRecords(response.records[0]);
            this.departmentList = response.records[0].Department;
            this.designationList = response.records[0].Designation;
            this.locationList = response.records[0].Location;
            this.mediaList = response.records[0].Media;
            this.employeeList = response.records[0].Employee;
            if (this.parsedEmployeeList === undefined || this.parsedEmployeeList === null) return;
            this.populateDataToSegment(this.parsedEmployeeList);
            dismissLoadingScreen();
            if (this.mediaList.length > 0) {}
            this.addDepartmentTofilter(this.departmentList);
            this.addDesignationTofilter(this.designationList);
        } catch (exception) {
            dismissLoadingScreen();
            kony.print(JSON.stringify(exception));
            alert(exception.toString());
        }
        kony.print("----------Exiting fetchAllDetailsSuccess Function---------");
    },
    /**
     * @function fetchAllDetailsFailure
     * @description Failure Callback for fetchAllDetails
     * @private
     * @param {Object} response
     * @callback fetchAllDetails
     */
    fetchAllDetailsFailure: function(response) {
        var message = response.errmsg;
        try {
            kony.print("----------Entering fetchAllDetailsFailure Function---------");
            dismissLoadingScreen();
            this.view.alertmsg.setTitle("Error");
            this.view.alertmsg.setMessage("Service call failed");
            this.view.flxAlertContainer.setVisibility(true);
            this.view.forceLayout();
        } catch (exception) {
            kony.print(JSON.stringify(exception));
        }
        kony.print("----------Exiting fetchAllDetailsFailure Function---------");
    },
    /**
     * @function getBinarydataFromMediaObjects
     * @description - This function gets the binary data of the media from the media object.
     **/
    getBinarydataFromMediaObjects: function(mediaResp) {
        this.getImageByMediaId(mediaResp, 0, mediaResp.length, this.doneCompletingBinaryDownloads);
    },
    /**
     * @function getImageByMediaId
     * @description - gets image from media object by media id.
     **/
    getImageByMediaId: function(mediaResp, curIndex, TotCount, finalCallback) {
        var thisobj = this;
        var MediaIdVal = mediaResp[curIndex].Media_id;
        var objSvc = getObjectInstance();
        var dataObject = new kony.sdk.dto.DataObject("Media");
        //primary key details to get media object
        dataObject.addField("Media_id", MediaIdVal);
        objSvc.getBinaryContent({
            "dataObject": dataObject,
            "binaryAttrName": "Image"
        }, getBinaryContentSuccessCallback, getBinaryContentFailureCallback);

        function getBinaryContentSuccessCallback(bin) {
            kony.print("binary content is : " + JSON.stringify(bin));
            thisobj.profilePicsBinarydataMap[MediaIdVal] = bin;
            commonActionForSuccessFailureCallbacks();
        }

        function getBinaryContentFailureCallback(err) {
            kony.print("failed to get binary data : " + JSON.stringify(err));
            commonActionForSuccessFailureCallbacks();
        }

        function commonActionForSuccessFailureCallbacks() {
            curIndex++;
            if (curIndex == TotCount) {
                finalCallback();
                return;
            } else {
                thisobj.getImageByMediaId(mediaResp, curIndex, TotCount, finalCallback);
            }
        }
    },
    /**
     * @function doneCompletingBinaryDownloads
     * @description - This function is called when downloading of the image binaries is done.
     **/
    doneCompletingBinaryDownloads: function() {
        var profilePicMap = this.requireModule.profilePicMap;
        for (var i = 0; i < this.parsedEmployeeList.length; i++) {
            if (profilePicMap[this.parsedEmployeeList[i].Employee_id] === undefined || profilePicMap[this.parsedEmployeeList[i].Employee_id] === null || profilePicMap[this.parsedEmployeeList[i].Employee_id][0] === undefined || profilePicMap[this.parsedEmployeeList[i].Employee_id][0] === null) {
                this.parsedEmployeeList[i].empimage = {
                    src: globDefaultEmpProfilePic
                };
                continue;
            }
            if (profilePicMap[this.parsedEmployeeList[i].Employee_id][0].Url !== undefined && profilePicMap[this.parsedEmployeeList[i].Employee_id][0].Url !== null && profilePicMap[this.parsedEmployeeList[i].Employee_id][0].Url.length > 0) {
                this.parsedEmployeeList[i].empimage = {
                    src: profilePicMap[this.parsedEmployeeList[i].Employee_id][0].Url
                };
            } else if (profilePicMap[this.parsedEmployeeList[i].Employee_id][0].Media_id !== undefined && profilePicMap[this.parsedEmployeeList[i].Employee_id][0].Media_id !== null && profilePicMap[this.parsedEmployeeList[i].Employee_id][0].Media_id.length > 0) {
                var profilepicMediaIdOfEmp = profilePicMap[this.parsedEmployeeList[i].Employee_id][0].Media_id;
                var profilepicBinaryDataOfTheEmployee = window.atob(this.profilePicsBinarydataMap[profilepicMediaIdOfEmp]);
                profilePicMap[this.parsedEmployeeList[i].Employee_id][0].Image = profilepicBinaryDataOfTheEmployee;
                this.parsedEmployeeList[i].empimage = {
                    base64: profilepicBinaryDataOfTheEmployee
                };
                if (profilepicBinaryDataOfTheEmployee.length === 0) {
                    this.parsedEmployeeList[i].empimage = {
                        src: globDefaultEmpProfilePic
                    };
                }
            } else {
                this.parsedEmployeeList[i].empimage = {
                    src: globDefaultEmpProfilePic
                };
            }
        }
        this.populateDataToSegment(this.parsedEmployeeList);
        this.view.forceLayout();
        return;
    },
    /**
     * @function processRowSelection
     * @description - This function takes the selected employee array and navigates to ffrmEmpDetails.
     **/
    processRowSelection: function(empObj) {
        var param = {};
        param["employee"] = empObj;
        param["departmentList"] = this.departmentList;
        param["designationList"] = this.designationList;
        param["employeeList"] = this.employeeList;
        param["locationList"] = this.locationList;
        try {
            var navObj = new kony.mvc.Navigation("frmEmpDetails");
            navObj.navigate(param);
        } catch (e) {
            kony.print(JSON.stringify(e));
        }
    },
    /**
     * @function processEditIcon
     * @description - This function is called when a employee is selected for edit from frmEmpList.
     * @param {JSON} - Selected employee list
     **/
    processEditIcon: function(selectedEmployeeList) {
        if (Array.isArray(selectedEmployeeList) && selectedEmployeeList.length > 0) {
            var empId = selectedEmployeeList[0]["empID"];
            var employee = this.getEmployeeWithEmployeeId(empId);
            globEmpOperatioMode = "edit";
            this.processRowSelection(employee);
        }
    },
    /**
     * @function processRemoveIcon
     * @description - This function removes the selected employee when on click of remove icon.
     * @param {JSON} - Row of the selected employee.
     **/
    processRemoveIcon: function(selectedRow) {
        var viewcontroller = this;
        kony.print("In processRemoveIcon:" + JSON.stringify(selectedRow));
        var empFullName = ((selectedRow.fullName !== undefined) && (selectedRow.fullName !== null)) ? selectedRow.fullName : "";
        var empId = selectedRow.empID;
        var msg = "Are you sure you want to remove the employee [" + empFullName + " " + "] with Emp id [" + empId + "]";
        kony.ui.Alert({
            message: msg,
            alertType: constants.ALERT_TYPE_CONFIRMATION,
            alertTitle: "Remove an Employee",
            yesLabel: "Remove",
            noLabel: "Cancel",
            alertHandler: processUserConfirmation,
        }, null);

        function processUserConfirmation(isConfirmed) {
            if (isConfirmed) {
                var rowIndex = viewcontroller.searchRowByEmpId(empId);
                var selectedEmployee = viewcontroller.parsedEmployeeList[rowIndex];
                viewcontroller.removeSelectedEmployee(selectedEmployee);
            }
        }
    },
    /**
     * @function removeSelectedEmployee
     * @description - This function removes the selected employee and details on click of remove icon.
     * @param {JSON} - selected employee to delete.
     **/
    removeSelectedEmployee: function(selectedEmployee) {
        kony.print("removing the employee " + selectedEmployee.Employee_id);
        //Remove media 
        if (selectedEmployee.profilePic !== undefined && selectedEmployee.profilePic !== null) {
            this.removeMediaRecord(selectedEmployee.profilePic.Media_id);
        }
        //Remove email contact object
        if (selectedEmployee.contact !== undefined && selectedEmployee.contact[2] !== undefined && selectedEmployee.contact[2].Value !== undefined) {
            this.removeContactObject(selectedEmployee.contact[2].Value);
        }
        //Remove work contact object
        if (selectedEmployee.contact !== undefined && selectedEmployee.contact[1] !== undefined && selectedEmployee.contact[1].Value !== undefined) {
            this.removeContactObject(selectedEmployee.contact[1].Value);
        }
        //Remove mobile contact object
        if (selectedEmployee.contact !== undefined && selectedEmployee.contact[0] !== undefined && selectedEmployee.contact[0].Value !== undefined) {
            this.removeContactObject(selectedEmployee.contact[0].Value);
        }
        //Remove employee object
        this.removeEmployeeObject(selectedEmployee.Employee_id);
    },
    /**
     * @function removeBinary
     * @description - Removes the binary for the profile pic of employee from the table.
     * @param {JSON} - error response from the back end
     **/
    removeBinary: function(mediaIdParam) {
        var thiscontroller = this;
        var mediaId = mediaIdParam;
        var objSvc = getObjectInstance();
        var bindataObject = new kony.sdk.dto.DataObject("Media");
        bindataObject.addField("Media_id", mediaId);
        objSvc.deleteBinary({
            "dataObject": bindataObject,
            "binaryAttrName": "Image"
        }, function(resp) {
            kony.print("Binary content removed successfully: " + JSON.stringify(resp));
            thiscontroller.removeMediaRecord(mediaIdParam);
        }, function(err) {
            kony.print("Failed to remove Binary: " + JSON.stringify(err));
        });
    },
    /**
     * @function removeMediaRecord
     * @description - Removes the media record.
     **/
    removeMediaRecord: function(mediaIdParam) {
        var objSvc = getObjectInstance();
        var mediaObject = new kony.sdk.dto.DataObject("Media");
        mediaObject.addField("Media_id", mediaIdParam);
        objSvc.deleteRecord({
            "dataObject": mediaObject
        }, removeMediaObjectSuccessCallback, removeMediaObjectFailureCallback);

        function removeMediaObjectSuccessCallback(resp) {
            kony.print("removeMediaObjectSuccessCallback:" + JSON.stringify(resp));
        }

        function removeMediaObjectFailureCallback(err) {
            kony.print("removeMediaObjectFailureCallback:" + JSON.stringify(err));
        }
    },
    /**
     * @function removeContactObject
     * @description - Remove the contact object created.
     **/
    removeContactObject: function(contactIdParam) {
        var objSvc = getObjectInstance();
        var dataObject = new kony.sdk.dto.DataObject("Contact");
        dataObject.addField("Contact_id", contactIdParam);
        objSvc.deleteRecord({
            "dataObject": dataObject
        }, removeContactObjectSuccessCallback, removeContactObjectFailureCallback);

        function removeContactObjectSuccessCallback(resp) {
            kony.print("removeContactObjectSuccessCallback:" + JSON.stringify(resp));
        }

        function removeContactObjectFailureCallback(err) {
            kony.print("removeContactObjectFailureCallback:" + JSON.stringify(err));
        }
    },
    /**
     * @function removeEmployeeObject
     * @description - Removes the created Employee object.
     **/
    removeEmployeeObject: function(employeeIdParam) {
        thisController = this;
        var objSvc = getObjectInstance();
        var dataObject = new kony.sdk.dto.DataObject("Employee");
        dataObject.addField("Employee_id", employeeIdParam);
        objSvc.deleteRecord({
            "dataObject": dataObject
        }, removeEmployeeObjectSuccessCallback, removeEmployeeObjectFailureCallback);
        /**
         * @function removeEmployeeObjectSuccessCallback
         * @description - Success callback for  removeEmployeeObject.
         **/
        function removeEmployeeObjectSuccessCallback(resp) {
            thisController.view.segEmployeeList.removeAll();
            thisController.fetchAllDetails();
            kony.print("removeEmployeeObjectSuccessCallback:" + JSON.stringify(resp));
            this.view.alertmsg.setTitle("User Message");
            this.view.alertmsg.setMessage("The selected employee has been removed successfully!!");
            this.view.flxAlertContainer.setVisibility(true);
            this.view.forceLayout();
        }
        /**
         * @function removeEmployeeObjectFailureCallback
         * @description - Failure callback for  removeEmployeeObject.
         **/
        function removeEmployeeObjectFailureCallback(err) {
            kony.print("removeEmployeeObjectFailureCallback:" + JSON.stringify(err));
        }
    },
    /**
     * @function processSearch
     * @description - Searches the entered string by the user.
     * @param {JSON} - Searched string by the employee.
     **/
    processSearch: function(searchstring) {
        var segData = [];
        searchstring = searchstring.toLowerCase();
        this.view.segEmployeeList.removeAll();
        if (searchstring.length === 0) {
            this.populateDataToSegment(this.employeeList);
            return;
        } else {
            for (var i = 0; i < this.employeeList.length; i++) {
                if (this.employeeList[i].First_name.toLowerCase().indexOf(searchstring) != -1) {
                    segData.push(this.employeeList[i]);
                    continue;
                }
                if ((this.employeeList[i].Employee_id.toLowerCase().indexOf(searchstring) != -1)) {
                    segData.push(this.employeeList[i]);
                    continue;
                }
                if (this.employeeList[i].designation[0] !== undefined) {
                    if (this.employeeList[i].designation[0].Name !== null && this.employeeList[i].designation[0].Name !== undefined) {
                        if (this.employeeList[i].designation[0].Name.toLowerCase().indexOf(searchstring) != -1) {
                            segData.push(this.employeeList[i]);
                            continue;
                        }
                    }
                }
                if (this.employeeList[i].department[0] !== undefined) {
                    if (this.employeeList[i].department[0].Name !== null && this.employeeList[i].department[0].Name !== undefined) {
                        if (this.employeeList[i].department[0].Name.toLowerCase().indexOf(searchstring) != -1) {
                            segData.push(this.employeeList[i]);
                            continue;
                        }
                    }
                }
            }
            if (segData.length > 0) {
                this.populateDataToSegment(segData);
            } else {
                this.view.alertmsg.setTitle("User Message");
                this.view.alertmsg.setMessage("No matching employees found");
                this.view.flxAlertContainer.setVisibility(true);
                this.view.forceLayout();
            }
        }
    },
    /**
     * @function navigateToFormSetting
     * @description - Navigating to settings form from the left menu.
     **/
    navigateToFormSetting: function() {
        try {
            var navObj = new kony.mvc.Navigation("frmSetting");
            navObj.navigate();
        } catch (excp) {
            kony.print("Exception occured while navigating to setting form: " + JSON.stringify(excp));
            alert("Exception occured while navigating to setting form: " + JSON.stringify(excp));
        }
    },
    /**
     * @function setCommonData
     * @description - Callback function for "onAlertFlexClick" method of a Alert component.
     **/
    hideALertComponentCallBack: function() {
        this.view.flxAlertContainer.setVisibility(false);
    },
    onBreakpointChange: function(eventobject, breakpoint) {
        this.view.empHeader1.imgHamburger.src = "hamburger_menu.png";
        if (breakpoint > BREAKPOINT.TABLET) {
            //viewMode Desktop
            this.view.segEmployeeList.removeAll();
            this.view.segEmployeeList.rowTemplate = "flxTemplateEmpList";
            this.view.alertmsg.setUIForChannel("desktop");
            this.view.forceLayout();
        } else if (breakpoint >= 640 && breakpoint <= BREAKPOINT.TABLET) {
            // viewMode Tablet
            this.setUIforTablet();
            this.view.alertmsg.setUIForChannel("tablet");
            this.view.forceLayout();
        } else if (breakpoint < 640) {
            //viewMode Mobile
            this.setUIforMobile();
            this.view.alertmsg.setUIForChannel("mobile");
            this.view.forceLayout();
        }
        this.onPostShow();
    },
    expandEmployeeDetail: function(context) {
        if (context !== null && context !== undefined) {
            try {
                var data = context.widgetInfo.selectedItems[0];
                if (data.flxDepAndId.isVisible === true) {
                    data.imgDropDown.src = "drop_down.png";
                    data.flxDepAndId = {
                        "isVisible": false
                    };
                } else {
                    data.flxDepAndId = {
                        "isVisible": true
                    };
                    data.imgDropDown.src = "drop_down_arrow_orange.png";
                }
                this.view.segEmployeeList.setDataAt(data, context.rowIndex);
            } catch (excp) {
                kony.print(excp);
            }
        }
    },
    expandEmployeeDetailMob: function(context) {
        if (context !== null && context !== undefined) {
            try {
                var data = context.widgetInfo.selectedItems[0];
                if (data.flxDepIdDesig.isVisible === true) {
                    data.imgDropDown.src = "drop_down.png";
                    data.flxDepIdDesig = {
                        "isVisible": false
                    };
                } else {
                    data.flxDepIdDesig = {
                        "isVisible": true
                    };
                    data.imgDropDown.src = "drop_down_arrow_orange.png";
                }
                this.view.segEmployeeList.setDataAt(data, context.rowIndex);
            } catch (excp) {
                kony.print(excp);
            }
        }
    },
    /**
     * @function animateLeftMenu
     * @description - This function will animate the left menu on click of the hamburger menu.
     **/
    animateLeftMenu: function() {
        var self = this;
        var animDefinition;
        if (this.status == "open") {
            this.view.flxGreyBg.setVisibility(false);
            animDefinition = {
                100: {
                    "left": "-260dp"
                }
            };
        } else {
            self.view.flxMenuContainer.width = "100%";
            this.view.flxGreyBg.setVisibility(true);
            animDefinition = {
                100: {
                    "left": "0dp",
                }
            };
        }
        animDef = kony.ui.createAnimation(animDefinition);
        var config = {
            "duration": 0.2,
            "iterationCount": 1,
            "delay": 0.1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS
        };
        this.view.leftmenu.animate(animDef, config, {
            "animationEnd": function() {
                kony.print("ENTERED ANIMATION CALLBACK");
                if (self.status == "open") {
                    kony.print("status is now close");
                    self.status = "close";
                    self.view.empHeader1.imgHamburger.src = "hamburger_menu.png";
                    self.view.flxMenuContainer.width = "0%";
                } else {
                    self.status = "open";
                    kony.print("status is now open");
                    self.view.empHeader1.imgHamburger.src = "hamburger_menu_on_tap.png";
                }
                self.view.forceLayout();
            }
        });
    },
    /**
     * @function applyFilter
     * @description - This function will get called when we apply the filter.
     **/
    applyFilter: function() {
        this.view.flxFilterMain.setVisibility(false);
        this.view.flxOverlay.setVisibility(false);
        this.view.empHeader1.flxImgSearch.setVisibility(false);
        this.view.empHeader1.flxImgSearch.zIndex = 1;
        this.view.forceLayout();
        this.view.empHeader1.btnCancelsearch.setVisibility(true);
        this.view.empHeader1.zIndex = 10;
        this.view.forceLayout();
    },
    /**
     * @function setUIforTablet
     * @description - This function sets the UI for tablet mode.
     **/
    setUIforTablet: function() {
        this.view.empHeader1.flxHamburger.setVisibility(true);
        this.view.segEmployeeList.rowTemplate = "flxTemplateEmpListTab";
        this.view.forceLayout();
    },
    /**
     * @function setUIforTablet
     * @description - This function sets the UI for mobile mode.
     **/
    setUIforMobile: function() {
        this.view.empHeader1.flxHamburger.setVisibility(true);
        this.view.segEmployeeList.rowTemplate = "flxTemplateEmpListMob";
        this.view.forceLayout();
    },
    /**
     * @function onAnimationComplete
     * @description - This function is called when the animation of the left menu is complete.
     **/
    onAnimationComplete: function() {
        if (status == "open") {
            this.view.flxGreyBackground.setVisibility(true);
        } else {
            this.view.flxGreyBackground.setVisibility(false);
        }
    },
    onPostShow: function() {
        this.view.empHeader1.imgHamburger.src = "hamburger_menu.png";
        this.view.txtSearchInput.text = "";
        this.status = "close";
        if (this.employee == undefined || this.employee === null || globRefreshData == true) {
            this.view.segEmployeeList.removeAll();
            this.fetchAllDetails();
            globRefreshData = false;
        }
    },
});
define("frmEmpListControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_j61627ee7e5e4e0f80c7aa8bb08b343c: function AS_Form_j61627ee7e5e4e0f80c7aa8bb08b343c(eventobject) {
        var self = this;
        return self.onPostShow.call(this);
    },
    AS_Form_j95cd5e623b14b06a4bf11558cbe6438: function AS_Form_j95cd5e623b14b06a4bf11558cbe6438(eventobject, breakpoint) {
        var self = this;
        this.onBreakpointChange(eventobject, breakpoint);
        this.view.flxOverlay.setVisibility(false);
    },
    AS_FlexContainer_c1de1e75561d4fd5a8b6d12047422bef: function AS_FlexContainer_c1de1e75561d4fd5a8b6d12047422bef(eventobject) {
        var self = this;
        this.view.flxProfileMain.setVisibility(false);
        this.view.flxFilterMain.setVisibility(false);
    },
    AS_Button_b4900b7cfe6f4fb983c319933a6d6e73: function AS_Button_b4900b7cfe6f4fb983c319933a6d6e73(eventobject) {
        var self = this;
        return self.cancelSearchMob.call(this);
    },
    AS_Button_f6dc0ebdd65640488af853d876bcb0fe: function AS_Button_f6dc0ebdd65640488af853d876bcb0fe(eventobject, x, y) {
        var self = this;
        this.onPostShow();
        this.view.empHeader1.btnCancelsearch.setVisibility(false);
        this.view.empHeader1.imgSearchMob.setVisibility(true);
        this.view.btnFilter.setVisibility(false);
    },
    AS_FlexContainer_ieeca972529d4effa9f3e778fa6a7756: function AS_FlexContainer_ieeca972529d4effa9f3e778fa6a7756(eventobject) {
        var self = this;
        return self.animateLeftMenu.call(this);
    },
    AS_FlexContainer_cb9183d1735c4e7dac4d9e52e35475e5: function AS_FlexContainer_cb9183d1735c4e7dac4d9e52e35475e5(eventobject) {
        var self = this;
        this.view.flxSearch.setVisibility(true);
    },
    AS_FlexContainer_a8e3c62b0e434776970071f6672bd987: function AS_FlexContainer_a8e3c62b0e434776970071f6672bd987(eventobject) {
        var self = this;
        this.toggleProfile("userProfile");
    },
    AS_UWI_ab2a8e35a9e34246be947c938a5a7255: function AS_UWI_ab2a8e35a9e34246be947c938a5a7255(eventobject) {
        var self = this;
        return self.toggleProfile.call(this, null);
    },
    AS_FlexContainer_c208e1a054b44435961eb46be76c8062: function AS_FlexContainer_c208e1a054b44435961eb46be76c8062(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmEmpList");
        ntf.navigate();
    },
    AS_FlexContainer_e30cd5ba092f490c8251af8d527246cd: function AS_FlexContainer_e30cd5ba092f490c8251af8d527246cd(eventobject) {
        var self = this;
        this.navigateToFormSetting();
    },
    AS_FlexContainer_daae6224e5a747c2b38b0e8d1c2c0aa6: function AS_FlexContainer_daae6224e5a747c2b38b0e8d1c2c0aa6(eventobject) {
        var self = this;
        this.animateLeftMenu();
    },
    AS_FlexContainer_jbd614b975ea4ca6ab5882e27b740812: function AS_FlexContainer_jbd614b975ea4ca6ab5882e27b740812(eventobject) {
        var self = this;
        this.createNewEmployee();
        // var navObj = new kony.mvc.Navigation("frmEmpDetails");
        // globEmpOperatioMode = "add";
        // navObj.navigate();
    },
    AS_Button_d54b47820677405ea2faed36533ac5f1: function AS_Button_d54b47820677405ea2faed36533ac5f1(eventobject) {
        var self = this;
        this.createNewEmployee();
    },
    AS_FlexContainer_c9c6a29e0bda4fe5bd2ef0b65c8c9435: function AS_FlexContainer_c9c6a29e0bda4fe5bd2ef0b65c8c9435(eventobject) {
        var self = this;
        this.toggleFilter(eventobject);
    },
    AS_TextField_f617ed9cace648b497e24440d8707fad: function AS_TextField_f617ed9cace648b497e24440d8707fad(eventobject, changedtext) {
        var self = this;
        //kony.print("changedtext is :"+changedtext);
        var searchStr = eventobject.text;
        this.processSearch(searchStr);
    },
    AS_Segment_a36db9b5894c4a58a9d8c1ebc524bf49: function AS_Segment_a36db9b5894c4a58a9d8c1ebc524bf49(eventobject, x, y) {
        var self = this;
    },
    AS_Segment_cec36e013cc54f8db5ae879fbabe5480: function AS_Segment_cec36e013cc54f8db5ae879fbabe5480(eventobject, sectionNumber, rowNumber) {
        var self = this;
    },
    AS_Button_ffd8b2bf409644cda6fd159611c385c5: function AS_Button_ffd8b2bf409644cda6fd159611c385c5(eventobject) {
        var self = this;
        this.toggleFilterMob();
    },
    AS_FlexContainer_h80782c1af084f609cc0457d4f9ef348: function AS_FlexContainer_h80782c1af084f609cc0457d4f9ef348(eventobject) {
        var self = this;
        this.view.flxOverlay.setVisibility(false);
    },
    AS_FlexContainer_c1b4c672c23742c78bf15faf6c35eff3: function AS_FlexContainer_c1b4c672c23742c78bf15faf6c35eff3(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    AS_Button_f0d5f4ee4ced403bb7cf7e860e03f42d: function AS_Button_f0d5f4ee4ced403bb7cf7e860e03f42d(eventobject) {
        var self = this;
        return self.ClearFilter.call(this);
    },
    AS_FlexContainer_bd8f054127b14faa96ae4b6f5829a2d4: function AS_FlexContainer_bd8f054127b14faa96ae4b6f5829a2d4(eventobject) {
        var self = this;
        this.view.flxFilterMain.setVisibility(false);
        this.view.empHeader1.setVisibility(true);
        //this.view.flxFilterMob.setVisibility(false);
        this.onPostShow();
    },
    AS_Segment_d9774190f1114a0a94011eaf84896df4: function AS_Segment_d9774190f1114a0a94011eaf84896df4(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onSegmenFilterClick.call(this, null);
    },
    AS_Segment_e897f7298a33440b87c656b99e719415: function AS_Segment_e897f7298a33440b87c656b99e719415(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onSegmenFilterClick.call(this, null);
    },
    AS_Button_a8a2951345324586826d4bc6752f8f74: function AS_Button_a8a2951345324586826d4bc6752f8f74(eventobject) {
        var self = this;
        return self.ClearFilter.call(this);
    },
    AS_Button_fdd8d95f53f6445c871c5e80705bd63b: function AS_Button_fdd8d95f53f6445c871c5e80705bd63b(eventobject) {
        var self = this;
        return self.applyFilter.call(this);
    },
    AS_FlexContainer_h18737e83f0742b8aa5c2f4e861668b1: function AS_FlexContainer_h18737e83f0742b8aa5c2f4e861668b1(eventobject) {
        var self = this;
        this.hideALertComponentCallBack();
    },
    AS_UWI_ee005ed35c9946409cf368f650407d1c: function AS_UWI_ee005ed35c9946409cf368f650407d1c() {
        var self = this;
        this.hideALertComponentCallBack();
    },
    AS_FlexContainer_a1885387a1b748269c2559b18069d595: function AS_FlexContainer_a1885387a1b748269c2559b18069d595(eventobject) {
        var self = this;
        this.navigateToFormSetting();
    },
    AS_Button_c602b9c7701944598172099a66e71de1: function AS_Button_c602b9c7701944598172099a66e71de1(eventobject) {
        var self = this;
        return self.ClearFilter.call(this);
    },
    AS_FlexContainer_cd10fed2732541fe922a34a93e0d119c: function AS_FlexContainer_cd10fed2732541fe922a34a93e0d119c(eventobject) {
        var self = this;
        this.view.flxMobFilter.setVisibility(false);
    },
    AS_FlexContainer_g93588a3aec24223bd55f423ab75c869: function AS_FlexContainer_g93588a3aec24223bd55f423ab75c869(eventobject) {
        var self = this;
        this.view.flxSearch.setVisibility(false);
    },
    AS_TextField_ja9150d585e0480abb910b1324296030: function AS_TextField_ja9150d585e0480abb910b1324296030(eventobject, changedtext) {
        var self = this;
        var searchStr = eventobject.text;
        this.processSearch(searchStr);
        this.view.flxSearch.setVisibility(false);
        this.view.empHeader1.imgSearchMob.setVisibility(false);
        this.view.empHeader1.btnCancelsearch.setVisibility(true);
    },
    AS_FlexContainer_fa1547aabf9b4fca9cd7a8f9d33762b0: function AS_FlexContainer_fa1547aabf9b4fca9cd7a8f9d33762b0(eventobject) {
        var self = this;
        this.view.flxSearch.setVisibility(false);
    }
});
define("frmEmpListController", ["userfrmEmpListController", "frmEmpListControllerActions"], function() {
    var controller = require("userfrmEmpListController");
    var controllerActions = ["frmEmpListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
