import { useParams } from "react-router";

import PageContentTitle from "../../components/PageContentTitle";
import RadioButtonTransactionType from "../../components/RadioButtonTransactionType";
import TransactionTable from "../../components/TransactionTable";

import * as S from "./styles";

const Transactions = () => {
  const { type } = useParams();

  return (
    <S.Container>
      <PageContentTitle title={type} />
      <RadioButtonTransactionType />
      <TransactionTable />
    </S.Container>
  );
};

export default Transactions;
