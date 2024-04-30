import { useEffect, useState } from "react";
import styled from "styled-components";

const PizzasContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between; 
  gap: 20px;
`;

const PizzaCard = styled.div`
width: 250px;
height: 406px;
padding: 0 10px;
border: 1px transparent black;
border-radius: 10px;
box-shadow: 5px 5px 10px #0000005b;
position: relative;
  & li img{
    max-width: 230px;
    max-height: 230px;
    display: flex;
    margin: auto;
    margin-bottom: 30px;
    padding-top: 10px;
}

  & li.nome {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.36px;
    text-align: left;
    color: #6b0504;
    margin-bottom: 20px;
  } 

  & li.descricao {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.94px;
    text-align: left;
    color: #666666;

  }

  & li.preco {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.36px;
    text-align: left;
    color: #f44e3f;
    margin-top: 20px;
    
  }
`;

const Button = styled.button`
  background-color: #001514;
  color: white;
  width: 99px;
  height: 40px;
  border-radius: 5px;
  position: absolute;
  top: 355px;
  left: 190px;
  transform: translateX(-50%);
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.34px;
  cursor: pointer;
  &:hover{
    color: #131313;
    background-color: #f44e3f;
  }
`;


const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  async function buscarSabores() {
    const request = await fetch("http://localhost:3000/api");
    const response = await request.json();
    setPizzas(response);
  }

  useEffect(() => {
    buscarSabores();
  }, []);

  return (
    <>
      <h1>Pizzas em destaque</h1>
      <PizzasContainer>
      {pizzas &&
        pizzas.map((p) => (
        <PizzaCard>     
            <ul>
                <li><img src={p.imagem} alt={p.nome} /></li>
                <li className="nome">{p.nome}</li>
                <li className="descricao">{p.descricao}</li>
                <li className="preco">{p.preco}</li>
                <li>{p.promocao}</li>                
            </ul>
            <Button>Adicionar</Button>
          </PizzaCard>
        ))}
        </PizzasContainer>
    </>
  );
};

export default Home;
