import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderComponent = styled.header `
    header{
        background-color: red;
        padding: 7px 60px;
        display: flex;
        gap: 10px;

    }
`;

const Header = () => {
    
           
    return (
        <HeaderComponent>
            <nav>
                <h1>LOGO</h1>
                <ul>
                    <li>
                        <NavLink to={'/'}>Inicio</NavLink>
                    </li>
                    <li >
                        <NavLink to={"/cardapio"}>Cardápio</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/promocoes"}>Promoções</NavLink>
                    </li>
                </ul>
            </nav>    
        </HeaderComponent>
    );
}
 
export default Header;