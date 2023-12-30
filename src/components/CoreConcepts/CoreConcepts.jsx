import coreConceptsSyles from "./CoreConcepts.module.scss";

import { CORE_CONCEPTS } from "../../utils/coreConceptsConfig";

export default function CoreConcepts() {
  return (
    <section className={coreConceptsSyles.coreConceptsContainer}>
      <h2 className={coreConceptsSyles.coreConceptsHeading}>Core Concepts</h2>
      <ul className={coreConceptsSyles.coreConceptsList}>
        {CORE_CONCEPTS.map((concept, index) => (
          <li key={index} className={coreConceptsSyles.coreConceptsListItem}>
            <img
              src={concept.image}
              alt="Concepts Image"
              className={coreConceptsSyles.coreConceptsImage}
            />
            <h3 className={coreConceptsSyles.title}>{concept.title}</h3>
            <p className={coreConceptsSyles.conceptsDescription}>
              {concept.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
