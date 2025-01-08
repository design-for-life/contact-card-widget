import {attachEvents, initIntlPhone} from "./src/scripts/init.mjs";
import {loadContactCardWidget} from "./src/scripts/contactCard.mjs";

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
    attachEvents();
  });
};
//invoke immediately
(function () {
  main().then(promiseClosure).catch(promiseClosure).finally(promiseClosure);
})();
