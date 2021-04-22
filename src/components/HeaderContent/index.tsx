import { HeaderContent as Header } from "./styled";

import wallet from "../../assets/wallet.svg";

export function HeaderContent() {
  return (
    <Header>
      <div className="box">
        <header>
          <h4>Hey, vamos lá</h4>
        </header>
        <div>
          <span>
            <h1>Lorem ipsum dolor sit amet, consectetur adip</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Itaque velit, numquam eos
              tempore fuga facilis tenetur neque reiciendis! Incidunt,
              perferendis? Deleniti provident eveniet illum accusantium,
              dignissimos molestiae culpa ea eligendi.
            </p>
          </span>
          <span>
            <img src={wallet} alt="Wallet" />
          </span>
        </div>
      </div>
      <div className="box">
        <header>
          <h4>Gráfico</h4>
        </header>
      </div>
    </Header>
  );
}
