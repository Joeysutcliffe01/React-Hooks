import BgLg from "../photos/react_hooks_bg.png";
import BgSm from "../photos/react_hooks_bgSm.png";
import { CardLinks } from "../components/CardLinks";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Home({ Data }) {
  const [CurrentBg, setCurrentBg] = useState(BgLg);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  // console.log(windowSize.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // console.log("windowSize", windowSize.innerWidth);
  // console.log("BgLg", BgLg);

  return (
    <div>
      <div className="home_page_hero_container">
        <img
          src={windowSize.innerWidth > 890 ? BgLg : BgSm}
          alt="React hooks Hero section"
          className="home_page_hero"
        />
        <div className="home_page_hero_text_container">
          <h1 className="home_page_hero_text_h1 tilt-in-right-1-item">
            React Hooks
          </h1>
          <p className="home_page_hero_text_p tilt-in-right-1-item">
            Getting Hooked on React: An Introduction to React Hooks
          </p>
        </div>
      </div>
      {/* <h1 className="hooks_h1">React Hooks</h1> */}
      <CardLinks Data={Data} />
    </div>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
