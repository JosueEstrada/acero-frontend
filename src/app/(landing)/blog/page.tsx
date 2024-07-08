export default function BlogPost() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <article className="container flex flex-col lg:flex-row justify-center items-center bg-no-repeat bg-cover bg-center h-auto w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="lg:w-2/3 p-8">
            <h1 className="mb-4 text-4xl tracking-tight font-bold text-gray-800 text-center animate-fadeIn">
              Solinox: Innovación Industrial
            </h1>
            <p className="text-lg py-6 text-[#666] animate-fadeInUp">
              Soluciones Innovadoras para Desafíos Industriales <br />
              <br />
              En Solinox nos enfrentamos a los desafíos más apremiantes de la
              industria, brindando soluciones ingeniosas y efectivas que impulsan
              el éxito de nuestros clientes. Nos especializamos en la resolución
              de problemas complejos en el ámbito industrial, desde reparaciones y
              mantenimiento hasta el diseño e implementación de infraestructuras
              críticas. Nuestro enfoque centrado en el cliente nos permite
              comprender a fondo las necesidades de cada proyecto y ofrecer
              soluciones a medida que maximizan la eficiencia operativa y
              garantizan resultados óptimos. En un mundo donde la excelencia y la
              fiabilidad son imperativas, Solinox es su socio de confianza para
              superar cualquier desafío industrial.
            </p>
            <div className="lg:w-1/1">
            <img src="/nosotros2.jpg" alt="Nosotros" className="w-full animate-fadeIn" />
           
          </div>
            <p className="text-lg py-6 text-[#666] animate-fadeInUp">
              Nuestro Enfoque para Abordar Desafíos Industriales <br />
              <br />
              En Solinox, entendemos los desafíos únicos que enfrentan nuestros
              clientes en el ámbito industrial. Nuestra misión es proporcionar
              soluciones innovadoras y eficaces que aborden estos desafíos de
              manera integral. Nos especializamos en el diseño, la ingeniería y
              la implementación de sistemas y servicios que optimicen la
              eficiencia, mejoren la productividad y garanticen la seguridad en
              entornos industriales. Desde el mantenimiento y la reparación hasta
              el desarrollo de proyectos llave en mano, nos esforzamos por
              ofrecer resultados excepcionales que impulsen el éxito y la
              competitividad de nuestros clientes en sus respectivos sectores.
            </p>
            <div className="lg:w-1/1">
            
            <img src="/nosotros1.jpg" alt="Nosotros" className="w-full mt-4 animate-fadeIn" />
          </div>
          </div>
          
          
        </article>
  
        <section className="container flex flex-col lg:flex-row justify-center items-center bg-no-repeat bg-cover bg-center h-auto w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="lg:w-1/2 p-8">
            <h2 className="mb-4 text-2xl tracking-tight font-bold text-gray-800 text-center animate-fadeIn">
              Acerca del Autor
            </h2>
            <p className="text-lg py-6 text-[#666] animate-fadeInUp">
              Nombre del Autor <br />
              Puesto o Rol <br />
              Empresa
            </p>
            <p className="text-lg py-6 text-[#666] animate-fadeInUp">
              Biografía del autor o información relevante.
            </p>
          </div>
          <div className="lg:w-1/3">
            <img
              src="/personal-solinox2-min.jpg"
              alt="Personal Solinox"
              className="border border-gray-900 animate-fadeIn"
            />
          </div>
        </section>
      </main>
    );
  }
  