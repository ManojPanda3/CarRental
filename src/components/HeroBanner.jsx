import { useContext } from "react";
import { G_width } from "../utils/DeviceDetect";

const HeroBanner = () => {
	const width = useContext(G_width);
	return (
		<div className='heros'>
			{width > 520 ? (
				<div className='go-down-sign'>
					<svg height='100%' width='100%' viewBox='0 0 24 24' fill='none'>
						<path
							d='M17 14L14 17L11 14'
							stroke='#200E32'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M14 16V10.5C14 8.56701 12.433 7.00001 10.5 7.00001V7.00001C8.567 7.00001 7 8.56701 7 10.5L7 12'
							stroke='#200E32'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			) : (
				""
			)}
			<div className='titles'>
				<div className='title-1'>
					<p className='subtitle-1'>Buy,Sell & rent</p>
					<p className='subtitle-2'>reputable cars</p>
				</div>
				<div className='title-2'>
					Buy and sell reputable cars. Renting a car is easy
					<br />
					and fast with Topcar
				</div>
				<div className='datas'>
					<Titles title='50+' subtitle='Car brands' />
					<div className='separate'></div>
					<Titles title='10+' subtitle='Clients' />
				</div>
			</div>
			<img
				src='https://lh3.googleusercontent.com/fife/ALs6j_H6US3NerQ4ud355_LdSMoOxwNU_KT6Cxj2v_Z38Du_KjmRq8ZPXh392DmLGnDbf41s_c51YmqMpEdE8QSvC1yZmBZUGuR7PTSp_-CQzfO1J8Dp6nMcrPUnMe_UOTi9BScVw1Me0lcoWWvtPqNdxbhtaDS5XgwhHHoxnU72ou7aBi42w1NBwuzpukR0VTKy-MfVHlg-lxgcXoYYgF5QqzoFo7uzs98aizP63J8pQogWzddcDNUJh6gevRQKXf9lFoiyymExTBEDd4jJyjXbGUmhCl_BGXpDzu8I8vcXWNjBnsd-_cgM9vt0yRCzFOnq0ndbmYGyHuNUKgsGwvokgf3WlweKbYtJuFTT8zd3vB04nNTRaXIxiT_cP54rOHVZ_Q_8m4vE72vGDcJPn5di-kLGy_yxMFgFQE8jE1xUc7soIOT_m4HIMXyF1j9QtWUx_vYMSNgGW5WzQnpMz0XcDXFounn2rN1FoJxslbVa95nkAC73C_XdnLTdYcxGMjuuPphHQPvQPETqweOPqGFGbOr0ung46pmb_ndCQAx-Im9AThUhq8FfnhNAzeN4b9MCLW5mtsYWKUCaUdYh1EtR4pdS0lY5pTBi7JSIsGk-t-LRYHMJClYqHESGWYPlnYWcw9Zz3mQHABd4gwCYCgnrrDS-pQwsUO52llMIWLnMODQgEl-_cAJhgwn_g6rm1CvalhniuZe_hE_FVQpHqr3Wu2ueRLFL56a6NnuFDUj3Env68CVzauIxyT0YUNVg_7LH-ZUUw8ftujljNZWqxtUTnar12he5Ih8dwLdjk-wisxR6C5HXUbOXCRVedxQGWxdSEo5pIBiypB20U3Sjgy5ZlMJwTqMbDlULy4jxh62dCBqoJS7WjT9MJJ7fsttaD25zNyFDW3ZK6YE4LvGpI-qLz-mazIDBfLuqwUieISpNZZIljIlBiXEd9iK42T977SXM-yGnQhO-GVsmsePR5WKUf7rUsbHs9WcsEcVNJag1Rq0apgji9g6m9lZDEXrqO4N3m4CUcsbfFHt_0VLzmKR0O-iSK9__by8xKwsfeD_eMZjr7wBjLncU4DC7Q8_eStATWTAgMX-bSusrwIeNXNhyl7JPPP51lfcCfYwspZWp2QRxhV3wF68iHagG2_IRduB0zRIAc_-zJqBtSZTMtYmestFejDaYymE2Pp8B33xTe4Zoua0nVyhBXwpKw5__I2clEW7RukyAEqYqV7dH2qN_Mhc0jP6Ekt1x5--LmuxsJ-ijHelsQn-FuScofu4HFcMijbDubNaRYr0KeD6dR6eDx9yb6eHTwhXYPoiz6Ry8LM_MItzJz8b1vzdYbdDn069LrRnMjYBgO4RwAFObSni2Lafyi5J1S6aK9HJMVP6EIXu_A-FOvYiBq7G-t6pGiKftCfCWF8kpt1V2p8RYq_2LYSqKsVe--ipPMJ4FWXMnFxNd3n_yKNNbNHG33CT5U1Vo1yl1WSAip1Hl9KxUMUTncha3ea6CqYvagig7v4Qmd2nzxMOkn5GlpYeQLvpArjBI0KpdZCnxz0Sv69ioEr0U-CVrBHMIHtCkCLvD4EcfSaZ0ZkvZ2ka307xjaYC0Xvux5DdGE8yrbvbu6OkMYP38QrJM9_OLTR7O-rYGvk6uWsUaG4-28ZA=w1311-h686'
				alt='CarImg'
				className='carimg'
				rel='preload'
				loading='eager'
			/>
		</div>
	);
};

const Titles = ({ title, subtitle }) => {
	return (
		<div className='datas-title'>
			<div className='data-title'>{title}</div>
			<p className='data-subtitle'>{subtitle}</p>
		</div>
	);
};
export default HeroBanner;
