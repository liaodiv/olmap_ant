import  React from 'react';
import { List , Switch } from 'antd';

const  data = ['layer1','layer2','layer3'];
const LayerList = (props) => {
    return(
    <List
        dataSource={data}
        bordered
        renderItem={ item => (
            <List.Item actions={[<Switch defaultChecked={false}/>]}>
                {item}</List.Item>
        ) }>
    </List>
    )

}

export default LayerList;