import { BiMailSend } from "react-icons/bi"
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState } from "react";

type FormData = {
  nome: string;
  email: string;
  msg: string;
};

export default function EmailForm() {

  const [send, setSend] = useState<boolean>(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    emailjs.send('service_tt3ryvb', 'template_gnv8rl7', data, 'O99pmuujsLP9-RXR1')
      .then(function (response) {
        setSend(true)
      }, function (error) {
        console.log('FAILED...', error);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label
          htmlFor="large-input"
          className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nome
        </label>
        <input  {...register("nome", { required: true, maxLength: 100 })}
          type="text"
          id="large-input"
          placeholder="Nome"
          className="block w-full p-4 text-white text-sm  outline-none border border-[#585d65] rounded-3xl bg-back sm:text-md focus:ring-white focus:border-white"
        />
        {errors.nome && <p className="p-4 text-red-400 text-xs mb-0">Digite nome para contato</p>}
      </div>

      <div className="mb-6">
        <label
          htmlFor="large-input"
          className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white"
        >
          E-mail
        </label>
        <input {...register("email")}
          type="text"
          id="large-input"
          placeholder="exemplo@gmail.com"
          className="block w-full p-4 text-white text-sm  outline-none border border-[#585d65] rounded-3xl bg-back sm:text-md focus:ring-white focus:border-white"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white"
        >
          Sua mensagem
        </label>
        <textarea
          {...register("msg")}
          id="message"
          rows={4}
          className="block p-3 w-full text-sm outline-none text-white rounded-3xl border  border-[#585d65]  bg-back sm:text-md focus:ring-white focus:border-white"
          placeholder="Escreva aqui"
        ></textarea>
        {errors.msg && <p className="p-4 text-red-400 text-xs mb-0">Digite uma mensagem</p>}
      </div>

      <div>
        <button className="button" type="submit">
          <BiMailSend className="" /><span className="relative">Enviar Mensagem</span>
        </button>
      </div>
    </form>
  )
}