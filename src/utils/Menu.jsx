import crossIcon from "../Assets/crossIcon.svg";
import menuIcon from "../Assets/menuIcon.svg";
import Button from "./Button";
import { useState } from "react";

const Menu = () => {
	// menu state = false --> not open
	// true --> opened
	const [menuState, setMenuState] = useState(false);
	const handelMenu = async () => {
		setMenuState(true);
	};
	return (
		<nav className='menu'>
			{menuState ? (
				<div className='menu-container'>
					{/* menuState is true when menu is opened so when true --> crossIcon else menuIcon */}
					<img
						src={crossIcon}
						className='menu-icon'
						onClick={() => setMenuState(false)}
						rel='lazy'
						loading='eager'
					/>
					<div className='menu-elements'>
						<div className='menu-options'>
							<p className='tab'>Home Page</p>
							<p className='tab'>Rent Car</p>
							<p className='tab'>Buy Car</p>
							<p className='tab'>News</p>
						</div>
						<Button Class={""}>Sign in</Button>
					</div>
				</div>
			) : (
				<img
					src={menuIcon}
					className='menu-icon'
					onClick={handelMenu}
					rel='lazy'
					loading='eager'
				/>
			)}
		</nav>
	);
};

export default Menu;
