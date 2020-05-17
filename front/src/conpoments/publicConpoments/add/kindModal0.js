import React from 'react';
import {Modal} from 'antd';

// interface Iprops{
//     visible:boolean
//     setVisible:Function
// }

const KindModal=(props)=>{//这里如果不用Iprops的话，则props只包含属性children，加上的话，则属性包含Iprops中的属性
    const okFun=()=>{
        //其他处理
        console.log('xxxxx');
        //关闭弹窗
        props.setVisible(false)
    }
    return(
        <Modal 
            title="测试用" 
            visible={props.visible}
            //onCancel={props.setVisible(false)}这样写没有效果
            onCancel={()=>{props.setVisible(false)}}
            onOk={()=>{okFun()}}
        >
            <p>一些内容,这里是JS编写的组件</p>
        </Modal>
        
    )
}

export default KindModal;