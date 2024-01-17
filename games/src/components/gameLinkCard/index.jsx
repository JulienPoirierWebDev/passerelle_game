import { Link } from "react-router-dom";

const GameLinkCard = () => {
    const paths = [
        {
          path: "/simon",
          name: "GameSimon",
          img: "../src/assets/logo/simon.jpg",
          description: "Le jeu, électronique, éclaire une des quatre couleurs et produit un son toujours associé à cette couleur. Le joueur doit alors appuyer sur la touche de la couleur qui vient de s'allumer dans un délai assez court. Le jeu répète la même couleur et le même son, puis ajoute au hasard une nouvelle couleur."
        },
        {
          path: "/chifumi",
          name: "GameChifumi",
          img: "../src/assets/logo/logo.png",
          description: "Pour commencer les joueurs comptent jusqu'à trois en mettant la main dans le dos. Une fois à trois les joueurs révèlent leur main (pierre, feuille ou ciseaux) en même temps. La plus forte des formes l'emporte et le joueur marque le point gagnant. Si les deux joueurs utilisent la même forme c'est un match nul."
        },
      ];

      return (
        <>
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
          {
            paths.map((element) => {
              return (
                <>
        <Link to={element.path} key={element.name} className={`h-50 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url('${element.img}')]`}>
        </Link> 
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{element.name}</div>
            <p className="text-gray-700 text-base">{element.description}</p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src="" alt=""/>
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Jonathan Reinink</p>
              <p className="text-gray-600">Aug 18</p>
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