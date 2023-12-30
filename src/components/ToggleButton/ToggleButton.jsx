import { EXAMPLES } from "../../utils/examplesConfig";

import toggleButtonStyles from "./ToggleButton.module.scss";

export default function ToggleButton() {
  const exampleButtons = Object.keys(EXAMPLES);
  return (
    <menu className={toggleButtonStyles.examplesMenu}>
      {exampleButtons.map((example) => (
        <button key={example} className={toggleButtonStyles.examplesButton}>
          {example}
        </button>
      ))}
    </menu>
  );
}
