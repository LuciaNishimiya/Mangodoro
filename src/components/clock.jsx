const clock = ({ minutes, seconds, error }) => {
    if (!error) {
        return (
            <>
                <p id="timer-clock">
                    {minutes < 10 && "0"}
                    {minutes}<span id="colon">:</span>{seconds < 10 && "0"}
                    {seconds}
                </p>
            </>
        );
    }
};
export default clock;
