import React from 'react';
import styles from './index.css';
import withRouter from 'umi/withRouter';
import SimpleLayout from './SimpleLayout';
import { Layout, Menu, Icon } from 'antd';
import LogoSVG from '../ASSETS/logo/logo.svg'
import Link from 'umi/link';
const { Header, Content, Footer, Sider } = Layout;
 function RouteLayout({ children, location }) {
  if (location.path === '/login') {
    return <SimpleLayout>{ children }</SimpleLayout>
  }

  return (
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} className="flex j-center" >
          <div >
            <LogoSVG width="253" height="74"/>
          {/* <Icon component={LogoSVG}   /> */}
          </div>
        </Header>
        <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
              <Link to="/dashboard">
                <Icon type="upload" />
                <span className="nav-text">DASHBOARD</span>              
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/Agrent">
              <Icon type="user" />
              <span className="nav-text">Agrent</span>
            </Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to="/MyCruise">
              <Icon type="video-camera" />
              <span className="nav-text">MyCruise</span>              
            </Link>              
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/Help">
                <Icon type="upload" />
                <span className="nav-text">Help</span>              
              </Link>
            </Menu.Item>
          </Menu>

        </Sider>
        <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{children}</div>
          </Content>
        </Layout>
      </Layout>
  );
}

 export default withRouter(RouteLayout);


 
