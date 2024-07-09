import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import CarFinder from "../components/CarFinder";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div className='homepage'>
			<Header />
			<HeroBanner />
			<CarFinder />
			<Services />
			<Footer />
		</div>
	);
};

export default Home;
