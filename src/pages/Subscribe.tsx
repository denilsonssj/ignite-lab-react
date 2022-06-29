import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { Logo } from '~/components/Logo';
import { Footer } from '~/components/Footer';
import { useCreateSubscriberMutation } from '~/graphql/generated';
import codeMockupImage from '~/assets/code-mockup.png';

interface FormFields {
    name: string,
    email: string,
};

const formSchema = yup.object({
    name: yup.string()
        .required('O campo nome é obrigatório!'),
    email: yup.string()
        .email('O campo deve ser um email válido!')
        .required('O campo e-mail é obrigatório'),
  }).required();

export function Subscribe() {
    const [createSubscriber, { loading }] = useCreateSubscriberMutation();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
        resolver: yupResolver(formSchema),
    });

    async function handleSubmitForm(fields: FormFields) {
        const { name, email } = fields;
        await createSubscriber({
            variables: {
                name,
                email,
            },
        });
        navigate('/event');
    }

    return (
        <div className={`min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center`}>
            <div className="w-full max-w-[1110px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com {' '}
                        <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das
                        tecnologias mais utilizadas e com alta demanda para acessar
                        as melhores oportunidades do mercado
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl m-6 block">Inscreva-se gratuitamente</strong>
                    <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit(handleSubmitForm)}>
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                            defaultValue=""
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu e-mail"
                            defaultValue=""
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garanta minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src={codeMockupImage} className="mt-10" alt="Mockup" />
            <Footer />
        </div>
    );
}