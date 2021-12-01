import './Character.css';


export default function Character({head, middle}){
    return(
        <section>
            <article className='head'
                style={{
                    backgroundImage: `url(./${head}-head.png)`,
                    height: 200,
                    width: 200,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
            >
            </article>

            <article className='middle'
                style={{
                    backgroundImage: `url(./${middle}-middle.png)`,
                    height: 200,
                    width: 200,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
            >
            </article>
        </section>
    )
}