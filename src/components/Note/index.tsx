import React from "react";
import * as S from "./styled";
import { edit, remove, close } from "../../assets/icons";

interface NoteProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  closeIcon?: boolean;
  onClose?: () => void;
  onRemove?: () => void;
  onEdit?: () => void;
}

function Note({
  children,
  closeIcon,
  onClose,
  onRemove,
  onEdit,
}: NoteProps): JSX.Element {
  return (
    <S.StickyContainer>
      <S.StickyOuter>
        <S.Sticky>
          <svg width="0" height="0">
            <defs>
              <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                <path
                  d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                  stroke-linejoin="round"
                  stroke-linecap="square"
                />
              </clipPath>
            </defs>
          </svg>
          <S.StickyContent>
            {children}
            <S.ContainerIcon>
              {closeIcon ? (
                <S.Icon src={close} onClick={onClose} />
              ) : (
                <>
                  <S.Icon src={edit} onClick={onEdit} />
                  <S.Icon src={remove} onClick={onRemove} />
                </>
              )}
            </S.ContainerIcon>
          </S.StickyContent>
        </S.Sticky>
      </S.StickyOuter>
    </S.StickyContainer>
  );
}
export default Note;
