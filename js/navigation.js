
// This is preparation done on the page startup to setup the initial page start
  $().ready(function(){

    hideErrorAlerts();

    $("#dvPersonalDetailsnk a").click(function(){
      showPersonalDetails(); 
      return false;
    });

    $("#carLink a").click(function(){
      showCarDetails(); 
      return false;
    });

    $("#quoteLink a").click(function(){
      showQuoteDetails(); 
      return false;
    });
  });

function showCarDetails() {
    // create a variable for isValid
      var isValid = true;
      if ($("#txtName").val()==""){
        console.log("Name")
        isValid = false;
      }
      if ($("#txtAge").val() =="" || $("#txtAge").val()<16){
        console.log("Age")
        isValid = false;
      }
      if ($("#rdoGenderMale").prop("checked")==false && $("#rdoGenderFemale").prop("checked")==false){
        console.log("Gender")
        isValid = false;
      }
      if ($("#txtTowncity").val()==("")){
        console.log("Town/city")
        isValid = false;
      }
      if ($("#txtEmail").val()==("")){
        console.log("Email")
        isValid = false;
      }
      if ($("#ClaimBonus").val()=="Select"){
        console.log("Claim")
        isValid = false;
      }

      if (isValid == true){
        $("#dvPersonalDetails").hide();

        $("#dvQuoteDetails").hide();

        $("#dvCarDetails").show();
        console.log("True")
      } else{
        $("#dvPersonalDetailsAlert").show()
        console.log("Error")
      }

      // $("#dvPersonalDetails").hide();

      // $("#dvQuoteDetails").hide();

      // $("#dvCarDetails").show();
    }
  



  // here show hide / error 
  

  function showPersonalDetails() {
    $("#dvPersonalDetails").show();

    $("#dvQuoteDetails").hide();

    $("#dvCarDetails").hide();
      // Hide the car details section (dvCarDetails)
      // Hide the quote section (dvQuoteDetails)
      // Show the personal details section (dvPersonalDetails)
    }

    function showQuoteDetails() {

      var isValid = true 
      if ($("#Manufacturer").val()=="Select"){
        console.log("Manufacturer")
        isValid = false;
      }

      if ($("#txtModel").val()==""){
        console.log("Model")
        isValid = false;
      }

      if ($("#txtcarAge").val() =="" || $("#txtAge").val()<16){
        console.log("Car Age")
        isValid = false;
      }

      if ($("#txtESize").val()==""){
        console.log("Engine Size")
        isValid = false;
      }

      if ($("#Storage").val()=="Select"){
        console.log("Storage")
        isValid = false;
      }


      if ($("#txtEstimate").val()==""){
        console.log("Estimate")
        isValid = false;

      }

      if (isValid == true){
        $("#dvPersonalDetails").hide();
        $("#dvQuoteDetails").show();
        $("#dvCarDetails").hide();
        console.log("True")
      } else{
        $("#dvCarDetailsAlert").show()
        console.log("Error")
      }

    }
  


      // Hide the car details section (dvCarDetails)
      // Hide the personal details section (dvQuoteDetails)
      // Show the quote section (dvPersonalDetails)


      function getQuote() {

    // Perform validation to test that all data has been entered

    if (true)
    {

      // Get the values from the page elements that you need to create your JSON

      $.ajax({
        type: "GET",
        url: "http://localhost:53753/api/rating/CalculateRates",
      data: { /* create JSON here */ }
    }).done(function(msg) {
          // Put the return value into Label created on quote details
          // Hide the Car Details section
          // Display the quote details page
        });
  }
}
//################################# Helper Functions - look at these when validating and changing section #########################################

  // Use this function to "Reset" the form and hide all 3 error sections whenever you make a section transition
  function hideErrorAlerts()
  {
    $("#dvPersonalDetailsAlert").hide();
    $("#dvCarDetailsAlert").hide();
    $("#dvQuoteDetailsAlert").hide();
  }

  // This function will control the top navigation and set the active tab when you make a section transition
  // You will need to call it and pass in the tab that needs to be made active
  function setActiveNavigation(activeTab) {
    $(".nav li").removeClass("active");

    $("#" + activeTab).addClass("active");
  }
