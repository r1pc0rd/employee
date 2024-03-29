kony.globals["appid"] = "EmpDirAdmin";
kony.globals["apptitle"] = "Employee Directory";
kony.globals["build"] = "debug";
kony.globals["defaultLocale"] = "en_US";
kony.globals["locales"] = ["en_US"];
kony.globals["i18nArray"] = [];
kony.globals["localization"] = "true";
kony.globals["i18nVersion"] = "259474591";
//startup.js
var appConfig = {
    appId: "EmpDirAdmin",
    appName: "EmployeeDirectory",
    appVersion: "1.0.1",
    isturlbase: "https://mtmw100000011003.sit2-konycloud.com/services",
    isDebug: true,
    isMFApp: true,
    appKey: "3613707d564d383be3734d6e872656ed",
    appSecret: "44d56a41df6df6c3a00b921fa6ebfc81",
    serviceUrl: "https://100000011.auth.sit2-konycloud.com/appconfig",
    svcDoc: {
        "identity_meta": {
            "reusableLinkedinLogin": {
                "success_url": "allow_any"
            },
            "reusableOffice365Login": {
                "success_url": "allow_any"
            }
        },
        "app_version": "1.0",
        "baseId": "94abacb1-3d1a-426c-86be-09fcc1e1bb5a",
        "app_default_version": "1.0",
        "login": [{
            "provider_type": "oauth2",
            "alias": "reusableLinkedinLogin",
            "type": "oauth2",
            "prov": "reusableLinkedinLogin",
            "url": "https://100000011.auth.sit2-konycloud.com"
        }, {
            "provider_type": "userstore",
            "forgot_pswd_submit_userid": "https://100000011.auth.sit2-konycloud.com/forgot_password/submit_userid/",
            "reset_pswd": "https://100000011.auth.sit2-konycloud.com/forgot_password/reset_password/",
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "https://100000011.auth.sit2-konycloud.com"
        }, {
            "provider_type": "facebook",
            "alias": "reusableFacebookLogin",
            "type": "oauth2",
            "prov": "reusableFacebookLogin",
            "url": "https://100000011.auth.sit2-konycloud.com"
        }, {
            "provider_type": "konyads",
            "alias": "MicrosoftActiveDirectory",
            "type": "basic",
            "prov": "MicrosoftActiveDirectory",
            "url": "https://100000011.auth.sit2-konycloud.com"
        }, {
            "provider_type": "userstore",
            "forgot_pswd_submit_userid": "https://100000011.auth.sit2-konycloud.com/forgot_password/submit_userid/",
            "reset_pswd": "https://100000011.auth.sit2-konycloud.com/forgot_password/reset_password/",
            "alias": "trevtest",
            "type": "basic",
            "prov": "trevtest",
            "url": "https://100000011.auth.sit2-konycloud.com"
        }, {
            "provider_type": "oauth2",
            "alias": "reusableOffice365Login",
            "type": "oauth2",
            "prov": "reusableOffice365Login",
            "url": "https://100000011.auth.sit2-konycloud.com"
        }],
        "services_meta": {
            "EmployeeModelSchema": {
                "offline": false,
                "metadata_url": "https://mtmw100000011003.sit2-konycloud.com/services/metadata/v1/EmployeeModelSchema",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://mtmw100000011003.sit2-konycloud.com/services/data/v1/EmployeeModelSchema"
            },
            "StorageObjectServices": {
                "offline": false,
                "metadata_url": "https://mtmw100000011003.sit2-konycloud.com/services/metadata/v1/StorageObjectServices",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://mtmw100000011003.sit2-konycloud.com/services/data/v1/StorageObjectServices"
            },
            "fetchImageService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mtmw100000011003.sit2-konycloud.com/services/fetchImageService"
            },
            "EmployeeStorageObjects": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mtmw100000011003.sit2-konycloud.com/services/EmployeeStorageObjects"
            }
        },
        "selflink": "https://100000011.auth.sit2-konycloud.com/appconfig",
        "integsvc": {
            "_internal_logout": "https://mtmw100000011003.sit2-konycloud.com/services/IST",
            "fetchImageService": "https://mtmw100000011003.sit2-konycloud.com/services/fetchImageService",
            "EmployeeStorageObjects": "https://mtmw100000011003.sit2-konycloud.com/services/EmployeeStorageObjects"
        },
        "service_doc_etag": "0000016CCFB59680",
        "appId": "8873f425-cdb9-4f8d-82ae-83fc68804a40",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "EmpDirTrev",
        "reportingsvc": {
            "session": "https://mtmw100000011003.sit2-konycloud.com/services/IST",
            "custom": "https://mtmw100000011003.sit2-konycloud.com/services/CMS"
        },
        "Webapp": {
            "url": "https://mtmw100000011003.sit2-konycloud.com/apps/EmpDirAdmin"
        }
    },
    eventTypes: ["FormEntry", "Error", "Crash"],
    testAutomation: {
        "scriptsURL": "http://192.168.50.241:9989/testresources/EmployeeDirectory/",
        "webSocketPort": 9111,
        "fetchScriptsFromLocalStorage": false
    },
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        responsive: true,
        APILevel: 8200
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: kony.appinit.getStaticContentPath() + 'desktopweb/appjs'
    });
    require(['kvmodules'], function() {
        applicationController = require("applicationController");
        kony.application.setApplicationInitializationEvents({
            init: applicationController.appInit,
            appservice: function(eventObject) {
                var value = applicationController.AS_AppEvents_hd3a320b6d724fc298714446776157a9(eventObject);
                return value;
            },
            postappinit: applicationController.postAppInitCallBack,
            showstartupform: function() {
                new kony.mvc.Navigation("frmLogin").navigate();
            }
        });
    });
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function loadResources() {
    kony.theme.packagedthemes(["EmployeeDirectory", "default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    kony.theme.setCurrentTheme("EmployeeDirectory", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //This is the entry point for the application.When Locale comes,Local API call will be the entry point.
    kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								