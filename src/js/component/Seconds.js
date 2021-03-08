import React from "react";
import PropTypes from "prop-types";
const Seconds = props => {
	const format = () => {
		let resultado = props.seconds + "";
		return resultado;
	};
	return (
		<div className="text-center mt-5 bg-dark text-light">
			<h1 className="display-1">
				<i className="fas fa-clock"> </i> {props.seconds}
			</h1>
		</div>
	);
};

Seconds.propTypes = {
	seconds: PropTypes.number
};

export default Seconds;
