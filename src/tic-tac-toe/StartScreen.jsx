import './StartScreen.css';

function StartScreen( {onStartClick, winner, onRestartClicked} ) {
    if (winner) {
        return (
            <div>
                <h1>Player {winner} Won!</h1>
                <button
                className="start-button"
                onClick={onRestartClicked}>
                    Click to Restart
                </button>
            </div>
        );
    }
    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <button
            className="start-button"
            onClick={onStartClick}>
                Click to Start
            </button>
        </div>
    );
}

export default StartScreen;