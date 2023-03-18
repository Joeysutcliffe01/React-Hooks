import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./example_code.css";

export function CodeExampleText({ codeExample }) {
  const [copy, setCopy] = useState(false);
  return (
    <div className="details_main_code_example_container">
      <div className="details_main_code_example">
        <div className="details_main_code_example_btn_container">
          {!copy ? (
            <button
              className="details_main_code_example_btn"
              onClick={() => {
                navigator.clipboard.writeText(codeExample);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 5000);
              }}
            >
              <span>
                <ion-icon name="clipboard-outline"></ion-icon>
              </span>
              Copy
            </button>
          ) : (
            <>
              <button className="details_main_code_example_btn">
                <span>
                  <ion-icon name="checkmark-sharp"></ion-icon>
                </span>
                copied !! {"   "}
              </button>
              <h1 className="details_main_code_example_h1">
                Copyed to clipbord
              </h1>
            </>
          )}
        </div>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLongLines={true}
          // customStyle={{ display: "flex", width: "90%" }}
        >
          {codeExample}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
