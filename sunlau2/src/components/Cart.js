import React ,{Component} from 'react';
import Bottomnav from './Bottomnav';
import '../style/Header.css';

export default class Cart extends Component {
	render() {
		return (
			<div>
				<header>
					<h1 className="nav-title">购物车</h1>
				</header>
				<Bottomnav />
			</div>
		)
	}
}