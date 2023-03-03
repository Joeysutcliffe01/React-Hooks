import BgLg from "../photos/react_hooks_bg.png"
import BgSm from "../photos/react_hooks_bg.png"
import { CardLinks } from '../components/CardLinks'
import { useEffect, useRef, useState } from "react";

export function Home() {

  const [CurrentBg, setCurrentBg] = useState()
  const [windowSize, setWindowSize] = useState(getWindowSize());
  console.log(windowSize);

  useEffect(() => {

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  console.log("windowSize", windowSize);

  
  // if(windowSize.length => 800){
  //   setCurrentBg(BgLg)
  // }else{
  //   setCurrentBg(BgSm)
  // }

  return (
    <div>

    <div>
      {/* <img src="../photos/react_hooks_bg.png" alt='React hooks Hero section' className='home_page_hero' /> */}
      <img src={BgLg} alt='React hooks Hero section' className='home_page_hero' />
      <div className="home_page_hero_text_container">
      <h1 className="home_page_hero_text_h1">React Hooks</h1>
      <p className="home_page_hero_text_p">Getting Hooked on React: An Introduction to React Hooks</p>
      
      </div>
    </div>
        <CardLinks/>
    </div>
  )
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}