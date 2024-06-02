import open from "../assets/img/open.jpg";
import nvidia from "../assets/img/NVIDIA.jpg";
import retro from "../assets/img/image-retro-pcs.jpg";
import gaming from "../assets/img/image-gaming-growth.jpg";
import laptops from "../assets/img/image-top-laptops.jpg";



export default function Center({ title, text }) {
    return (
        <section className="px-10 mt-10 md:mt-16 container mx-auto">
            <h1 className="text-4xl px-5 font-bold uppercase Specialtext mt-10">
                Popular
            </h1>

            <div className="pl-5 pr-0 lg:flex ">
                <div className="font-semibold mt-10">
                    <h1 className="text-2xl md:text-3xl font-bold pr-10">
                        OpenAI uncovers misuse of AI in deceptive campaigns.
                    </h1>
                    <p className="py-5 pr-10">
                        OpenAI, led by Sam Altman, announced it had disrupted five covert
                        influence operations that misused its AI models for deceptive
                        activities online. Over the past three months, actors from Russia,
                        China, Iran, and Israel used AI to generate fake comments, articles,
                        and social media profiles.
                    </p>
                    <button
                        className="mt-5 softred uppercase  hover:text-white hover:bg-blue-950
                     duration-500 text-black  w-40 h-14  font-semibold"
                    >
                        Read more
                    </button>
                </div>
                <img src={open} alt="" className="mt-10" />
            </div>

            <div className="  mt-16 lg:mt-0  pt-5 lg:grid-cols-3 lg:grid">
                <div className="  px-5 lg:mt-5 lg:border-r-2">
                    <h2 className="mt-2 text-2xl font-bold">Ben Ball, IBM: Revolutionising technology operations with IBM Concert</h2>
                    <p className="mt-2 pb-3 ">
                    interview ahead of the Intelligent Automation Conference, Ben Ball, Senior Director of Product Marketing at IBM, shed light on the tech giant's latest AI endeavours and its groundbreaking new Concert product.
                    </p>
                    <button
                        className="mt-5 mb-5 softred uppercase  hover:text-white hover:bg-blue-950
                     duration-500 text-black  w-40 h-14  font-semibold"
                    >
                        Read more
                    </button>
                </div>
                <div className=" mt-5 px-5 lg:border-r-2">
                    <h2 className="mt-2 text-2xl font-bold">Elon Musk’s xAI secures $6B to challenge OpenAI in AI race</h2>
                    <p className="mt-2  pb-3 ">
                        {" "}
                        Elon Musk founded xAI last summer, and The Verge just reported that it's already making waves by announcing a massive $6 billion funding round. According to the company, this money will help bring xAI's first products to market, build advanced infrastructure, and accelerate research and...
                    </p>
                    <button
                        className="mt-5 softred uppercase darkbluetext hover:text-white hover:bg-blue-950
                     duration-500  text-black w-40 h-14  font-semibold"
                    >
                        Read more
                    </button>
                </div>
                <div className=" mt-5 px-5 ">
                    <h2 className="mt-2  text-2xl font-bold">Gil Pekelman, Atera: How businesses can harness the power of AI</h2>
                    <p className="mt-2  pb-3 ">
                        {" "}
                        TechForge recently caught up with Gil Pekelman, CEO of all-in-one IT management platform, Atera, to discuss how AI is becoming the IT professionals’ number one companion.

Can you tell us a little bit about Atera and what it does?

We launched the Atera all-in-one platform...
                    </p>
                    <button
                        className="mt-5 softred text-black uppercase darkbluetext hover:text-white hover:bg-blue-950
                     duration-500   w-40 h-14  font-semibold"
                    >
                        Read More
                    </button>
                </div>
            </div>
            <div className="  mt-16 lg:mt-0  pt-5 lg:grid-cols-3 lg:grid">
                <div className="  px-5 lg:mt-5 lg:border-r-2">
                    <h2 className="mt-2 text-2xl font-bold">OpenAI secures key partnership with Reddit</h2>
                    <p className="mt-2 pb-3 ">
                    OpenAI has secured a deal to access real-time content from Reddit through the platform's data API. 

This allows OpenAI to incorporate conversations from Reddit into ChatGPT and other new products, echoing a previous agreement that the platform had with Google, reportedly valued...
                    </p>
                    <button
                        className="mt-5 mb-5 softred uppercase  hover:text-white hover:bg-blue-950
                     duration-500 text-black  w-40 h-14  font-semibold"
                    >
                        Read more
                    </button>
                </div>
                <div className=" mt-5 px-5 lg:border-r-2">
                    <h2 className="mt-2 text-2xl font-bold">Microsoft unveils new Copilot+ PCs featuring advanced AI capabilities</h2>
                    <p className="mt-2  pb-3 ">
                        {" "}
                        Microsoft has launched a new type of personal computer designed with AI capabilities, underscoring the company's commitment to integrating cutting-edge technology across its product lineup. 

This new category not only boosts Microsoft's ventures but also positions...
                    </p>
                    <button
                        className="mt-5 softred uppercase darkbluetext hover:text-white hover:bg-blue-950
                     duration-500  text-black w-40 h-14  font-semibold"
                    >
                        Read more
                    </button>
                </div>
                <div className=" mt-5 px-5 ">
                    <h2 className="mt-2  text-2xl font-bold">Discovering the future of AI – Introducing AI Parabellum (an AI tools directory)</h2>
                    <p className="mt-2  pb-3 ">
                        {" "}
                        As artificial intelligence continues to progress at an unprecedented rate, developing new and innovative AI tools has become crucial for shaping the future of the industry. However, keeping up with all the latest advancements can often feel overwhelming, with new tools emerging every day across...
                    </p>
                    <button
                        className="mt-5 softred text-black uppercase darkbluetext hover:text-white hover:bg-blue-950
                     duration-500   w-40 h-14  font-semibold"
                    >
                        Read More
                    </button>
                </div>
            </div>
            <div className="container  bg-slate-900 mx-0 mt-10 ">
                <div className=" lg:px-5">
                    <h1 className="Specialtext text-5xl font-bold pt-20 pl-5 ">
                        Opinion
                    </h1>
                </div>

                <div className="pl-5 pr-0 lg:flex  text-white pb-10">
                    <img src={nvidia} alt="" className="mt-10 pr-10" />
                    <div className="font-semibold mt-10">
                        <h1 className="text-2xl md:text-3xl font-bold pr-10">
                            Is Nvidia AI: Powering the Future of Artificial Intelligence?
                        </h1>
                        <p className="py-5 pr-10">
                            Nvidia is a leading technology company that has established itself
                            as a pioneer in the field of artificial intelligence (AI). The
                            company's GPUs, originally designed for graphics rendering, have
                            proven to be incredibly well-suited for AI workloads, due to their
                            parallel processing capabilities. As a result, Nvidia has become a
                            key player in the development of AI technologies, providing
                            hardware and software solutions that are powering a wide range of
                            applications.
                        </p>
                        <button
                            className="mt-5 softred uppercase  hover:text-white hover:bg-blue-950
                     duration-500 text-black  w-40 h-14  font-semibold"
                        >
                            Read more
                        </button>
                    </div>
                </div>
            </div>
            <h1 className="text-5xl font-bold Specialtext py-10">Top Rated</h1>
            <div className="container mx-auto mt-10   ">

                <div className="lg:grid lg:grid-cols-3 gap-10 cursor-pointer">
                    <div className="flex">
                        <img src={laptops} alt="" />
                        <div className="">
                            <h2 className="text-red-500 py-2 font-bold text-4xl px-5">01</h2>
                            <h1 className="px-5 text-2xl py-2 font-bold hover:text-red-500 duration-300">Tops Laptops 2024</h1>
                            <p className="px-5">Our best picks for various needs and budgets </p>
                        </div>
                    </div>
                    <div className="flex lg:mt-0 mt-10 ">
                        {" "}
                        <img src={gaming} alt="" />
                        <div>
                            <h2 className="text-red-500 py-2 font-bold text-4xl px-5" >02</h2>
                            <h1 className="px-5 text-2xl py-2 font-bold hover:text-red-500 duration-300">The growth Gaming</h1>
                            <p className="px-5">How the pandemic has sparked fresh oportunities</p>
                        </div>
                    </div>
                    <div className="flex lg:mt-0 mt-10">
                        <img src={retro} alt="" />
                        <div className="px-5">
                            <h2 className="text-red-500 py-2 font-bold text-4xl px-5" >O3</h2>
                            <h1 className="px-5 text-2xl py-2 font-bold  hover:text-red-500 duration-300">Reviving Retro Pcs</h1>
                            <p>Whats happens when old PCs are given mordern upgrades?</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
