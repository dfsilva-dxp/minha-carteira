import { useLocation } from "react-router";

import PageContentTitle from "../../components/PageContentTitle";

import * as S from "./styles";

const Dashboard = () => {
  const { pathname } = useLocation();
  const title = pathname.replace("/", "");
  return (
    <S.Container>
      <PageContentTitle title={title} />
    </S.Container>
  );
};

export default Dashboard;
