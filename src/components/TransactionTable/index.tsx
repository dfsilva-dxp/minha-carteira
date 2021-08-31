import * as S from "./styles";

const TransactionTable = () => {
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
          <tr>
            <td className="eventual">IPVA</td>
            <td className="deposit">R$2500,00</td>
            <td>Carro</td>
            <td>31/08/2021</td>
          </tr>
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};

export default TransactionTable;
