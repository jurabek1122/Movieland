const SerialCard = ({serial}) => {
    return (
        <div className='card'>
            <h4>{serial.name}</h4>
            <h5>{serial.first_air_date}</h5>
            <img src={"https://image.tmdb.org/t/p/w500" + serial.backdrop_path} />
        </div>
    );
}

export default SerialCard ;