import React, {useEffect} from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './index.css';
import menuData from './menuData';
// import Banana from './fruits/banana/Index.js';
import Banana from './fruits/banana/Index';
import Public from './public';

interface MenuList{
  url?:string
  des:string
  icon?:string
  key:string
  children?:Array<MenuList>
}

const Index:React.FC=()=>{
    useEffect(() => {
      fetch('/api/arr/3').then((response) => {
        console.log(response)
      })
    }, []);
    const { SubMenu,Item } = Menu;
    const { Header, Content, Footer, Sider } = Layout;
    const menuList=(menuData:Array<MenuList>)=>{
        return menuData.map((value,key)=>{//要返回 
          if(!value.children){
            return(
              <Item key={value.key}>
                {/* Link最后会渲染成a标签，所以要用别的标签来包含Link，而不能用Link包含别的标签 */}
                <Link to={value.url||''}><Icon type={value.icon} />{value.des}</Link>
              </Item>
            )
          }else{
            return(
              <SubMenu
                key={value.key}
                title={
                  <span>
                    <Icon type={value.icon} />
                    <span>{value.des}</span>
                  </span>
                }
              >
                {menuList(value.children)}
              </SubMenu>
            )
          }
        })
    }
    return(
        <Layout>
        <Header className="header">
          <div className="logo" />
          <div className='message'>这是里头部的一些信息</div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                {menuList(menuData)}
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }} className='content'>
              <Route path={'/content/public'} component={Public} />
              <Switch>
                {/* 公共部分 */}
                <Route exact path={'/content/public/banana'} component={Banana} />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
}

export default Index