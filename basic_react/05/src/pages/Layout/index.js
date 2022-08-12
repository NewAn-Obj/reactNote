import './index.scss'
import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import { Layout, Menu, Popconfirm, Button, message } from 'antd'
import {
  HddOutlined,
  HomeOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import logo from '../../assets/logo.png'
import Home from '../Home'
import Article from '../Article'
import Publish from '../Publish'
import { removeToken } from '../../utils/storage'
import { getUserProfile } from '../../api/user'
const { Header, Content, Sider } = Layout

export default class LayoutComponents extends Component {
  state = {
    userProfile: {},
  }
  render() {
    return (
      <div className="layout">
        <Layout className="page">
          <Header className="header">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="user">
              <span>{this.state.userProfile.name}</span>
              <span>
                <Popconfirm
                  placement="bottomRight"
                  title="确定要退出吗？"
                  onConfirm={this.confirm}
                  okText="确定"
                  cancelText="取消"
                >
                  <Button type="text" style={{ color: '#fff' }}>
                    <LogoutOutlined />
                    <span style={{ color: '#fff', padding: 0, margin: 0 }}>
                      退出
                    </span>
                  </Button>
                </Popconfirm>
              </span>
            </div>
            <Menu theme="dark" mode="horizontal" />
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={this.props.location.pathname}
                style={{
                  height: '100%',
                  borderRight: 0,
                }}
                // items={items2}
                theme="dark"
              >
                <Menu.Item key="/home">
                  <Link to="/home">
                    <HomeOutlined />
                    {'   '}数据概览
                  </Link>
                </Menu.Item>
                <Menu.Item key="/home/article">
                  <Link to="/home/article">
                    <HddOutlined />
                    {'  '}
                    内容管理
                  </Link>
                </Menu.Item>
                <Menu.Item key="/home/publish">
                  <Link to="/home/publish">
                    <EditOutlined /> 发布文章
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout
              style={{
                padding: '24px ',
              }}
            >
              <Content
                className="site-layout-background"
                style={{
                  margin: 0,
                  minHeight: 280,
                  overflow: 'auto',
                }}
              >
                <Switch>
                  <Route exact path="/home" component={Home}></Route>
                  <Route path="/home/article" component={Article}></Route>
                  <Route path="/home/publish" component={Publish}></Route>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
  confirm = () => {
    //删除token
    // localStorage.removeItem('')
    removeToken()
    // console.log(localStorage)
    //返回登录页
    this.props.history.push('/login')
    // 提示消息
    message.success('退出成功', 1)
  }
  async componentDidMount() {
    const res = await getUserProfile()
    // console.log(res)
    this.setState({
      userProfile: res.data,
    })
    // console.log(this.props.location)
  }
}
