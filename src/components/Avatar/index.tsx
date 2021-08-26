import { getFirstLetterOfName } from "../../utils/getFirstLetterOfName";

import * as S from "./styles";

type AvatarProps = {
  name: string;
};

const Avatar = ({ name }: AvatarProps) => {
  const letters = getFirstLetterOfName(name);

  return (
    <S.Wrapper>
      <S.Avatar>{letters}</S.Avatar>
      <span>{name}</span>
    </S.Wrapper>
  );
};

export default Avatar;
