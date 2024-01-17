import { Link } from "react-router-dom";

const Header = () => {
  const paths = [
    {
      path: "/chifumi",
      name: "Chifumi",
    },
    {
      path: "/simon",
      name: "Simon",
    },
    {
      path: "/equipe",
      name: "A propos",
    }
  ]
  return (
   <>
   <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div>
      <Link to="/"><img src='../src/assets/logo/logo.png' alt="logo" className="h-12" /></Link>
    </div>
    <ul className="flex gap-10">
      {paths.map((element) => {
        return (
          <Link to={element.path} key={element.name}><li>{element.name}</li></Link>
        )
      })}
    </ul>
   </header>
   </>
  )
}

export default Header;
