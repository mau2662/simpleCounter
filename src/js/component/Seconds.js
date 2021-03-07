import React from "react";
import PropTypes from "prop-types";
const Seconds = props => {
	const format = () => {
		let resultado = "00" + props.seconds;
		return resultado;
	};
	return <div> {format()}</div>;
};

Seconds.propTypes = {
	seconds: PropTypes.number
};

export default Seconds;
