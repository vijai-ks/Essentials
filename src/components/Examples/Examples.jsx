import ToggleButton from "../ToggleButton/ToggleButton";
import examplesStyles from "./Examples.module.scss";

export default function Examples() {
  return (
    <section className={examplesStyles.examplesContainer}>
      <h4 className={examplesStyles.examplesTitle}>Examples</h4>
      <ToggleButton />
    </section>
  );
}
