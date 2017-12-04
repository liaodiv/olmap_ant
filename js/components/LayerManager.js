//通过seleact查看现有的图层，添加成功后显示到先下面

import React from 'react';
import {Form, Select , Button  } from 'antd';

const FormItem = Form.Item;

class layerM extends React.Component{
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }
    handleSubmit (e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render(){
        return (
        <Form layout="inline" onSubmit = { this.handleSubmit }>
            <FormItem>
                <Select style={{width:200}}>
                    <Option value="task">task1</Option>
                    <Option value="task1">task1</Option>
                    <Option value="task2">task3</Option>

                </Select>
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType={submit}>添加图层</Button>
            </FormItem>

        </Form>
        )
    }
}

  {/*
    <div>


    </div>
)*/}
export default layerM;