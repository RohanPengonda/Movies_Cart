const MoviesData = (props) => {
  // const id = props.curElem.id;
  // const name = props.curElem.name;
  // const imgurl = props.curElem.imgurl;
  // const rating = props.curElem.rating;
  // const summary = props.curElem.summary;
  // const genre = props.curElem.genre;
  // const cast = props.curelem.cast;
  // const watch_url = props.curElem.watch_url;

  const { id, name, imgurl, rating, summary, genre, cast, watch_url } =
    props.curElem;

  return (
    <li className="card">
      <div>
        <img src={imgurl} alt={id} width="40%" height="40%" />
      </div>
      <div className="card-content">
        <h2>Name :{name} </h2>
        <h3>
          Rating:{" "}
          <span className={rating >= 8.5 ? "super_hit" : "average"}>
            {rating}
          </span>
        </h3>
        <p>Summary:-{summary}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button className="btn">Watch Now</button>
        </a>
      </div>
    </li>
  );
};

export default MoviesData;
