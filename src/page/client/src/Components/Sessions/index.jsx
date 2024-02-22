import './styles.css'
export function Sessions({ total, current }) {
    return (
        <p className='sessions'>{current}/{total}</p>
    )
}