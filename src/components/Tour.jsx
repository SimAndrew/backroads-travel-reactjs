function Tour({ image, data, title, text, location, days, cost }) {
	return (
		<article className="tour-card">
			<div className="tour-img-container">
				<img src={image} className="tour-img" alt="" />
				<p className="tour-date">{data}</p>
			</div>
			<div className="tour-info">
				<div className="tour-title">
					<h4>{title}</h4>
				</div>
				<p>{text}</p>
				<div className="tour-footer">
					<p>
						<span>
							<i className="fas fa-map"></i>
						</span>
						{location}
					</p>
					<p>{days} days</p>
					<p>from ${cost}</p>
				</div>
			</div>
		</article>
	);
}

export default Tour;
