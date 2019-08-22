describe("Accounts", function() {
    it("RepeatingTest", async function() {
	// :User Injected Code Snippet [// - [31 lines]]
        //Test Data in JSON

var test_data  = [
     {"user":"demo@kony.com","password":"Kony123!"},
     {"user":"demo@kony.com","password":"Kony123!"}
];






//require(['testScripts/Accounts_Data']);
  	

//
//Testing Loop for Data

for (var key in test_data) {

       kony.automation.textbox.enterText(["frmLogin","txtUser"],test_data[key].user);	
	kony.automation.textbox.enterText(["frmLogin","txtPassWord"],test_data[key].password);
        kony.automation.button.click(["frmLogin","btnSubmit"]);
	await kony.automation.playback.wait(3000);
	kony.automation.flexcontainer.click(["frmEmpList","empHeader1","flxUserInfo"]);
	kony.automation.flexcontainer.click(["frmEmpList","flxLogout"]);
await kony.automation.playback.wait(3000);
expect(kony.automation.widget.getWidgetProperty(["frmLogin","flexLoginMain","flexLoginCred","lbklSignInTitle"], "text")).toMatch("Sign in to your account");
}

	
        // :End User Injected Code Snippet {b3bd7298-7373-4a4d-a7b1-477d3be1c117}
    });
});