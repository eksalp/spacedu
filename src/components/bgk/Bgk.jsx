import React from 'react';
import './Bgk.css';
import BgkCard from './Bgk.js';
import { Row, Col, Container } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Bgk = () => {
	const accordionData = [
		{
			Name: 'My Mumbai BGK',
			Collaboration: 'Ngo',
			Address: 'Mumbai, Maharashtra, India',
            Incharge_designation:"Head",
            Incharge_phone:"998899770",
            Incharge_email:"incharge@email.com",

		},
				
	];

	return (
		<Container id="gurukul">
			<div className="headi">
				<h1>Balgurukul</h1>
			</div>
			<div >
				<Row className="row-exp bkg">
					<Row >
						{accordionData.map((accordion, index) => {
							return <BgkCard key={index} {...accordion} />;
						})}
					</Row>
				</Row>
			</div>
		</Container>
	);
};

export default Bgk;
