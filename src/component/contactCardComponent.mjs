const getErrorBlock = (id) => {
  return `<div class="row gap5 align-center space-between">
    <label for="name" class="min-label-wid flex-start flex-start"></label>
    <small class="error wid100 flex-start" id="${id}-error"></small>
  </div>`;
};
const contactCardComponent = () => {
  return `<div id="profile-form" class="box-shadow contact-form col gap10">
        <div class="col gap5">
          <div class="row gap5 align-center space-between">
            <label for="name" class="min-label-wid flex-start flex-start">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter full name" required>
          </div>
          ${getErrorBlock("name")}
        </div>

        <div class="col gap5">
        <div class="row gap5 align-center space-between">
            <label for="location" class="min-label-wid flex-start">Location:</label>
            <input type="text" id="location" name="location" placeholder="Enter location" required>
            </div>
          ${getErrorBlock("location")}
        </div>

        <div class="col gap5">
        <div class="row gap5 align-center space-between">
            <label for="email" class="min-label-wid flex-start">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter email" required>
            </div>
          ${getErrorBlock("email")}
        </div>

        <div class="col gap5">
        <div class="row gap5 align-center space-between">
            <label for="phone" class="min-label-wid flex-start">Phone:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter phone number" required>
            </div>
          ${getErrorBlock("phone")}
        </div>

        <div class="col gap5">
        <div class="row gap5 align-center space-between">
            <label for="linkedin" class="min-label-wid flex-start">LinkedIn URL:</label>
            <input type="url" id="linkedin" name="linkedin" placeholder="Enter LinkedIn profile URL" required>
            </div>
          ${getErrorBlock("linkedin")}
        </div>

        <button id="btnFormUpdate">Generate Card</button>
    </div>`;
};
export default contactCardComponent;
