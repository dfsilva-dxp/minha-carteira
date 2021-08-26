import { ReactElement } from "react";
import Header from "../Header";
import * as S from "./styled";

type LayoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Grid>
      <Header />
      <S.Aside>AS</S.Aside>
      <S.Content>{children}</S.Content>
    </S.Grid>
  );
};

export default Layout;
