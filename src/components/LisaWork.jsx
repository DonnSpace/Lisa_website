import React from 'react';

function LisaWork(props) {
	return (
		<div className={props.flowTop ? 'md-mt-15' : ''}>
			<div className='h-100 md:h-80 lg:h-110 rounded-[30px] bg-gray-300 relative overflow-clip after:z-1 after:top-0 after:left-0 after:w-full after:h-[0%] after:ease-linear after:duration-500 after:absolute  hover:after:bg-gray-500/20 hover:after:h-full'>
				<img
					src={props.img}
					alt='Lisa Work'
					className='absolute '
				/>
			</div>
		</div>
	);
}

export default LisaWork;
