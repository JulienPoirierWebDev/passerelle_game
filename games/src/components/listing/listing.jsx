function Listing  () {

 const state = {
   dev: [   
        {
            "name": "Vincent",
            "img": "https://image.smythstoys.com/original/desktop/139239.jpg",
            "link": "https://github.com/VChiofalo",
        },
        {
            "name": "Cecile",
            "img": "https://image.smythstoys.com/original/desktop/139239.jpg",
            "link": "https://github.com/Cecile-29",
        },
        {
            "name": "Alex",
            "img": "https://image.smythstoys.com/original/desktop/139239.jpg",
            "link": "https://github.com/alexfrai",
        },
        {
            "name": "Cisco",
            "img": "https://image.smythstoys.com/original/desktop/139239.jpg",
            "link": "https://github.com/Cisco29",
        },
        {
            "name": "Anthony",
            "img": "https://image.smythstoys.com/original/desktop/139239.jpg",
            "link": "https://github.com/Lakym972",
        },
        {
            "name": "Jason",
            "img": "https://image.smythstoys.com/original/desktop/139239.jpg",
            "link": "https://github.com/MicroTarion",
        },
        {
            "name": "Erwan",
            "img": "https://image.smythstoys.com/original/desktop/139239.jpg",
            "link": "https://github.com/Veleoran",
        },
        {
            "name": "Frederic",
            "img": "https://image.smythstoys.com/original/desktop/139239.jpg",
            "link": "https://github.com/Fredericvamer",
        },
        {
            "name": "Chantal",
            "img": "https://image.smythstoys.com/original/desktop/139239.jpg",
            "link": "https://github.com/Chant76",
        }
    ]
 };
    
    return(
       <div className="px-4 py-32 bg-black max-auto">
            <div className="text-white text-center">
                <h1 className="text-5 lg:text-7x1 leading-snug font-bold mb-5">welcome to the developers page</h1>
            </div>
          
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 ">
                {state.dev.map((dev) => {
                    return (
                        <>
                        <div>
                          <img src={dev.img} alt="" className="w-full"/>
                       </div>
                       <h2 className="mt-4 mb-2 font-bold">{dev.name}</h2>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum iusto quis repellat inventore numquam eaque pariatur ducimus maxime voluptatum neque harum repellendus rem, corrupti eum ut at quos reiciendis repudiandae?</p>
                       <h3>Mon git-up:{dev.link}</h3>
                       </>
                    );
                })} 
           </div>
        </div>   
       
    )
}    
    
export default Listing;