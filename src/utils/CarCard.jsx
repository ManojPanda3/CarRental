import Button from "./Button";
import starSvg from "../Assets/star.svg";
import locationSvg from "../Assets/location.svg";

const CarCard = ({ Image, CarTitle, CarPrice }) => {
	return (
		<div className='car-card '>
			<img
				src={Image}
				alt='car image'
				className='card-car-image'
				rel='lazy'
				loading='eager'
			/>
			<div className='car-details'>
				<h2 className='car-title'>{CarTitle}</h2>
				<CarRating Rating={"4.8/5.0"} />
				<CarLocation Location={"Hello"} />
				<div className='car-detail'>
					<div className='car-price'>{"$" + CarPrice}</div>
					<Button Class={"see-more-btn"}>See more</Button>
				</div>
			</div>
		</div>
	);
};

const CarRating = ({ Rating }) => {
	return (
		<div
			style={{
				display: "flex",
				fontSize: "10px",
				gap: "5px",
				padding: "0px",
				margin: "5px 1px",
				alignItems: "center",
			}}
		>
			<img src={starSvg} className='star' rel='lazy' loading='eager' />
			<p className='car-rating'>{Rating}</p>
		</div>
	);
};
const CarLocation = ({ Location }) => {
	return (
		<div
			style={{
				display: "flex",
				fontSize: "10px",
				gap: "5px",
				padding: "0px",
				margin: "5px 1px",
				alignItems: "center",
			}}
		>
			<img
				src={locationSvg}
				className='car-location-svg'
				rel='lazy'
				loading='eager'
			/>
			<p className='car-location'>{Location}</p>
		</div>
	);
};

export default CarCard;
