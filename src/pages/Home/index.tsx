import { Controller, useForm } from "react-hook-form"
import { Container, InputText, Submit, Title, Video } from "./styles"
import { NameForm } from "../../types/nameForm"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {

    const { control, handleSubmit, formState: {errors} } = useForm<NameForm>({
        defaultValues: {
            name: ''
        }
    })

    const onSubmit = async (data: NameForm) => {
        try{
            await axios.post("http://localhost:3000/send-email", data);
            toast("Presença confirmada com sucesso!", {
                onClose: () => {
                    setTimeout(() => {
                        window.location.reload();
                    }, 500);
                }
            });
        } catch (error) {
            toast("Erro ao confirmar presença.", {
                onClose: () => {
                    setTimeout(() => {
                        window.location.reload();
                    }, 500);
                }
            });        
        }
    }

    return (
        <Container>
            <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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