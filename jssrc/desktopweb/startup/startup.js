kony.globals["appid"] = "EmpDirAdmin";
kony.globals["apptitle"] = "Employee Directory";
kony.globals["build"] = "debug";
kony.globals["defaultLocale"] = "en_US";
kony.globals["locales"] = ["en_US"];
kony.globals["i18nArray"] = [];
kony.globals["localization"] = "true";
kony.globals["i18nVersion"] = "1050860482";
//startup.js
var appConfig = {
    appId: "EmpDirAdmin",
    appName: "EmployeeDirectory",
    appVersion: "1.0.1",
    isturlbase: "https://m100000015001.sit2-konycloud.com/services",
    isDebug: true,
    isMFApp: true,
    appKey: "7f8b691400ff0d17cb26f11aa081686",
    appSecret: "af70c6d8b69217e4d8d5e14e9a925aa4",
    serviceUrl: "https://100000015.auth.sit2-konycloud.com/appconfig",
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
        "baseId": "aa54413b-9a30-4d6e-8e3a-c71239f68dfb",
        "app_default_version": "1.0",
        "login": [{
            "provider_type": "userstore",
            "forgot_pswd_submit_userid": "https://100000015.auth.sit2-konycloud.com/forgot_password/submit_userid/",
            "reset_pswd": "https://100000015.auth.sit2-konycloud.com/forgot_password/reset_password/",
            "alias": "test",
            "type": "basic",
            "prov": "test",
            "url": "https://100000015.auth.sit2-konycloud.com"
        }, {
            "provider_type": "konyads",
            "alias": "MicrosoftActiveDirectory",
            "type": "basic",
            "prov": "MicrosoftActiveDirectory",
            "url": "https://100000015.auth.sit2-konycloud.com"
        }, {
            "provider_type": "oauth2",
            "alias": "reusableLinkedinLogin",
            "type": "oauth2",
            "prov": "reusableLinkedinLogin",
            "url": "https://100000015.auth.sit2-konycloud.com"
        }, {
            "provider_type": "oauth2",
            "alias": "reusableOffice365Login",
            "type": "oauth2",
            "prov": "reusableOffice365Login",
            "url": "https://100000015.auth.sit2-konycloud.com"
        }, {
            "provider_type": "userstore",
            "forgot_pswd_submit_userid": "https://100000015.auth.sit2-konycloud.com/forgot_password/submit_userid/",
            "reset_pswd": "https://100000015.auth.sit2-konycloud.com/forgot_password/reset_password/",
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "https://100000015.auth.sit2-konycloud.com"
        }, {
            "provider_type": "facebook",
            "alias": "reusableFacebookLogin",
            "type": "oauth2",
            "prov": "reusableFacebookLogin",
            "url": "https://100000015.auth.sit2-konycloud.com"
        }],
        "services_meta": {
            "EmployeeModelSchema": {
                "offline": false,
                "metadata_url": "https://m100000015001.sit2-konycloud.com/services/metadata/v1/EmployeeModelSchema",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://m100000015001.sit2-konycloud.com/services/data/v1/EmployeeModelSchema"
            },
            "StorageObjectServices": {
                "offline": false,
                "metadata_url": "https://m100000015001.sit2-konycloud.com/services/metadata/v1/StorageObjectServices",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://m100000015001.sit2-konycloud.com/services/data/v1/StorageObjectServices"
            },
            "fetchImageService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://m100000015001.sit2-konycloud.com/services/fetchImageService"
            },
            "EmployeeStorageObjects": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://m100000015001.sit2-konycloud.com/services/EmployeeStorageObjects"
            }
        },
        "selflink": "https://100000015.auth.sit2-konycloud.com/appconfig",
        "integsvc": {
            "_internal_logout": "https://m100000015001.sit2-konycloud.com/services/IST",
            "fetchImageService": "https://m100000015001.sit2-konycloud.com/services/fetchImageService",
            "EmployeeStorageObjects": "https://m100000015001.sit2-konycloud.com/services/EmployeeStorageObjects"
        },
        "service_doc_etag": "0000016CBF5C7BC8",
        "appId": "c5317a06-4b5f-4413-baf5-634a951c4ec0",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "EmpDirTrev",
        "reportingsvc": {
            "session": "https://m100000015001.sit2-konycloud.com/services/IST",
            "custom": "https://m100000015001.sit2-konycloud.com/services/CMS"
        },
        "Webapp": {
            "url": "https://m100000015001.sit2-konycloud.com/apps/EmpDirAdmin"
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
								