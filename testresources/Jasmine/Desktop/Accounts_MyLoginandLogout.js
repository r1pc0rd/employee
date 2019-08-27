describe("Accounts", function() {
    it("MyLoginandLogout", async function() {
	kony.automation.textbox.enterText(["frmLogin","txtUser"],"demo@kony.com");
	kony.automation.textbox.enterText(["frmLogin","txtPassWord"],"Kony123!");
	await kony.automation.playback.wait(3000);
	kony.automation.flexcontainer.click(["frmEmpList","empHeader1","flxUserInfo"]);
	kony.automation.flexcontainer.click(["frmEmpList","flxOverlay"]);
	kony.automation.flexcontainer.click(["frmEmpList","segEmployeeList[0]","flxTemplateEmpList"]);
	kony.automation.flexcontainer.click(["frmEmpDetails","flxEmpId"]);
	kony.automation.flexcontainer.click(["frmEmpDetails","flxClose"]);
	kony.automation.flexcontainer.click(["frmEmpList","empHeader1","flxUserInfo"]);
	kony.automation.flexcontainer.click(["frmEmpList","flxLogout"]);
    });
});