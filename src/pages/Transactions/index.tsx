import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { useTransaction } from "../../hooks/useTransaction";

import PageContentTitle from "../../components/PageContentTitle";
import RadioButtonTransactionType from "../../components/RadioButtonTransactionType";
import TransactionTable from "../../components/TransactionTable";

import * as S from "./styles";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  frequency: string;
  create_at: string;
};

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { type } = useParams();
  const { filterTransactionsByType } = useTransaction();

  const transactionType = type === "saidas" ? "withdraw" : "deposit";

  useEffect(() => {
    const response = filterTransactionsByType(transactionType);

    setTransactions(response);
  }, [filterTransactionsByType, transactionType]);

  return (
    <S.Container>
      <PageContentTitle title={type} />
      <RadioButtonTransactionType />
      <TransactionTable transactions={transactions} />
    </S.Container>
  );
};

export default Transactions;
