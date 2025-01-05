const contactCardComponent = () => {
  return `<form id="profile-form" novalidate class="box-shadow contact-form">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter full name" required>
            <small class="error" id="name-error"></small>
        </div>

        <div class="form-group">
            <label for="location">Location:</label>
            <input type="text" id="location" name="location" placeholder="Enter location" required>
            <small class="error" id="location-error"></small>
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter email" required>
            <small class="error" id="email-error"></small>
        </div>

        <div class="form-group">
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter phone number" required>
            <small class="error" id="phone-error"></small>
        </div>

        <div class="form-group">
            <label for="linkedin">LinkedIn URL:</label>
            <input type="url" id="linkedin" name="linkedin" placeholder="Enter LinkedIn profile URL"
                   required>
            <small class="error" id="linkedin-error"></small>
        </div>

        <button type="submit">Update Widget</button>
    </form>`;
};
export default contactCardComponent;
