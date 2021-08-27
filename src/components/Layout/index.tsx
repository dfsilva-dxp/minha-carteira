import { ReactElement } from "react";

import Header from "../Header";
import HeaderTitleAndFilter from "../HeaderTitleAndFilter";
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
        <HeaderTitleAndFilter title="Dashboard" />
        {children}
      </S.Content>
    </S.Grid>
  );
};

export default Layout;
