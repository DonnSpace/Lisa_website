import React from "react";


function ServiceItem(props) {
	return (
		<div>
			<div className="py-6 block md:flex md:justify-between md:items-center">
					<img
						src={props.img}
						alt="Lisa Services image"
						className={`w-100 md:w-70 lg:w-100 ${props.reverse ? "order-2" : ""}`}
					/>

					<div className={`mt-5 md:mt-0  ${props.reverse ? "order-1 md:mr-20 lg:mr-50" : "md:ml-20 lg:ml-50"}`}>
						<h3 className="lisaHeading">{props.title}</h3>
						<p>{props.content}</p>
					</div>
				</div>
		</div>
	);
}

export default ServiceItem;
