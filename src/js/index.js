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
let segundo = 0;
let minuto = 0;
let hora = 0;

setInterval(() => {
	ReactDOM.render(
		<Seconds seconds={segundo} minuto={minuto} hora={hora} />,

		document.querySelector("#app")
	);
	segundo++;
	if (segundo === 10) {
		segundo = 0;
		minuto++;
	} else if (minuto === 10) {
		minuto = 0;
		hora++;
	}
}, 1000);
