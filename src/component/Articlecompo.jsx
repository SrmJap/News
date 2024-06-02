import desk from "../assets/img/image-web-3-desktop.jpg";
import mobile from "../assets/img/image-web-3-mobile.jpg";

export default function article() {
    return (
        <section className="px-10 mt-10 md:mt-16 container mx-auto">
            <div className="lg:flex gap-10">
                <div>
                    {" "}
                    <picture className=" ">
                        <source media="(max-width: 640px)" srcSet={mobile} />
                        <source media="(min-width: 641px)" srcSset={desk} />
                        <img src={desk} alt="mainnew" />
                    </picture>
                    <div className="mt-10   gap-6 md:flex">
                        <h1 className="md:text-4xl text-3xl font-bold md:px-5 ">
                            {" "}
                            <span className="text-red-500 font-bold">Web3</span> Startup Raises $100
                            Million to Combat Fake News.
                        </h1>
                        <div className="flex-col mt-5">
                            <p>
                                SAN FRANCISCO, CA - A new{" "}
                                <span className="text-red-500">Web3</span> startup called
                                TruthDAO has raised $100 million in a venture capital funding
                                round to combat fake news. The company plans to use blockchain
                                technology to create a decentralized network of fact-checkers
                                and news sources.
                            </p>
                            <button
                                className="mt-5 softred uppercase darkbluetext hover:text-white hover:bg-blue-950
                     duration-500  text-white w-40 h-14  font-semibold"
                            >
                                {" "}
                                Read more
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 mt-10 lg:mt-0 px-5 pt-5 ">
                    <div className="text-white  border-b-2">
                        <h1 className="text-4xl font-bold Specialtext">News</h1>
                        <h2 className="mt-2 text-2xl font-bold">AI Ethics and Adoption</h2>
                        <p className="mt-2 text-gray-400 pb-3 ">Experts are emphasizing the importance of embedding ethical considerations into the design and development of AI systems.</p>
                    </div>
                    <div className="text-white mt-5  border-b-2">
                        
                        <h2 className="mt-2 text-2xl font-bold">Typhoon  closes in on Guam</h2>
                        <p className="mt-2 text-gray-400 pb-3 "> Residents are advised to take shelter and stay indoors until the storm has passed.</p>
                    </div>
                    <div className="text-white mt-5  ">
                        
                        <h2 className="mt-2 text-2xl font-bold">US Growth Slowdown</h2>
                        <p className="mt-2 text-gray-400 pb-3 "> The US economy grew at a sluggish 1.6% annual rate in the first quarter of 2024.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
