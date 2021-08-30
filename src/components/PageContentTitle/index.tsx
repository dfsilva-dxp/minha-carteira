import Filter from "../Filter";
import * as S from "./styles";

type PageContentTitleProps = {
  title: string;
};

const PageContentTitle = ({ title }: PageContentTitleProps) => {
  return (
    <S.Wapper>
      <h2>{title}</h2>
      <Filter />
    </S.Wapper>
  );
};

export default PageContentTitle;
