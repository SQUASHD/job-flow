import { NavMenu } from "@/components/nav-menu";
import { Fragment } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: LayoutProps) {
  return (
    <Fragment>
      <NavMenu />
      {children}
    </Fragment>
  );
}
