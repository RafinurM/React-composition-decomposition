/**
 * 
 * @param {string} title Залоговок блока новостей
 * @returns Показывает список новостей
 */

export default function News({ title, children }) {
    return (
        <>
            <h3>{title}</h3>
            <div style={{ display: 'flex' }}>
                <div>
                    {children}
                </div>
                <div style={{ color: '#AAAAAA' }}>
                    {Date()}
                </div>
            </div>
        </>

    )
}