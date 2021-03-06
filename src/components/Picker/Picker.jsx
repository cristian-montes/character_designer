import React from "react";

export default function Picker({
    head, setHead, 
    middle, setMiddle, 
    bottom, setBottom, 
    newPhrase, setNewPhrase, 
    handleClick,
    handleHead,
    handleMiddle,
    handleBottom
    }){
    const headOptions = ['alien', 'cat', 'face', 'caiman']
    const middleOptions = ['hoodie', 'tmobile', 'tshirt']
    const bottomOptions = ['jeans', 'skirt', 'gold']

    return(
        <div>
            <label>
                Head
                <select 
                    value={head} 
                    onChange={(event)=>( handleHead(event))}
                >
                    {headOptions.map((opt) =>(
                        <option key={opt}>{opt}</option>
                    ))}
                </select>
            </label>

            <label>
                Middle
                <select value={middle} onChange={(event) => handleMiddle(event)}>
                    {middleOptions.map((opt) =>(
                        <option key={opt}>{opt}</option>
                    ))}
                </select>
            </label>
            <label>
                Bottom
                <select value={bottom} onChange={(event) => handleBottom(event)}>
                    {bottomOptions.map((opt) =>(
                        <option key={opt}>{opt}</option>
                    ))}
                </select>
            </label>
            <label>
                New Phrases
                <input
                    type='text'
                    value={newPhrase}
                    onChange={(event) => setNewPhrase(event.target.value)}
                />
            </label>
            <button
                type='button'
                onClick={handleClick}
            >
                Add Sayings
            </button>

        </div>
    )
}