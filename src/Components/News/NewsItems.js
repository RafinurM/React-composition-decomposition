/**
 * 
 * @param {string} title - Заголовок новости
 * @param {string} url - Ссылка на новость
 * @returns показывает название новости и ссылка на неё
 */
export default function NewsItems({ news }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {news.map((item) => {
                return <a href={item.url} key={item.id}>{item.title}</a>
            })}
        </div>
    )
}