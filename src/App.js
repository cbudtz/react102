import React from 'react';
import './App.css';
import {observer} from "mobx-react-lite";
import {Link, Route, Switch} from "react-router-dom";
import GiraffeComp from "./GiraffeComp";

const App = ()=> {
    return (
        <div>
            <div>
                <Link to={"/giraffer"}>Giraffer</Link>
            </div>
            <div>
                <Link to={"/søløver"}>Søløver</Link>
            </div>
            <Switch>
                <Route path={"/giraffer"}><GiraffeComp/></Route>
                <Route path={"/søløver"} render={()=>
                    <div>Søløvesiden!</div>
                }/>

            </Switch>

        </div>
    );
}

export default observer(App);
