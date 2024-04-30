import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { MdShoppingCart } from "react-icons/md";

const HeaderContainer = styled.header`
  background-color: #6b0504;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 60px;

  & nav {
    display: flex;
    gap: 26px;
    align-items: center;
    & h1 {
      color: white;
    }
    & ul {
      display: flex;
      gap: 16px;
      & a {
        color: white;
        display: inline-block;
        line-height: 46px;
        padding: 0 16px;
        position: relative;
        &:hover,
        &.active {
          color: #f4796b;
        }
        &::after {
          content: "";
          width: 0;
          height: 4px;
          background-color: #f4796b;
          border-radius: 2px;
          position: absolute;
          bottom: 0;
          left: 50%;
          transition-duration: 200ms;
        }
        &.active::after {
          width: 100%;
          left: 0;
        }
      }
    }
  }
  & div {
    display: flex;
    gap: 30px;

    & a {
      color: white;
      display: flex;        align-items: center;        justify-content: center;
      &:hover {
          color: #f4796b;
        }
    }
    & button {
        background-color: #f4796b;
        color: white;
        width: 46px;
        height: 46px;
        border-radius: 100%;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        cursor: pointer;
        &:hover {
          color: #f4796b;
          background-color: white;
        }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <h1>LOGO</h1>
        <ul>
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"/cardapio"}>Cardápio</NavLink>
          </li>
          <li>
            <NavLink to={"/promocoes"}>Promoções</NavLink>
          </li>
        </ul>
      </nav>
      <div className="acoes">
        <NavLink to={"entrar"}>Entrar</NavLink>
        <button>
          <MdShoppingCart />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
