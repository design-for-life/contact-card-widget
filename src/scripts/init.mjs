import {showContactCardDefault, showContactCardVertical} from "./contactCard.mjs";

let iti = null;
export const initIntlPhone = () => {
  // Initialize intl-tel-input for the phone input field
  const phoneInput = document.getElementById("phone");
  if (!window.intlTelInput) {
    return;
  }
  iti = window.intlTelInput(phoneInput, {
    initialCountry: "in", // Default to India
    preferredCountries: ["in", "us", "gb"],
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
  });
  return iti;
};

export const handleContactFormSubmitClick = (event) => {
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

  // Validate LinkedIn URL
  const profileImage = document.getElementById("profile-image");
  if (!linkedin.checkValidity()) {
    document.getElementById("profile-image-error").textContent = "Enter a valid profile image URL.";
    isValid = false;
  }

  // If valid, update the widget
  if (isValid) {
    const profileData = {
      name: name.value.trim(),
      location: location.value.trim(),
      email: email.value.trim(),
      phone: iti.getNumber(),
      linkedin: linkedin.value.trim(),
      profileImage: profileImage.value.trim(),
    };

    showContactCardDefault(profileData);
    showContactCardVertical(profileData);
  }
};

export const attachEvents = () => {
  const btnFormSubmit = document.getElementById("btnFormUpdate");
  btnFormSubmit !== null && btnFormSubmit.addEventListener("click", handleContactFormSubmitClick);
};