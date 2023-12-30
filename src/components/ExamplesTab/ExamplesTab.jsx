import exampleTabStyles from "./ExamplesTab.module.scss";
import { EXAMPLES } from "../../utils/examplesConfig";

export default function ExamplesTab({ exampleContent }) {
  const content = EXAMPLES[exampleContent];
  return (
    <section className={exampleTabStyles.tabContent}>
      {exampleContent.length > 0 ? (
        <>
          <h3 className={exampleTabStyles.title}>{content.title}</h3>
          <h4 className={exampleTabStyles.description}>
            {content.description}
          </h4>
          <p className={exampleTabStyles.code}> {content.code} </p>
        </>
      ) : (
        <p> Please Select a component for example </p>
      )}
    </section>
  );
}
