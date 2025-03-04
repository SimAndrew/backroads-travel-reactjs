import Title from './Title.jsx';
import { tours } from '../data.js';
import Tour from './Tour.jsx';

const Tours = () => {
	return (
		<section className="section" id="tours">
			<div className="section-title">
				<Title title="featured" subTitle="tours" />
			</div>

			<div className="section-center featured-center">
				{tours.map((tour) => {
					return <Tour key={tour.id} {...tour} />;
				})}
			</div>
		</section>
	);
};

export default Tours;
