define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onclick defined for SettingsMenu **/
    AS_FlexContainer_bc7c86f86f9e40c7aac552e1160a9816: function AS_FlexContainer_bc7c86f86f9e40c7aac552e1160a9816(eventobject) {
        var self = this;
        this.navigateToFormSetting();
    },
    /** onclick defined for flxGreyBg **/
    AS_FlexContainer_fb0d86edfa714e6ca077509680ea4bb7: function AS_FlexContainer_fb0d86edfa714e6ca077509680ea4bb7(eventobject) {
        var self = this;
        this.animateLeftMenu();
    },
    /** onclick defined for SettingsMenu **/
    AS_FlexContainer_f34ed8b4c5f448859b3e5d1b5f16eb6a: function AS_FlexContainer_f34ed8b4c5f448859b3e5d1b5f16eb6a(eventobject) {
        var self = this;
        this.navigateToFormSetting();
    },
    /** onUserFlxClick defined for empheader **/
    AS_UWI_bcf419b0a31d4368b84adca095b91995: function AS_UWI_bcf419b0a31d4368b84adca095b91995(eventobject) {
        var self = this;
        return self.toggleProfile.call(this, eventobject);
    },
    /** onclick defined for flxUserInfo **/
    AS_FlexContainer_bdbcaf843f394502a060e2104b18c70c: function AS_FlexContainer_bdbcaf843f394502a060e2104b18c70c(eventobject) {
        var self = this;
        this.toggleProfile("userProfile");
    },
    /** onclick defined for flxHamburger **/
    AS_FlexContainer_c752f79ba4d9490db0559e601134131e: function AS_FlexContainer_c752f79ba4d9490db0559e601134131e(eventobject) {
        var self = this;
        return self.animateLeftMenu.call(this);
    },
    /** onclick defined for flxCloseDetails **/
    AS_FlexContainer_e6b995af4c0d464cb982413eefeadf49: function AS_FlexContainer_e6b995af4c0d464cb982413eefeadf49(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmEmpList");
        ntf.navigate();
    },
    /** onclick defined for btnEdit **/
    AS_Button_g7d68fc5faa140039a83143173f0d621: function AS_Button_g7d68fc5faa140039a83143173f0d621(eventobject) {
        var self = this;
        self.changeUIForEditMode.call(this);
        this.view.flxEditHeader.setVisibility(true);
    },
    /** onclick defined for flxHamburger **/
    AS_FlexContainer_bb2ed5886f354b238a8ebb55b3bd91fc: function AS_FlexContainer_bb2ed5886f354b238a8ebb55b3bd91fc(eventobject) {
        var self = this;
        this.animateLeftMenu();
    },
    /** onclick defined for flxCloseEditMode **/
    AS_FlexContainer_j7c3a2b805d94a29bf5cdf039ce4aa88: function AS_FlexContainer_j7c3a2b805d94a29bf5cdf039ce4aa88(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmEmpList");
        ntf.navigate();
    },
    /** onclick defined for btnSaveMode **/
    AS_Button_cc4061dc5dfd4c5ebd2770848f8eb330: function AS_Button_cc4061dc5dfd4c5ebd2770848f8eb330(eventobject) {
        var self = this;
        return self.processSaveOrEditButton.call(this);
    },
    /** onclick defined for flxRoot **/
    AS_FlexContainer_cbf161949265483fb3a25ffda5bad164: function AS_FlexContainer_cbf161949265483fb3a25ffda5bad164(eventobject) {
        var self = this;
        this.view.flxProfileMain.setVisibility(false);
    },
    /** onclick defined for flxLogout **/
    AS_FlexContainer_bf0e3552f7da49e3a72d795b03d899f9: function AS_FlexContainer_bf0e3552f7da49e3a72d795b03d899f9(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    /** onclick defined for flxOverlay **/
    AS_FlexContainer_hdb2384aecd343e5b59944a15403dc35: function AS_FlexContainer_hdb2384aecd343e5b59944a15403dc35(eventobject) {
        var self = this;
        this.view.flxOverlay.setVisibility(false);
    },
    /** onclick defined for flxAlertContainer **/
    AS_FlexContainer_a5f3ee6c3fba4645a931e6fc41cb0e38: function AS_FlexContainer_a5f3ee6c3fba4645a931e6fc41cb0e38(eventobject) {
        var self = this;
        this.hideALertComponentCallBack();
    },
    /** postshow defined for frmEmpDetails **/
    AS_d19e3990: function AS_d19e3990(eventobject) {
        var self = this;
        this.onFormPostShow();
        //kony_rotate(kony.application.getCurrentForm().Path3,-180);kony_rotate(kony.application.getCurrentForm().Path3140304942388160,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921568,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921856,-180);kony_rotate(kony.application.getCurrentForm().Path3,-180);kony_rotate(kony.application.getCurrentForm().Path3140304942388160,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921568,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921856,-180);kony_rotate(kony.application.getCurrentForm().Path3,-180);kony_rotate(kony.application.getCurrentForm().Path3140304942388160,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921568,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921856,-180);kony_rotate(kony.application.getCurrentForm().Path3,-180);kony_rotate(kony.application.getCurrentForm().Path3140304942388160,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921568,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921856,-180);kony_rotate(kony.application.getCurrentForm().Path3,-180);kony_rotate(kony.application.getCurrentForm().Path3140304942388160,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921568,-180);kony_rotate(kony.application.getCurrentForm().Path3140305061921856,-180);
    },
    /** onBreakpointChange defined for frmEmpDetails **/
    AS_Form_fad6611de20d4ba4830a9fb1f6d5ae26: function AS_Form_fad6611de20d4ba4830a9fb1f6d5ae26(eventobject, breakpoint) {
        var self = this;
    }
});