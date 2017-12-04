import React from 'react';
import { Layout , Button } from 'antd';
import SideBar from './components/SiderBar.jsx';
import '../css/containers/app.css';



const { Header , Footer ,Sider ,Content } = Layout;

const App = () =>(
    <div>
        <Layout>
            <Header className="header" style={{ backgroundColor:'#92fffc'}}>
              <h3>OL-ReactMap</h3>
            </Header>
            <Layout>
                <Sider className="Sider" id="left" width="300" style={{ backgroundColor:'#eeffcb'}}>
                    <SideBar/>
                </Sider>
                <Content className="content-body">
                    <Button type="primary">Primary</Button>
                </Content>
            </Layout>
        </Layout>

    </div>
);

export default App;