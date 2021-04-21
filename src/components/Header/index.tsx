import { TiUserOutline } from "react-icons/ti";
import { Toggle } from "../Toggle";

import { Header as HeaderContainer } from "./styled";

export function Header() {
  return (
    <HeaderContainer>
      <Toggle />
      <div className="profile">
        <div className="avatar">
          <TiUserOutline />
        </div>
        <p>Daniel Silva</p>
      </div>
    </HeaderContainer>
  );
}
