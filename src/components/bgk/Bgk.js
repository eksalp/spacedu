import './Bgk.css';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Row, Col, Container } from 'react-bootstrap';
import {
	CAccordion,
	CAccordionHeader,
	CAccordionItem,
	CAccordionBody,
	CCardText,
	CListGroup,
	CListGroupItem,
	CCardLink
} from '@coreui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const BgkCard = ({ Name, Collaboration, Address, Incharge_designation, Incharge_phone, Incharge_email }) => {
	return (
		<Container className="bgk">
				<Row className="certi-row ">	
						<Col>
							<Row className="details">
								<Row>
									<h2>{Name}</h2>
								</Row>
								<Row>
									<b>Collaboration: </b>
									{Collaboration}
								</Row>
								<Row>
									<b>Address: </b>
									{Address}
								</Row>
							</Row>
							<Row>
								<h3>Incharge</h3>
								<Row>{Incharge_designation}</Row>
								<Row>{Incharge_phone}</Row>
								<Row>{Incharge_email}</Row>
							</Row>
						</Col>
						<Col>
							<Carousel className="car-style">
								<div>
									<img src={require('../assets/1.jpg')} alt="" className="image" />
									<p className="legend">Legend 1</p>
								</div>
								<div>
									<img src={require('../assets/2.jpg')} alt="" className="image" />
									<p className="legend">Legend 2</p>
								</div>
								<div>
									<img src={require('../assets/3.jpg')} alt="" className="image" />
									<p className="legend">Legend 3</p>
								</div>
							</Carousel>
						</Col>
				</Row>
		</Container>
	);
};
export default BgkCard;
