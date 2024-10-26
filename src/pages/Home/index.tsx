import { Controller, useForm } from "react-hook-form"
import { Container, InputText, Submit, Title, Video } from "./styles"
import { NameForm } from "../../types/nameForm"

export const Home = () => {

    const { control, handleSubmit, formState: {errors} } = useForm<NameForm>({
        defaultValues: {
            name: ''
        }
    })

    const onSubmit = (data: NameForm) => {
        console.log(data)
    }

    return (
        <Container>
            <Title> Veja o vídeo! </Title>
            <Video />
            <Controller
                control={control}
                name="name"
                rules={{
                    required: 'Campo necessário.'
                }}
                render={({ field: {onChange, value} }) => (
                    <InputText placeholder="Digite seu nome..." onChange={onChange} required/>
                )}
            />
            <Submit onClick={handleSubmit(onSubmit)}> Confirmar presença! </Submit>
        </Container>
    )
}