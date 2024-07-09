import CardGallery from "../utils/CardGallery";

const Services = () => {
	return (
		<div className='service-card'>
			<h1>Services</h1>
			<h3>RentCar</h3>
			<CardGallery />
			<h3>BuyCar</h3>
			<CardGallery />
		</div>
	);
};

export default Services;
