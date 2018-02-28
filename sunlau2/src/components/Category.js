import React ,{Component} from 'react';
import Bottomnav from './Bottomnav';
import '../style/Header.css';

export default class Category extends Component {
	render() {
		return (
			<div>
				<header>
					<a className="nav-toggle"></a> 
					<h1 className="nav-title">分类</h1>
				</header>
				<Bottomnav />
			</div>
		)
	}
}