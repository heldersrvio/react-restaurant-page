import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavigationButtons.css';

const NavigationButtons = (props) => {
	const homeClassName =
		props.location === 0 ? 'tab-button active' : 'tab-button';
	const menuClassName =
		props.location === 1 ? 'tab-button active' : 'tab-button';
	const contactClassName =
		props.location === 2 ? 'tab-button active' : 'tab-button';

	return (
		<div id="buttons-section">
			<div className={homeClassName} id="home-tab-button">
				<Link to="/">ホーム</Link>
			</div>
			<div className={menuClassName} id="menu-tab-button">
				<Link to="/menu">御品書き</Link>
			</div>
			<div className={contactClassName} id="contact-tab-button">
				<Link to="/contact">メッセージ</Link>
			</div>
		</div>
	);
};

NavigationButtons.propTypes = {
	location: PropTypes.number,
};

export default NavigationButtons;
