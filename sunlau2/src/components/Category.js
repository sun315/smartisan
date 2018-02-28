import React ,{Component} from 'react';
import axios from 'axios';
import Bottomnav from './Bottomnav';
import '../style/Header.css';
import '../style/Category.css';

export default class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobile_pic:[]
		}
	}
	componentDidMount() {
		console.log("did");
		axios.get("/marketing/mobile/category_a0bce3afafc97a5e4c35a1468c953b71.json")
		.then((res)=>{
			//console.log(res);
			this.setState({
				mobile_pic:res.data[0].image.src
			})
			// console.log(this.state.mobile.image.src);
		})
	}
	render() { 
		return (
			<div>
				<header>
					<a className="nav-toggle"></a> 
					<h1 className="nav-title">分类</h1>
				</header>
				<section>
					<div className="mobile">
						<h2 className="mobile-tit">手机</h2>
						<div className="mobile-img">
							<img src={this.state.mobile_pic} />						
						</div>
						<div className="mobile-con1">
							<img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_107/format,webp" />
							<p>坚果 pro 2</p>
							<span>买赠</span>
							<i>&gt;</i>
						</div>
						<div className="mobile-con2">
							<img src="https://resource.smartisan.com/resource/e883f15eed51a49e1fbc9d8ddd82460b.png?x-oss-process=image/resize,w_107/format,webp" />
							<p>坚果 pro</p>
							<span>加价购</span>
							<i>&gt;</i>
						</div>
					</div>
				</section>
				<Bottomnav />
			</div>
		)
	}
}