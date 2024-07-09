import { useContext } from "react";
import Button from "../utils/Button";
import { G_width } from "../utils/DeviceDetect";
import Menu from "../utils/Menu";

const Header = () => {
	const width = useContext(G_width);
	return (
		<header className='header'>
			<div className='logo'>TOPCAR</div>
			{width > 550 ? (
				<>
					<nav className='tabs'>
						<a className='tab' href="#buy-car">Buy car</a>
						<a className='tab'>Rent car</a>
						<a className='tab'>Contact us</a>
					</nav>
					<Button Class={""}>Sign in</Button>
				</>
			) : (
				<Menu></Menu>
			)}
		</header>
	);
};

export default Header;
