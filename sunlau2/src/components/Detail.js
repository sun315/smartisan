import React ,{Component} from 'react';
import axios from 'axios';
import '../style/Header.css';
import '../style/Detail.css';

export default class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hot_goods:[]//热门商品
		}
		this.goback = this.goback.bind(this);
	}
	componentDidMount() {
		axios.get(`/product/skus?ids=${this.props.match.params.fid}`)
		.then((res)=>{
			console.log(res);
			this.setState({
				hot_goods:res.data.data.list.slice(0,10)//热门产品
			})
			//console.log(this.state.hot_goods);
		})
	}
	goback() {
		window.history.go(-1);
	}
	render() {
		return (
			<div>
				<header>
					<a className="goback" onClick={this.goback}>&lt;返回</a> 
					{
						this.state.hot_goods.map(function(item,index){
							return (
								<h1 key={item.id} className="goods_title">{item.product_info.product_name}</h1>
							)
						})
					}
				</header>
				<section>

				</section>
			</div>
		)
	}
}