import { Teacher } from "@/components/Teacher";
import { TitleSection } from "@/components/TitleSection";

export default function Teachers() {
  return (
    <main className="flex-1">
      <section className="mt-28 mb-14">
        <div className="max-w-[1200px] h-full px-4 md:mx-auto flex flex-col items-center gap-6">
          <TitleSection title="Corpo" span="Docente" />

          <div className="flex flex-col gap-8">
            <p>Esses são todos os docentes presentes no Curso. Clique no card para acessar o currículo lattes de cada docente</p>

            <div className="grid grid-cols-1 grid-flow-row gap-10 lg:grid-cols-2 items-center justify-center mt-6">
              <Teacher
                name="Demetrio Gomes Mestre"
                level="Doutorado"
                area="Computação"
                email="demetrio.mestre@servidor.uepb.edu.br"
                image="/demetrio.png"
                curriculum="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4320703H3"
              />

              <Teacher
                name="Gustavo Cunha Bezerra"
                level="Doutorado"
                area="Filosofia"
                email="gustavocunha@servidor.uepb.edu.br"
                image="/gustavo.png"
                curriculum="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4769480E7"
              />

              <Teacher
                name="Janderson Jason Barbosa Aguiar"
                level="Doutorado"
                area="Computação"
                email="janderson@servidor.uepb.edu.br"
                image="/janderson.png"
                curriculum="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4407152P8"
              />

              <Teacher
                name="Jannayna Domingues Barros Filgueira"
                level="Doutorado"
                area="Engenharia Elétrica"
                email="jannayna@servidor.uepb.edu.br"
                image="/janaina.png"
                curriculum="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4223965P1"
              />

              <Teacher
                name="Jucelio Soares dos Santos"
                level="Doutorado"
                area="Computação"
                email="jucelio@servidor.uepb.edu.br"
                image="/jucelio.png"
                curriculum="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4303943A6"
              />

              <Teacher
                name="Mikaelle Oliveira Santos Gomes"
                level="Doutorado"
                area="Engenharia Elétrica"
                email="mikaelleoliveira@servidor.uepb.edu.br"
                image="/mikaelle.png"
                curriculum="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4404549Z3"
              />

              <Teacher
                name="Marta Lúcia Nunes"
                level="Mestrado"
                area="Letras"
                email="martalucia@servidor.uepb.edu.br"
                image="/marta.png"
                curriculum="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4189682P4"
              />

              <Teacher
                name="Pablo Ribeiro Suárez"
                level="Mestrado"
                area="Computação"
                email="prsuarez@servidor.uepb.edu.br"
                image="/pablo.png"
                curriculum="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4771634U6"
              />

              <Teacher
                name="Ricardo Santos de Oliveira"
                level="Doutorado"
                area="Computação"
                email="ricardo@servidor.uepb.edu.br"
                image="/ricardo.png"
                curriculum="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4777979Y3"
              />

              <Teacher
                name="Rodrigo Alves Costa"
                level="Doutorado"
                area="Computação"
                email="rodrigo@servidor.uepb.edu.br"
                image="/rodrigo.png"
                curriculum="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4705078H6"
              />

              <Teacher
                name="Rosângela de Araújo Medeiros"
                level="Doutorado"
                area="Educação"
                email="rosangelamedeiros@servidor.uepb.edu.br"
                image="/rosangela.png"
                curriculum="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4269149T2"
              />

              <Teacher
                name="Angélica Felix Medeiros"
                level="Mestrado"
                area="Computação"
                email="angelicafelix@servidor.uepb.edu.br"
                image="/angelica.png"
                curriculum="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4338966Y6"
              />

              <Teacher
                name="Ingrid Morgane Medeiros de Lucena"
                level="Mestrado"
                area="Computação"
                email="ingrid@servidor.uepb.edu.br "
                image="/ingrid.png"
                curriculum="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4352750U3"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}