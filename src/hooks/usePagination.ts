import { useEffect, useState } from "react";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  frequency: string;
  create_at: string;
};

export const usePagination = (transactions: Transaction[]) => {
  const [currentList, setCurrentList] = useState<Transaction[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  function handleSetCurrentPage(pageNumber: number) {
    if (pageNumber < 1 || pageNumber > numberOfPages) {
      return;
    }

    const newStartValue = (pageNumber - 1) * itemsPerPage;
    const newEndValue =
      newStartValue + 5 < transactions.length - 1
        ? newStartValue + itemsPerPage
        : transactions.length;

    setCurrentList(transactions.slice(newStartValue, newEndValue));
    setStart(newStartValue);
    setEnd(newEndValue);
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    const result = transactions.slice(0, itemsPerPage);
    setCurrentList(result);
  }, [transactions, itemsPerPage]);

  useEffect(() => {
    const value = Math.ceil(transactions.length / itemsPerPage);
    setNumberOfPages(value);
  }, [itemsPerPage, transactions]);

  useEffect(() => {
    const result =
      start + itemsPerPage < transactions.length
        ? start + itemsPerPage
        : transactions.length;

    setEnd(result);
  }, [start, transactions, itemsPerPage]);

  return {
    currentList,
    currentPage,
    end,
    itemsPerPage,
    numberOfPages,
    start,
    handleSetCurrentPage,
    setItemsPerPage,
  };
};
