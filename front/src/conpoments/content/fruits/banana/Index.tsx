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
    useEffect(() => {
        State.getData({ page: 1, pageSize: 10, filter: {} })
    }, []);
    return (
        <div className='banana-box'>
            <SearchCom
                search={State.search}
            />
            <Button type='primary' className='add' onClick={() => { State.setVisible(true); State.setType('banana') }}>新增品类</Button>
            <Button type="primary" onClick={State.delete}>删除</Button>

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
                visible={State.visible}
                setVisible={State.setVisible}
                width={800}
                type={State.type}
                operationType={State.operationType}
                defaultDate={State.defaultDate}
            />
        </div>
    )
})

export default Banana;