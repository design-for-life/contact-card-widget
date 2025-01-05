const contactCardComponent = () => {
  return `<div id="profile-form" class="box-shadow contact-form col gap10">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter full name" required>
            <small class="error" id="name-error"></small>
        </div>

        <div>
            <label for="location">Location:</label>
            <input type="text" id="location" name="location" placeholder="Enter location" required>
            <small class="error" id="location-error"></small>
        </div>

        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter email" required>
            <small class="error" id="email-error"></small>
        </div>

        <div>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter phone number" required>
            <small class="error" id="phone-error"></small>
        </div>

        <div>
            <label for="linkedin">LinkedIn URL:</label>
            <input type="url" id="linkedin" name="linkedin" placeholder="Enter LinkedIn profile URL"
                   required>
            <small class="error" id="linkedin-error"></small>
        </div>

        <button id="btnFormUpdate">Update Widget</button>
    </div>`;
};
export default contactCardComponent;
