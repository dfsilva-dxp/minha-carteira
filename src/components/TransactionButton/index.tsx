import { RiAddCircleLine } from "react-icons/ri";

import * as S from "./styles";

const TransactionButton = () => {
  return (
    <S.Button>
      <RiAddCircleLine />
      Nova Transação
    </S.Button>
  );
};

export default TransactionButton;
