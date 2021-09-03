import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import * as S from "./styles";

type PaginationProps = {
  numberOfPages: number;
  totalItems: number;
  currentPage: number;
  start: number;
  end: number;
  setCurrentPage: (page: number) => void;
};

const Pagination = ({
  numberOfPages,
  totalItems,
  setCurrentPage,
  currentPage,
  start,
  end,
}: PaginationProps) => {
  return (
    <S.Footer>
      <S.WrapButton>
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <RiArrowLeftSLine />
        </button>
        <button
          type="button"
          disabled={currentPage === numberOfPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <RiArrowRightSLine />
        </button>
      </S.WrapButton>
      <p>
        Linhas {start + 1} à {end} de {totalItems}
      </p>
    </S.Footer>
  );
};

export default Pagination;
