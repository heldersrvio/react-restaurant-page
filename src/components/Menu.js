import React from 'react';
import Header from './Header';
import NavigationButtons from './NavigationButtons';
import './Menu.css';

const Menu = () => {
	return (
		<div id="content">
			<Header />
			<NavigationButtons location={1} />
			<div id="variable-content">
				<div id="menu">
					<h3 id="section1">珈琲</h3>
					<br></br>
					<ul id="coffee-list">
						<li>米国珈琲・２７５円</li>
						<li>カフェラテ・３４０円</li>
						<li>カプチーノ・１５０円</li>
						<li>エスプレッソ・１００円</li>
						<li>フラットホワイト・３００円</li>
					</ul>
					<br></br>
					<h3 id="section2">茶</h3>
					<br></br>
					<ul id="tea-list">
						<li>温かい御抹茶・１３０円</li>
						<li>アイス御抹茶・９０円</li>
						<li>紅茶・１３０円</li>
						<li>烏龍茶・１５０円</li>
						<li>緑茶・１５０円</li>
					</ul>
					<br></br>
					<h3 id="section3">和菓子</h3>
					<br></br>
					<ul id="sweet-list">
						<li>苺パフェ・１５００円</li>
						<li>餡蜜・８００円</li>
						<li>お餅・６７０円</li>
						<li>団子・６００円</li>
						<li>冷製善哉・１０００円</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Menu;
