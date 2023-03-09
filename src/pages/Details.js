import logo from "../photos/Logo.png";
import reactLogo from "../photos/react_3d_logo.png";
import { Link, useParams } from "react-router-dom";
import { CodeExampleText } from "../components/examples/code_example_text/CodeExampleText";

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
        <h1 className="details_hero_text">{pageInfo.name}</h1>
      </div>
      <div className="details_main">
        <p className="details_main_p">{pageInfo.short_dec}</p>
      </div>
      <div>
        <CodeExampleText codeExample={pageInfo.codeExample} />
      </div>
    </div>
  );
}
