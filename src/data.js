import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
	{
		id: 1,
		href: '#home',
		text: 'home',
	},
	{
		id: 2,
		href: '#about',
		text: 'about',
	},
	{
		id: 3,
		href: '#services',
		text: 'services',
	},
	{
		id: 4,
		href: '#tours',
		text: 'tours',
	},
];

export const socialLinks = [
	{ id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
	{ id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
	{ id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const services = [
	{
		id: 1,
		icon: 'fas fa-wallet fa-fw',
		title: 'Saving money',
		text: 'We offer budget-friendly travel options, ensuring you explore the world without breaking the bank.',
	},
	{
		id: 2,
		icon: 'fas fa-tree fa-fw',
		title: 'Endless hiking',
		text: 'Join us for unforgettable hiking adventures through stunning landscapes, tailored for all skill levels.',
	},
	{
		id: 3,
		icon: 'fas fa-socks fa-fw',
		title: 'Amazing comfort',
		text: 'Experience top-notch comfort with our carefully selected accommodations and personalized travel plans.',
	},
];

export const tours = [
	{
		id: 1,
		image: tour1,
		data: 'august 26th, 2025',
		title: 'Tibet Adventure',
		text: 'Explore the mysterious mountainous landscapes of Tibet, where ancient monasteries await, sacred lakes and encounter the unique culture of the local people.',
		location: 'China',
		days: 6,
		cost: 2100,
	},
	{
		id: 2,
		image: tour3,
		data: 'october 1th, 2025',
		title: 'Japanese Odyssey',
		text: 'Immerse yourself in a world of Japanese harmony, from the blossoming gardens of Kyoto to the bustling streets of Tokyo From the flowering gardens of Kyoto to the bustling streets of Tokyo, with temple visits and traditional sake tasting.',
		location: 'Japan',
		days: 8,
		cost: 3200,
	},
	{
		id: 3,
		image: tour4,
		data: 'september 15th, 2025',
		title: 'Sahara Expedition',
		text: 'Travel to the heart of the Sahara Desert where nights under the stars await, camel rides and Bedouin traditions.',
		location: 'Morocco',
		days: 5,
		cost: 1800,
	},
	{
		id: 4,
		image: tour2,
		data: 'december 5th, 2025',
		title: 'Patagonia Trek',
		text: 'Walk the trails of Patagonia, enjoy views of glaciers, crystal clear lakes and the majestic Andes with experienced guides.',
		location: 'Kenya',
		days: 7,
		cost: 2500,
	},
];
