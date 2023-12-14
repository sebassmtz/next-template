"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import type { AppPathnames } from "../../i18n-config";
import { Link } from "../../i18n-navigation";

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link aria-current={isActive ? "page" : undefined} href={href} {...rest} />
  );
}
