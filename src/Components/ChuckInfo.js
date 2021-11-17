function ChuckInfo(props) {

    return (
        <>
            <p>Number of Whales Saved: {props.whalesSaved}</p>

            <p>Number of Round House Kicks (in the last day): {props.roundHouseKicks}</p>
        </>
    )
}

export default ChuckInfo;