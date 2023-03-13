import logo from "../photos/Logo.png";
import reactLogo from "../photos/react_3d_logo.png";
import { Link, useParams } from "react-router-dom";
import { CodeExampleText } from "../components/examples/code_example_text/CodeExampleText";
import { CardLinks } from "../components/CardLinks";

// import ExampleCode from "../components/ExampleCode";

export function Details({ Data }) {
  const { id } = useParams();
  const pageInfo = Data.find((element) => element.id === id);

  console.log("id:", id);
  console.log("data in Details", Data);
  console.log("pageInfo", pageInfo);
  return (
    <div className="details_container">
      <div className="details_hero">
        <Link to={"/"}>
          <img src={logo} alt="React hooks Logo" className="logo" />
        </Link>
        <img
          className="details_hero_logo"
          src={reactLogo}
          alt="3d react logo"
        />
        <div className="details_hero_text_container">
          <h1 className="details_hero_title">{pageInfo.name}</h1>
          <p className="details_main_short_dec">{pageInfo.shortDec}</p>
        </div>
      </div>
      <div className="details_main">
        <div className="details_main_description one">{pageInfo.dec1}</div>
        <div className="details_main_description two">{pageInfo.dec2}</div>
        <div className="details_main_description three">{pageInfo.dec3}</div>
        <div className="details_main_description four">{pageInfo.dec4}</div>
        <div className="details_main_description five">{pageInfo.dec5}</div>
        <div className="details_main_description six">{pageInfo.dec6}</div>
        <div className="details_main_description seven">{pageInfo.dec7}</div>
        <div>
          <CodeExampleText codeExample={pageInfo.codeExample} />
          {pageInfo.hookExample}
        </div>
      </div>
      <div>
        <CardLinks Data={Data} />
      </div>
    </div>
  );
}
