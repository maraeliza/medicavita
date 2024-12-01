import { useForm } from "react-hook-form";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "../../assets/Image-Pacient-Happy.png";
import HText from "../../shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">AGENDE SUA CONSULTA AGORA </span>{" "}
            E CUIDE DA SUA SAÚDE
          </HText>
          <p className="my-5">
            Dê o primeiro passo para uma vida mais saudável! Preencha o
            formulário abaixo e inicie sua jornada de cuidados personalizados
            com a nossa equipe de especialistas. Não perca tempo, agende agora e
            comece a transformação do seu bem-estar!
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
        <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full h-4/5">
              <img
                className="w-full "
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/f4727b81068c27e03a217537a83c7810"
            >
              <input
                className={inputStyles}
                required
                type="text"
                placeholder="Seu Nome"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type == "required" && "Este campo é obrigatório"}
                  {errors.name.type == "maxLength" &&
                    "Limite de caracteres atingido. O máximo é 100 caracteres permitido."}
                </p>
              )}
              <input
                className={inputStyles}
                type="email"
                required
                placeholder="Seu E-mail"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type == "required" && "Este campo é obrigatório"}
                  {errors.name.type == "pattern" &&
                    "Endereço de e-mail inválido"}
                </p>
              )}
              <textarea
                placeholder="Sua Mensagem"
                required
                rows={4}
                cols={50}
                className={inputStyles}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type == "required" && "Este campo é obrigatório"}
                  {errors.name.type == "maxLength" &&
                    "Limite de caracteres atingido. O máximo é 100 caracteres permitido."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                ENVIAR
              </button>
            </form>
          </motion.div>

         
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
