/**
 * 
 * Показывает телефизионный контент в section
 */

export default function TelevisionContent({ content }) {
    let television = content.filter((item) => item.type === 'television');
        return (
            <>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {television.map((item) => {
                        return <li key={item.id} style={{fontFamily: 'sans-serif'}}>{}<a href={item.url} style={{ textDecoration: 'none' }}>{item.time} {item.name} <span style={{color: 'gray'}}>{item.description}</span></a></li>
                    })}
                </ul>
            </>
        )
} 
