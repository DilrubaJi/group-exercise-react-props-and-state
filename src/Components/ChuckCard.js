function ChuckNorrisCard(props) {

// console.log("props", props)

    const chuckSoStylish = {
        width: "900px",
        border: "10px solid green",
    }

    return (
        <>
            <h2>{props.chuckGreeting}</h2>

            <img src={props.chuckImage}
                alt="Chuck Norris riding a killer whale"
                style={chuckSoStylish} />
        </>
    )
}

export default ChuckNorrisCard;