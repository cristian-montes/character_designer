
export default function Phrase({phrases, timesChangedHead, timesChangedMiddle, timesChangedBottom}){
    return(
        <div>
            <p> The head has been changed {timesChangedHead}</p>
            <p> The body has been changed {timesChangedMiddle}</p>
            <p> The bottom has been changed {timesChangedBottom}</p>
            {phrases.map((phrase) => (
                <p style={{ color:'white'}}>{phrase}</p>
            ))}
        </div>
    )
}