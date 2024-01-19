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
      path: "/memory",
      name: "Memory",
    },
    {
      path: "/morpion",
      name: "Oxo",
    },
    {
      path: "/apropos",
      name: "A propos",
    }
  ]
  return (
   <>
   <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div className="w-96">
        <Link className="inline-block" to="/"><img src='./assets/logo/logo.png' alt="logo" className="h-12" /></Link>
    </div>
    <h1 className="text-3xl font-bold w-7/12 text-center">Passerelle Games</h1>
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
