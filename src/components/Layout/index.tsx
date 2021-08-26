import { ReactElement } from "react";

import * as S from "./styled";

type LayoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Grid>
      <S.Header>Header</S.Header>
      <S.Aside>AS</S.Aside>
      <S.Content>{children}</S.Content>
    </S.Grid>
  );
};

export default Layout;
