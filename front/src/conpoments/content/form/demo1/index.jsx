import React from 'react';
import { Form, Table, Input, InputNumber } from 'antd';
import State from './state';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

const { Item } = Form;

@observer
class FormTest extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        for (let i = 0; i < 500; i++) {
            State.data.push({
                name: 'yuands',
                age: 30,
                address: '广西'
            })
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { data } = State;
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: () => {
                    return (
                        <Item>
                            <Input placeholder="Basic usage" />
                        </Item>
                    )
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                render: () => {
                    return (
                        <Item>
                            <InputNumber placeholder="Basic usage" />
                        </Item>
                    )
                }
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                render: (value, row, index) => {
                    return (
                        <Item>
                            {
                                getFieldDecorator((`address${index}`), {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your address',
                                        },
                                    ],
                                })(
                                    <InputNumber placeholder="Basic usage" />
                                )
                            }
                        </Item>
                    )
                }
            },
        ]
        return (
            <Form>
                <Table
                    columns={columns}
                    dataSource={toJS(data)}
                    pagination={false}
                >
                </Table>
            </Form>
        )
    }
}


const Index = Form.create()(FormTest);
export default Index