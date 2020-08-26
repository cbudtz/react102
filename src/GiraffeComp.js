import React from 'react';
import {giraffeStore} from "./stores/GiraffeStore";
import {observer} from "mobx-react-lite";

const GiraffeComp = observer(()=>
<div>
    {giraffeStore.giraffes.map((giraf,index)=>
        <div key={index}>
            {giraf}
        </div>
    )}
    <input value={giraffeStore.newGiraffe}
           onChange={(e) =>
               giraffeStore.newGiraffe = e.target.value
           }/>
    <button onClick={giraffeStore.createGiraffe}>Add new Giraffe</button>
</div>)

export default GiraffeComp;