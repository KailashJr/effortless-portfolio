import { InformationType, Theme } from "types";

/**
 * The theme of your portfolio. You can select one from the following. Make sure you and your friend choose a different one.
 * ["light",	"dark",	"cupcake",	"bumblebee",	"emerald",	"corporate",	"synthwave",	"retro",	"cyberpunk",	"valentine",	"halloween",	"garden",	"forest",	"aqua",	"lofi",	"pastel",	"fantasy",	"wireframe",	"black",	"luxury",	"dracula",	"cmyk",	"autumn",	"business",	"acid",	"lemonade",	"night",	"coffee",	"winter"]
 *
 * @type {Theme}
 */
export const theme: Theme = "cyberpunk";

export const analyticsId = "G-2S22V4P442";
export const deployedURL = "https://effortless-portfolio.vercel.app";

export const information: InformationType = {
	email: "jirelkailash2020@gmail.com",
	firstName: "Kailash",
	lastName: "Jirel",
	description:
		"This website is under developement.",
	highlightingStats: [
		{
			title: "Projects",
			value: 4,
		},
		{
			title: "Balls",
			value: 2,
		},
	],
	socials: {
		github: "http://github.com/KailashJr",
		linkedin: "https://www.linkedin.com/in/kailash-jirel-388b73217/",
		twitter: null,
		instagram: "https://www.instagram.com/kailashjirel14/",
		facebook: "https://www.facebook.com/kailash.jirel.908/",
		medium:null,
		youtube:null,
		stackoverflow:null,
	},
	whatido:
		"I`ve been passionate about machine design for several years and am presently pursuing a degree as a Mechanical Engineer with an emphasis on Computational Fluid Dynamics(CFD),Design and Robotics.",
	skills: [
		{
			type: "Languages",
			list: ["English", "Jirel", "Hindi", "Nepali"],
		},
	],
	skillsWithIcons: [
		{
			type: "Frontend Centric",
			list: ["HTML", "CSS", "Javascript", "React", "Nextjs", "Angular"],
		},
		{
			type: "Backend Centric",
			list: ["Typescript", "Graphql", "Nodejs", "Nestjs", "Expressjs"],
		},
		{
			type: "Data Centric",
			list: ["Python", "Scikit Learn", "Tensorflow", "Keras", "Pytorch"],
		},
	],
	projects: [
		{
			name: "Portfolio",
			description: "This is my portfolio website.",
			link: "https://sahrohit.github.io/",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "Typescript"],
		},
		{
			name: "Portfolio",
			description: "This is my portfolio website.",
			link: "https://sahrohit.github.io/",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "Typescript", "Javascript", "Typescript"],
		},
		{
			name: "Portfolio",
			description: "This is my portfolio website.",
			link: "https://sahrohit.github.io/",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "Typescript"],
		},
		{
			name: "Portfolio",
			description: "This is my portfolio website.",
			link: "https://sahrohit.github.io/",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "Typescript"],
		},
	],
	workExperince: [
		{
			company: "Apple Inc.",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et alias delectus autem quia, sint blanditiis, \n facere distinctio perspiciatis rem illo aspernatur dicta quibusdam quisquam, laudantium consequuntur officiis repellendus fugiat!",
			designation: "Senior Product Manager",
			time: "2022 - Present",
			learning: [
				"Learnt to print Hello World",
				"Learnt to center CSS divs",
				"Learnt to crash the production the fastest.",
			],
		},
		{
			company: "Apple Inc.",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et alias delectus autem quia, sint blanditiis, \n facere distinctio perspiciatis rem illo aspernatur dicta quibusdam quisquam, laudantium consequuntur officiis repellendus fugiat!",
			designation: "Senior Product Manager",
			time: "2022 - Present",
			learning: [
				"Learnt to print Hello World",
				"Learnt to center CSS divs",
				"Learnt to crash the production the fastest.",
			],
		},
		{
			company: "Apple Inc.",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et alias delectus autem quia, sint blanditiis, \n facere distinctio perspiciatis rem illo aspernatur dicta quibusdam quisquam, laudantium consequuntur officiis repellendus fugiat!",
			designation: "Senior Product Manager",
			time: "2022 - Present",
			learning: [
				"Learnt to print Hello World",
				"Learnt to center CSS divs",
				"Learnt to crash the production the fastest.",
			],
		},
		{
			company: "Apple Inc.",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et alias delectus autem quia, sint blanditiis, \n facere distinctio perspiciatis rem illo aspernatur dicta quibusdam quisquam, laudantium consequuntur officiis repellendus fugiat!",
			designation: "Senior Product Manager",
			time: "2022 - Present",
			learning: [
				"Learnt to print Hello World",
				"Learnt to center CSS divs",
				"Learnt to crash the production the fastest.",
			],
		},
	],
	cheesyOutro: "Thanks for reading till the end.",
};
