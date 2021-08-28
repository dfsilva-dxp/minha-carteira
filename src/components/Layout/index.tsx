import { ReactElement } from "react";

import Header from "../Header";
import PageContentTitle from "../PageContentTitle";
import Sidebar from "../Sidebar";

import * as S from "./styled";

type LayoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Grid>
      <Header />
      <Sidebar />

      <S.Content>
        <PageContentTitle title="Dashboard" />
        {children}
      </S.Content>
    </S.Grid>
  );
};

export default Layout;
