import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
    background-color: #6B0504;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 60px;

    & nav{
        display: flex;
        gap: 26px;
        align-items: center;
        & h1{
            color: white;
        }
        & ul{
            display: flex;
            gap: 16px;
            & a{
                color: white;
                display: inline-block;
                line-height: 46px;
                padding: 0 16px;
                position: relative;
                &:hover, &.active{
                    color: #F4796B;
                }
                &::after{
                    content: "";
                    width: 0;
                    height: 4px;
                    background-color: #F4796B;
                    border-radius: 2px;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transition-duration: 200ms;

                }
                &.active::after{
                    width: 100%;
                    left: 0;
                }
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
                        <NavLink to={'/'}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/cardapio'}>Cardápio</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/promocoes'}>Promoções</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="acoes">
                <NavLink to={'entrar'}>Entrar</NavLink>
                <button>Carrinho</button>
            </div>
        </HeaderContainer>
    );
}
 
export default Header;