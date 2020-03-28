import React from 'react';
import {Table,Button} from 'antd'
import {Data,Columns} from './data';
import KindModal from '../../../publicConpoments/kindModal'

const Banana:React.FC=()=>{
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
                visible={visible}
                setVisible={setVisible}
                width={800}
            />
        </div>
    )
}

export default Banana;