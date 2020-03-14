import { css } from 'styled-components';

export const thinScrollbarCss = css`
  ::-webkit-scrollbar-button {
    display: block;
    height: 0px;
    border-radius: 0px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-button:hover {
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #efefef;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
`;
export const thinScrollbar = css`
  && {
    ${thinScrollbarCss}
  }
`;
