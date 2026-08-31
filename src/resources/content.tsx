import type {
	About,
	Blog,
	Gallery,
	Home,
	Newsletter,
	Person,
	Social,
	Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
	firstName: "Serra",
	lastName: "Allgood",
	name: "Serra Allgood",
	role: "Staff Software Engineer",
	avatar: "/images/avatar.jpg",
	email: "serra@allgood.dev",
	location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
	languages: [], // optional: Leave the array empty if you don't want to display languages
	locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW',
	physicalLocation: "Vermont",
};

const newsletter: Newsletter = {
	display: false,
	title: <>Subscribe to {person.firstName}'s Newsletter</>,
	description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
	// Links are automatically displayed.
	// Import new icons in /once-ui/icons.ts
	// Set essentials: true for links you want to show on the about page
	{
		name: "GitHub",
		icon: "github",
		link: "https://github.com/serra-allgood",
		essential: true,
	},
	{
		name: "LinkedIn",
		icon: "linkedin",
		link: "https://www.linkedin.com/in/serra-allgood",
		essential: true,
	},
	{
		name: "Email",
		icon: "email",
		link: `mailto:${person.email}`,
		essential: true,
	},
];

const home: Home = {
	path: "/",
	image: "/images/og/home.jpg",
	label: "Home",
	title: `${person.name}'s Portfolio`,
	description: `Portfolio website showcasing my work as a ${person.role}`,
	headline: <>Self-taught software engineer and nonbinary iconoclast</>,
	featured: {
		display: false,
		title: (
			<Row gap="12" vertical="center">
				<strong className="ml-4">Once UI</strong>{" "}
				<Line background="brand-alpha-strong" vert height="20" />
				<Text marginRight="4" onBackground="brand-medium">
					Featured work
				</Text>
			</Row>
		),
		href: "/work/building-once-ui-a-customizable-design-system",
	},
	subline: (
		<>
			I'm {person.firstName}, a {person.role.toLowerCase()} at{" "}
			<Text as="span" size="xl" weight="strong">
				Unite Us
			</Text>
			, where I craft exceptional code architecture and infrastructure. After
			hours, I hack on new technologies. Any pronouns accepted.
		</>
	),
};

const about: About = {
	path: "/about",
	label: "About",
	title: `About – ${person.name}`,
	description: `Meet ${person.name}, ${person.role} from ${person.physicalLocation}`,
	tableOfContent: {
		display: true,
		subItems: false,
	},
	avatar: {
		display: true,
	},
	calendar: {
		display: false,
		link: "https://cal.com",
	},
	intro: {
		display: true,
		title: "Introduction",
		description: (
			<>
				Serra is a Vermont-based staff software engineer who designs elegant
				solutions for complex problems across industries. Largely self-taught,
				she has earned recognition in every role she's taken on as an
				exceptional adaptability and relentless pace of learning let her thrive
				in any environment. Her passion lives at the intersection of technology
				and people, guided by two core values: radical authenticity and
				intentional curiosity. She keeps her focus where it matters most:
				delivering on time, learning continuously, and advancing the goals of
				the organizations she serves.
			</>
		),
	},
	work: {
		display: false, // set to false to hide this section
		title: "Work Experience",
		experiences: [
			{
				company: "FLY",
				timeframe: "2022 - Present",
				role: "Senior Design Engineer",
				achievements: [],
				images: [
					// optional: leave the array empty if you don't want to display images
				],
			},
			{
				company: "Creativ3",
				timeframe: "2018 - 2022",
				role: "Lead Designer",
				achievements: [],
				images: [],
			},
		],
	},
	studies: {
		display: true, // set to false to hide this section
		title: "Studies",
		institutions: [
			{
				name: "Georgia Insitute of Technology",
				description: (
					<>
						Currently in progress in the Online Master's of Computer Science
						program.
					</>
				),
			},
		],
	},
	technical: {
		display: true, // set to false to hide this section
		title: "Technical skills",
		skills: [
			{
				title: "Elixir",
				description: (
					<>
						Leveraging an expressive and powerful language for distributed
						applications.
					</>
				),
				tags: [
					{
						name: "Phoenix",
					},
				],
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title: "Ruby on Rails",
				description: <>Working with the Rails framework since version 2.</>,
				tags: [
					{
						name: "RSpec",
					},
					{
						name: "Cucumber",
					},
				],
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title: "JavaScript/TypeScript",
				description: (
					<>
						Building responsive Single Page Applications for a variety of user
						experiences, as well as back end microservices.
					</>
				),
				tags: [
					{
						name: "React",
					},
					{
						name: "Next.js",
					},
					{
						name: "Node",
					},
				],
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
			{
				title: "Amazon Web Services",
				description: (
					<>Deploying and scaling web services effectively and reliably.</>
				),
				tags: [
					{
						name: "Kubernetes",
					},
					{
						name: "Helm",
					},
					{
						name: "Terraform",
					},
					{
						name: "CloudFormation",
					},
				],
				// optional: leave the array empty if you don't want to display images
				images: [],
			},
		],
	},
};

const blog: Blog = {
	path: "/blog",
	label: "Blog",
	title: "Writing about design and tech...",
	description: `Read what ${person.name} has been up to recently`,
	// Create new blog posts by adding a new .mdx file to app/blog/posts
	// All posts will be listed on the /blog route
};

const work: Work = {
	path: "/work",
	label: "Work",
	title: `Projects – ${person.name}`,
	description: `Design and dev projects by ${person.name}`,
	// Create new project pages by adding a new .mdx file to app/blog/posts
	// All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
	path: "/gallery",
	label: "Gallery",
	title: `Photo gallery – ${person.name}`,
	description: `A photo collection by ${person.name}`,
	// Images by https://lorant.one
	// These are placeholder images, replace with your own
	images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
