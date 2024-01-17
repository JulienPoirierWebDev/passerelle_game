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
       <div className="min-h-screen container mx-auto">
            <div >
                <div className="card">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {state.dev.map((dev) => {
                                return (
                                    <>
                                        <div>
                                            <div className="rounded-xl overflow-hidden">
                                            <img src={dev.img} alt="" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl mt-3 font-medium">{dev.name}</h2>
                                            <p className="text-slate-500 text-lg mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum iusto quis repellat inventore numquam eaque pariatur ducimus maxime voluptatum neque harum repellendus rem, corrupti eum ut at quos reiciendis repudiandae?</p>
                                            <a href={dev.link} className="text-center bg-blue-400 text-blue_800 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all">Mon git-up</a>
                               
                                        </div>
                                   </>
                                );
                            })} 
                    </div> 
               </div>       
           </div>
           
        </div>   
       
    )
}    
    
export default Listing;