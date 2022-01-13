//WARNING : menu is statically typed. should have used data...

import './reset.css'
import './styles.css'
import createHeader from "./createHeader.js"
import createFooter from "./createFooter.js"
import createHome from "./createHome.js"
import createMenu from "./createMenu.js"
import createLocation from "./createLocation.js"

createHeader(createHome, createMenu, createLocation);
createFooter();

createHome();
