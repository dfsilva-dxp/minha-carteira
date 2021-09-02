import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

type TransactionContextProviderProps = {
  children: ReactNode;
};

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  frequency: string;
  create_at: string;
};

type TransactionContextData = {
  transactions: Transaction[];
  filterTransactionsByType: (type: string) => Transaction[];
};

export const TransactionContext = createContext({} as TransactionContextData);

export default function TransactionContextProvider({
  children,
}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api
        .get("transactions")
        .then((response) => response);

      const formatTransactionData = data.map((item: Transaction) => {
        return {
          ...item,
          amount: item.amount.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          create_at: new Date(item.create_at).toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
        };
      });
      setTransactions(formatTransactionData);
    })();
  }, []);

  function filterTransactionsByType(type: string) {
    const response = transactions.filter((item) => item.type === type);
    return response;
  }

  return (
    <TransactionContext.Provider
      value={{ transactions, filterTransactionsByType }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
