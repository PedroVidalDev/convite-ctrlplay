import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;

    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.PRIMARY_MAIN};
`