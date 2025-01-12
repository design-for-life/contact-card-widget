import contactCardComponent from "../component/contactCardComponent.mjs";

export const loadContactCardWidget = async () => {
  const widgetForm = document.querySelector(".contact-form-container");
  if (!widgetForm) {
    return false;
  }
  widgetForm.innerHTML = `<div class="col gap5 wid100">
    <h1>Card generator</h1>
    ${contactCardComponent()}
    </div>
  `;
  return true;
};

export const showContactCardDefault = (profileData) => {
  const widgetContainer = document.querySelector(".contact-widget-show-container");
  if (!widgetContainer) {
    return;
  }
  widgetContainer.innerHTML = `<div class="col gap5 box-shadow contact-widget">
  <div class="">
    <h3>${profileData.name}</h3>
    <p class="title"><strong>Title:</strong> ${profileData.title}</p>
    <p><strong>Location:</strong> ${profileData.location}</p>
    <p><strong>Email:</strong> <a href="mailto:${profileData.email}">${profileData.email}</a></p>
    <p><strong>Phone:</strong> <a href="tel:${profileData.phone}">${profileData.phone}</a></p>
    <p><strong>LinkedIn:</strong> <a href="${profileData.linkedin}" target="_blank">View Profile</a></p>
  </div>
  </div>
`;
};

export const showContactCardVertical = (profileData) => {
  const widgetContainer = document.querySelector(".contact-widget-show-container");
  if (!widgetContainer) {
    return;
  }
  widgetContainer.innerHTML += `<div class="mg-top-10 card box-shadow row white-bg radius10 pad10 gap5">
  <div>
  <img class="contact-image-100" src="${profileData.profileImage}" alt="${profileData.name} profile">
  </div>
  <div>
  <h1>${profileData.name}</h1>
  <p class="title">${profileData.title}</p>
  <p>${profileData.location}</p>
  <p>${profileData.email}</p>
  <p>${profileData.phone}</p>
  <p><a href="${profileData.linkedin}" target="_blank">View Profile</a></p>
  </div>
</div>
`;
};