import HeaderLogo from "../../assets/react-core-concepts.png";

import headerStyles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <img
        src={HeaderLogo}
        alt="Stylized atom"
        className={headerStyles.logoImage}
      />
      <h1 className={headerStyles.heading}>React Essentials</h1>
      <p className={headerStyles.description}>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
