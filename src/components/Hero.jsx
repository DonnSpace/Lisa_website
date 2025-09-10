import React from "react";
import HeroBanner from "../images/Hero-Illustration-bg.png";
import HeroIllustrator from "../images/Hero-Illustration.png";

function Hero() {
	return (
		// ${HeroBanner}
		<div className="">
			<div className="lisaContainer pt-30">
				<div className="mb-10 lisaSection">
					<div>
						<h1>Hello, I'm Lisa</h1>
						<p>
							Multifunctional designer/developer based in Bath — a traditionally
							trained designer who codes.
						</p>
						<a
							href="#"
							className="bg-lisa-secondary text-white px-8 py-3 block mt-4 rounded-full w-fit">
							View Work
						</a>
					</div>
					{/* <img src={HeroBanner} className="heroImg" alt="Lisa Hero Banner" /> */}
					<div className="hero-bg">
                                        <img src={HeroBanner} className="" alt="Lisa Hero Banner" />
                                        </div>
					{/* <div className="block md:hidden bg-lisa-primary p-10 rounded-3xl mt-10">
                                                <img src={HeroIllustrator} className="w-fit" alt="Lisa Hero Banner" />
                                        </div> */}
				</div>
			</div>
			{/* <div className="hero-bg">
				<img src={HeroBanner} className="" alt="Lisa Hero Banner" />
			</div> */}
		</div>
	);
}

export default Hero;
