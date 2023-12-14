"use client";

import { ChangeEvent, ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "../../i18n-navigation";

import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label className={`${styles.label} ${isPending ? styles.disabled : ''}`}>
      <p className={styles.visuallyhidden}>{label}</p>
      <select
        className={styles.customInput}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className={styles.dropdownIcon}></span>
    </label>
  );
}
