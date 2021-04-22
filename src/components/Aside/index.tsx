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
          <li>
            <a href="#" className="active">
              <TiChartAreaOutline data-tip data-for="dashboard" />
              <ReactTooltip
                id="dashboard"
                place="right"
                type="dark"
                effect="float"
              >
                Dashboard
              </ReactTooltip>
            </a>
          </li>
          <li>
            <a href="#">
              <MdAttachMoney data-tip data-for="register" />
              <ReactTooltip
                id="register"
                place="right"
                type="dark"
                effect="float"
              >
                Novo Regístro
              </ReactTooltip>
            </a>
          </li>
          <li>
            <a href="#">
              <TiArrowUpOutline data-tip data-for="deposit" />
              <ReactTooltip
                id="deposit"
                place="right"
                type="dark"
                effect="float"
              >
                Entradas
              </ReactTooltip>
            </a>
          </li>
          <li>
            <a href="#">
              <TiArrowDownOutline data-tip data-for="withdraw" />
              <ReactTooltip
                id="withdraw"
                place="right"
                type="dark"
                effect="float"
              >
                Saídas
              </ReactTooltip>
            </a>
          </li>
          <li>
            <a href="#">
              <TiPower data-tip data-for="logout" />
              <ReactTooltip
                id="logout"
                place="right"
                type="dark"
                effect="float"
              >
                Logout
              </ReactTooltip>
            </a>
          </li>
        </ul>
      </nav>
    </Sidebar>
  );
}
