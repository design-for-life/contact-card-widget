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
  widgetContainer.innerHTML = `<div class="box-shadow contact-widget col gap10">
  <div id="printLayout1" class="col gap10">
  <div class="">
    <h3>${profileData.name}</h3>
    <p class="title"><strong>Title:</strong> ${profileData.title}</p>
    <p><strong>Location:</strong> ${profileData.location}</p>
    <p><strong>Email:</strong> <a href="mailto:${profileData.email}">${profileData.email}</a></p>
    <p><strong>Phone:</strong> <a href="tel:${profileData.phone}">${profileData.phone}</a></p>
    <p><strong>LinkedIn:</strong> <a href="${profileData.linkedin}" target="_blank">View Profile</a></p>
  </div>
  </div>
 <button id="printLayoutBtn1">Print</button>
  </div>
`;
};

export const showContactCardHorizontal = (profileData) => {
  const widgetContainer = document.querySelector(".contact-widget-show-container");
  if (!widgetContainer) {
    return;
  }
  widgetContainer.innerHTML += `<div class="box-shadow contact-widget col gap10">
  <div id="printLayout2" class="row gap5">
    <div  id="card-layout-2" class=" row pad10 gap5">
      <img class="contact-image-100" src="${profileData.profileImage}" alt="${profileData.name} profile">
    </div>
    <div class="wid100">
      <h1 class="flex-start">${profileData.name}</h1>
      <p class="title">${profileData.title}</p>
      <p>${profileData.location}</p>
      <p>${profileData.email}</p>
      <p>${profileData.phone}</p>
      <p><a href="${profileData.linkedin}" target="_blank">View Profile</a></p>
    </div>
    </div>
  <button id="printLayoutBtn2">Print</button>
</div>
`;
};

export const showContactCardVertical = (profileData) => {
  const widgetContainer = document.querySelector(".contact-widget-show-container");
  if (!widgetContainer) {
    return;
  }
  widgetContainer.innerHTML += `<div class="box-shadow contact-widget col gap10">
  <div id="printLayout3" class="col align-center">
    <div  id="card-layout-2" class="row pad10 gap5 bg-candy wid100 align-center radius-left-t-20">
      <img class="contact-image-100" src="${profileData.profileImage}" alt="${profileData.name} profile">
    </div>
    <div class="wid100 bg-slate radius-right-b-20">
      <h1 class="">${profileData.name}</h1>
      <p class="title">${profileData.title}</p>
      <p>${profileData.location}</p>
      <p>${profileData.email}</p>
      <p>${profileData.phone}</p>
      <p><a href="${profileData.linkedin}" target="_blank">View Profile</a></p>
    </div>
    </div>
  <button id="printLayoutBtn3">Print</button>
</div>
`;
};