/**
 * 
 * Поисковая строка и кнопка "Найти"
 */
export default function SearchInput() {
    const styles = {
        input: {
            width: '600px',
            border: '1px solid blue',
            fontSize: '22px',
            padding: '12px',
        },
        btn: {
            border: 'none',
            backgroundColor: 'blue',
            color: 'white',
            fontSize: '22px'
        }
    }
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <img alt='logo' src='https://cdn-icons-png.flaticon.com/512/2965/2965314.png' style={{width: '50px'}}/>
        <input type='search' style={styles.input} placeholder='Найти...'></input>
        <button style={styles.btn}>Найти</button>
        </div>
        </>
    )
}