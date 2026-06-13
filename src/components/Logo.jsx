import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
import styles from "../assets/CSS/logo.module.css"

export default function Logo({ className = "" }) {
  return (
    <div className={`${styles.logo} ${className}`}>
      <Link to="/">
        <img src={logo} alt="Arvane logo" />
      </Link>
    </div>
  );
}