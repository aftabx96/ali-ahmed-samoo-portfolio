jQuery.validator.addMethod("customAlphabetic", function(value, element) {
    // Use a regular expression to check for non-alphabetic characters
    if (/[^A-Za-z]/.test(value)) {
      return false; // Display the alert if non-alphabetic characters are found
    }
    return true;
  }, "Name should be in alphabets only");
  
  jQuery.validator.addMethod("customEmail", function(value, element) {
    // Use a regular expression to check for the desired email format
    if (/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)) {
      return true; // Email format is valid
    }
    return false; // Display the alert if the email format is invalid
  }, "Please enter a valid email ");
  
  jQuery('#frm').validate({
    rules: {
      First_Name: {
        required: true,
        customAlphabetic: true
      },
      Last_Name: {
        required: true,
        customAlphabetic: true
      },
      Message: "required",
      Email: {
        required: true,
        customEmail: true // Use the custom email validation rule
      }
    },
    messages: {
      First_Name: {
        required: "<span>*</span>Please enter your First Name",
        customAlphabetic: "<span>*</span>Name should be in alphabets only"
      },
      Last_Name: {
        required: "<span>*</span>Please enter your Last Name",
        customAlphabetic: "<span>*</span>Name should be in alphabets only"
      },
      Message: "<span>*</span>Please write your Message",
      Email: {
        required: "<span>*</span>Please enter email",
        customEmail: "Please enter a valid email address."
      }
    },
    submitHandler: function(form) {
      // Check if the form is valid before submitting
      if ($(form).valid()) {
        form.submit();
      }
    }
  });
  


















   