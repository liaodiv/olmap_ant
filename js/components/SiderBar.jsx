import React, {Component} from 'react';
import {Collapse, Icon} from 'antd';
import '../../css/components/SideBar.css';

import LayerManger from './LayerManager';
import LayerList from './LayerList';
const Panel = Collapse.Panel;

class SideBar extends Component {

    render() {

        return (
            <Collapse className="sidebar" bordered={false}>
                <Panel header="图层管理工具" key="1">
                    <LayerManger/>
                    <br/>
                    <LayerList/>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>write something here</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>write something here</p>
                </Panel>
                <Panel header="This is panel header 4" key="4">
                    <p>write something here</p>
                </Panel>
                <Panel header="This is panel header 5" key="5">
                    <p>write something here</p>
                </Panel>
                <Panel header="This is panel header 6" key="6">
                    <p>write something here</p>
                </Panel>
                <Panel header="This is panel header 7" key="7">
                    <p>write something here</p>
                </Panel>
            </Collapse>
        )

    }


}
export default SideBar;