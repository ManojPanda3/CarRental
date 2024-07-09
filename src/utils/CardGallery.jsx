import CarCard from "./CarCard";
import { useRef } from "react";

const data = [
	{
		id: 1,
		CarTitle: "Hi",
		Image:
			"https://assets.architecturaldigest.in/photos/60004a09d68a278e29c86a11/16:9/w_2560%2Cc_limit/feature6-1366x768.jpg",
		CarPrice: "10/day",
	},
	{
		id: 2,
		CarTitle: "bye",
		Image:
			"https://assets.architecturaldigest.in/photos/60004a09d68a278e29c86a11/16:9/w_2560%2Cc_limit/feature6-1366x768.jpg",
		CarPrice: "15/day",
	},
	{
		id: 3,
		CarTitle: "bye2",
		Image:
			"https://assets.architecturaldigest.in/photos/60004a09d68a278e29c86a11/16:9/w_2560%2Cc_limit/feature6-1366x768.jpg",
		CarPrice: "15/day",
	},
	{
		id: 4,
		CarTitle: "bye3",
		Image:
			"https://assets.architecturaldigest.in/photos/60004a09d68a278e29c86a11/16:9/w_2560%2Cc_limit/feature6-1366x768.jpg",
		CarPrice: "15/day",
	},
	{
		id: 5,
		CarTitle: "bye3",
		Image:
			"https://assets.architecturaldigest.in/photos/60004a09d68a278e29c86a11/16:9/w_2560%2Cc_limit/feature6-1366x768.jpg",
		CarPrice: "15/day",
	},
];

const CardGallery = () => {
	const cars = useRef(null);
	const handelShiftLeft = (e) => {
		cars.current.scrollBy(-220, 0);
	};
	const handelShiftRight = (e) => {
		cars.current.scrollBy(220, 0);
	};
	return (
		<div
			style={{
				display: "flex",
				width: "80%",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<span className='left-right-logo' onClick={handelShiftLeft}>
				<svg width='16px' height='16px' viewBox='0 0 1024 1024'>
					<path
						d='M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z'
						fill='#000000'
					/>
				</svg>
			</span>
			<div className='card-gallery '>
				<div
					className='cards-gallery '
					ref={cars}
					style={{
						gridTemplateColumns: `repeat(${data.length},200px)`,
					}}
				>
					{data.map((ele) => {
						return (
							<CarCard
								CarTitle={ele.CarTitle}
								Image={ele.Image}
								CarPrice={ele.CarPrice}
								key={ele.id}
							/>
						);
					})}
				</div>
			</div>
			<span className='left-right-logo' onClick={handelShiftRight}>
				<svg width='16px' height='16px' viewBox='0 0 1024 1024'>
					<path
						d='M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z'
						fill='#000000'
					/>
				</svg>
			</span>
		</div>
	);
};

export default CardGallery;
