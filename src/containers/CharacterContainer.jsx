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

    const[timesChangedHead, setTimesChangedHead] = useState(0)
    const[timesChangedMiddle, setTimesChangedMiddle] = useState(0)
    const[timesChangedBottom, setTimesChangedBottom] = useState(0)

    const handleClick = () => {
        setNewPhrase('')
        setPhrase((prevState) => [...prevState, newPhrase])
    }

    const handleHead = (event) => {
        setHead(event.target.value);
        setTimesChangedHead(timesChangedHead+1)
    }

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
                timesChangedHead={timesChangedHead}
                setTimesChangedHead={setTimesChangedHead}
                timesChangedMiddle={timesChangedMiddle}
                setTimesChangedMiddle={setTimesChangedMiddle}
                timesChangedBottom={timesChangedBottom}
                setTimesChangedBottom={setTimesChangedBottom}
                handleHead={handleHead}
                />
            <Character head={head} middle={middle} bottom={bottom}/>
            <Phrase 
                phrases={phrase} 
                timesChangedHead={timesChangedHead}
                timesChangedMiddle={timesChangedMiddle}
                timesChangedBottom={timesChangedBottom}
            />
        </div>
    )
}

export default CharacterContainer;