import React from "react";
import * as S from "./styled";

interface NotebookSheetProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function NotebookSheet({ children }: NotebookSheetProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  );
}

export default NotebookSheet;
