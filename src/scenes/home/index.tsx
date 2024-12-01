import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";

import ActionButton from "../../shared/ActionButton";

import HomePageText from "../../assets/Image-Logo.png";
import HomePageGraphic from "../../assets/Image-Doctor.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGEM AND MAIN HEADER */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Home);
        }}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative ">
              <div className="before:absolute md:before:-top-20 md:before:-left-20 before:z-[-1] ">
                <img src={HomePageText} alt="home-page-text"></img>
              </div>
            </div>

            <p className="mt-8 text-sm">
              Bem-vindo à MedicaVita, um espaço dedicado ao seu bem-estar. Aqui,
              oferecemos tratamentos personalizados para cuidar de você de forma
              única. Com uma equipe especializada, nosso objetivo é proporcionar
              alívio e qualidade de vida, ajudando você a alcançar o equilíbrio
              entre corpo e mente. Conheça nossos serviços e descubra como
              podemos apoiar sua jornada para uma vida mais saudável. MedicaVita
              – o cuidado que você merece.
            </p>
          </motion.div>
          {/* AÇÕES */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Agende uma consulta
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Veja mais!</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGEM */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
