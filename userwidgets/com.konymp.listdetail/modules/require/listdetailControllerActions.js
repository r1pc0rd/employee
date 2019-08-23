define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnBack **/
    AS_Button_g77a2744b51f4489b1c8a1bd18fdbcc8: function AS_Button_g77a2744b51f4489b1c8a1bd18fdbcc8(eventobject) {
        var self = this;
        this._segClickFlag = 0;
        this.navigateFlex(this, "100%");
        this.reanimateTheWidgetsInDetailsPage();
        this.view.forceLayout();
    },
    /** onClick defined for flxDetailsHeader **/
    AS_FlexContainer_f6df64dd64f74897b5e5222b966ca473: function AS_FlexContainer_f6df64dd64f74897b5e5222b966ca473(eventobject) {
        var self = this;
        //alert();
    },
    /** onClick defined for flxMobileImageHolder **/
    AS_FlexContainer_b147835de3ec49aa950dd7e2163ca033: function AS_FlexContainer_b147835de3ec49aa950dd7e2163ca033(eventobject) {
        var self = this;
        this.onClickOfCallFlex(this.view.lblCallMobileValue.text);
    },
    /** onClick defined for flxWorkImageHolder **/
    AS_FlexContainer_de06731104394227b49eb2c2c460dd21: function AS_FlexContainer_de06731104394227b49eb2c2c460dd21(eventobject) {
        var self = this;
        this.onClickOfCallFlex(this.view.lblCallWorkValue.text);
    },
    /** onClick defined for flxEmailHolder **/
    AS_FlexContainer_eb1809bad585436bb641f6f20bd92dec: function AS_FlexContainer_eb1809bad585436bb641f6f20bd92dec(eventobject) {
        var self = this;
        this.onClickOfEmailFlex();
    },
    /** onTextChange defined for tbxSearch **/
    AS_TextField_dac994a052e5468e9f5e33a6c4e423e6: function AS_TextField_dac994a052e5468e9f5e33a6c4e423e6(eventobject, changedtext) {
        var self = this;
        this.onTextChangeAndDoneOfTbxSearch();
    },
    /** onDone defined for tbxSearch **/
    AS_TextField_j328ffcea9224964ae7d5ff055623688: function AS_TextField_j328ffcea9224964ae7d5ff055623688(eventobject, changedtext) {
        var self = this;
        this.onTextChangeAndDoneOfTbxSearch();
    },
    /** onTouchStart defined for tbxSearch **/
    AS_TextField_ged422dc471e41628e8c11033e545a63: function AS_TextField_ged422dc471e41628e8c11033e545a63(eventobject, x, y) {
        var self = this;
        this.onTouchStartOfTbxSearch();
    },
    /** onClick defined for btnSearchCancel **/
    AS_Button_bb359a0eaa85462785e865cfc2d01417: function AS_Button_bb359a0eaa85462785e865cfc2d01417(eventobject) {
        var self = this;
        this.onClickOfBtnCancelSearch();
    },
    /** onRowClick defined for segEmployees **/
    AS_Segment_b210797367534a1dbe39e0d2e36f7621: function AS_Segment_b210797367534a1dbe39e0d2e36f7621(eventobject, sectionNumber, rowNumber) {
        var self = this;
        if (this._segClickFlag == 0) {
            this._segClickFlag = 1;
            this.navigateFlex(this, "0%");
            this.setGestureForScrollingAnimationInDetailsPage();
            this.view.forceLayout();
        }
    },
    /** onTouchMove defined for segEmployees **/
    AS_Segment_c39eae6681ff45cebeed6a4520def782: function AS_Segment_c39eae6681ff45cebeed6a4520def782(eventobject, x, y) {
        var self = this;
        this.getScrolledSection();
    },
    /** onTouchEnd defined for segEmployees **/
    AS_Segment_fe00262da69643f584f8d3bb53619c02: function AS_Segment_fe00262da69643f584f8d3bb53619c02(eventobject, x, y) {
        var self = this;
        this.getScrolledSection();
    },
    /** onClick defined for A **/
    AS_Button_f3349a0f18314a7ba0d234fa12420e6d: function AS_Button_f3349a0f18314a7ba0d234fa12420e6d(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.A);
    },
    /** onClick defined for B **/
    AS_Button_g303b696c4a84cccadc50428b71acab2: function AS_Button_g303b696c4a84cccadc50428b71acab2(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.B);
    },
    /** onClick defined for C **/
    AS_Button_a90be174cf5d4452ae81f3c4fffde5b5: function AS_Button_a90be174cf5d4452ae81f3c4fffde5b5(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.C);
    },
    /** onClick defined for D **/
    AS_Button_f1aa774d42f84c95aa957f4e3e1e06a5: function AS_Button_f1aa774d42f84c95aa957f4e3e1e06a5(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.D);
    },
    /** onClick defined for E **/
    AS_Button_b1cf07ccb7614fa79390c708ead550ea: function AS_Button_b1cf07ccb7614fa79390c708ead550ea(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.E);
    },
    /** onClick defined for F **/
    AS_Button_acaf49cc9f03463d897d5699a530230b: function AS_Button_acaf49cc9f03463d897d5699a530230b(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.F);
    },
    /** onClick defined for G **/
    AS_Button_i961c68a66c34920a36e2fbca20adc4a: function AS_Button_i961c68a66c34920a36e2fbca20adc4a(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.G);
    },
    /** onClick defined for H **/
    AS_Button_dc7da8d6671f4c129089a222b9be1ad2: function AS_Button_dc7da8d6671f4c129089a222b9be1ad2(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.H);
    },
    /** onClick defined for I **/
    AS_Button_ce7558a6bc64407dbcc612bafd05888a: function AS_Button_ce7558a6bc64407dbcc612bafd05888a(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.I);
    },
    /** onClick defined for J **/
    AS_Button_fc53d5698fa74a6bac7bf32425ace6be: function AS_Button_fc53d5698fa74a6bac7bf32425ace6be(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.J);
    },
    /** onClick defined for K **/
    AS_Button_a05acd5d98764fe99833f0f44bb1412b: function AS_Button_a05acd5d98764fe99833f0f44bb1412b(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.K);
    },
    /** onClick defined for L **/
    AS_Button_j98cb5de0a524202affdbd89b32cb12c: function AS_Button_j98cb5de0a524202affdbd89b32cb12c(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.L);
    },
    /** onClick defined for M **/
    AS_Button_e2559448fcf64741abd614625303fe9b: function AS_Button_e2559448fcf64741abd614625303fe9b(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.M);
    },
    /** onClick defined for N **/
    AS_Button_e5ebb6fdeffa4db5b583872c80353de0: function AS_Button_e5ebb6fdeffa4db5b583872c80353de0(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.N);
    },
    /** onClick defined for O **/
    AS_Button_j2d6ff4bb71b4299ad3b7c78a06aadf5: function AS_Button_j2d6ff4bb71b4299ad3b7c78a06aadf5(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.O);
    },
    /** onClick defined for P **/
    AS_Button_d9b7af48da9e4f5ebb60996fd44c23fe: function AS_Button_d9b7af48da9e4f5ebb60996fd44c23fe(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.P);
    },
    /** onClick defined for Q **/
    AS_Button_f4d8a97ce49f4a68ad87ffdf9b2ce4d5: function AS_Button_f4d8a97ce49f4a68ad87ffdf9b2ce4d5(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.Q);
    },
    /** onClick defined for R **/
    AS_Button_h43ff28c7f174037939d5b28070366fa: function AS_Button_h43ff28c7f174037939d5b28070366fa(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.R);
    },
    /** onClick defined for S **/
    AS_Button_g188a32644f84b72b50b0160071afa8e: function AS_Button_g188a32644f84b72b50b0160071afa8e(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.S);
    },
    /** onClick defined for T **/
    AS_Button_eedbdf08549a417399eeef6355ec0b58: function AS_Button_eedbdf08549a417399eeef6355ec0b58(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.T);
    },
    /** onClick defined for U **/
    AS_Button_f2abef3d28e445df9642ee5b34b6efc7: function AS_Button_f2abef3d28e445df9642ee5b34b6efc7(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.U);
    },
    /** onClick defined for V **/
    AS_Button_f5a9244fb7ab4bed9eabe5b71c474739: function AS_Button_f5a9244fb7ab4bed9eabe5b71c474739(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.V);
    },
    /** onClick defined for W **/
    AS_Button_bdd71a5d3965445a913b67267e743f60: function AS_Button_bdd71a5d3965445a913b67267e743f60(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.W);
    },
    /** onClick defined for X **/
    AS_Button_a8c97df3211e464182f9860afe9e172a: function AS_Button_a8c97df3211e464182f9860afe9e172a(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.X);
    },
    /** onClick defined for Y **/
    AS_Button_f6958142b14147e3ba0eb758136e0f3e: function AS_Button_f6958142b14147e3ba0eb758136e0f3e(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.Y);
    },
    /** onClick defined for Z **/
    AS_Button_e339be8e7d7e494f885674fdd8ad7990: function AS_Button_e339be8e7d7e494f885674fdd8ad7990(eventobject) {
        var self = this;
        this.scrollSegmentToSelectedAlphabetIndex(this.view.Z);
    },
    /** onTouchMove defined for flxDictionary **/
    AS_FlexContainer_faf02aafc6ce4f75a1ac57b007df031c: function AS_FlexContainer_faf02aafc6ce4f75a1ac57b007df031c(eventobject, x, y) {
        var self = this;
        this.onTouchScrollMove(eventobject, x, y);
    },
    /** onTouchEnd defined for flxDictionary **/
    AS_FlexContainer_ad927d78c7f54f13b9bb21c51f840826: function AS_FlexContainer_ad927d78c7f54f13b9bb21c51f840826(eventobject, x, y) {
        var self = this;
        this.view.lblDisplaySelectedIndex.isVisible = false;
        this.view.forceLayout();
    },
    /** onClick defined for btnKFclicked **/
    AS_Button_id26018336f44335b9a5c82902023688: function AS_Button_id26018336f44335b9a5c82902023688(eventobject) {
        var self = this;
        var nav = new kony.mvc.Navigation("frmKnowledgeFramework");
        nav.navigate();
    },
    /** preShow defined for listdetail **/
    AS_FlexContainer_d48faa04f64a4456b0b4afd846519a51: function AS_FlexContainer_d48faa04f64a4456b0b4afd846519a51(eventobject) {
        var self = this;
        this.view.segEmployees.setData([]);
    },
    /** postShow defined for listdetail **/
    AS_FlexContainer_afd78b7d52b04e8ab206f9fa2baf344c: function AS_FlexContainer_afd78b7d52b04e8ab206f9fa2baf344c(eventobject) {
        var self = this;
        this.fetchAllDetails();
    }
});