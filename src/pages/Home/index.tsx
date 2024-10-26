import { Container, InputText, Submit, Title, Video } from "./styles"

export const Home = () => {
    return (
        <Container>
            <Title> Veja o vídeo! </Title>
            <Video />
            <InputText placeholder="Digite seu nome..." required/>
            <Submit> Confirmar presença! </Submit>
        </Container>
    )
}