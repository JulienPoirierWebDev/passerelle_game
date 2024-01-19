import devs from "../../data/dev";
import ContainerCard from "../containerCard";

const DevCard = ({ name, img, link }) => {
  return (
    <>
      <div className="rounded-xl overflow-hidden">
        <img src={img} alt="" />
      </div>
      <h2 className="text-2xl md:text-3xl mt-3 font-medium">{name}</h2>
      <p className="text-slate-500 text-lg mt-3 mb-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum iusto
        quis repellat inventore numquam eaque pariatur ducimus maxime voluptatum
        neque harum repellendus rem, corrupti eum ut at quos reiciendis
        repudiandae?
      </p>
      <a
        href={link}
        className="text-center bg-blue-400 text-blue_800 p-2 rounded-lg font-semibold hover:bg-blue-300 focus:scale-95 transition-all"
      >
        Mon git-up
      </a>
    </>
  );
};

function Listing() {
  return (
    <div className="min-h-screen container mx-auto">
      <div>
        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {devs.map((dev) => {
              return (
                <>
                  <ContainerCard customStyle=" p-12">
                    <DevCard {...dev} key={dev.name} />
                  </ContainerCard>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
