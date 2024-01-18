import { Link } from "react-router-dom";
import devs from "../../data/dev";

const GameLinkCard = () => {
  const paths = [
    {
      path: "/simon",
      name: "GameSimon",
      img: "/assets/logo/simon.jpg",
      description: "Le jeu, électronique, éclaire une des quatre couleurs et produit un son toujours associé à cette couleur. Le joueur doit alors appuyer sur la touche de la couleur qui vient de s'allumer dans un délai assez court. Le jeu répète la même couleur et le même son, puis ajoute au hasard une nouvelle couleur."
    },
    {
      path: "/chifumi",
      name: "GameChifumi",
      img: "/assets/logo/chifumi.jpg",
      description: "Pour commencer les joueurs comptent jusqu'à trois en mettant la main dans le dos. Une fois à trois les joueurs révèlent leur main (pierre, feuille ou ciseaux) en même temps. La plus forte des formes l'emporte et le joueur marque le point gagnant. Si les deux joueurs utilisent la même forme c'est un match nul."
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 rounded overflow-hidden">
        {
          paths.map((element) => {
            const currentProject = element.name
            return (
              <>
                <div className="w-11/12 mx-auto my-7 shadow-[17px_20px_15px_0_rgba(0,0,0,0.1)]">
                  <Link to={element.path} key={element.name}>
                    <img className="w-full" src={element.img} alt="games logo" />
                  </Link>
                  <div className="px-6 py-4">
                    <div className="mb-8">
                      <div className="text-center font-bold text-xl mb-2">{element.name}</div>
                      <p className="text-gray-700 text-base">{element.description}</p>
                    </div>
                    <div className="flex items-center justify-between">{
                      devs.filter((dev) => dev.projects.includes(currentProject)).map((dev) => {
                        return (
                          <>
                            <div className="flex flex-col">
                              <img className="w-10 h-10 rounded-full" src={dev.img} alt="" />
                              <div className="text-sm">
                                <p className="text-gray-900 leading-none">{dev.name}</p>
                                <p className="text-gray-600"></p>
                              </div>
                            </div>
                          </>
                        )
                      })
                    }
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}
export default GameLinkCard;