import { Link } from "react-router-dom";
// import { Data } from "../data/Data";

export function CardLinks({ Data }) {
  console.log("----------------Data", Data);
  return (
    <div className="card_links_container">
      {/* <h1>Card links</h1> */}

      {Data.map((item) => {
        return (
          <Link to={"/details/" + item.id} key={item.id} className="links">
            <div className="card_links_card">
              <div className="card_links_photo_container">
                {/* {console.log("item.img--------------------", item.img)} */}
                <img
                  className="card_links_photo"
                  src={item.img}
                  alt={`The ${item.name} Hook`}
                />
              </div>
              <div className="card_links_paragraph">
                <div className="card_links_title">
                  <h1>{item.name}</h1>
                </div>
                <div className="card_links_paragraph">
                  <p>{item.short_dec}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}

      {/* <Link to="/details/useContext">
            <div className='card_links_card'>
                <div className='card_links_photo'></div>
                <div className='card_links_discription'><h1>useContext</h1></div>
            </div>
        </Link>
        <Link to="/details/useContext">
            <div className='card_links_card'>
                <div className='card_links_photo'></div>
                <div className='card_links_discription'><h1>useContext</h1></div>
            </div>
        </Link>
        <Link to="/details/useContext">
            <div className='card_links_card'>
                <div className='card_links_photo'></div>
                <div className='card_links_discription'><h1>useContext</h1></div>
            </div>
        </Link>
        <Link to="/details/useState">
            <div className='card_links_card'>
                <div className='card_links_photo'></div>
                <div className='card_links_discription'><h1>useState</h1></div>
            </div>
        </Link>
        <Link to="/details/useEffect">
            <div className='card_links_card'>
                <div className='card_links_photo'></div>
                <div className='card_links_discription'><h1>useEffect</h1></div>
            </div>
        </Link> */}
    </div>
  );
}
