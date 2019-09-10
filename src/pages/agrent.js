import React, {Component} from 'react';
import styles from './agrent.scss';
import { Row, Col } from 'antd';
import MyCard  from '../components/MyCard';
import productList from '../components/ProductList'
import instance from '../conf/axiosConf';
import { Tabs } from 'antd';
import { of } from 'rxjs';

const { TabPane } = Tabs;

export default class index extends Component{
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      filterList: [],
      statusNumber: 0,
      buildNumber: 0,
      idleNumber: 0,
      osNumber:0,
      pyNumber:0,
      viNumber:0
    }
  }
 
  callback(key) {
    const filterList =  this.state.productList.filter(item=>{
      return item.type === key
    })
    this.setState({
      filterList: filterList
    })
  }
  componentDidMount() {
    instance.get("agents").then(data => {
      let viNumber = 0;
      let pyNumber = 0;
      let idleNumber=0;
      let buildNumber = 0;
      for(let i of data){
        console.log('i: ', i);
        if(i.type === "physical"){
          pyNumber++
        } 
        if(i.type === 'virtual'){
          viNumber++
        }
        if(i.status === 'building'){
          buildNumber++
        }
        if(i.status === 'idle'){
          idleNumber++
        }      
      }
      this.setState({
        filterList: data,
        osNumber: data.length,
        viNumber: viNumber,
        pyNumber: pyNumber,
        buildNumber: buildNumber,
        idleNumber: idleNumber
      });  
    })
  }

  render(){
    const {filterList} = this.state
    const productElement = filterList.map(item=>{
      return (
      <Row  key={item.id} >
        <Col span={24}>
          <productList products={item}/> 
        </Col>
      </Row> 
      )
    })
    return (
      <div className={styles.normal}>
        <MyCard  buildNumber={this.state.buildNumber} idleNumber={this.state.idleNumber} statusNumber={this.state.statusNumber} osNumber={this.state.osNumber} pyNumber={this.state.pyNumber} viNumber={this.state.viNumber}/>
        <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
        <TabPane tab="All" key="all">
          {productElement}
        </TabPane>
        <TabPane tab="Physical" key="physical">
          {productElement}
        </TabPane>
        <TabPane tab="Virtual" key="virtual">
          {productElement}
        </TabPane>
        </Tabs>
      </div>
    );
  }
}
