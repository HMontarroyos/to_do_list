import * as S from "./styled";

interface TextLinkProps {
  name: string;
  color: string;
  onClick: () => void;
}

function TextLink({ name, color, onClick }: TextLinkProps): JSX.Element {
  return (
    <S.Text onClick={onClick} color={color}>
      {name}
    </S.Text>
  );
}

export default TextLink;
