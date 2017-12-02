import React from 'react';
import { Layout , Menu , Button } from 'antd';
const { SubMenu } = Menu;
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
                   23232sdsd</Sider>
                <Content className="Content">Content1123232
                    <Button type="primary">Primary</Button>
                </Content>
            </Layout>
        </Layout>

    </div>
)

export default App;