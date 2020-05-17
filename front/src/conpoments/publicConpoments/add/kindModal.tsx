import React from 'react';
import { Modal, Form, Input, Button, Row, Col, InputNumber } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form' //获取form表单的interface
import './../index.scss'
import State from './state';

interface Iprops {//props中包含的属性(父元素要传的属性)
    visible: boolean
    setVisible: Function
    width?: number
    type: string
}

const Modals: React.FC<Iprops & FormComponentProps> = (props) => {//这里如果不用Iprops的话，则props只包含属性children，加上的话，则属性包含Iprops中的属性
    const int = (val: number) => {
        return val * 100
    }
    const { getFieldDecorator } = props.form
    const okFun: Function = () => {
        //其他处理
        //e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                let col = (int(values.salePrice) * (values.saleWeight) - int(values.buyPrice) * (values.buyWeight)) / 100;
                values.income = col;
                values.type = props.type;
                //Data.push(values)
                State.addFruitsData(values);
                //关闭弹窗
                props.setVisible(false)
            }
        })
    }
    const { Item } = Form
    return (
        <Modal
            className='KindModal'
            title="测试用"
            visible={props.visible}
            //onCancel={props.setVisible(false)}这样写没有效果
            onCancel={() => { props.setVisible(false) }}
            onOk={() => { okFun() }}
            width={props.width}
            okText='确定'
            cancelText='取消'
        >
            <Form>
                <Row>
                    <Col span={12}>
                        <Item label="产品名称">
                            {getFieldDecorator('name', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入产品名称',
                                    },
                                ],
                            })(<Input placeholder="请输入产品名称" />)}
                        </Item>
                    </Col>
                    <Col span={12}>
                        <Item label="产地">
                            {getFieldDecorator('origin', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入产地',
                                    },
                                ],
                            })(<Input placeholder="请输入产地" />)}
                        </Item>
                    </Col>
                </Row>
                <Row >
                    <Col span={12}>
                        <Item label="购入价格(每斤)">
                            {getFieldDecorator('buyPrice', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入购入价格(每斤)',
                                    },
                                ],
                            })(<InputNumber placeholder="请输入购入价格(每斤)" min={0} />)}
                        </Item>
                    </Col>
                    <Col span={12}>
                        <Item label="购入重量(斤)">
                            {getFieldDecorator('buyWeight', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入购入重量(斤)',
                                    },
                                ],
                            })(<InputNumber placeholder="请输入购入重量(斤)" min={50} />)}
                        </Item>
                    </Col>
                </Row>
                <Row >
                    <Col span={12}>
                        <Item label="卖出价格(每斤)">
                            {getFieldDecorator('salePrice', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入卖出价格(每斤)',
                                    },
                                ],
                            })(<InputNumber placeholder="请输入卖出价格(每斤)" min={0} />)}
                        </Item>
                    </Col>
                    <Col span={12}>
                        <Item label="卖出重量(斤)">
                            {getFieldDecorator('saleWeight', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入卖出重量(斤)',
                                    },
                                ],
                            })(<InputNumber placeholder="请输入卖出重量(斤)" min={50} />)}
                        </Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}

const KindModal = Form.create<Iprops & FormComponentProps>()(Modals);

export default KindModal;