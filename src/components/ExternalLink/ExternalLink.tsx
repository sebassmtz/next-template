import { useTranslations } from "next-intl"
import { ReactNode } from "react"

import  style from './styles.module.css'

import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
};


export default function ExternalLink({ description, href, title }: Props) {
  return (
    <Link
      className={style.external_link}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <p className={style.text}>
        {title} <span className={style.span}>→</span>
      </p>
      <p className={style.description}>{description}</p>
    </Link>
  );
}