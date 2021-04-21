import { MdAttachMoney } from "react-icons/md";
import {
  TiChartAreaOutline,
  TiArrowUpOutline,
  TiArrowDownOutline,
  TiPower,
} from "react-icons/ti";
import ReactTooltip from "react-tooltip";

import { Aside as Sidebar } from "./styled";
import logo from "../../assets/balance.svg";

export function Aside() {
  return (
    <Sidebar>
      <div className="logo">
        <img src={logo} alt="Logotipo Minha Carteira" />
      </div>
      <nav>
        <ul>
          <li className="active">
            <TiChartAreaOutline data-tip data-for="dashboard" />
            <ReactTooltip
              id="dashboard"
              place="right"
              type="dark"
              effect="float"
            >
              Dashboard
            </ReactTooltip>
          </li>
          <li>
            <MdAttachMoney data-tip data-for="register" />
            <ReactTooltip
              id="register"
              place="right"
              type="dark"
              effect="float"
            >
              Novo Regístro
            </ReactTooltip>
          </li>
          <li>
            <TiArrowUpOutline data-tip data-for="deposit" />
            <ReactTooltip id="deposit" place="right" type="dark" effect="float">
              Entradas
            </ReactTooltip>
          </li>
          <li>
            <TiArrowDownOutline data-tip data-for="withdraw" />
            <ReactTooltip
              id="withdraw"
              place="right"
              type="dark"
              effect="float"
            >
              Saídas
            </ReactTooltip>
          </li>

          <li>
            <TiPower data-tip data-for="logout" />
            <ReactTooltip id="logout" place="right" type="dark" effect="float">
              Logout
            </ReactTooltip>
          </li>
        </ul>
      </nav>
    </Sidebar>
  );
}
