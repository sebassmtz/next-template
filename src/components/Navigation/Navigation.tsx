import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import NavigationLink from "./NavigationLink";


export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <div>
      <nav>
        <div>
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/path">{t("path")}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
