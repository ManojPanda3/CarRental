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
						<div className='tab'>Home Page</div>
						<div className='tab'>Rent Car</div>
						<div className='tab'>Buy Car</div>
						<div className='tab'>News</div>
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
