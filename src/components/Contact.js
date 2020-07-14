import React from 'react';
import Header from './Header';
import NavigationButtons from './NavigationButtons';
import './Contact.css';

const Contact = () => {
	return (
		<div id="content">
			<Header />
			<NavigationButtons location={2} />
			<div id="variable-content">
				<div id="contact">
					<h2>連絡</h2>
					<form>
						<br></br>
						<input
							type="text"
							placeholder="メールアドレス"
							name="email"
							id="email"
						></input>
						<br></br>
						<textarea
							placeholder="メッセージ"
							id="message"
							cols="60"
							rows="10"
						></textarea>
						<br></br>
						<input type="submit" value="送信" id="submit"></input>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
