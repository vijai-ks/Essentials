import { useState } from "react";
import { EXAMPLES } from "../../utils/examplesConfig";
import ExamplesTab from "../ExamplesTab/ExamplesTab";

import toggleButtonStyles from "./ToggleButton.module.scss";

export default function ToggleButton() {
  const exampleButtons = Object.keys(EXAMPLES);
  const [exampleContent, setExampleContent] = useState("");

  return (
    <>
      <menu className={toggleButtonStyles.examplesMenu}>
        {exampleButtons.map((example) => (
          <button
            key={example}
            className={
              example == exampleContent
                ? toggleButtonStyles.examplesActiveButton
                : toggleButtonStyles.examplesButton
            }
            onClick={() => setExampleContent(example)}
          >
            {example}
          </button>
        ))}
      </menu>
      <ExamplesTab exampleContent={exampleContent} />
    </>
  );
}
