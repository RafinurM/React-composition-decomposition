import ExchangeItem from "./ExchangeItem"

/**
 * 
 * @returns Показывает цены на бирже (валюту и пр.)
 */
export default function Exchange({data}) {
    return (
        <>
            <div style={{display: 'flex'}}>
                {data.map( item => <ExchangeItem key={item.id} currency={item.currency} value={item.value}></ExchangeItem>)}
            </div>
        </>
    )
}