describe("Accounts", function() {
    it("Login", async function() {
	kony.automation.textbox.enterText(["frmLogin","txtUser"],"demo@kony.com");
	// :User Injected Code Snippet [// - [1 lines]]
        console.log("Logging In.");
        // :End User Injected Code Snippet {bee96f34-a237-0f0e-2333-a0c2c06b5251}
	kony.automation.textbox.enterText(["frmLogin","txtPassWord"],"Kony123!");
	kony.automation.button.click(["frmLogin","btnSubmit"]);
	await kony.automation.playback.wait(3000);
	// :User Injected Code Snippet [// - [1 lines]]
        expect("employee_directory2.png").toEqual(kony.automation.widget.getWidgetProperty(["frmEmpList","empHeader1","flxLogo","imgHeading"], "src"));
        // :End User Injected Code Snippet {aa88421f-77f1-907a-3ceb-7f091a7d6a84}
    });
});