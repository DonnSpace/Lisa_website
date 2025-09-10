import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function LisaNavbar() {
	const [menu, setMenu] = useState(false);

	const menuToggle = () => {
		setMenu(!menu);
	};
	return (
		<nav className="fixed w-full z-10">
			<div className="lisaContainer">
				<div className="flex justify-between items-center py-5">
					<a href="#">
						<h5 className="cursor-pointer bg-lisa-primary px-3 py-2 rounded-full text-2xl">
							Li.
						</h5>
					</a>

					<ul className="hidden md:flex justify-between items-center capitalize md:bg-gray-200/50 backdrop-blur-2xl md:px-5 md:rounded-full">
						<li className="">
							<a href="#" className="p-3 hover:text-lisa-primary cursor-pointer">Lisa</a>
						</li>
						<li className="">
							<a href="#Services" className="p-3 hover:text-lisa-primary cursor-pointer">Services</a>
						</li>
						<li className="">
							<a href="#Work" className="p-3 hover:text-lisa-primary cursor-pointer">Work</a>
						</li>
						<li className="">
							<a href="#Resume" className="p-3 hover:text-lisa-primary cursor-pointer">Resume</a>
						</li>
						<li className="ml-3">
							<a
								href="#Contact"
								className="px-4 py-2 text-white rounded-full transition-colors ease-in-out hover:bg-lisa-primary cursor-pointer bg-lisa-secondary">
								contact
							</a>
						</li>
					</ul>
					<div
						className="block md:hidden text-lisa-secondary cursor-pointer p-2 bg-white rounded-md hover:bg-lisa-primary hover:text-white transition-colors ring-1 ring-gray-100 ease-in-out"
						onClick={menuToggle}>
						{menu ? <FaTimes size={20} /> : <FaBars size={20} />}
					</div>

					{/* mobile menu view  */}
					<div
						className={`fixed  left-0 right-0  bg-white/80 w-100 mx-auto rounded-2xl ring-2 ring-gray-100 backdrop-blur-md p-3 shadow-md transition-all duration-500 ease-in-out z-[5] ${
							menu ? "top-25" : "top-[-100%]"
						}`}>
						<ul className="block justify-between items-center capitalize w-full">
							<li className="">
								<a href="#"className="cursor-pointer p-3 hover:text-lisa-primary border-b border-gray-300 w-full">Lisa</a>
							</li>
							<li className="">
								<a href="#Services"className="cursor-pointer p-3 hover:text-lisa-primary border-b border-gray-300 w-full">Services</a>
							</li>
							<li className="">
								<a href="#Work"className="cursor-pointer p-3 hover:text-lisa-primary border-b border-gray-300 w-full">Work</a>
							</li>
							<li className="">
								<a href="#Resume"className="cursor-pointer p-3 hover:text-lisa-primary border-b border-gray-300 w-full">resume</a>
							</li>
							<li className="my-3">
							<a
								href="#Contact"
								className="px-4 py-2 text-center text-white rounded-full transition-colors ease-in-out hover:bg-lisa-primary cursor-pointer bg-lisa-secondary">
								contact
							</a>
						</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default LisaNavbar;
