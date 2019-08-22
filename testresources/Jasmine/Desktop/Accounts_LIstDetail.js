describe("Accounts", function() {
    it("LIstDetail", async function() {
	kony.automation.flexcontainer.click(["frmEmpList","segEmployeeList[0]","flxTemplateEmpList"]);
	kony.automation.flexcontainer.click(["frmEmpDetails","flxFirstName"]);
	// :User Injected Code Snippet [//lblEmployeeFirstNameValue - [1 lines]]
        expect("Alexi").toEqual(kony.automation.widget.getWidgetProperty(["frmEmpDetails","flxFirstName","lblEmployeeFirstNameValue"], "text"));
        // :End User Injected Code Snippet {ae792ab3-5ef1-0c40-dc7e-d84be84f6396}
	kony.automation.flexcontainer.click(["frmEmpDetails","flxLastName"]);
	// :User Injected Code Snippet [//lblEmployeeLastNameValue - [1 lines]]
        expect("Sion").toEqual(kony.automation.widget.getWidgetProperty(["frmEmpDetails","flxLastName","lblEmployeeLastNameValue"], "text"));
        // :End User Injected Code Snippet {8b44adc6-47ce-caf0-b37c-0fe7cbf34304}
	kony.automation.flexcontainer.click(["frmEmpDetails","flxClose"]);
    });
});