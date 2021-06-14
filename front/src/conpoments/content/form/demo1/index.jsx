import React from "react";
import { Form, Table, Input, InputNumber } from "antd";
import State from "./state";
import { observer } from "mobx-react";
import { toJS } from "mobx";

import Son1 from "./son1";
import Son2 from "./son2";

const { Item } = Form;
// render是一个函数，执行render，页面并没有渲染，render执行完毕后，重新渲染有差异的地方
// render也会耗费时间，比如组件时间复杂度很高，那么执行render函数会花费很多时间。
// render，会触发元素的componentDidMount(第一次render)或者componentDidUpdate(首次之后)，但是页面不一定会重新渲染，有差异才重新渲染差异的地方
// 父元素render会导致所有子元素执行render，所以肯定会触发子元素的componentDidMount(第一次render)或者componentDidUpdate(首次之后)
// render是一个同步函数，即render从上往下执行，碰到子组件1会执行子组件1的render，子组件1render完成之后，才会执行子组件2的render
// componentDidMount和componentDidUpdate会在所有render执行完毕后才执行，即组件已完成了render，不会立即componentDidUpdate，必须等组件2render完毕后，及时花费很长时间。
// componentDidMount只执行一次，父元素componentDidMount的时候，子元素肯定componentDidMount了
// 父元素componentDidUpdate的时候，子元素肯定componentDidUpdate了
// 因为父元素render会导致所有子元素render，导致所有子元素执行componentDidMount或者componentDidUpdate，
// render会耗费时间，componentDidUpdate和componentDidUpdate也会根据复杂度耗费时间，所以设计组件的时候，尽量分离，把需要修改的地方分发到各个子组件，父组件尽量少的进行render。
@observer
class FormTest extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("1.componentDidMount");
    for (let i = 0; i < 5; i++) {
      State.data.push({
        name: "yuands",
        age: 30,
        address: "广西",
      });
    }
  }
  componentDidUpdate() {
    console.log("1.componentDidUpdate");
  }
  render() {
    console.log("1.render");
    const { getFieldDecorator } = this.props.form;
    const { data } = State;
    function onChange(value) {
      console.log("changed", value);
    }
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        render: () => {
          return (
            <Item>
              <Input placeholder="Basic usage" />
            </Item>
          );
        },
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age",
        render: () => {
          return (
            <Item>
              <InputNumber placeholder="Basic usage" />
            </Item>
          );
        },
      },
      {
        title: "住址",
        dataIndex: "address",
        key: "address",
        render: (value, row, index) => {
          return (
            <Item>
              {getFieldDecorator(`address${index}`, {
                rules: [
                  {
                    required: true,
                    message: "Please input your address",
                  },
                ],
              })(
                <InputNumber
                  placeholder="Basic usage"
                  min={0}
                  max={100}
                  // formatter={value => `${value}%`}
                  // parser={value => value.replace('%', '')}
                  // onChange={onChange}
                />
              )}
            </Item>
          );
        },
      },
    ];
    return (
      <>
        <Form>
          <Table
            columns={columns}
            dataSource={toJS(data)}
            pagination={false}
          ></Table>
        </Form>
        <Son1 />
        <Son2 />
      </>
    );
  }
}

const Index = Form.create()(FormTest);
export default Index;
