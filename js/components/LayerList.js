import  React from 'react';
import { List , Switch } from 'antd';
import {connect} from 'react-redux';

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
function mapStateToProps(state) {
    console.log('获取state',state);

    return {}; //=== {weather:weather}
}
export default connect(mapStateToProps)(LayerList);