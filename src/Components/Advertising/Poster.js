/**
 * 
 * Размещает рекламный постер
 */
export default function Poster(props) {
    const {url} = props
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'center', margin: '20px'}}>
        <img src={url} alt='poster' style={{width: '900px', height: '300px'}} />
        </div>
        </>
    )
}