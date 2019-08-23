define(function () {
   
    return {
      
      fetchDepartments:function() {
  kony.print("----------Entering fetchAllDetails Function---------");
  var objectInstance = null;
  var sdkClient = new kony.sdk.getCurrentInstance();
  if (Object.keys(sdkClient).length !== 0) {
    objectInstance = sdkClient.getObjectService("EmployeeModelSchema", {
      "access": "online"
    });
  }
  if (objectInstance === null || objectInstance === undefined) {
    kony.application.dismissLoadingScreen();
    kony.print("Authorization object null - Connect to MF");
    alert("Please connect app to MF");
    return;
  }
  var dataObject = new kony.sdk.dto.DataObject("Department");
  var options = {
    "dataObject": dataObject,
    "headers": {},
    "queryParams": {}
  };
  if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
    objectInstance.fetch(options, successCB.bind(this),failureCB.bind(this));
  } else {
    kony.application.dismissLoadingScreen();
    alert("No Network connected");
  }

  kony.print(JSON.stringify(exception));

  kony.print("----------Exiting fetchAllDetails Function---------");
}  
      
      
      
      
    };
});