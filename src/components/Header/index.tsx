import Avatar from "../Avatar";
import TransactionButton from "../TransactionButton";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <TransactionButton />
      <S.Wrap>
        <Avatar name="Daniel Silva" />
      </S.Wrap>
    </S.Header>
  );
};

export default Header;
