import './styles.css'
export function Clock({ minutes, seconds }) {
    return (

        <time className="clock">
            <span className='clock-minutes'>{minutes.toString().padStart(2, '0')}</span>
            <span className='clock-colon'>:</span>
            <span className='clock-seconds'>{seconds.toString().padStart(2, '0')}</span>
        </time>

    )
}