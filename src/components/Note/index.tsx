import React from 'react'
import * as S from './styled'
import {edit, remove} from "../../assets/icons";


interface NoteProps{
  name: string
}

function Note ({name}: NoteProps): JSX.Element {
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
                {name}
                <S.ContainerIcon>
                    <S.Icon src={edit}/>
                    <S.Icon src={remove}/>
                </S.ContainerIcon>
              </S.StickyContent>
            </S.Sticky>
          </S.StickyOuter>
        </S.StickyContainer>
      );
    };
export default Note
