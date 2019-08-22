define("com/konymp/login/userloginController", function() {
    var konyLoggerModule = require('com/konymp/login/konyLogger');
    var konymp = konymp || {};
    konymp.logger = (new konyLoggerModule("Login Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;
    constants.DEFAULT_MINIMUM_CHAR_LENGTH = 8;
    constants.DEFAULT_MAX_LENGTH = 30;
    constants.USERNAME_VALIDATION_MESSAGE = "Username too small";
    constants.PASSWORD_VALIDATION_MESSAGE = "Password too small";
    constants.DEFAULT_PROVIDER_NAME = "userstore";
    constants.MF_ALERT_MESSAGE = "Please connect to MobileFabric";
    constants.DEFAULT_SUCCESS_MESSAGE = "Login Success";
    constants.DEFAULT_FAILURE_MESSAGE = "Login Failed";
    return {
        /**
         * @constructor constructor
         * @param basicConfig
         * @param layoutConfig
         * @param pspConfig
         */
        constructor: function(basicConfig, layoutConfig, pspConfig) {
            konymp.logger.trace("In Component constructor", konymp.logger.FUNCTION_ENTRY);
            this._usernameMinimumChar = constants.DEFAULT_MINIMUM_CHAR_LENGTH;
            this._passwordMinimumChar = constants.DEFAULT_MINIMUM_CHAR_LENGTH;
            this._usernameValidationMsg = constants.USERNAME_VALIDATION_MESSAGE;
            this._passwordValidationMsg = constants.PASSWORD_VALIDATION_MESSAGE;
            this._providerName = constants.DEFAULT_PROVIDER_NAME;
            this._encryptCredentials = true;
            this._userName = "";
            this._password = "";
        },
        /**
         * @function initGettersSetters
         * @description contains getters/setters for custom properties
         */
        initGettersSetters: function() {
            defineGetter(this, "usernameMinimumChar", function() {
                konymp.logger.trace("----------Entering usernameMinimumCharacter Getter---------", konymp.logger.FUNCTION_ENTRY);
                return this._usernameMinimumChar;
            });
            defineSetter(this, "usernameMinimumChar", function(val) {
                konymp.logger.trace("----------Entering usernameMinimumCharacter Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (val == null || val == undefined) {
                        konymp.logger.warn("Username Min Char is undefined");
                        throw {
                            "Error": "LoginComponent",
                            "message": "Username Min Char is undefined"
                        };
                    }
                    if (isNaN(val)) {
                        konymp.logger.warn("Invalid datatype for Username Min Characters Property");
                        throw {
                            "Error": "LoginComponent",
                            "message": "Invalid datatype for Username Min Characters Property"
                        };
                    }
                    if (this.usernameMaxChar < val) {
                        konymp.logger.warn("usernameMaxChar is less than usernameMinimumChar");
                        throw {
                            "Error": "LoginComponent",
                            "message": "username Max Char is less than Username Min Character propert"
                        };
                    }
                    this._usernameMinimumChar = val;
                } catch (exception) {
                    if (exception["Error"] === "LoginComponent") alert(JSON.stringify(exception));
                }
            });
            defineGetter(this, "passwordMinimumChar", function() {
                konymp.logger.trace("----------Entering passwordMinimumCharacter Getter---------", konymp.logger.FUNCTION_ENTRY);
                return this._passwordMinimumChar;
            });
            defineSetter(this, "passwordMinimumChar", function(val) {
                konymp.logger.trace("----------Entering passwordMinimumCharacter Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (val == null || val == undefined) {
                        konymp.logger.warn("Password Min Char is undefined");
                        throw {
                            "Error": "LoginComponent",
                            "message": "Password Min Char is undefined"
                        };
                    }
                    if (isNaN(val)) {
                        konymp.logger.warn("Invalid datatype for Password Min Characters Property");
                        throw {
                            "Error": "LoginComponent",
                            "message": "Invalid datatype for Password Min Characters Property"
                        };
                    }
                    if (this.passwordMaxChar < val) {
                        konymp.logger.warn("passwordMaxChar is less than password Min Character");
                        throw {
                            "Error": "LoginComponent",
                            "message": "Password Max Char is less than Password Min Character propert"
                        };
                    }
                    this._passwordMinimumChar = val;
                } catch (exception) {
                    if (exception["Error"] == "LoginComponent") {
                        alert(JSON.stringify(exception));
                    }
                }
            });
            defineGetter(this, "usernameValidationMsg", function() {
                konymp.logger.trace("----------Entering usernameValidationMsg Getter---------", konymp.logger.FUNCTION_ENTRY);
                return this._usernameValidationMsg;
            });
            defineSetter(this, "usernameValidationMsg", function(val) {
                konymp.logger.trace("----------Entering usernameValidationMsg Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._usernameValidationMsg = val;
            });
            defineGetter(this, "passwordValidationMsg", function() {
                konymp.logger.trace("----------Entering passwordValidationMsg Getter---------", konymp.logger.FUNCTION_ENTRY);
                return this._passwordValidationMsg;
            });
            defineSetter(this, "passwordValidationMsg", function(val) {
                konymp.logger.trace("----------Entering passwordValidationMsg Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._passwordValidationMsg = val;
            });
            defineGetter(this, "providerName", function() {
                konymp.logger.trace("----------Entering providerName Getter---------", konymp.logger.FUNCTION_ENTRY);
                return this._providerName;
            });
            defineSetter(this, "providerName", function(val) {
                konymp.logger.trace("------------Entering providerName Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._providerName = val;
            });
            defineGetter(this, "encryptCredentials", function() {
                konymp.logger.trace("----------Entering encryptCredentials Getter---------", konymp.logger.FUNCTION_ENTRY);
                return this._encryptCredentials;
            });
            defineSetter(this, "encryptCredentials", function(val) {
                konymp.logger.trace("------------Entering encryptCredentials Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._encryptCredentials = val;
                if (val == true) {
                    this.getRememberMe();
                }
                this.checkTouchIdSupoort();
            });
        },
        /**
         * @function invokeTouch
         * @description This function is used to invoke animation
         * @private
         * @param {string} value
         * @param {string} top
         */
        invokeTouch: function(value, top) {
            konymp.logger.trace("---------------Entering invoke touch function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                value.animate(kony.ui.createAnimation({
                    "100": {
                        "left": "5%",
                        "top": top,
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE
                        },
                    }
                }), {
                    "delay": 0,
                    "iterationCount": 1,
                    "fillMode": kony.anim.FILL_MODE_FORWARDS,
                    "duration": 0.25
                }, {
                    "animationEnd": this.focus(value, top)
                });
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting invoke touch function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function focus
         * @description This function is invoked after invokeTouch animation success
         * @private
         * @param {Object} value
         * @param {string} top
         * @callback invokeTouchCallback
         */
        focus: function(value, top) {
            konymp.logger.trace("---------------Entering focus function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (value.id == "lblUsername" && top == "-1%") {
                    this.view.tbxUsername.setFocus(true);
                    this.view.flxLblUsername.isVisible = false;
                    this.view.forceLayout();
                    value.skin = "sknAnimate";
                } else if (value.id == "lblPassword" && top == "16%") {
                    this.view.tbxPassword.setFocus(true);
                    this.view.flxLblPassword.isVisible = false;
                    this.view.forceLayout();
                    value.skin = "sknAnimate";
                } else {
                    value.skin = "sknLblAnimate";
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting focus function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function onDoneCredentials
         * @description Common onDone function for username and password textboxes
         * @private
         * @param {Object} view
         * @event usernameOnDone
         * @event passwordOnDone
         */
        onDoneCredentials: function(view) {
            konymp.logger.trace("---------------Entering onDoneCredentials function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (view.id == "lblUsername") {
                    this.invokeTouch(this.view.lblPassword, "16%");
                    if (this.view.tbxUsername.text === "") {
                        this.invokeTouch(view, "6%");
                        this.view.flxLblUsername.isVisible = true;
                    }
                    if (this.usernameOnDone !== null && this.usernameOnDone !== undefined) {
                        konymp.logger.info("Invoking usernameOnDone event");
                        this.usernameOnDone();
                    } else {
                        this.validateUsername();
                    }
                } else if (view.id == "lblPassword") {
                    if (this.view.tbxPassword.text === "") {
                        this.invokeTouch(view, "23%");
                        this.view.flxLblPassword.isVisible = true;
                    }
                    if (this.passwordOnDone !== null && this.passwordOnDone !== undefined) {
                        konymp.logger.info("Invoking passwordOnDone event");
                        this.passwordOnDone();
                    } else {
                        this.validatePassword();
                    }
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting onDoneCredentials function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function getUsername
         * @description Returns username entered by the user
         * @public
         * @return {string} username
         */
        getUsername: function() {
            konymp.logger.trace("---------------Entering getUsername api---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                return this.view.tbxUsername.text;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
        },
        /**
         * @function getPassword
         * @description Returns password entered by the user
         * @public
         * @return {string} password
         */
        getPassword: function() {
            konymp.logger.trace("---------------Entering getPassword api---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                return this.view.tbxPassword.text;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
        },
        /**
         * @function invokeIdentityService
         * @description Invokes identity service provided by the user
         * @public
         * @param {string} providername
         */
        invokeIdentityService: function(providername) {
            konymp.logger.trace("---------------Entering invokeIdentityService api---------------", konymp.logger.FUNCTION_ENTRY);
            if (!kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                alert("No Internet Connection Available");
                return;
            }
            try {
                var argument = {};
                var authorizationClient = null;
                kony.application.showLoadingScreen(null, "Loading...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false, true, {});
                var sdkClient = new kony.sdk.getCurrentInstance();
                if (Object.keys(sdkClient).length !== 0) {
                    authorizationClient = sdkClient.getIdentityService(providername);
                }
                if (authorizationClient === null || authorizationClient === undefined) {
                    kony.application.dismissLoadingScreen();
                    konymp.logger.info("Authorization object null - Connect to MF");
                    alert(constants.MF_ALERT_MESSAGE);
                    return;
                }
                if (providername === constants.DEFAULT_PROVIDER_NAME || providername === "EmpDirectryAD") {
                    kony.store.setItem("inputType", "password");
                    argument.userid = this.getUsername();
                    argument.password = this.getPassword();
                } else {
                    this.view.flxIdentity.isVisible = true;
                    this.view.forceLayout();
                    argument.browserWidget = this.view.brwsrIdentity;
                    kony.application.dismissLoadingScreen();
                }
                konymp.logger.info("Network call to MF for identity authentication", konymp.logger.SERVICE_CALL);
                authorizationClient.login(argument, this.successWrapper.bind(this), this.failureWrapper.bind(this));
            } catch (exception) {
                kony.application.dismissLoadingScreen();
                alert("raised" + JSON.stringify(exception));
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting invokeIdentityService api---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function successWrapper
         * @description Success callback for invokeIdentityService
         * @private
         * @param {Object} response
         * @callback invokeIdentityServiceCallback
         * @event loginSuccessEvent
         */
        successWrapper: function(response) {
            konymp.logger.trace("---------------Entering successWrapper function---------------", konymp.logger.FUNCTION_ENTRY);
            konymp.logger.info("Invoke identity service success---" + JSON.stringify(response), konymp.logger.SUCCESS_CALLBACK);
            try {
                var inputType = kony.store.getItem("inputType");
                kony.application.dismissLoadingScreen();
                if (inputType === "social") {
                    this.view.flxIdentity.isVisible = false;
                    if (this.loginSuccessEvent !== null && this.loginSuccessEvent !== undefined) {
                        this.loginSuccessEvent(response);
                    } else {
                        alert(constants.DEFAULT_SUCCESS_MESSAGE);
                    }
                } else {
                    if (this.remembermeProperty == true) {
                        this.rememberMe();
                    }
                    if (this.touchIDProperty == true && (kony.store.getItem("touchID") == false || kony.store.getItem("touchID") == null) && this.getTouchSupport()) {
                        this.enableTouchID();
                    } else if (this.loginSuccessEvent !== null && this.loginSuccessEvent !== undefined) {
                        konymp.logger.info("Invoking Login Success event");
                        this.loginSuccessEvent();
                    } else {
                        alert(constants.DEFAULT_SUCCESS_MESSAGE);
                    }
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting successWrapper function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function failureWrapper
         * @description Failure callback for invokeIdentityService
         * @private
         * @param {Object} response
         * @callback invokeIdentityServiceCallback
         * @event loginFailureEvent
         */
        failureWrapper: function(response) {
            konymp.logger.trace("---------------Entering failureWrapper function---------------", konymp.logger.FUNCTION_ENTRY);
            konymp.logger.info("Invoke identity service failure" + JSON.stringify(response), konymp.logger.ERROR_CALLBACK);
            try {
                kony.application.dismissLoadingScreen();
                this.view.flxIdentity.isVisible = false;
                if (this.loginFailureEvent !== null && this.loginFailureEvent !== undefined) {
                    konymp.logger.info("Invoking Login Failure event");
                    this.loginFailureEvent();
                } else {
                    alert(constants.DEFAULT_FAILURE_MESSAGE);
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting failureWrapper function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function getTouchSupport
         * @description Return touch ID support for device
         * @private
         * @return {boolean} true/false
         */
        getTouchSupport: function() {
            konymp.logger.trace("---------------Entering getTouchSupport function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
                if (status == 5000) return true;
                return false;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting getTouchSupport function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function enableTouchID
         * @description Turns on visibility for Touch ID popup
         * @public
         * @param {string} input
         */
        enableTouchID: function(input) {
            konymp.logger.trace("---------------Entering enableTouchID api---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (this.view.flxTouchId.isVisible == true && kony.store.getItem("inputType") === "password") {
                    if (this.loginSuccessEvent !== null && this.loginSuccessEvent !== undefined && input !== true) {
                        this.view.flxPopups.flxEnableTouchIDPopup.btnCancel.onClick = this.touchCancelAction.bind(this, true);
                        this.view.flxPopups.flxEnableTouchIDPopup.btnEnable.onClick = this.touchEnableAction.bind(this, true);
                    }
                    this.view.flxPopups.isVisible = true;
                    this.view.flxEnableTouchIDPopup.isVisible = true;
                    this.view.forceLayout();
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting enableTouchID api---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function touchCancelAction
         * @description Action associated with cancel button of Touch ID popup
         * @private
         * @param {boolean} input
         * @event loginSuccessEvent
         */
        touchCancelAction: function(input) {
            konymp.logger.trace("---------------Entering touchCancelAction function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                this.view.flxPopups.isVisible = false;
                this.view.flxPopups.flxEnableTouchIDPopup.isVisible = false;
                if (input == true) {
                    this.loginSuccessEvent();
                } else {
                    alert(constants.DEFAULT_SUCCESS_MESSAGE);
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting touchCancelAction function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function touchEnableAction
         * @description Action associated with enable button of Touch ID popup
         * @private
         * @param {boolean} input
         * @event loginSuccessEvent
         */
        touchEnableAction: function(input) {
            konymp.logger.trace("---------------Entering touchEnableAction function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                this.view.flxPopups.isVisible = false;
                this.view.flxPopups.flxEnableTouchIDPopup.isVisible = false;
                kony.store.setItem("touchID", true);
                if (input == true) {
                    konymp.logger.info("Invoking Login success event");
                    this.loginSuccessEvent();
                } else {
                    alert(constants.DEFAULT_SUCCESS_MESSAGE);
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting touchEnableAction function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function invokeTouchID
         * @description invokes touch ID for the device
         * @private
         */
        invokeTouchID: function() {
            konymp.logger.trace("---------------Entering invokeTouchID function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (kony.store.getItem("touchID") !== true) {
                    alert("Login using Username and Password to enable touch ID");
                    return;
                }
                if (this.touchIDProperty == false) {
                    alert("Enable touch ID");
                    return;
                }
                var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
                if (status == "5000") {
                    var configMap = {
                        "promptMessage": "Swipe your finger"
                    };
                    kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.touchAuthenticationCallback.bind(this), configMap);
                } else {
                    alert("Device doesnt support Touch ID");
                }
            } catch (exception) {
                konymp.logger.error("Catch  in authenticateThroughTouch : " + JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting invokeTouchID function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function touchAuthenticationCallback
         * @description Callback function for invokeTouch ID
         * @private
         * @param {Object} code
         * @callback invokeTouchIDCallback
         * @event loginSuccessEvent
         */
        touchAuthenticationCallback: function(code) {
            konymp.logger.trace("---------------Entering touchAuthenticationCallback function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (code == 5000) {
                    if (this.loginSuccessEvent !== null && this.loginSuccessEvent !== undefined) {
                        konymp.logger.info("Invoking Login Success event");
                        this.loginSuccessEvent();
                    } else {
                        alert(constants.DEFAULT_SUCCESS_MESSAGE);
                    }
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting touchAuthenticationCallback function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function cancelTouchID
         * @description Action associated with cancel button of Touch ID popup
         * @private
         */
        cancelTouchID: function() {
            konymp.logger.trace("---------------Entering cancelTouchID function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                kony.localAuthentication.cancelAuthentication();
                this.view.flxTouchIDPopup.isVisible = false;
                this.view.flxPopups.isVisible = false;
                this.view.forceLayout();
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting cancelTouchID function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function generatePassword
         * @description Generates a random string
         * @private
         * @param {string} length
         * @return {string} retVal
         */
        generatePassword: function(length) {
            konymp.logger.trace("---------------Entering generatePassword function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
                var retVal = "";
                for (var i = 0, n = charset.length; i < length; ++i) {
                    retVal += charset.charAt(Math.floor(Math.random() * n));
                }
                return retVal;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting generatePassword function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function getrememberKey
         * @description Creates a keyobject from the key that is generated by generatePassword
         * @private
         */
        getrememberKey: function() {
            konymp.logger.trace("---------------Entering getrememberKey function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (kony.store.getItem("key") === null) {
                    var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {
                        passphrasetext: [this.generatePassword(32)],
                        subalgo: "aes",
                        passphrasehashalgo: "md5"
                    });
                    var myUniqueIDKey = kony.crypto.saveKey("encryptionKey", encryptDecryptKey);
                    kony.store.setItem("key", myUniqueIDKey);
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting getrememberKey function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function encryptData
         * @description Encrypts data with keyobject
         * @private
         * @param {string} data
         * @return {string} encrpytedData
         */
        encryptData: function(data) {
            konymp.logger.trace("---------------Entering encryptData function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (kony.store.getItem("key") === null) {
                    this.getrememberKey();
                }
                var rememberKey = kony.store.getItem("key");
                var myUniqueKey = kony.crypto.readKey(rememberKey);
                var properties = {
                    padding: "pkcs5",
                    mode: "cbc",
                    initializationvector: "1234567890123456"
                };
                var encryptedData = kony.crypto.encrypt("aes", myUniqueKey, data, properties);
                return (kony.convertToBase64(encryptedData));
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting encryptData function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function decryptData
         * @description Decrypts data with keyobject
         * @private
         * @param {string} data
         * @return {string} decryptedData
         */
        decryptData: function(data) {
            konymp.logger.trace("---------------Entering decryptData function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (kony.store.getItem("key") === null) {
                    this.getrememberKey();
                }
                var rememberKey = kony.store.getItem("key");
                var myUniqueKey = kony.crypto.readKey(rememberKey);
                var properties = {
                    padding: "pkcs5",
                    mode: "cbc",
                    initializationvector: "1234567890123456"
                };
                var decryptedData = kony.crypto.decrypt("aes", myUniqueKey, kony.convertToRawBytes(data), properties);
                return decryptedData;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting decryptData function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function changeImage
         * @description Invoked when user toggles remember me icon
         * @private
         */
        changeImage: function() {
            konymp.logger.trace("---------------Entering changeImage function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (this.view.imgRememberme.isVisible == true) {
                    this.view.imgRememberme.isVisible = false;
                    this.view.imgUnselected.isVisible = true;
                } else {
                    this.view.imgRememberme.isVisible = true;
                    this.view.imgUnselected.isVisible = false;
                }
                this.view.forceLayout();
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting changeImage function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function getRememberMe
         * @description Checks if any user credentials exist already
         * @private
         */
        getRememberMe: function() {
            konymp.logger.trace("---------------Entering getRememberMe function---------------", konymp.logger.FUNCTION_ENTRY);
            konymp.logger.info("Retrieving Username and password locally", konymp.logger.DATA_STORE);
            try {
                var Username = "";
                var Password = "";
                Username = kony.store.getItem("loginUsername");
                Password = kony.store.getItem("loginPassword");
                if (Username !== null && Password !== null) {
                    if (Username !== "" && Password !== "") {
                        this.view.lblPassword.top = "16%";
                        this.view.lblPassword.skin = "sknAnimate";
                        this.view.lblUsername.top = "-1%";
                        this.view.lblUsername.skin = "sknAnimate";
                        this.view.flxLblUsername.isVisible = false;
                        this.view.flxLblPassword.isVisible = false;
                    }
                    if (this.encryptCredentials) {} else {
                        Username = kony.store.getItem("loginUsername");
                        Password = kony.store.getItem("loginPassword");
                    }
                    this.view.tbxUsername.text = Username;
                    this.view.tbxPassword.text = Password;
                } else {
                    this.view.flxLblUsername.isVisibile = true;
                    this.view.flxLblPassword.isVisible = true;
                    this.view.lblPassword.top = "23%";
                    this.view.lblPassword.skin = "sknLblAnimate";
                    this.view.lblUsername.top = "6%";
                    this.view.lblUsername.skin = "sknLblAnimate";
                    this.view.tbxUsername.text = "";
                    this.view.tbxPassword.text = "";
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting getRememberMe function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function rememberMe
         * @description Stores user credentials by encrypting them
         * @public
         */
        rememberMe: function() {
            konymp.logger.trace("---------------Entering rememberMe api---------------", konymp.logger.FUNCTION_ENTRY);
            konymp.logger.info("Storing Username and password locally", konymp.logger.DATA_STORE);
            try {
                if (this.view.imgUnselected.isVisible == true) {
                    kony.store.setItem("loginUsername", "");
                    kony.store.setItem("loginPassword", "");
                } else if (kony.store.getItem("inputType") === "password" && this.view.imgRememberme.isVisible == true) {
                    if (this.encryptCredentials) {} else {
                        kony.store.setItem("loginUsername", this.getUsername());
                        kony.store.setItem("loginPassword", this.getPassword());
                    }
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting rememberMe api---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function invokeButtonClick
         * @description invoked when user clicks on submit button
         * @private
         * @event submitOnClick
         */
        invokeButtonClick: function() {
            konymp.logger.trace("---------------Entering invokeButtonClick function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                kony.store.setItem("inputType", "password");
                if (this.submitOnClick !== null && this.submitOnClick !== undefined) {
                    this.submitOnClick();
                } else {
                    if (this.validate()) {
                        if (this.providerName !== null || this.providerName !== undefined || this.providerName !== "") {
                            konymp.logger.info("Invoking identity service of providername - - - " + this.providerName);
                            this.invokeIdentityService(this.providerName);
                        } else {
                            this.invokeIdentityService("userstore");
                        }
                        //                     } else {
                        //                         alert("Please enter valid username and password");
                    }
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting invokeButtonClick function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function remembermeSelection
         * @description Event triggered when user sets remember me action event
         * @private
         * @event remembermeOnSelection
         */
        remembermeSelection: function() {
            konymp.logger.trace("---------------Entering remembermeSelection function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                this.changeImage();
                if (this.remembermeOnSelection !== null && this.remembermeOnSelection !== undefined) {
                    konymp.logger.info("Invoking rememberOnSelection event");
                    this.remembermeOnSelection();
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting remembermeSelection function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function validateUsername
         * @description Validates username entered by the user
         * @private
         * @returns {boolean} true/false
         */
        validateUsername: function() {
            konymp.logger.trace("---------------Entering validateUsername function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (parseInt(this.usernameMinimumChar) > this.getUsername().length) {
                    alert(this._usernameValidationMsg);
                    return false;
                }
                return true;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting validateUsername function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function validatePassword
         * @description Validates password entered by the user
         * @private
         * @returns {boolean} true/false
         */
        validatePassword: function() {
            konymp.logger.trace("---------------Entering validatePassword function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (parseInt(this.passwordMinimumChar) > this.getPassword().length) {
                    alert(this._passwordValidationMsg);
                    return false;
                }
                return true;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting validatePassword function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function validate
         * @description validates username and password
         * @private
         * @return {boolean} true/false
         */
        validate: function() {
            konymp.logger.trace("---------------Entering validate function---------------", konymp.logger.FUNCTION_ENTRY);
            try {
                //                 if (this.getUsername() !== "" && this.getUsername() !== null && this.getPassword() !== null && this.getPassword() !== "" && this.validateUsername() !== false && this.validatePassword !== false) {
                //                     return true;
                //                 }
                if (this.getUsername !== "" && this.getUsername() !== null && this.validateUsername()) {
                    if (this.getPassword() !== null && this.getPassword() !== "" && this.validatePassword() !== false) {
                        return true;
                    }
                }
                return false;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting validate function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function checkTouchIdSupoort
         * @description validates username and password
         * @private
         * @return {boolean} true/false
         */
        checkTouchIdSupoort: function() {
            konymp.logger.trace("---------------Entering checkTouchIdSupoort function---------------", konymp.logger.FUNCTION_ENTRY);
            try {} catch (exception) {
                alert(JSON.stringify(exception));
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting checkTouchIdSupoort function---------------", konymp.logger.FUNCTION_ENTRY);
        }
    };
});
define("com/konymp/login/loginControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_j808afcaa2034cefbf75af15f6c09dc6: function AS_FlexContainer_j808afcaa2034cefbf75af15f6c09dc6(eventobject) {
        var self = this;
        debugger;
        this.view.tbxUsername.text = "empdir_admin@kony.com";
        this.view.tbxPassword.text = "Empdir@1";
        this.view.lblUsername.isVisible = false;
        this.view.lblPassword.isVisible = false;
    },
    AS_FlexContainer_a671cf3d68d94f3fa48a83e7cc7cf98b: function AS_FlexContainer_a671cf3d68d94f3fa48a83e7cc7cf98b(eventobject) {
        var self = this;
        this.invokeTouchID();
    },
    AS_FlexContainer_ie37be001b8e451a80e336743b089e62: function AS_FlexContainer_ie37be001b8e451a80e336743b089e62(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableFacebookLogin");
    },
    AS_FlexContainer_dc962b25ce95410d89c7b7ffa11bdd1f: function AS_FlexContainer_dc962b25ce95410d89c7b7ffa11bdd1f(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableLinkedinLogin");
    },
    AS_FlexContainer_ef8aebce5edf414a9fa8c3747ea2069e: function AS_FlexContainer_ef8aebce5edf414a9fa8c3747ea2069e(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableGoogleLogin");
    },
    AS_FlexContainer_a5c0e2e83aa44eed83c2a7fd8b7b0082: function AS_FlexContainer_a5c0e2e83aa44eed83c2a7fd8b7b0082(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableOffice365Login");
    },
    AS_TextField_aab05ac153724a5a9efb070df7c69a26: function AS_TextField_aab05ac153724a5a9efb070df7c69a26(eventobject, changedtext) {
        var self = this;
        this.onDoneCredentials(this.view.lblUsername);
    },
    AS_TextField_eaee50dde2074a7c826d1dce00c9ef48: function AS_TextField_eaee50dde2074a7c826d1dce00c9ef48(eventobject, changedtext) {
        var self = this;
        this.onDoneCredentials(this.view.lblPassword);
    },
    AS_FlexContainer_d797f98aab6e47f6b467dfabfc6feb98: function AS_FlexContainer_d797f98aab6e47f6b467dfabfc6feb98(eventobject) {
        var self = this;
        this.remembermeSelection();
    },
    AS_Button_a7c6ffe0447b4c4fa8cb83acca03efd9: function AS_Button_a7c6ffe0447b4c4fa8cb83acca03efd9(eventobject) {
        var self = this;
        debugger;
        this.invokeButtonClick();
    },
    AS_FlexContainer_b3c40cbaa40740ea8e11c66eabaf175f: function AS_FlexContainer_b3c40cbaa40740ea8e11c66eabaf175f(eventobject) {
        var self = this;
        if (this.view.lblUsername.top == "6%") {
            this.view.flxLblUsername.isVisible = false;
            this.invokeTouch(this.view.lblUsername, "-1%");
        }
        this.view.forceLayout();
    },
    AS_FlexContainer_c9c5db49fc6c40869071ff10d717632f: function AS_FlexContainer_c9c5db49fc6c40869071ff10d717632f(eventobject) {
        var self = this;
        if (this.view.lblPassword.top == "23%") {
            this.view.flxLblPassword.isVisible = false;
            this.invokeTouch(this.view.lblPassword, "16%");
        }
        this.view.forceLayout();
    },
    AS_Button_e27d44d4f4ae4384a6cd7af30d4e5ab7: function AS_Button_e27d44d4f4ae4384a6cd7af30d4e5ab7(eventobject) {
        var self = this;
        this.touchEnableAction();
    },
    AS_Button_j59a88838022498caa8c99ee0182a7f7: function AS_Button_j59a88838022498caa8c99ee0182a7f7(eventobject) {
        var self = this;
        this.touchCancelAction();
    },
    AS_Button_d2e76fafcfee4c6e9ded5f5bb053a430: function AS_Button_d2e76fafcfee4c6e9ded5f5bb053a430(eventobject) {
        var self = this;
        this.cancelTouchID();
    },
    AS_FlexContainer_ca02a61dc5bc4eadb63fd6709d5be8a8: function AS_FlexContainer_ca02a61dc5bc4eadb63fd6709d5be8a8(eventobject) {
        var self = this;
        this.view.flxIdentity.isVisible = false;
        this.view.brwsrIdentity.htmlString = "<html>Please wait !!</html>"
    }
});
define("com/konymp/login/loginController", ["com/konymp/login/userloginController", "com/konymp/login/loginControllerActions"], function() {
    var controller = require("com/konymp/login/userloginController");
    var actions = require("com/konymp/login/loginControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "logoSource", function(val) {
            this.view.imgLogo.src = val;
        });
        defineGetter(this, "logoSource", function() {
            return this.view.imgLogo.src;
        });
        defineSetter(this, "logoScaleMode", function(val) {
            this.view.imgLogo.imageScaleMode = val;
        });
        defineGetter(this, "logoScaleMode", function() {
            return this.view.imgLogo.imageScaleMode;
        });
        defineSetter(this, "usernamePlaceholder", function(val) {
            this.view.lblUsername.text = val;
        });
        defineGetter(this, "usernamePlaceholder", function() {
            return this.view.lblUsername.text;
        });
        defineSetter(this, "passwordPlaceholder", function(val) {
            this.view.lblPassword.text = val;
        });
        defineGetter(this, "passwordPlaceholder", function() {
            return this.view.lblPassword.text;
        });
        defineSetter(this, "usernameMaxChar", function(val) {
            this.view.tbxUsername.maxTextLength = val;
        });
        defineGetter(this, "usernameMaxChar", function() {
            return this.view.tbxUsername.maxTextLength;
        });
        defineSetter(this, "passwordMaxChar", function(val) {
            this.view.tbxPassword.maxTextLength = val;
        });
        defineGetter(this, "passwordMaxChar", function() {
            return this.view.tbxPassword.maxTextLength;
        });
        defineSetter(this, "usernameInputMode", function(val) {
            this.view.tbxUsername.textInputMode = val;
        });
        defineGetter(this, "usernameInputMode", function() {
            return this.view.tbxUsername.textInputMode;
        });
        defineSetter(this, "passwordInputMode", function(val) {
            this.view.tbxPassword.textInputMode = val;
        });
        defineGetter(this, "passwordInputMode", function() {
            return this.view.tbxPassword.textInputMode;
        });
        defineSetter(this, "remembermeProperty", function(val) {
            this.view.flxRememberMe.isVisible = val;
        });
        defineGetter(this, "remembermeProperty", function() {
            return this.view.flxRememberMe.isVisible;
        });
        defineSetter(this, "touchIDProperty", function(val) {
            this.view.flxTouchId.isVisible = val;
        });
        defineGetter(this, "touchIDProperty", function() {
            return this.view.flxTouchId.isVisible;
        });
        defineSetter(this, "socialLoginVisible", function(val) {
            this.view.flxSocialLogin.isVisible = val;
        });
        defineGetter(this, "socialLoginVisible", function() {
            return this.view.flxSocialLogin.isVisible;
        });
        defineSetter(this, "forgotPasswordText", function(val) {
            this.view.btnForgotPassword.text = val;
        });
        defineGetter(this, "forgotPasswordText", function() {
            return this.view.btnForgotPassword.text;
        });
        defineSetter(this, "submitButtonText", function(val) {
            this.view.btnLogin.text = val;
        });
        defineGetter(this, "submitButtonText", function() {
            return this.view.btnLogin.text;
        });
        defineSetter(this, "rememberMeSelectedSource", function(val) {
            this.view.imgRememberme.src = val;
        });
        defineGetter(this, "rememberMeSelectedSource", function() {
            return this.view.imgRememberme.src;
        });
        defineSetter(this, "rememberMeUnSelectedSource", function(val) {
            this.view.imgUnselected.src = val;
        });
        defineGetter(this, "rememberMeUnSelectedSource", function() {
            return this.view.imgUnselected.src;
        });
        defineSetter(this, "touchIdCenterY", function(val) {
            this.view.flxTouchId.centerY = val;
        });
        defineGetter(this, "touchIdCenterY", function() {
            return this.view.flxTouchId.centerY;
        });
        defineSetter(this, "socialLoginCenterY", function(val) {
            this.view.flxSocialLogin.centerY = val;
        });
        defineGetter(this, "socialLoginCenterY", function() {
            return this.view.flxSocialLogin.centerY;
        });
        defineSetter(this, "facebookLogin", function(val) {
            this.view.flxFacebook.isVisible = val;
        });
        defineGetter(this, "facebookLogin", function() {
            return this.view.flxFacebook.isVisible;
        });
        defineSetter(this, "facebookCenterX", function(val) {
            this.view.flxFacebook.centerX = val;
        });
        defineGetter(this, "facebookCenterX", function() {
            return this.view.flxFacebook.centerX;
        });
        defineSetter(this, "linkedinLogin", function(val) {
            this.view.flxLinkedin.isVisible = val;
        });
        defineGetter(this, "linkedinLogin", function() {
            return this.view.flxLinkedin.isVisible;
        });
        defineSetter(this, "linkedinCenterX", function(val) {
            this.view.flxLinkedin.centerX = val;
        });
        defineGetter(this, "linkedinCenterX", function() {
            return this.view.flxLinkedin.centerX;
        });
        defineSetter(this, "office365Login", function(val) {
            this.view.flxOffice365.isVisible = val;
        });
        defineGetter(this, "office365Login", function() {
            return this.view.flxOffice365.isVisible;
        });
        defineSetter(this, "office365CenterX", function(val) {
            this.view.flxOffice365.centerX = val;
        });
        defineGetter(this, "office365CenterX", function() {
            return this.view.flxOffice365.centerX;
        });
        defineSetter(this, "facebookSource", function(val) {
            this.view.imgFaceBook.src = val;
        });
        defineGetter(this, "facebookSource", function() {
            return this.view.imgFaceBook.src;
        });
        defineSetter(this, "linkedinSource", function(val) {
            this.view.imgLinkedIn.src = val;
        });
        defineGetter(this, "linkedinSource", function() {
            return this.view.imgLinkedIn.src;
        });
        defineSetter(this, "office365Source", function(val) {
            this.view.imgOffice365.src = val;
        });
        defineGetter(this, "office365Source", function() {
            return this.view.imgOffice365.src;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_forgotPasswordOnClick_b2de6f8330d14c2489a31088725ac514 = function() {
        if (this.forgotPasswordOnClick) {
            this.forgotPasswordOnClick.apply(this, arguments);
        }
    }
    return controller;
});
