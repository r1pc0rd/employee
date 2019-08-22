define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxUserInfo **/
    AS_FlexContainer_a8e3c62b0e434776970071f6672bd987: function AS_FlexContainer_a8e3c62b0e434776970071f6672bd987(eventobject) {
        var self = this;
        this.toggleProfile("userProfile");
    },
    /** onClick defined for flxHamburger **/
    AS_FlexContainer_ieeca972529d4effa9f3e778fa6a7756: function AS_FlexContainer_ieeca972529d4effa9f3e778fa6a7756(eventobject) {
        var self = this;
        return self.animateLeftMenu.call(this);
    },
    /** onTouchEnd defined for btnCancelsearch **/
    AS_Button_f6dc0ebdd65640488af853d876bcb0fe: function AS_Button_f6dc0ebdd65640488af853d876bcb0fe(eventobject, x, y) {
        var self = this;
        this.onPostShow();
        this.view.empHeader1.btnCancelsearch.setVisibility(false);
        this.view.empHeader1.imgSearchMob.setVisibility(true);
        this.view.btnFilter.setVisibility(false);
    },
    /** onUserFlxClick defined for empheader **/
    AS_UWI_ab2a8e35a9e34246be947c938a5a7255: function AS_UWI_ab2a8e35a9e34246be947c938a5a7255(eventobject) {
        var self = this;
        return self.toggleProfile.call(this, null);
    },
    /** onClick defined for DirectoryMenuItemMouseover **/
    AS_FlexContainer_c208e1a054b44435961eb46be76c8062: function AS_FlexContainer_c208e1a054b44435961eb46be76c8062(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmEmpList");
        ntf.navigate();
    },
    /** onClick defined for SettingsMenu **/
    AS_FlexContainer_e30cd5ba092f490c8251af8d527246cd: function AS_FlexContainer_e30cd5ba092f490c8251af8d527246cd(eventobject) {
        var self = this;
        this.navigateToFormSetting();
    },
    /** onClick defined for flxGreyBg **/
    AS_FlexContainer_daae6224e5a747c2b38b0e8d1c2c0aa6: function AS_FlexContainer_daae6224e5a747c2b38b0e8d1c2c0aa6(eventobject) {
        var self = this;
        this.animateLeftMenu();
    },
    /** onClick defined for btnAddNewEmp **/
    AS_Button_d54b47820677405ea2faed36533ac5f1: function AS_Button_d54b47820677405ea2faed36533ac5f1(eventobject) {
        var self = this;
        this.createNewEmployee();
    },
    /** onClick defined for flxBtnAddNewEmployee **/
    AS_FlexContainer_jbd614b975ea4ca6ab5882e27b740812: function AS_FlexContainer_jbd614b975ea4ca6ab5882e27b740812(eventobject) {
        var self = this;
        this.createNewEmployee();
        // var navObj = new kony.mvc.Navigation("frmEmpDetails");
        // globEmpOperatioMode = "add";
        // navObj.navigate();
    },
    /** onClick defined for Group **/
    AS_FlexContainer_c9c6a29e0bda4fe5bd2ef0b65c8c9435: function AS_FlexContainer_c9c6a29e0bda4fe5bd2ef0b65c8c9435(eventobject) {
        var self = this;
        this.toggleFilter(eventobject);
    },
    /** onTextChange defined for txtSearchInput **/
    AS_TextField_f617ed9cace648b497e24440d8707fad: function AS_TextField_f617ed9cace648b497e24440d8707fad(eventobject, changedtext) {
        var self = this;
        //kony.print("changedtext is :"+changedtext);
        var searchStr = eventobject.text;
        this.processSearch(searchStr);
    },
    /** onClick defined for btnFilter **/
    AS_Button_ffd8b2bf409644cda6fd159611c385c5: function AS_Button_ffd8b2bf409644cda6fd159611c385c5(eventobject) {
        var self = this;
        this.toggleFilterMob();
    },
    /** onClick defined for flxRoot **/
    AS_FlexContainer_c1de1e75561d4fd5a8b6d12047422bef: function AS_FlexContainer_c1de1e75561d4fd5a8b6d12047422bef(eventobject) {
        var self = this;
        this.view.flxProfileMain.setVisibility(false);
        this.view.flxFilterMain.setVisibility(false);
    },
    /** onClick defined for flxLogout **/
    AS_FlexContainer_c1b4c672c23742c78bf15faf6c35eff3: function AS_FlexContainer_c1b4c672c23742c78bf15faf6c35eff3(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    /** onClick defined for btnClearAll **/
    AS_Button_f0d5f4ee4ced403bb7cf7e860e03f42d: function AS_Button_f0d5f4ee4ced403bb7cf7e860e03f42d(eventobject) {
        var self = this;
        return self.ClearFilter.call(this);
    },
    /** onClick defined for flxClose **/
    AS_FlexContainer_bd8f054127b14faa96ae4b6f5829a2d4: function AS_FlexContainer_bd8f054127b14faa96ae4b6f5829a2d4(eventobject) {
        var self = this;
        this.view.flxFilterMain.setVisibility(false);
        this.view.empHeader1.setVisibility(true);
        //this.view.flxFilterMob.setVisibility(false);
        this.onPostShow();
    },
    /** onRowClick defined for segDept **/
    AS_Segment_d9774190f1114a0a94011eaf84896df4: function AS_Segment_d9774190f1114a0a94011eaf84896df4(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onSegmenFilterClick.call(this, null);
    },
    /** onRowClick defined for segDesignation **/
    AS_Segment_e897f7298a33440b87c656b99e719415: function AS_Segment_e897f7298a33440b87c656b99e719415(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onSegmenFilterClick.call(this, null);
    },
    /** onClick defined for clearAll **/
    AS_Button_a8a2951345324586826d4bc6752f8f74: function AS_Button_a8a2951345324586826d4bc6752f8f74(eventobject) {
        var self = this;
        return self.ClearFilter.call(this);
    },
    /** onClick defined for btnApplyFilter **/
    AS_Button_fdd8d95f53f6445c871c5e80705bd63b: function AS_Button_fdd8d95f53f6445c871c5e80705bd63b(eventobject) {
        var self = this;
        return self.applyFilter.call(this);
    },
    /** onClick defined for flxOverlay **/
    AS_FlexContainer_h80782c1af084f609cc0457d4f9ef348: function AS_FlexContainer_h80782c1af084f609cc0457d4f9ef348(eventobject) {
        var self = this;
        this.view.flxOverlay.setVisibility(false);
    },
    /** onClick defined for flxAlertContainer **/
    AS_FlexContainer_h18737e83f0742b8aa5c2f4e861668b1: function AS_FlexContainer_h18737e83f0742b8aa5c2f4e861668b1(eventobject) {
        var self = this;
        this.hideALertComponentCallBack();
    },
    /** onClick defined for SettingsMenu **/
    AS_FlexContainer_a1885387a1b748269c2559b18069d595: function AS_FlexContainer_a1885387a1b748269c2559b18069d595(eventobject) {
        var self = this;
        this.navigateToFormSetting();
    },
    /** onClick defined for CopybtnClearAll0f386a0c1196b46 **/
    AS_Button_c602b9c7701944598172099a66e71de1: function AS_Button_c602b9c7701944598172099a66e71de1(eventobject) {
        var self = this;
        return self.ClearFilter.call(this);
    },
    /** onTextChange defined for txtBxSearch **/
    AS_TextField_ja9150d585e0480abb910b1324296030: function AS_TextField_ja9150d585e0480abb910b1324296030(eventobject, changedtext) {
        var self = this;
        var searchStr = eventobject.text;
        this.processSearch(searchStr);
        this.view.flxSearch.setVisibility(false);
        this.view.empHeader1.imgSearchMob.setVisibility(false);
        this.view.empHeader1.btnCancelsearch.setVisibility(true);
    },
    /** onClick defined for flxCloseSearch **/
    AS_FlexContainer_fa1547aabf9b4fca9cd7a8f9d33762b0: function AS_FlexContainer_fa1547aabf9b4fca9cd7a8f9d33762b0(eventobject) {
        var self = this;
        this.view.flxSearch.setVisibility(false);
    },
    /** onClick defined for flxSearch **/
    AS_FlexContainer_g93588a3aec24223bd55f423ab75c869: function AS_FlexContainer_g93588a3aec24223bd55f423ab75c869(eventobject) {
        var self = this;
        this.view.flxSearch.setVisibility(false);
    },
    /** postShow defined for frmEmpList **/
    AS_Form_j61627ee7e5e4e0f80c7aa8bb08b343c: function AS_Form_j61627ee7e5e4e0f80c7aa8bb08b343c(eventobject) {
        var self = this;
        return self.onPostShow.call(this);
    },
    /** onBreakpointChange defined for frmEmpList **/
    AS_Form_j95cd5e623b14b06a4bf11558cbe6438: function AS_Form_j95cd5e623b14b06a4bf11558cbe6438(eventobject, breakpoint) {
        var self = this;
        this.onBreakpointChange(eventobject, breakpoint);
        this.view.flxOverlay.setVisibility(false);
    }
});