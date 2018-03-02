import React ,{Component} from 'react';
import axios from 'axios';
import Bottomnav from './Bottomnav';
import '../style/Header.css';
import '../style/Category.css';

export default class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobile_pic:[],
			air:[],
			shell:[],
			elec:[],
			elec2:[],
			elec3:[],
			book:[]
		}
	}
	componentDidMount() {
		axios.get("/marketing/mobile/category_a0bce3afafc97a5e4c35a1468c953b71.json")
		.then((res)=>{
			 console.log(res);
			this.setState({
				mobile_pic:res.data,
				book:res.data.slice(6,9)
			})
			//console.log(this.state.mobile_pic);
		})
		axios.get("/product/skus?ids=100035101,100027305,100036303,100035702,100036401,100036501,100030601,100027401,100027101,100035203,100026601,100026701,100026801,100022501,100029901,100023501,100037801,100035802,100027001,100023102,100034901,100023001,100033301,100026111,100037619,100033913,100037719,100026445,100032201,100022201,100022901,100025103,100032901,100032701,100032601&with_stock=true&with_spu=true")
		.then((res)=>{
			console.log(res);
				this.setState({
					air:res.data.data.list.slice(4,8),
					shell:res.data.data.list.slice(19,23),
					elec:res.data.data.list.slice(29,35),
					elec2:res.data.data.list.slice(10,16),
					elec3:res.data.data.list.slice(2,8)
				})
		})
	}
	render() {
	if(this.state.mobile_pic.length > 0){
		var img = <img src = {this.state.mobile_pic[0].image.src} alt=""/>;
		var img2= <img src = {this.state.mobile_pic[1].image.src} alt=""/>;
		var img3= <img src = {this.state.mobile_pic[2].image.src} alt=""/>;
		var img4= <img src = {this.state.mobile_pic[3].image.src} alt=""/>;
		var img5= <img src = {this.state.mobile_pic[4].image.src} alt=""/>;
		var img6= <img src = {this.state.mobile_pic[5].image.src} alt=""/>;
	} 
		return (
			<div>
				<header>
					<a className="nav-toggle"></a> 
					<h1 className="nav-title">分类</h1>
				</header>
				<section>
					{/* 手机 */}
					<div className="mobile">
						<h2 className="mobile-tit">手机</h2>
						<div className="mobile-img">
							{img}					
						</div>
						<div className="mobile-con1">
							<img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_107/format,webp" alt=""/>
							<p>坚果 pro 2</p>
							<span>买赠</span>
							<i>&gt;</i>
						</div>
						<div className="mobile-con2">
							<img src="https://resource.smartisan.com/resource/e883f15eed51a49e1fbc9d8ddd82460b.png?x-oss-process=image/resize,w_107/format,webp" alt=""/>
							<p>坚果 pro</p>
							<span>加价购</span>
							<i>&gt;</i>
						</div>
					</div>

					{/* 空气净化 */}
					<div className="air">
						<h2 className="air-tit">空气净化</h2>
						<div className="air-img">{img2}</div>
						<div className="air-con">
							<ul>
								{
									this.state.shell.map(function(item,index){
						          		return (
												<li key={item.id}>
													<img src={item.shop_info.ali_image} alt=""/>
													<p>{item.shop_info.title}</p>
													<span>&gt;</span>
												</li>
						          		)
						          	})
								}
							</ul>	
						</div>
					</div>

					{/* 壳套膜 */}
					<div className="air">
						<div className="air-tit">壳套膜</div>
						<div className="air-img">{img3}</div>
						<div className="air-con">
							<ul>
								{
									this.state.air.map(function(item,index){
						          		return (
												<li key={item.id}>
													<img src={item.shop_info.ali_image} alt=""/>
													<p>{item.shop_info.title}</p>
												</li>
						          		)
						          	})
								}
							</ul>	
						</div>
					</div>

					{/* 充电线材 */}
					<div className="elec">
						<div className="elec-tit">充电线材</div>
						<div className="elec-img">{img4}</div>
						<div className="elec-con">
							<ul>
								{
									this.state.elec.map(function(item,index){
						          		return (
												<li key={item.id}>
													<img src={item.shop_info.ali_image} alt=""/>
													<p>{item.shop_info.sku_mobile_title
	}</p>
												</li>
						          		)
						          	})
								}
							</ul>	
						</div>
					</div>

					{/* 耳机 */}
					<div className="elec">
						<div className="elec-tit">耳机</div>
						<div className="elec-img">{img5}</div>
						<div className="elec-con">
							<ul>
								{
									this.state.elec2.map(function(item,index){
						          		return (
												<li key={item.id}>
													<img src={item.shop_info.ali_image} alt=""/>
													<p>{item.shop_info.sku_mobile_title
	}</p>
												</li>
						          		)
						          	})
								}
							</ul>	
						</div>
					</div>

					{/* 服装 */}
					<div className="elec">
						<div className="elec-tit">服装</div>
						<div className="elec-img">{img6}</div>
						<div className="elec-con">
							<ul>
								{
									this.state.elec3.map(function(item,index){
						          		return (
												<li key={item.id}>
													<img src={item.shop_info.ali_image} alt=""/>
													<p>{item.shop_info.sku_mobile_title}</p>
												</li>
						          		)
						          	})
								}
							</ul>	
						</div>
					</div>

					{/* 图书&文具&投影仪 */}
					<div className="book">
						{
							this.state.book.map(function(item,index){
								return (
									<div key={item.id}>
										<h2 className="book-tit">{item.name}</h2>
										<div className="book-img"><img src={item.image.src} alt=""/></div>
									</div>									
								)
							})							
						}
					</div>
				</section>
				<Bottomnav />
			</div>
		)
	}
}