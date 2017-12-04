import React from 'react';
import { Layout , Button,Icon } from 'antd';
import SideBar from './components/SiderBar.jsx';
import MapView from './containers/MapView.jsx';
import '../css/containers/app.css';
import '../node_modules/ol/ol.css';



const { Header , Footer ,Sider ,Content } = Layout;

const App = () =>(
    <div style={ { "height":"100%" } }>
        <Layout style={{"height":"100%" }}>
            <Header className="header" >
              <Icon className="logo" type="api" />GIS-TEST-1
            </Header>
            <Layout style={{"height":"100%"}} >
                <Sider className="sidebar" id="left" width="250">
                    <SideBar/>
                </Sider>
                <Content className="content-body">
                    <MapView />
                </Content>
            </Layout>
        </Layout>

    </div>
);

export default App;