import React from "react";

export default function Picker({head, setHead}){
    const headOptions = ['alien', 'cat', 'face', 'putin']

    return(
        <div>
            <label>
                Head
                <select value={head} onChange={(event) => setHead(event.target.value)}>
                    {headOptions.map((opt) =>(
                        <option key={opt}>{opt}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}