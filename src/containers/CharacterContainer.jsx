import React, { useState } from 'react';
import Picker from '../components/Picker/Picker';


function CharacterContainer(){
    const [head, setHead] = useState('cat')
    return(
        <div>
            <h1> Make it Fanshionable </h1>
            <Picker head={head} setHead={setHead}/>
        </div>
    )
}

export default CharacterContainer;