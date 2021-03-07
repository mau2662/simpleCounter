//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Seconds from "./component/Seconds";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

//render your react application
let cronometro = 0;

setInterval(() => {
	ReactDOM.render(
		<Seconds seconds={cronometro} />,
		document.querySelector("#app")
	);
	cronometro = cronometro + 1;
}, 1000);
