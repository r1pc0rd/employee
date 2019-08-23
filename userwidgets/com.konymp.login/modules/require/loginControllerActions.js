define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxTouchId **/
    AS_FlexContainer_a671cf3d68d94f3fa48a83e7cc7cf98b: function AS_FlexContainer_a671cf3d68d94f3fa48a83e7cc7cf98b(eventobject) {
        var self = this;
        this.invokeTouchID();
    },
    /** onClick defined for flxFacebook **/
    AS_FlexContainer_ie37be001b8e451a80e336743b089e62: function AS_FlexContainer_ie37be001b8e451a80e336743b089e62(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableFacebookLogin");
    },
    /** onClick defined for flxLinkedin **/
    AS_FlexContainer_dc962b25ce95410d89c7b7ffa11bdd1f: function AS_FlexContainer_dc962b25ce95410d89c7b7ffa11bdd1f(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableLinkedinLogin");
    },
    /** onClick defined for flxGoogle **/
    AS_FlexContainer_ef8aebce5edf414a9fa8c3747ea2069e: function AS_FlexContainer_ef8aebce5edf414a9fa8c3747ea2069e(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableGoogleLogin");
    },
    /** onClick defined for flxOffice365 **/
    AS_FlexContainer_a5c0e2e83aa44eed83c2a7fd8b7b0082: function AS_FlexContainer_a5c0e2e83aa44eed83c2a7fd8b7b0082(eventobject) {
        var self = this;
        kony.store.setItem("inputType", "social");
        this.invokeIdentityService("reusableOffice365Login");
    },
    /** onDone defined for tbxUsername **/
    AS_TextField_aab05ac153724a5a9efb070df7c69a26: function AS_TextField_aab05ac153724a5a9efb070df7c69a26(eventobject, changedtext) {
        var self = this;
        this.onDoneCredentials(this.view.lblUsername);
    },
    /** onDone defined for tbxPassword **/
    AS_TextField_eaee50dde2074a7c826d1dce00c9ef48: function AS_TextField_eaee50dde2074a7c826d1dce00c9ef48(eventobject, changedtext) {
        var self = this;
        this.onDoneCredentials(this.view.lblPassword);
    },
    /** onClick defined for flxRememberMe **/
    AS_FlexContainer_d797f98aab6e47f6b467dfabfc6feb98: function AS_FlexContainer_d797f98aab6e47f6b467dfabfc6feb98(eventobject) {
        var self = this;
        this.remembermeSelection();
    },
    /** onClick defined for btnLogin **/
    AS_Button_a7c6ffe0447b4c4fa8cb83acca03efd9: function AS_Button_a7c6ffe0447b4c4fa8cb83acca03efd9(eventobject) {
        var self = this;
        debugger;
        this.invokeButtonClick();
    },
    /** onClick defined for flxLblUsername **/
    AS_FlexContainer_b3c40cbaa40740ea8e11c66eabaf175f: function AS_FlexContainer_b3c40cbaa40740ea8e11c66eabaf175f(eventobject) {
        var self = this;
        if (this.view.lblUsername.top == "6%") {
            this.view.flxLblUsername.isVisible = false;
            this.invokeTouch(this.view.lblUsername, "-1%");
        }
        this.view.forceLayout();
    },
    /** onClick defined for flxLblPassword **/
    AS_FlexContainer_c9c5db49fc6c40869071ff10d717632f: function AS_FlexContainer_c9c5db49fc6c40869071ff10d717632f(eventobject) {
        var self = this;
        if (this.view.lblPassword.top == "23%") {
            this.view.flxLblPassword.isVisible = false;
            this.invokeTouch(this.view.lblPassword, "16%");
        }
        this.view.forceLayout();
    },
    /** onClick defined for btnEnable **/
    AS_Button_e27d44d4f4ae4384a6cd7af30d4e5ab7: function AS_Button_e27d44d4f4ae4384a6cd7af30d4e5ab7(eventobject) {
        var self = this;
        this.touchEnableAction();
    },
    /** onClick defined for btnCancel **/
    AS_Button_j59a88838022498caa8c99ee0182a7f7: function AS_Button_j59a88838022498caa8c99ee0182a7f7(eventobject) {
        var self = this;
        this.touchCancelAction();
    },
    /** onClick defined for btnTouchCancel **/
    AS_Button_d2e76fafcfee4c6e9ded5f5bb053a430: function AS_Button_d2e76fafcfee4c6e9ded5f5bb053a430(eventobject) {
        var self = this;
        this.cancelTouchID();
    },
    /** onClick defined for flxClose **/
    AS_FlexContainer_ca02a61dc5bc4eadb63fd6709d5be8a8: function AS_FlexContainer_ca02a61dc5bc4eadb63fd6709d5be8a8(eventobject) {
        var self = this;
        this.view.flxIdentity.isVisible = false;
        this.view.brwsrIdentity.htmlString = "<html>Please wait !!</html>"
    },
    /** preShow defined for login **/
    AS_FlexContainer_j808afcaa2034cefbf75af15f6c09dc6: function AS_FlexContainer_j808afcaa2034cefbf75af15f6c09dc6(eventobject) {
        var self = this;
        debugger;
        this.view.tbxUsername.text = "empdir_admin@kony.com";
        this.view.tbxPassword.text = "Empdir@1";
        this.view.lblUsername.isVisible = false;
        this.view.lblPassword.isVisible = false;
    }
});