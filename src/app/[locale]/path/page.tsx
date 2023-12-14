import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function PathnamesPage({params: {locale}}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('PathnamesPage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
