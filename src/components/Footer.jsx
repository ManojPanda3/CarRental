import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className='description'>
				<div className='logo'>TOPCAR</div>
				<div className='title-2'>datas</div>
				<div className='logos'>
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
					<span>5</span>
				</div>
			</div>
			<div className='pages'>
				<Pages
					Datas={["Buy", "Reviews", "Site map", "How it works"]}
					Class={"carago"}
					Title={"Carago"}
				/>
				<Pages
					Datas={["Delivery", "CarAudit", "Warranty", "Financing"]}
					Class={"services"}
					Title={"Services"}
				/>
				<Pages
					Datas={["About us", "Contact us", "Terms of use"]}
					Class={"company"}
					Title={"Company"}
				/>
			</div>
		</footer>
	);
};

const Pages = ({ Class, Datas, Title }) => {
	return (
		<div className={Class}>
			<h4>{Title}</h4>
			{Datas.map((e, i) => {
				return <p key={i}>{e}</p>;
			})}
		</div>
	);
};
export default Footer;
