import { Link } from "react-router-dom";

const GameLinkCard = () => {
    const paths = [
        {
          path: "/",
          name: "Accueil",
        },
      ];

      return (
        <>
          <div>
            <ul className="hidden md:flex flex-row gap-6 justify-center align-center">
              {paths.map((element) => {
                return (
                  <Link to={element.path} key={element.path}>
                    {element.name}
                    </Link>
                );
                })}
            </ul>
        </div>
        </>)
}
export default GameLinkCard;