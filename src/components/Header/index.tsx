import { TiUserOutline } from "react-icons/ti";
import { NewTransactionButton } from "../NewTransactionButton";
import { Toggle } from "../Toggle";

import { Header as HeaderContainer } from "./styled";

export function Header() {
  return (
    <HeaderContainer>
      <Toggle />
      <div className="wrap">
        <NewTransactionButton />

        <div className="profile">
          <div className="avatar">
            <TiUserOutline />
          </div>
          <p>Daniel Silva</p>
        </div>
      </div>
    </HeaderContainer>
  );
}
