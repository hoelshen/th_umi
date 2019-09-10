import React, {Component} from 'react';

import {  Row, Col, Card } from 'antd';
import styles from './ProductList.scss';
import centos from '../assets/os_icons/cent_os.png'
import debin from '../assets/os_icons/debin.png'
import suse from '../assets/os_icons/suse.png'
import ubuntu from '../assets/os_icons/ubuntu.png'
import windows from '../assets/os_icons/windows.png'

const BizIcon = props => {
  const { type } = props;
  return <i className={`iconfont icon-${type}`} />;
};



export default class  ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productlist: [],
      productElement: ""
    }
  }


  componentDidMount() {

    // console.log('this.props.productElement', this.props.products)
  }
  render(){
    return(
      <Card>
          <Row>
          <Col span={4}>
          <div>
              <img src={this.props.products.os} alt={this.props.products.os}></img> 
            </div>      
          </Col>
          <Col span={20}>
          <div className='flex column j-around'>
            <div className="flex j-between" style={{"paddingBottom": "20px"}}>
              <div>
                <BizIcon type="desktop" />
                {this.props.products.name}
              </div>
              <div>
                {this.props.products.status} 
              </div>
              <div>
                <span className="iconfont icon-info"></span>
                {this.props.products.ip} 
              </div>
              <div>
              <span className="iconfont icon-folder"></span>
                {this.props.products.location}
              </div>
            </div>
            <div className='flex a-center'>
            <span className="iconfont icon-plus"></span>
            {this.props.products.resources.map(function(d, idx){
              return (
              <div key={idx} className="flex center  iconfont">
              {d}
              <span className="iconfont icon-trash"></span>          
              </div>
              )
            })}
            </div>
          </div>
          </Col>
        </Row>
      </Card>
    )
  }
}