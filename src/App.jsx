// import PageRouter from './components/PageRouter';
import LisaSite from './pages/Lisa';
import './css/Lisa.css';

function App() {
	return (
		<div>
			{/* Display Pages according to current selected link page */}
			<div className=''>
				<LisaSite />

				{/* <Routes> */}
					{/* Navigation bar link items  */}
						{/* <Route path="/" element={<LisaSite />} /> */}
				{/* </Routes> */}
			</div>
		</div>
	);
}

export default App;
