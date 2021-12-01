import React, { useState } from 'react';
import Character from '../components/Character/Character';
import Phrase from '../components/Phrase/Phrase';
import Picker from '../components/Picker/Picker';


function CharacterContainer(){
    const [head, setHead] = useState('alien');
    const [middle, setMiddle] = useState('hoodie');
    const [bottom, setBottom] = useState('skirt');
    const [phrase, setPhrase] = useState([]);
    const [newPhrase, setNewPhrase] = useState('');

    const handleClick = () => {
        setNewPhrase('')
        setPhrase((prevState) => [...prevState, newPhrase])
    }
    console.log('here', phrase)
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
                newPhrase={newPhrase}
                setNewPhrase={setNewPhrase}
                handleClick= {handleClick}
                />
            <Character head={head} middle={middle} bottom={bottom}/>
            <Phrase phrases={phrase}/>
        </div>
    )
}

export default CharacterContainer;