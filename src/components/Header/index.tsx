import * as S from "./styled";
import { pin } from "../../assets/icons";

function Header(): JSX.Element {
  return (
    <>
      <S.Menu height="50px">
        <S.ImageContainer>
          <S.Image src={pin} />
          <S.Image src={pin} />
        </S.ImageContainer>
        <S.NavItems>
          <S.LinkRedirect to={"/"} data-item={"Inicio"}>
            <li>Inicio</li>
          </S.LinkRedirect>
          <S.LinkRedirect to={"/about"} data-item={"Sobre"}>
            <li>Sobre</li>
          </S.LinkRedirect>
        </S.NavItems>
      </S.Menu>
    </>
  );
}

export default Header;
