import { RiH2 } from "react-icons/ri";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const FooterContainer = styled.footer`
background-color: black;
display: flex;
justify-content: space-between;
align-items: center;
padding: 7px 60px;
color: white;
height: 200px;

& div h2{
font-family: "Inter", sans-serif;
font-weight: 700;
line-height: 36.31px;
text-align: left;
width: 86px;
height: 36px;
margin-bottom: 20px;
}

& div p{
font-family: "Inter", sans-serif;
font-size: 14px;
font-weight: 700;
line-height: 16.94px;
text-align: left;
color: #FFFFFFB2;
width: 250px;
height: 54px;
margin-bottom: 20px;
}
& button{
width: 40px;
height: 40px;
border-radius: 100%;
margin-right: 20px;
font-size: 1.5em;
padding-top: 5px;
color: #ffffffda;
cursor: pointer;
}
& button.Fa{
background: #0078F6;
}
& button.Inst{
    background: linear-gradient(180deg, #0E41DD, #9632C7, #E22CAB, #FF4C31, #FFA816, #FFC74B 100%);
}
& button.X{
    background: #009CF3;
}
& button.You{
    background: #FA1A48;
}
& div h3{
font-family: "Inter", sans-serif;
font-size: 24px;
font-weight: 700;
line-height: 29.05px;
text-align: left;
margin-bottom: 20px;
margin-top: 50px;

}
& div.contato p{
font-family: "Inter", sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 19.36px;
text-align: left;
width: 200px;
}



`;

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <h2>LOGO</h2>
                <p>Horários: <br />
                    segunda a sexta: 18:00 às 23:30
                    sábado e domingo: 11:30 às 00:30</p>
                <button className="Fa"><FaFacebook /></button>
                <button className="Inst"><FaInstagram /></button>
                <button className="X"><FaSquareXTwitter /></button>
                <button className="You"><FaYoutube /></button>
            </div>
            <div id="map">MAPA</div>
            <div className="contato">
                <h3>Contatos</h3>
                <p>R. Des. Lauro Nogueira, 1500 - Papicu, Fortaleza - CE, 60175-055</p>
                <p>99 99999-9999</p>

            </div>
        </FooterContainer>
    );
}
 
export default Footer;