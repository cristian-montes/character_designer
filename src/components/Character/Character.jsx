import './Character.css';


export default function Character({head, middle, bottom}){
    return(
        <section style={{ display: 'flex', flexDirection: 'column' }}>
            <article className='head'
                style={{
                    backgroundImage: `url(./${head}-head.png)`,
                    height: 310,
                    width: 310,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
            >
            </article>

            <article className='middle'
                style={{
                    backgroundImage: `url(./${middle}-middle.png)`,
                    height: 200,
                    width: 310,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
            >
            </article>
            <article className='bottom'
                style={{
                    backgroundImage: `url(./${bottom}-bottom.png)`,
                    height: 200,
                    width: 310,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
            >
            </article>
        </section>
    )
}