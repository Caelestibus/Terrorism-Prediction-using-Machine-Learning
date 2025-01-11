
  function validateForm(event) {
    event.preventDefault(); // Prevent the form from being submitted

    // Retrieve the form input values
    const first_name = document.getElementById('first_name');
    const last_name = document.getElementById('last_name');
    const email = document.getElementById('email');
    const psw = document.getElementById('psw');
    const confirm_psw = document.getElementById('confirm_psw');
    const phonenumber = document.getElementById('phonenumber');
    const year = document.getElementById('year');
    

    


    // Perform validation
    let hasError = false;

    if (first_name.value.trim() === '') {
        first_name.value = ''; // Clear the input field
      
        hasError = true;
    }

    if (email.value.trim() === '') {
      email.value = ''; // Clear the input field
      hasError = true;
    }

    if (psw.value.trim() === '') {
      psw.value = ''; // Clear the input field
      hasError = true;
    }
    if (confirm_psw.value.trim() === '') {
        confirm_psw.value = ''; // Clear the input field
        hasError = true;
      }
    if (year.value.trim() === '') {
    year.value = ''; // Clear the input field
    hasError = true;
    }
    if (last_name.value.trim() === '') {
    last_name.value = ''; // Clear the input field
    hasError = true;
    }
    if (phonenumber.value.trim() === '') {
    phonenumber.value = ''; // Clear the input field
    hasError = true;
    }

    // If there are errors, do not submit the form
    if (hasError) {
      return;
    }

    // Otherwise, submit the form
    document.getElementById('userregister').submit();
  }
