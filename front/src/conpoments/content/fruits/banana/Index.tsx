import React from 'react';
import {Table,Button} from 'antd'
import {Columns} from './data';
import KindModal from '../../../publicConpoments/kindModal'
import State from './state'

const Banana:React.FC=()=>{
    const {useState,useEffect}=React;
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState('');
    useEffect(() => {
        State.getData({page:1,pageSize:10})
    }, []);
    return(
        <div className='banana-box'>
            <Button type='primary' className='add' onClick={()=>{setVisible(true);setType('banana')}}>新增品类</Button>
            <Table 
                dataSource={State.data}
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