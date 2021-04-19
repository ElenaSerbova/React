import React from 'react';
import {Route, Switch} from 'react-router-dom'


const ChildRoutes = () => (
    <div>
        <h2>Articles</h2>

        <Switch>
            <Route path="/Category/JavaScript" children={()=><h3>JavaScript</h3>}/>
            <Route path="/Category/Php" children={()=><h3>Php</h3>}/>
        </Switch>
    </div>
);

export default ChildRoutes;