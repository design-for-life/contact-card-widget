import {attachEvents, initIntlPhone} from "./src/scripts/init.mjs";
import {loadContactCardWidget, showContactCardDefault, showContactCardVertical} from "./src/scripts/contactCard.mjs";
import {profileDataSachin} from "./src/test/sample-profile.js";

const promiseClosure = (e) => {
  if (!e) {
    return;
  }
  console.log("promise", e);
};

const main = async () => {
  const loadWidgetPromise = loadContactCardWidget();
  loadWidgetPromise.finally(() => {
    console.log("widget has been loaded");
    initIntlPhone();
    showContactCardDefault(profileDataSachin);
    showContactCardVertical(profileDataSachin);
    attachEvents();
  });
};
//invoke immediately
(function () {
  main().then(promiseClosure).catch(promiseClosure).finally(promiseClosure);
})();
