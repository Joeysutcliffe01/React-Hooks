import { Link } from "react-router-dom";
// import { Data } from "../data/Data";

export function CardLinks({ Data, id }) {
  const updatedArray = Data.filter((item) => item.id !== id);

  console.log("----------------Data", Data);
  console.log("----------------Data Filter", updatedArray);
  return (
    <div className="card_links_container">
      {/* <h1>Card links</h1> */}

      {updatedArray.map((item) => {
        return (
          <>
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
                <div className="card_links_paragraph_container">
                  <div className="card_links_title">
                    <h1>{item.name}</h1>
                  </div>
                  <div className="card_links_paragraph">
                    <p>{item.shortDec}</p>
                  </div>
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}
