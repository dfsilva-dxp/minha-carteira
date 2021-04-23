import { TiPlus } from "react-icons/ti";

import { Button } from "./styled";

export function NewTransactionButton() {
  return (
    <Button>
      <TiPlus />
      <span>Nova Transação</span>
    </Button>
  );
}
