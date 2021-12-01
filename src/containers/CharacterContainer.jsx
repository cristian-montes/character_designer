import React, { useState } from 'react';
import Character from '../components/Character/Character';
import Picker from '../components/Picker/Picker';


function CharacterContainer(){
    const [head, setHead] = useState('alien')
    return(
        <div>
            <h1> Make it Fanshionable </h1>
            <Picker head={head} setHead={setHead}/>
            <Character head={head}/>
        </div>
    )
}

export default CharacterContainer;