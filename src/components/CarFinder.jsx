import Button from "../utils/Button";
import seatSvg from "../Assets/seat.svg";
import moneySvg from "../Assets/money.svg";
import locationSvg from "../Assets/location.svg";

const CarFinder = () => {
	return (
		<>
			<p className='car-finder-title'>Car Finder</p>
			<div className='car-finder'>
				<div className='seat-number'>
					<img src={seatSvg} rel='lazy' loading='eager' />
					<input type='number' placeholder='Number of seat' name='SeatNumber' />
				</div>
				<div className='car-price'>
					<img src={moneySvg} rel='lazy' loading='eager' />
					<input type='number' placeholder='Price' name='CarPrice' />
				</div>
				<div className='location'>
					<img src={locationSvg} rel='lazy' loading='eager' />
					<input type='text' placeholder='Location' name='Location' />
				</div>
				<Button Class={"car-finder-searcher"}>Search</Button>
			</div>
		</>
	);
};

export default CarFinder;
