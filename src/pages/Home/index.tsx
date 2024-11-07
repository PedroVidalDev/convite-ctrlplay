import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { Controller, useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"

import { NameForm } from "../../types/nameForm"

import { Container, InputText, Submit, Title, VideoPlayer } from "./styles"

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
            
            <VideoPlayer controls width="90%" height="90%">
                <source src={`${process.env.PUBLIC_URL}/video/video.mp4`} type="video/mp4" />
            </VideoPlayer>
            
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