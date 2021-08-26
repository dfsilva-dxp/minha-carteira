import Avatar from "../Avatar";
import ToggleButtonTheme from "../ToggleButtonTheme";
import TransactionButton from "../TransactionButton";

import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <TransactionButton />
      <S.Wrap>
        <ToggleButtonTheme />
        <Avatar name="Daniel Silva" />
      </S.Wrap>
    </S.Header>
  );
};

export default Header;
