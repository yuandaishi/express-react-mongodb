import React from 'react';
import {Table,Button} from 'antd'
import {Data,Columns} from './data';
import KindModal from '../../../publicConpoments/kindModal'

const Banana=()=>{
    const {useState,useEffect}=React;
    const [visible, setVisible] = useState(false);

    return(
        <div className='banana-box'>
            <Button type='primary' className='add' onClick={()=>{setVisible(true)}}>新增品类</Button>
            <Table 
                dataSource={Data}
                columns={Columns}
            >
            </Table>
            <KindModal
                // JS可以引用TSX编写的组件（肯定的，antd等很多组件都是用TSX编写的），但是JS这里不会进行校验，所以可能有些必须属性我们没有填写
                visible={visible}
                setVisible={setVisible}
            />
        </div>
    )
}

export default Banana;