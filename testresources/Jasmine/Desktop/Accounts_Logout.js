describe("Accounts Logout", function() {
    it("Logout", async function() {
	kony.automation.flexcontainer.click(["frmEmpList","empHeader1","flxUserInfo"]);
	kony.automation.flexcontainer.click(["frmEmpList","flxLogout"]);
	await kony.automation.playback.wait(3000);
	// :User Injected Code Snippet [// - [1 lines]]
        expect("Sign in to your account").toEqual(kony.automation.widget.getWidgetProperty(["frmLogin","flexLoginCred","lbklSignInTitle"], "text"));
        // :End User Injected Code Snippet {266a2565-a779-73cb-8c73-d4fe586a97e5}
    });
});