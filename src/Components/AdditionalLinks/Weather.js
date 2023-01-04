/**
 * 
 * показывает погоду
 */
export default function Weather(props) {
    const {url , state, morningState, eveningState, sign} = props
    return (
        <>
        <div style={{display: 'flex'}}>
        <img src={url} alt='weather-logo' style={{width: '150px'}}/>
        <p style={{fontFamily: 'sans-serif', fontSize: '45px', }}>{sign > 0 ? '+' : sign < 0 ? '-' : ' '}{state}</p>
        <div>
            <p style={{fontFamily: 'sans-serif', fontSize: '25px', }}>Утром: {sign > 0 ? '+' : sign < 0 ? '-' : ' '}{morningState}</p>
            <p style={{fontFamily: 'sans-serif', fontSize: '25px', }}>Вечером: {sign > 0 ? '+' : sign < 0 ? '-' : ' '}{eveningState}</p>
        </div>

        </div>
        </>
    )

}