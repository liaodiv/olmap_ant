import React, {Component} from 'react';
import {Collapse, Icon} from 'antd';
const Panel = Collapse.Panel;

class SideBar extends Component {

    render() {

        return (
            <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="This is panel header 1" key="1">
                    <p>22</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>33</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>44</p>
                </Panel>
            </Collapse>
        )

    }


}
export default SideBar;