import React from "react";

export default function Picker({head, setHead, middle, setMiddle}){
    const headOptions = ['alien', 'cat', 'face', 'caiman']
    const middleOptions = ['hoodie', 'tmobile', 'tshirt']
    const bottomOptions = ['jeans', 'skirt', 'gold']

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

            <label>
                Middle
                <select value={middle} onChange={(event) => setMiddle(event.target.value)}>
                    {middleOptions.map((opt) =>(
                        <option key={opt}>{opt}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}