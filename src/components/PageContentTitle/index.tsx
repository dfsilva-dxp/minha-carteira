import * as S from "./styles";

type PageContentTitleProps = {
  title: string;
};

const PageContentTitle = ({ title }: PageContentTitleProps) => {
  return (
    <S.Title>
      <h2>{title}</h2>
    </S.Title>
  );
};

export default PageContentTitle;
