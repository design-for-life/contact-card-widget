import {init} from "./src/scripts/init";
import {loadContactCardWidget} from "./src/scripts/contactCard";

const main = async () => {
  const loadWidgetPromise = loadContactCardWidget();
  loadWidgetPromise.finally(() => {
    console.log("widget has been loaded");
    init();
  });
};
export default main;