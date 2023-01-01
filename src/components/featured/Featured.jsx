import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Mumbai,Delhi,Rishikesh"
  );
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const handleClick = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  useEffect(() => {
    if (destination !== "") handleClick();
  }, [destination]);
  return (
    <div className="featured">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div
            className="featuredItem"
            onClick={() => setDestination("Mumbai")}
          >
            <img
              src="https://images.pexels.com/photos/3587030/pexels-photo-3587030.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[0]}</h2>
            </div>
          </div>

          <div className="featuredItem" onClick={() => setDestination("Delhi")}>
            <img
              src="https://images.pexels.com/photos/2945692/pexels-photo-2945692.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[1]}</h2>
            </div>
          </div>
          <div
            className="featuredItem"
            onClick={() => setDestination("Rishikesh")}
          >
            <img
              src="https://images.pexels.com/photos/13918457/pexels-photo-13918457.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Rishikesh</h1>
              <h2>{data[2]}</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
