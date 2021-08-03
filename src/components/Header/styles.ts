import styled from 'styled-components';

export const Container = styled.header `
    background: var(--blue);
`

export const Content = styled.div `
    max-width: 1120px;                          //largura maxima;
    margin: 0 auto;                             // largura maxima centralizada;

    padding: 2rem 1rem 12rem;                      // 1rem: 16px nas laterais, e 10rem: 160px em baixo;
    display: flex;
    align-items: center;                        //Alinhando a imagem com o botão na vertical;
    justify-content: space-between;             //Espaço entre a logo e o botão; 

    button {
        font-size: 1rem;                          //
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
    `