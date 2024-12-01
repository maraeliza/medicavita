import {
  HeartIcon,
  BuildingLibraryIcon,
  ShieldExclamationIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from "../../assets/Image-DoctorPacient.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Cuidados Personalizados",
    description:
      "Oferecemos tratamentos individualizados para atender às suas necessidades específicas, com uma abordagem focada no seu bem-estar e recuperação.",
  },
  {
    icon: <BuildingLibraryIcon className="h-6 w-6" />,
    title: "Instalações de Alta Qualidade",
    description:
      "Ambientes modernos e totalmente equipados para garantir o máximo conforto e eficiência no seu atendimento, proporcionando uma experiência única.",
  },

  {
    icon: <ShieldExclamationIcon className="h-6 w-6" />,
    title: "Compromisso com a Segurança",
    description:
      "Adotamos rigorosos protocolos de segurança e higiene para garantir que sua saúde e bem-estar estejam sempre protegidos durante o tratamento.",
  },
  {
    icon: <ClockIcon className="h-6 w-6" />,
    title: "Atendimento Ágil e Eficiente",
    description:
      "Com um atendimento rápido e eficaz, buscamos oferecer a você a melhor experiência, com agilidade no agendamento e no cuidado contínuo.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Benefits);
        }}
      >
        {/* HEADER*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>MAIS DO QUE SÓ UMA CLÍNICA</HText>
          <p className="md:my-5 text-sm ">
            Oferecemos cuidados de saúde excepcionais, com profissionais
            experientes e tratamentos personalizados para ajudar você a alcançar
            o seu melhor estado de bem-estar. Cuidamos verdadeiramente de cada
            paciente, proporcionando um atendimento acolhedor e eficaz.
          </p>
        </motion.div>

        {/* BENEFICIOS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="md:flex items-center justify-between gap-8 mt-5"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/** IMAGEM E DESCRICAO*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/** IMAGEM */}
          <img
            className="mx-auto w-1/2"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/** DESCRICAO */}
          <div>
            {/** TITULO */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Milhares de pacientes felizes{" "}
                    <span className="text-primary-500">
                      recebendo cuidados de saúde de excelência
                    </span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/** DESCRICAO */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 ">
                Milhares de pacientes satisfeitos já estão alcançando uma saúde
                plena conosco! Aqui, você encontra profissionais qualificados,
                um ambiente acolhedor e um atendimento personalizado, tudo
                pensado para oferecer resultados reais e bem-estar duradouro.
              </p>
              <p className="mb-5 ">
                Oferecemos uma ampla gama de tratamentos, desde terapias
                relaxantes até cuidados intensivos, sempre focados nas suas
                necessidades específicas. Com o suporte de especialistas
                dedicados, você será guiado a atingir a melhor versão de sua
                saúde, enquanto se conecta com uma equipe que valoriza o seu
                bem-estar.
              </p>
            </motion.div>
            {/** BOTAO */}
            <div className="mt-16">
              <ActionButton setSelectedPage={setSelectedPage}>
                Agende uma consulta online!
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
