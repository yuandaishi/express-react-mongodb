import React from 'react';
import {Table,Button} from 'antd'
import {Data,Columns} from './data';
import KindModal from '../../../publicConpoments/kindModal'

const Banana:React.FC=()=>{
    const {useState,useEffect}=React;
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState('');

    return(
        <div className='banana-box'>
            <Button type='primary' className='add' onClick={()=>{setVisible(true);setType('banana')}}>新增品类</Button>
            <Table 
                dataSource={Data}
                columns={Columns}
            >
            </Table>
            <KindModal
                visible={visible}
                setVisible={setVisible}
                width={800}
                type={type}
            />
        </div>
    )
}

export default Banana;