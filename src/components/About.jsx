import about from '../images/about.jpeg';
import Title from './Title.jsx';

const About = () => {
	return (
		<section className="section" id="about">
			<Title title="about" subTitle="us" />

			<div className="section-center about-center">
				<div className="about-img">
					<img src={about} className="about-photo" alt="awesome beach" />
				</div>
				<article className="about-info">
					<h3>explore the difference</h3>
					<p>
						We are passionate travelers dedicated to crafting unique adventures.
						Explore the difference with us—immerse in diverse cultures, uncover
						hidden gems, and journey beyond the ordinary.
					</p>
					<p>
						Your unforgettable experience starts here, guided by our expertise
						and love for exploration.
					</p>
					<a href="#about" className="btn">
						read more
					</a>
				</article>
			</div>
		</section>
	);
};

export default About;
