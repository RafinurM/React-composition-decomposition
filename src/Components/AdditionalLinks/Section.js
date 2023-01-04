/**
 *  @param title - называние section
 * 
 * Блок для всяких ссылок
 */
export default function Section(props) {
    return (
        <>
            <div style={{margin: '20px'}}>
                <h3>{props.title} {props.stream ? <a href ='#'><img src={props.stream.url} style={{width: '50px'}}/></a> : ''}</h3>
                <p><a href='#'></a></p>
                {props.children}
            </div>
        </>
    )
}