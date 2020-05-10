import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  position: fixed;
  height: 100px;
  top: 0;
  left: 0;
  z-index: 99;
  padding:  1rem 4rem;

  .c-header__secondary {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .c-header__foreground {
    position: relative;
    z-index: 50;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .c-header__filter {
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    @supports (backdrop-filter: blur(10px)) {
      backdrop-filter: blur(10px);
      background: none;
    }
  }

  h1 {
    color: #00b5ad;
    border: solid 3px #00b5ad;
    padding: 1rem;
  }
`