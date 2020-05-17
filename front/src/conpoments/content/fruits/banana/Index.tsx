import React from 'react';
import { Table, Button } from 'antd'
import { observer } from 'mobx-react-lite'
import KindModal from '../../../publicConpoments/add/kindModal'
import SearchCom from './../../../publicConpoments/search/index';
import { Columns } from './data';
import State from './state'

interface Iprops {
    search: Function
}

const Banana: React.FC<Iprops> = observer((prpos: Iprops) => {
    const { useState, useEffect } = React;
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState('');
    useEffect(() => {
        State.getData({ page: 1, pageSize: 10, filter: {} })
    }, []);
    return (
        <div className='banana-box'>
            <SearchCom
                search={State.search}
            />
            <Button type='primary' className='add' onClick={() => { setVisible(true); setType('banana') }}>新增品类</Button>
            <Table
                dataSource={State.data}
                columns={Columns}
                pagination={{
                    onChange: State.changePage,
                    total: State.total,
                    current: State.current
                }}
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
})

export default Banana;