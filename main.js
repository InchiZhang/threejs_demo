import "./style.scss";

import Three_App from "./src/App/threeApp";
import Cube from "./src/Model/cube";
import Sector from "./src/Model/sector";

const app = new Three_App();
// const cube = new Cube();
const sector = new Sector()

app.addModel(sector);
