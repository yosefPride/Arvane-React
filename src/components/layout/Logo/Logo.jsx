import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/cn";
import logo from "@/assets/images/logo.png";
import styles from "./Logo.module.css";

export default function Logo({ className, onClick }) {
  return (
    <div className={cn(styles.logo, className)}>
      <Link to={ROUTES.home} onClick={onClick}>
        <img src={logo} alt={`${SITE_CONFIG.name} home`} />
      </Link>
    </div>
  );
}
