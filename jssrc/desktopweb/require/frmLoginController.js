define("userfrmLoginController", {
    /**
     * @function onNavigate
     * @description - This function will call disable error function to disable the error label visibility
     **/
    userEmail: null,
    onNavigate: function() {
        this.disableError();
        kony.store.setItem("isAdmin", false);
    },
    /**
     * @function doUserStoreLogin
     * @description - This function will make userstore identity service call with user name and password
     * @param {String - username} - username entered in username text box
     * @param {String - password} - password entered in password text box
     **/
    doUserStoreLogin: function(username, password) {
        debugger;
        username = this.view.txtUser.text;
        password = this.view.txtPassWord.text;
        this.userEmail = username;
        if (username === null || username === "" || password === null || password === "") {
            this.enableError("Username or Password should not be Empty");
            return;
        }
        showLoadingScreen(this.view);
        var sdkInstance = new kony.sdk.getCurrentInstance();
        try {
            var userStoreAuth = sdkInstance.getIdentityService("test");
            var userCred = {
                "userid": username,
                "password": password
            };
            userStoreAuth.login(userCred, this.userStoreLoginSuccss.bind(this, userStoreAuth), this.userStoreLoginFailure.bind(this));
        } catch (error) {
            dismissLoadingScreen();
            this.enableError("something went wrong please try later");
        }
    },
    userFetchSuccess: function(result) {
        debugger;
        if (result !== undefined && result.groups !== undefined) {
            var groupLength = result.groups.length;
            for (i = 0; i < groupLength; i++) {
                if (result.groups[i] == "Admin") {
                    kony.store.setItem("isAdmin", true);
                    break;
                }
            }
        }
        var navToCreateEvent = new kony.mvc.Navigation("frmEmpList");
        navToCreateEvent.navigate();
    },
    userFetchFailure: function(result) {
        debugger;
    },
    /**
     * @function userStoreLoginSuccss
     * @description - This function will get the user attributes after successfull login
     * @param {JSON - response} - success response from the back end
     **/
    userStoreLoginSuccss: function(userStoreAuth, response) {
        debugger;
        userStoreAuth.getUserAttributes(this.userFetchSuccess.bind(this), this.userFetchFailure.bind(this));
        return;
    },
    /**
     * @function userStoreLoginFailure
     * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON - error} - error response from the back end
     **/
    userStoreLoginFailure: function(error) {
        this.enableError("The email and password combination you entered is not valid. Please try again.");
        this.view.txtPassWord.text = "";
        this.view.txtPasswordShow.text = "";
    },
    /**
     * @function enableError
     * @description - This function will enable error label in the UI with given message
     * @param {String - msg} - Message to be displayed
     **/
    enableError: function(msg) {
        kony.application.dismissLoadingScreen();
        this.view.lblError.text = msg;
        this.view.lblError.isVisible = true;
        this.view.forceLayout();
    },
    /**
     * @function disableError
     * @description - This function will make the error label invisible
     **/
    disableError: function() {
        this.view.lblError.isVisible = false;
        this.view.forceLayout();
    },
    /**
     * @function showLoading
     * @description - This function will show loading screen
     **/
    showLoading: function() {
        kony.application.showLoadingScreen("sknloading", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, {
            enableMenuKey: false,
            enableBackKey: false,
            progressIndicatorColor: "000000"
        });
        this.view.forceLayout();
    },
});
define("frmLoginControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_g04837b3351e4f77b7068d625f15c457: function AS_Form_g04837b3351e4f77b7068d625f15c457(eventobject) {
        var self = this;
    },
    AS_TextField_f38a41c004c54a74a9ab7cbda138505c: function AS_TextField_f38a41c004c54a74a9ab7cbda138505c(eventobject, changedtext) {
        var self = this;
        this.doUserStoreLogin(this.view.txtUser.text, this.view.txtPassWord.text);
    },
    AS_FlexContainer_f242b9953b724996baa03da20fbb176e: function AS_FlexContainer_f242b9953b724996baa03da20fbb176e(eventobject) {
        var self = this;
        if (this.view.imageShowPassword.src === "eyeiconvisible.png") {
            this.view.imageShowPassword.src = "eyeicon.png"
            this.view.txtPassWord.isVisible = true;
            this.view.txtPasswordShow.isVisible = false;
        } else {
            this.view.imageShowPassword.src = "eyeiconvisible.png";
            this.view.txtPasswordShow.text = this.view.txtPassWord.text;
            this.view.txtPassWord.isVisible = false;
            this.view.txtPasswordShow.isVisible = true;
        }
    },
    AS_Button_h6db9ecbd776435ea976fd9cc7c0e167: function AS_Button_h6db9ecbd776435ea976fd9cc7c0e167(eventobject) {
        var self = this;
        this.doUserStoreLogin(this.view.txtUser.text, this.view.txtPassWord.text);
    }
});
define("frmLoginController", ["userfrmLoginController", "frmLoginControllerActions"], function() {
    var controller = require("userfrmLoginController");
    var controllerActions = ["frmLoginControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
