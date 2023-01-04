/**
 * 
 * @param {array} props 
 * @returns Показывает список тегов
 */
export default function Tags(props) {
    return (
        <>
            <ul style={{ display: 'flex', flexDirection: 'row' }}>
                {props.tags.map((item) => <li key={item} style={{ marginRight: '15px', listStyleType: 'none' }}><a href='#' style={{ textDecoration: 'none' }}>{item}</a></li>)}
            </ul>
        </>
    )
}