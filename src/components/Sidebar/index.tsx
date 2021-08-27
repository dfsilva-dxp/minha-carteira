import ReactTooltip from "react-tooltip";
import {
  TiArrowBackOutline,
  TiArrowDown,
  TiArrowUp,
  TiChartBarOutline,
} from "react-icons/ti";

import * as S from "./styles";

const Sidebar = () => {
  return (
    <S.Aside>
      <S.Logo>
        <img
          src="./images/logo.svg"
          alt="Imagem de uma carteira com o simbolo de moeda"
        />
      </S.Logo>
      <S.Nav>
        <ul>
          <li>
            <a href="dashboard" data-tip data-for="dashboard">
              <TiChartBarOutline />
              <ReactTooltip
                id="dashboard"
                place="right"
                type="dark"
                effect="solid"
              >
                <span>Dashboard</span>
              </ReactTooltip>
            </a>
          </li>
          <li>
            <a href="transacoes/entradas" data-tip data-for="entradas">
              <TiArrowUp />
              <ReactTooltip
                id="entradas"
                place="right"
                type="dark"
                effect="solid"
              >
                <span>Entradas</span>
              </ReactTooltip>
            </a>
          </li>
          <li>
            <a href="transacoes/saidas" data-tip data-for="saidas">
              <TiArrowDown />
              <ReactTooltip
                id="saidas"
                place="right"
                type="dark"
                effect="solid"
              >
                <span>Saídas</span>
              </ReactTooltip>
            </a>
          </li>
          <li>
            <a href="/" data-tip data-for="logout">
              <TiArrowBackOutline />
              <ReactTooltip
                id="logout"
                place="right"
                type="dark"
                effect="solid"
              >
                <span>Logout</span>
              </ReactTooltip>
            </a>
          </li>
        </ul>
      </S.Nav>
    </S.Aside>
  );
};

export default Sidebar;
