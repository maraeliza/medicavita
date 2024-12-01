import Logo from "../../assets/Image-Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="h-16" />
          <p className="my-5">
            Na <b>MedicaVita</b>, nossa missão é oferecer cuidados
            personalizados para promover a sua saúde e bem-estar. Estamos
            comprometidos em ajudar você a alcançar uma vida plena e saudável.
          </p>
          <p>©MedicaVita Todos os Direitos Reservados</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            <a href="#" className="my-5">
              Sobre nós
            </a>
          </p>
          <p className="my-5">
            <a href="#">Nossos serviços</a>
          </p>
          <p className="my-5">
            <a href="#">Blog e Dicas de Saúde</a>
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Entre em Contato</h4>
          <p className="my-5">
            Entre em contato conosco para mais informações sobre nossos
            serviços, agendamentos e consultas.
          </p>
          <a href="#">+55 (34) 99999-0000</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
