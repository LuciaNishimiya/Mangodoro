import './styles.css'
export function Clock({ minutes, seconds }) {
    return (

        <time className="clock">
            <span className='clock-minutes'>{minutes}</span>
            <span className='clock-colon'>:</span>
            <span className='clock-seconds'>{seconds}</span>
        </time>

    )
}