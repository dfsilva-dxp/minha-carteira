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
  const [transactionsFilter, setTransactionsFilter] = useState<Transaction[]>(
    []
  );
  const { type } = useParams();
  const { transactions } = useTransaction();

  const transactionType = type === "saidas" ? "withdraw" : "deposit";

  useEffect(() => {
    const response = transactions.filter(
      (item) => item.type === transactionType
    );

    setTransactionsFilter(response);
  }, [transactionType, transactions]);

  return (
    <S.Container>
      <PageContentTitle title={type} />
      <RadioButtonTransactionType />
      <TransactionTable transactions={transactionsFilter} />
    </S.Container>
  );
};

export default Transactions;
