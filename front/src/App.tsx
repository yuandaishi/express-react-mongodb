import React from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import Door from './conpoments/door/App';
import Content from './conpoments/content/index'

const App:React.FC=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Door} />
                <Route path='/content' component={Content} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;