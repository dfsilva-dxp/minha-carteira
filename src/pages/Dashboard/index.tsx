import DisplayUserWelcomeInfo from "../../components/DisplayUserWelcomeInfo";
import PageContentTitle from "../../components/PageContentTitle";

import * as S from "./styles";

const Dashboard = () => {
  return (
    <S.Container>
      <PageContentTitle title="Dashboard" />
      <DisplayUserWelcomeInfo
        headding="Hey, muito bem..."
        title="Sua Carteira está positiva!"
        message="Continue assim e considere investir seu saldo."
      />
    </S.Container>
  );
};

export default Dashboard;
