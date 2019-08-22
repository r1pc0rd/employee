define("com/konymp/knowledgeframework/userknowledgeframeworkController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        previosAcc: null,
        isClosed: false,
        setData: function(data) {
            this.view.lblHeading.text = "Key Features";
            this.view.sgmtAPI.removeAll();
            this.view.sgmtAPI.isVisible = true;
            this.view.sgmtAPI.widgetDataMap = {
                lblNameOfAPI: "title"
            };
            this.view.sgmtAPI.setData(data);
        },
        onRowClick: function() {
            this.showAccord("flexAcc1");
            var data = this.view.sgmtAPI.selectedRowItems[0];
            this.animateDescriptionScreen(0, data.title, this.setUIAfterAnimation);
            this.populateData(data);
        },
        setUIAfterAnimation: function(left, headerText) {
            if (left === 100) {
                this.view.flexClickBack.setVisibility(false);
                this.view.lblHeading.text = "Key Features";
            } else {
                this.view.flexClickBack.setVisibility(true);
                this.view.lblHeading.text = headerText;
            }
            if (this.isClosed) {
                this.navigateToPreviousScreen();
                this.isClosed = false;
            }
        },
        animateDescriptionScreen: function(left, headerText, callbackFunction) {
            var controllerScope = this;
            controllerScope.view.flxFullScreen.animate(kony.ui.createAnimation({
                100: {
                    left: left + "%",
                    "stepConfig": {}
                }
            }), {
                delay: 0,
                fillMode: kony.anim.FILL_MODE_FORWARDS,
                duration: 0.1
            }, {
                animationEnd: function() {
                    if (left === 0) {
                        controllerScope.view.flexClickBack.setVisibility(true);
                        controllerScope.view.lblHeading.text = headerText;
                    } else {
                        controllerScope.view.flexClickBack.setVisibility(false);
                        controllerScope.view.lblHeading.text = "Key Features";
                    }
                }
            });
        },
        populateData: function(data) {
            this.view.rchDesc1.text = data.desc1;
            this.view.rchDesc2.text = data.desc2;
            if (data.video1 !== undefined && data.video1 !== null) {
                this.view.imgVideoView1.src = data.image1;
            } else {
                kony.print("Video1 Not Available");
                this.view.flexImageVideo.isVisible = false;
            }
            if (data.video2 !== undefined && data.video2 !== null) {
                this.view.imageVideo2.src = data.image2;
            } else {
                kony.print("Video2 Not Available");
                this.view.flexImageVideo2.isVisible = false;
            }
            this.view.rchDesc3.text = data.link;
        },
        showAccord: function(id) {
            id = id.split("flexAcc")[1];
            if (this.previosAcc !== null && this.previosAcc !== id) {
                this.view["btnAccordian" + this.previosAcc].src = "chevron.png";
                this.view["btnAccordian" + id].src = "chevrondown.png";
                this.view["flexScrollDesc" + this.previosAcc].isVisible = false;
                this.view["flexScrollDesc" + id].isVisible = true;
                this.view["lblTitleAcc" + id].skin = "konympKFsknLblBold";
                this.view["lblTitleAcc" + this.previosAcc].skin = "konympsknlblAccNormal";
                this.previosAcc = id;
            } else if (this.previosAcc == id) {
                if (this.view["btnAccordian" + id].src == "chevrondown.png") {
                    this.view["btnAccordian" + this.previosAcc].src = "chevrondown.png";
                    this.view["btnAccordian" + id].src = "chevron.png";
                    this.view["flexScrollDesc" + this.previosAcc].isVisible = true;
                    this.view["flexScrollDesc" + id].isVisible = false;
                    this.view["lblTitleAcc" + id].skin = "konympKFsknLblNormal";
                    this.previosAcc = id;
                } else {
                    this.view["btnAccordian" + this.previosAcc].src = "chevron.png";
                    this.view["btnAccordian" + id].src = "chevrondown.png";
                    this.view["flexScrollDesc" + this.previosAcc].isVisible = false;
                    this.view["flexScrollDesc" + id].isVisible = true;
                    this.view["lblTitleAcc" + id].skin = "konympKFsknLblBold";
                    this.previosAcc = id;
                }
            } else {
                this.view["btnAccordian" + id].src = "chevrondown.png";
                this.view["lblTitleAcc" + id].skin = "konympKFsknLblBold";
                this.view["flexScrollDesc" + id].isVisible = true;
                this.previosAcc = id;
            }
        },
        closeWhenDone: function() {
            this.isClosed = true;
            this.animateDescriptionScreen(100, "Key Features", this.setUIAfterAnimation);
            this.setUIAfterAnimation(100, "Key Features");
        },
        navigateToPreviousScreen: function() {
            var prevForm = kony.application.getPreviousForm();
            var navObj = new kony.mvc.Navigation(prevForm.id);
            navObj.navigate();
        },
        onClickBack: function() {
            this.resetDescScreen();
            this.animateDescriptionScreen(100, "Key Features", this.setUIAfterAnimation);
        },
        resetDescScreen: function() {
            for (i = 1; i <= 3; i++) {
                this.view["lblTitleAcc" + i].skin = "konympKFsknLblNormal";
                this.view["btnAccordian" + i].src = "chevron.png";
                this.view["flexScrollDesc" + i].isVisible = false;
            }
        },
        onClickPlayButton: function(id) {
            id = id.split("btnPlay")[1];
            var url = this.view.sgmtAPI.selectedItems[0]["video" + id];
            kony.application.openURL(url);
        },
        onLinkClick: function() {
            kony.application.openURL(this.view.sgmtAPI.selectedItems[0].link);
        }
    };
});
define("com/konymp/knowledgeframework/knowledgeframeworkControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_eacf9dd3df0244ca91e5b61dd6d913ea: function AS_FlexContainer_eacf9dd3df0244ca91e5b61dd6d913ea(eventobject) {
        var self = this;
        this.closeWhenDone();
    },
    AS_FlexContainer_h3c069b1145b415696fabe00b508ba97: function AS_FlexContainer_h3c069b1145b415696fabe00b508ba97(eventobject) {
        var self = this;
        this.onClickBack();
    },
    AS_Segment_f4aba72c55a74a019f72161199eea78c: function AS_Segment_f4aba72c55a74a019f72161199eea78c(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onRowClick();
    },
    AS_FlexContainer_ebae57a728d14d38a05969aef1338c0e: function AS_FlexContainer_ebae57a728d14d38a05969aef1338c0e(eventobject) {
        var self = this;
        // if(this.view.rchTextDesc.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    AS_Button_a94d38979aa64fa887f5245e9ac16c27: function AS_Button_a94d38979aa64fa887f5245e9ac16c27(eventobject) {
        var self = this;
        this.onClickPlayButton(eventobject.id);
    },
    AS_FlexContainer_caa7643d7ce94306b3237d4429cf9db1: function AS_FlexContainer_caa7643d7ce94306b3237d4429cf9db1(eventobject) {
        var self = this;
        // if(this.view.lblCodeSnippet.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    AS_Button_eec28d7b7ac24740bcdf2adb238813f6: function AS_Button_eec28d7b7ac24740bcdf2adb238813f6(eventobject) {
        var self = this;
        this.onClickPlayButton(eventobject.id);
    },
    AS_FlexContainer_f7da2e9fb3734b149d4d0d5c94601563: function AS_FlexContainer_f7da2e9fb3734b149d4d0d5c94601563(eventobject) {
        var self = this;
        // if(this.view.rchtextDoc.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    AS_FlexContainer_i9406b4218454c6e8c13e2c6fe0fbc3e: function AS_FlexContainer_i9406b4218454c6e8c13e2c6fe0fbc3e(eventobject) {
        var self = this;
        this.onLinkClick();
    }
});
define("com/konymp/knowledgeframework/knowledgeframeworkController", ["com/konymp/knowledgeframework/userknowledgeframeworkController", "com/konymp/knowledgeframework/knowledgeframeworkControllerActions"], function() {
    var controller = require("com/konymp/knowledgeframework/userknowledgeframeworkController");
    var actions = require("com/konymp/knowledgeframework/knowledgeframeworkControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
