import contactCardComponent from "../component/contactCardComponent";

export const loadContactCardWidget = async () => {
  const widgetForm = document.querySelector(".contact-form-container");
  if (!widgetForm) {
    return false;
  }
  widgetForm.innerHTML = contactCardComponent();
  return true;
};

export const showContactCardData = (profileData) => {
  const widgetContainer = document.getElementById("contact-widget");
  if (!widgetContainer) {
    return;
  }
  widgetContainer.innerHTML = `
    <h3>${profileData.name}</h3>
    <p><strong>Location:</strong> ${profileData.location}</p>
    <p><strong>Email:</strong> <a href="mailto:${profileData.email}">${profileData.email}</a></p>
    <p><strong>Phone:</strong> <a href="tel:${profileData.phone}">${profileData.phone}</a></p>
    <p><strong>LinkedIn:</strong> <a href="${profileData.linkedin}" target="_blank">View Profile</a></p>
  `;
};
