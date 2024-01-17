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
   <div className="navbar">
    <ul className="flex gap-10">
      {paths.map((element) => {
        return (
          <Link to={element.path} key={element.name}><li>{element.name}</li></Link>
        )
      })}
    </ul>
   </div>
   </>
  )
}

export default Header;
