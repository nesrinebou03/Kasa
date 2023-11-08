import "./footer.css";

import Logo from "../../assets/LOGO.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} />
      <p>@ 2020 Kasa. All rights reserved </p>
    </footer>
  );
}
