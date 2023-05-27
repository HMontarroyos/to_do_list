import * as S from "./styled";
import { loading } from "../../assets/images";

function Loading(): JSX.Element {
  return (
    <S.Container>
      <S.Image src={loading} alt={"loading"} />
    </S.Container>
  );
}

export default Loading;
