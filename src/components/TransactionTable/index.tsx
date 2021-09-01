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

type TransactionTableProps = {
  transactions: Transaction[];
};

const TransactionTable = ({ transactions }: TransactionTableProps) => {
  return (
    <S.Wrapper>
      <S.Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((item) => (
              <tr key={item.id}>
                <td className={item.frequency}>{item.title}</td>
                <td className={item.type}>{item.amount}</td>
                <td>{item.category}</td>
                <td>{item.create_at}</td>
              </tr>
            ))}
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};

export default TransactionTable;
