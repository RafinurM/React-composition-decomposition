/**
 * 
 * Показывает контент ссылок в section
 */

export default function LinksContent({ content }) {
    let links = content.filter((item) => item.type === 'link');
        return (
            <>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {links.map((item) => {
                        return <li key={item.id}>{}<a href={item.url} style={{ textDecoration: 'none' }}><b>{item.name}</b> - {item.description}</a></li>
                    })}
                </ul>
            </>
        )
} 
