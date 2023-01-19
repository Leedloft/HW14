import { yupResolver } from '@hookform/resolvers/yup';
import {useForm, FormProvider} from "react-hook-form";
import * as yup from 'yup'
import SendButton from "./button";

const schema = yup.object({
    login: yup.string().min(5).max(10).required(),
    password: yup.number().positive().integer().typeError('pass should be number').required(),
}).required();

const FormModule = () => {
    const methods = useForm ({
        resolver: yupResolver(schema)
    })
    const { register, formState:{ errors } } = methods;
    // console.log(errors, 'errors')
    return (
        <FormProvider {...methods}>
            <input {...register("login")} type={"text"} />
            <p>{errors.login?.message}</p>

            <input {...register("password")} />
            <p>{errors.password?.message}</p>
            <SendButton/>
        </FormProvider>
    );
};

export default FormModule;