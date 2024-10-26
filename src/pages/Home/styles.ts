import styled, { css } from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.PRIMARY_MAIN};
`

export const Title = styled.h1`
    font-size: 64px;
    font-weight: 800;
    color: ${({theme}) => theme.COLORS.PRIMARY_LIGHTER}
`

export const Video = styled.div`
    width: 50%;
    height: 50%;

    border-radius: 20px;
    border: 0;

    background-color: ${({theme}) => theme.COLORS.NEUTRAL_50};
`

export const InputText = styled.input`
    width: 40%;
    height: 50px;
    border-radius: 10px;
    border: 0;
    outline: none;
    font-size: 16px;
    padding: 15px;

    &:focus-visible{
        outline: 2px solid ${({theme}) => theme.COLORS.SECUNDARY_MAIN}
    }
`

export const Submit = styled.button`
    width: 30%;
    height: 50px;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    transition: 0.5s;
    ${({theme}) => css`
        background-color: ${theme.COLORS.SECUNDARY_MAIN};
        color: ${theme.COLORS.NEUTRAL_50};
    `}
    
    &:hover{
        ${({theme}) => css`
            background-color: ${theme.COLORS.PRIMARY_LIGHT};
        `}
        transform: scale(110%);
    }

`