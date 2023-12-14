import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../i18n-config";
import PageLayout from "@/components/PageLayout/PageLayout";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("IndexPage");

  return (
    <PageLayout>
      <p>
        {t.rich("description", {
          code: (chunks) => <code>{chunks}</code>,
        })}
      </p>
    </PageLayout>
  );
}
