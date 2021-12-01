import React, { useState } from 'react';
import Character from '../components/Character/Character';
import Picker from '../components/Picker/Picker';


function CharacterContainer(){
    const [head, setHead] = useState('alien')
    const [middle, setMiddle] = useState('hoodie')
    const [bottom, setBottom] = useState('skirt')

    return(
        <div>
            <h1> Make it Fanshionable </h1>
            <Picker 
                head={head} 
                setHead={setHead}
                middle={middle}
                setMiddle={setMiddle}
                bottom={bottom}
                setBottom={setBottom}
                />
            <Character head={head} middle={middle} bottom={bottom}/>
        </div>
    )
}

export default CharacterContainer;