import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";

import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

import styles from "./style.module.css";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <div>
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/path">{t("path")}</NavigationLink>
        </div>
        <div >
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
}
