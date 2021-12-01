
export default function Phrase({phrases}){
    return(
        <div>
            {phrases.map((phrase) => (
                <p style={{ color:'white'}}>{phrase}</p>
            ))}
        </div>
    )
}