import React from 'react';
import LisaNavbar from '../components/LisaNavbar';
import HeroBanner from '../images/Hero-Illustration-bg.png';
import ContactBanner from '../images/Contact-Illustration.png';
import { FaBehance, FaDribbble, FaLinkedinIn } from 'react-icons/fa';
import ServiceItem from '../components/ServiceItem';
import ServiceImage1 from '../images/Service1-Illustration.png';
import ServiceImage2 from '../images/Service2-Illustration.png';
import ServiceImage3 from '../images/Service3-Illustration.png';
import LisaWork from '../components/LisaWork';
import Image1 from '../images/Image1.png';
import Image2 from '../images/Image2.png';
import Image3 from '../images/Image3.png';
import Image4 from '../images/Image4.png';

function LisaSite() {
	return (
		<div className='overflow-clip lisaTextColor'>
			{/* Navigation Bar  */}
			<header className=''>
				<LisaNavbar />
			</header>

			{/* Hero Section  */}
			<div id='#' className=''>
				<div className='lisaContainer lisaSection'>
					<div className='pt-24 pb-94 md:pt-0 md:pb-0'>
						<div className='min-[550px]:w-[70%] md:w-[40%] lg:w-[60%] z-2'>
							<h1 className='text-4xl lisaHeading'>Hello, I'm Lisa</h1>
							<p>
								Multifunctional designer/developer based in Bath — a
								traditionally trained designer who codes.
							</p>
							<a
								href='#'
								className='bg-lisa-secondary text-white hover:bg-lisa-primary hover:text-white ease-in-out duration-300 px-8 py-3 block mt-4 rounded-full w-fit'>
								View Work
							</a>
							<div className='flex justify-between w-40 items-center mt-3'>
								<a
									href='#'
									className='p-3 hover:bg-lisa-primary ease-in-out duration-300 hover:text-white rounded-full'>
									<FaDribbble />
								</a>
								<a
									href='#'
									className='p-3 hover:bg-lisa-primary ease-in-out duration-300 hover:text-white rounded-full'>
									<FaBehance />
								</a>
								<a
									href='#'
									className='p-3 hover:bg-lisa-primary ease-in-out duration-300 hover:text-white rounded-full'>
									<FaLinkedinIn />
								</a>
							</div>
						</div>
					</div>
					<div className='block -z-1'>
						<img
							src={HeroBanner}
							className='absolute -right-20 top-50 min-[550px]:-right-30 min-[550px]:top-20 sm:-right-30 sm:top-20 md:-right-40 md:-top-35  lg:-right-40 lg:-top-60 w-250 sm:w-150 lg:w-200'
							alt='Lisa Hero Banner'
						/>
					</div>
				</div>
			</div>

			{/* Services Section  */}
			<div id='#Services'>
				<div className='lisaContainer lisaSection'>
					<div>
						<h2 className='lisaHeading text-center text-3xl'>Things I Do</h2>
						<ServiceItem
							img={ServiceImage1}
							title='Strategy'
							content="There's no style over substance here. I bring together form and the function to create something that looks good and performs."
							reverse={false}
						/>
						<ServiceItem
							img={ServiceImage2}
							title='Information Architecture'
							content='It’s about organizing the content and flow of a website based on research and planning. Eventually I come up with a structure/design that balances the users’ desires with the business’s needs.'
							reverse={true}
						/>
						<ServiceItem
							img={ServiceImage3}
							title='Design & Development'
							content='As a designer and developer, I understand the perfect user interface should look good and work even better. Alongside my clients, I uncover problems and solve them. In short, I create bolder online experiences.'
							reverse={false}
						/>
					</div>
				</div>
			</div>

			{/* Work Section  */}
			<div id='#Work'>
				<div className=' lisaSection'>
					<div className='lisaContainer'>
						<h2 className='lisaHeading text-center text-3xl'>Recent Work</h2>
						<div className='flex justify-center'>
							<div className='grid gap-5 grid-cols-1 md:mx-auto md:grid-cols-2 w-sm sm:w-md min-md:w-2xl  lg:w-3xl md:mt-15'>
								<LisaWork img={Image1} flowTop={false} />
								<LisaWork img={Image2} flowTop={true} />
								<LisaWork img={Image3} flowTop={false} />
								<LisaWork img={Image4} flowTop={true} />
							</div>
						</div>

						<div className='flex justify-center'>
							<a
								href='#'
								className='bg-lisa-secondary  text-white hover:bg-lisa-primary hover:text-white ease-in-out duration-300 px-8 py-3 block mt-4 rounded-full w-fit'>
								View Work
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Section  */}
			<div id='#Resume' className=''>
				<div className='lisaContainer lisaSection'>
					<div className='pt-24 pb-94 md:pt-0 md:pb-0'>
						<div className='min-[550px]:w-[70%] md:w-[40%] lg:w-[60%] z-2'>
							<h2 className='text-4xl lisaHeading'>
								Ready to make something amazing?
							</h2>
							<a
								href='#'
								className='bg-lisa-secondary text-white hover:bg-lisa-primary hover:text-white ease-in-out duration-300 px-8 py-3 block mt-4 rounded-full w-fit'>
								View Work
							</a>
							<div className='flex justify-between w-40 items-center mt-3'>
								<a
									href='#'
									className='p-3 hover:bg-lisa-primary ease-in-out duration-300 hover:text-white rounded-full'>
									<FaDribbble />
								</a>
								<a
									href='#'
									className='p-3 hover:bg-lisa-primary ease-in-out duration-300 hover:text-white rounded-full'>
									<FaBehance />
								</a>
								<a
									href='#'
									className='p-3 hover:bg-lisa-primary ease-in-out duration-300 hover:text-white rounded-full'>
									<FaLinkedinIn />
								</a>
							</div>
						</div>
					</div>
					<div className='block -z-1'>
						<img
							src={ContactBanner}
							className='absolute -right-20 top-50 min-[550px]:-right-30 min-[550px]:top-20 sm:-right-30 sm:top-20 md:-right-40 md:-top-35  lg:-right-40 lg:-top-60 w-250 sm:w-150 lg:w-200'
							alt='Lisa Hero Banner'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LisaSite;
