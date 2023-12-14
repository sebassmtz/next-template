import { useTranslations } from "next-intl"
import { ReactNode } from "react"
import ExternalLink from "../ExternalLink/ExternalLink"

import styles from './styles.module.css'

type Props = {
  children?: ReactNode;
};

function PageLayout({ children }: Props) {
  const t = useTranslations('PageLayout');

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageChildren}>
        <div className={styles.combined} />
      </div>
      <div className={styles.container_flex}>
        <h1 className={styles.heading}>
          {t('title')}
        </h1>
        <div className={styles.main}>{children}</div>
        <div className={styles.link}>
          <ExternalLink
            description={t('links.docs.description')}
            href={t('links.docs.href')}
            title={t('links.docs.title')}
          />
          <ExternalLink
            description={t('links.source.description')}
            href={t('links.source.href')}
            title={t('links.source.title')}
          />
        </div>
      </div>
    </div>
  );
}

export default PageLayout