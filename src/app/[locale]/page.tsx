import {notFound} from 'next/navigation';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
// import PageLayout from '@/components/PageLayout';
import {locales} from '../../i18n-config';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';

type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  return (
    <div>
      <ThemeSwitcher />
      <LocaleSwitcher />
       <p>
        {t.rich('description', {
          code: (chunks) => (
            <code >{chunks}</code>
          )
        })}
      </p>
    </div>
  );
}
