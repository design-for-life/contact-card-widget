import {showContactCardData} from "./contactCard";

export const validateContactCardAndShow = () => {
  // Add form validation logic and invoke the contact-card function
  document.getElementById("profile-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // Validate name
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
      document.getElementById("name-error").textContent = "Name is required.";
      isValid = false;
    }

    // Validate location
    const location = document.getElementById("location");
    if (location.value.trim() === "") {
      document.getElementById("location-error").textContent = "Location is required.";
      isValid = false;
    }

    // Validate email
    const email = document.getElementById("email");
    if (!email.checkValidity()) {
      document.getElementById("email-error").textContent = "Enter a valid email address.";
      isValid = false;
    }

    // Validate phone
    if (!iti.isValidNumber()) {
      document.getElementById("phone-error").textContent = "Enter a valid phone number.";
      isValid = false;
    }

    // Validate LinkedIn URL
    const linkedin = document.getElementById("linkedin");
    if (!linkedin.checkValidity()) {
      document.getElementById("linkedin-error").textContent = "Enter a valid LinkedIn URL.";
      isValid = false;
    }

    // If valid, update the widget
    if (isValid) {
      const profileData = {
        name: name.value.trim(),
        location: location.value.trim(),
        email: email.value.trim(),
        phone: iti.getNumber(),
        linkedin: linkedin.value.trim()
      };

      showContactCardData(profileData);
    }
  });
};

export const init = () => {
  // Initialize intl-tel-input for the phone input field
  const phoneInput = document.getElementById("phone");
  const iti = window.intlTelInput(phoneInput, {
    initialCountry: "in", // Default to India
    preferredCountries: ["in", "us", "gb"],
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
  });
};