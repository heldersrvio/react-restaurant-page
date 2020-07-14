import React from 'react';
import Header from './Header';
import NavigationButtons from './NavigationButtons';
import mainImage from '../images/coffee-shop.jpg';
import './Home.css';

const Home = () => {
	return (
		<div id="content">
			<Header />
			<NavigationButtons location={0} />
			<div id="variable-content">
				<div id="main-image">
					<img src={mainImage} alt="Coffee shop with an American flag" />
				</div>
				<div id="description">
					<p>
						ネバーランドへようこそ！弊店は小さく心地良い喫茶店で誰でも歓迎致します。お客様のお好みと欲望は弊店の優先でございます。
					</p>
					<p>
						毎月、弊店のバリスタ達は新鮮なレシピとコーヒーを御品書きに載せるように頑張っています。ですからどうぞ弊店の御品書きをご覧下さい。
					</p>
					<p>
						何か問題があったらどうぞ連絡頁で弊店の管理人にメールをお送りください。
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
