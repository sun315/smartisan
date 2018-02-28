import React ,{Component} from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import axios from 'axios';
import Bottomnav from './Bottomnav';
import toggle from '../img/nav-toggle.png';
import '../style/Header.css';
import '../style/Home.css';
import { Carousel} from 'antd-mobile';


export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ['1', '2', '3'],
    		imgHeight: 176,
    		slideIndex: 0,
    		banner_section:[],//轮播图
    		list_section:[],//菜单
    		hot_goods:[],//热门商品
    		active:[],//入口图片
    		hot_goods_banner:[]//热销机型
		}
	}
  	componentDidMount() {
  		axios.get("marketing/mobile/index_e1b6c72ba511309a973b24e399f1b79f.json")
  		.then((res)=>{
  			//console.log(res);
  			this.setState({
  				banner_section:res.data.banner.dataList,//轮播图
  				list_section:res.data.shortcut.dataList,//菜单
  				active:res.data.floors[1].dataList
  			})
		})
		axios.get("/product/skus?ids=100027401,100027102,100035105,100027004,100036310,100026701,100036302,100033802,100036002,100035202,100036003,100035102,100027401,100027102,100026601,100032902,100026701,100029501,100035108,100027004,100027001,100036310,100035104,100033802,100035105,100033311,100035111,100035703,100035202,100033911&with_stock=true&with_spu=true")
		.then((res)=>{
			//console.log(res);
			this.setState({
				hot_goods:res.data.data.list.slice(0,10)//热门产品
			})
		})
		axios.get("/product/skus?ids=100035101,100035103,100035106,100035107,100035109,100035110,100035112,100035113&with_stock=true&with_spu=true")
		.then((res)=>{
			console.log(res);
			this.setState({
				hot_goods_banner:res.data.data.list//热销机型
			})
		})
    // simulate img loading
    setTimeout(() => {
        this.setState({
          data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        });
      }, 100);
    }
	render() {
		return (
			<div>
				{/* header */}
				<header>
					<a className="nav-toggle"></a> 
					<img className="nav-pic" src={toggle} alt=""/>
				</header>

				<Bottomnav />

			    {/* section */}
			    <section>

			    	{/* 轮播图and菜单 */}
			    	<div className="banner-nav">
			    		<div className="banner-container">
			    			<ul className="item-banner-container">
			    				<Carousel
						          autoplay={true}
						          infinite
						          selectedIndex={1}
						        >
						          {
						          	this.state.banner_section.map(function(item,index){
						          		return <img key={item.src} src={item.src} alt="" />
						          	})
						          }
						        </Carousel>
			    			</ul>
			    		</div>
			    		<div className="short-cut-container">
			    			{
			    				this.state.list_section.map(function(item,index){
			    					return (
			    						<li key={item.src}>
			    							<img src={item.src} alt="" />
			    							<p>{item.labelTitle}</p>
			    						</li>
			    					)
			    				})
			    			}
			    		</div>
			    	</div>

			    	{/* 热门商品 */}
			    	<div className="hot">
			    		<h2>热门商品<b>&gt;</b></h2>
			    		<div className="hot_goods">
			    			{
			    				this.state.hot_goods.map(function(item,index){
			    					return (
			    						<ul key={item.id}>
			    							<li><img src={item.shop_info.ali_image} alt=""/></li>
			    							<li>
			    								<p>{item.name}</p>
			    								<p>{item.shop_info.sku_mobile_sub_title}</p>
			    								<p>￥{item.price}.00</p>
			    							</li>
			    						</ul>
			    					)
			    				})
			    			}
			    		</div>
			    	</div>

			    	{/* 图片入口 */}
			    	<div className="activity">
			    		{
			    			this.state.active.map(function(item,index){
			    				return <img key={index} src={item.src} alt="" />
			    			})
			    		}
			    	</div>

			    {/* 热销机型 */}
			    <div className="hot_goods_banner">
			    	<h2>热销机型</h2>
			    	<div className="hot_series">
				    	<Carousel
						          autoplay={true}
						          dots={false}
						          infinite
						          selectedIndex={1}
						        >
			    		{
			    			this.state.hot_goods_banner.map(function(item,index){
			    				return (
			    					<ul key={item.id}>
						    			<li><img src={item.shop_info.ali_image} /></li>
						    			<li>
						    				<p>{item.shop_info.title}</p>
						    				<p>{item.shop_info.sub_title}</p>
						    				<p>￥{item.price}.00</p>
						    			</li>
						    		</ul>
			    				)
			    			})
			    		}
			    		</Carousel>
			    	</div>
			    </div>
			    </section>

			</div>		
		)
	}
}