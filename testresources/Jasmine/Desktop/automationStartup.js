describe("Smoke Test", function() {
	beforeEach(function() {
		//gets executed once before each spec in the describe 
      // Could run Login Here
     //  require(['testScripts/Accounts_Login'], function(){
  	//ß	jasmine.getEnv().execute();
	//});
	});
	
	afterEach(function() {
		//gets executed once after each spec.
      //Could Run Lopgout Here
       //require(['testScripts/Accounts_Logout'], function(){
  		//jasmine.getEnv().execute();
	//});
      
	});
	
	it("Checks Account", function() {
      require(['testScripts/Accounts_Login','testScripts/Account_LIstDetail','testScripts/Accounts_Logout','testScripts/Account_CheckAlex'], function(){
  		jasmine.getEnv().execute();
	});
		
	}); 
				  
});

