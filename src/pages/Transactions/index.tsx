import PageContentTitle from "../../components/PageContentTitle";
import RadioButtonTransactionType from "../../components/RadioButtonTransactionType";
import TransactionTable from "../../components/TransactionTable";

import * as S from "./styles";

const Transactions = () => {
  return (
    <S.Container>
      <PageContentTitle title="Transaction" />
      <RadioButtonTransactionType />
      <TransactionTable />
    </S.Container>
  );
};

export default Transactions;
