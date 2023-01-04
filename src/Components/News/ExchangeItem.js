/**
 * 
 * Элемент биржы
 * @returns 
 */

export default function ExchangeItem({currency, value}) {
    return (
        <>
            <div>
                <p style={{textTransform: 'uppercase', marginRight: '10px'}}>{currency}: {value}</p>
            </div>
        </>
    )
}