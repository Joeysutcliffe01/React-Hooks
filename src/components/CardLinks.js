import { Link } from 'react-router-dom'
import Data from "../data/Data.json";

export function CardLinks() {

    console.log("Data", Data)

  return (
    <div className='card_links_container'>

     <h1>Card links</h1>

    {Data.map((item) => {

        return (
            <Link to={"/details/" + item.id} key={item.id} className="links">
            <div className='card_links_card'>
                <div className='card_links_photo'></div>
                <div className='card_links_discription'><h1>{item.name}</h1></div>
            </div>
        </Link>
        )
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
  )
}
