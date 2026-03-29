import Timeline from "@/components/Timeline";

export default function Experience() {
	const jobData = [
		{
			start: "07/2019",
			end: "08/2019",
			title: "Technology Analyst Intern",
			subtitle: "Morgan Stanley",
			bullets: [
				"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
				"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			],
		},
		{
			start: "09/2019",
			end: "06/2020",
			title: "Web Development Intern",
			subtitle: "CMYK",
			bullets: [
				"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			],
		},
		{
			start: "05/2021",
			end: "05/2023",
			title: "Research Assistant",
			subtitle: "Brown University",
			bullets: [
				"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			],
		},
		{
			start: "05/2022",
			end: "12/2023",
			title: "Teaching Assistant",
			subtitle: "Brown University",
			bullets: [
				"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			],
		},
		{
			start: "05/2023",
			end: "08/2023",
			title: "Engine Engineering Intern",
			subtitle: "Infinity Ward",
			bullets: [
				"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			],
		},
		{
			start: "07/2024",
			end: "09/2025",
			title: "Associate Engine Engineer",
			subtitle: "Infinity Ward",
			bullets: [
				"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			],
		},
		{
			start: "09/2025",
			end: "Present",
			title: "Software Engineer",
			subtitle: "Infinity Ward",
			bullets: [
				"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			],
		},
	];

	const schoolData = [
		{
			start: "09/2016",
			end: "06/2020",
			title: "Bergen County Academies",
			subtitle:
				"High School Diploma - Academy for Engineering and Design Technology (AEDT)",
			bullets: [
				"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
				"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			],
		},
		{
			start: "09/2020",
			end: "05/2024",
			title: "Brown University",
			subtitle: "Sc.B. Computer Science",
			bullets: [
				"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			],
		},
	];

	return (
		<div className="max-w-6xl w-full m-auto px-8 py-24">
			<h1 className="font-bold text-5xl">I am employed! And educated! Yay!</h1>
			<p className="my-4">and incredibly lucky for it</p>
			<div className="my-16">
				<h2 className="font-bold text-3xl">Work Experience</h2>
				<Timeline entries={jobData} />
			</div>
			<div className="my-16">
				<h2 className="font-bold text-3xl">Education</h2>
				<Timeline entries={schoolData} />
			</div>
		</div>
	);
}
