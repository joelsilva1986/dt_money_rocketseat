import styled from "styled-components";

export const Container = styled.div `
    display: grid;                                  //Para usar um display ao lado do outro;
    grid-template-columns: repeat(3, 1fr);          //Significa usar 3 colunas de tamanhos iguais;
    gap: 2rem;                                      //É o espaçamento de cada um dos itens do grid;
    margin-top: -10rem;

    div {
        background: var(--shape);                   //cor de fundo dos grids;
        padding: 1.5rem 2rem;                       //Preenchimento dos grids;
        border-radius: 0.25rem;                     //Arredondamento das bordas;  
        color: var(--text-title);                   //Alterar a cor do texto;

        header {
        display: flex;  
        align-items: center;
        justify-content:  space-between;
        }

        strong {
            display: block;                             //Faz o strong se comportar como uma div, e assim aplicar o margin-top;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
        &.highLight-background{
            background: var(--green);
            color: #FFF;
        }
    }
`;