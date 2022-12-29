import React from 'react';
import { Layout, Menu } from 'antd';
import { useRoutes, Navigate, Link } from 'react-router-dom'
import Main from './pages/Main'
import About from './pages/About'
import './App.css'

let { Header, Content, Footer } = Layout;

function App() {
  let element = useRoutes([
    {
      path: "/home",
      element: <Main/> 
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/",
      element: <Navigate to="/home"/>
    }
  ])

  return (
    <Layout className="layout">
      <Header>
        <div className="logo"/>
        <Menu
          theme="light"
          mode="horizontal"
          className='main-menu'
          inlineIndent={100}
        >
          <Menu.Item>
            <Link to="/home">首页</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/about">关于</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 50px'
        }}
      >
        <div className="site-layout-content">
          {element}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        TransBox v0.1, Designed by Copcin
      </Footer>
    </Layout>
  );
};

export default App;