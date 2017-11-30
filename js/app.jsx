import React from 'react';
import { Layout , Menu } from 'antd';
const { SubMenu } = Menu;
import '../css/containers/app.css';



const { Header , Footer ,Sider ,Content } = Layout;

const App = () =>(
    <div>
        <Layout>
            <Header className="header">
               <Menu theme="dark" mode="horizontal" style={{lineHeight:'64px'}}>
                    <Menu.Item key="1">nav 1</Menu.Item>
               </Menu>
            </Header>
            <Layout>
                <Sider className="Sider" id="left" width="300">
                   23232</Sider>
                <Content className="Content">Content</Content>
            </Layout>
        </Layout>

    </div>
)

export default App;