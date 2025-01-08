import './Stars.css';

function Stars() {
    const count = 50;
    const stars = [];
    for (let i = 0; i < count; i++) {
        let x = Math.floor(Math.random() * 100);
        let duration = Math.random() * 1;
        let h = Math.random() * 100;
        stars.push(<i
            key={i}
            style={{
                left : `${x}vw`,
                width: `${1}px`,
                height: `${50 + h}px`,
                animationDuration: `${duration}s`}}
            ></i>);
    }
    return <div>{stars}</div>;
}

export default Stars;