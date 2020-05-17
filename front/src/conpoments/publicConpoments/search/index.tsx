import React from 'react';
import { FormComponentProps } from 'antd/lib/form/Form';
import { Form, Row, Col, Input, InputNumber, Button } from 'antd';
import { observer } from 'mobx-react-lite'
import State from './state';
import './../index.scss';

interface Iprops {//父元素传过来的属性
    search: Function
}

const Search: React.FC<Iprops & FormComponentProps> = observer((props: Iprops & FormComponentProps) => {
    const { getFieldDecorator } = props.form;
    const { Item } = Form;
    const { useEffect, useState } = React;
    const search = () => {
        props.form.validateFields((err, values) => {
            if (!err) {
                props.search(values);
            }
        })
    }

    return (
        <div className='search-box'>
            <Form>
                <Row>
                    <Col span={7}>
                        <Item label="产品名称">
                            {getFieldDecorator('name', {
                            })(<Input placeholder="请输入产品名称" />)}
                        </Item>
                    </Col>
                    <Col span={7}>
                        <Item label="产地">
                            {getFieldDecorator('origin', {
                            })(<Input placeholder="请输入产地" />)}
                        </Item>
                    </Col>
                    <Col span={7}>
                        <Item label="收入">
                            {getFieldDecorator('income', {
                            })(<InputNumber placeholder="请输入收入" />)}
                        </Item>
                    </Col>
                    <Col span={3}>
                        <Button type="default" onClick={search}>搜索</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
})

const SearchCom = Form.create<Iprops & FormComponentProps>()(Search);

export default SearchCom;