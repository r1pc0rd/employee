define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** loginSuccessEvent defined for login **/
    AS_UWI_j1f6e5f62fc54b969fcf40792960ad96: function AS_UWI_j1f6e5f62fc54b969fcf40792960ad96(response) {
        var self = this;

        function SHOW_ALERT__f63b95a82e6340a9a5d19839eb009171_True() {}
        function SHOW_ALERT__f63b95a82e6340a9a5d19839eb009171_False() {}
        var ntf = new kony.mvc.Navigation("frmListDetail");
        ntf.navigate();

        function SHOW_ALERT__f63b95a82e6340a9a5d19839eb009171_Callback(response) {
            if (response === true) {
                SHOW_ALERT__f63b95a82e6340a9a5d19839eb009171_True();
            } else {
                SHOW_ALERT__f63b95a82e6340a9a5d19839eb009171_False();
            }
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": "login clicked",
            "yesLabel": null,
            "noLabel": null,
            "alertIcon": null,
            "message": undefined,
            "alertHandler": SHOW_ALERT__f63b95a82e6340a9a5d19839eb009171_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    }
});