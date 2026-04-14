import ProfileOverlay from "@/components/ProfileOverlay";
import Image from "next/image";

export default function About() {
	return (
		<div className="max-w-6xl w-full m-auto px-8 py-12 md:py-32 h-full flex flex-col md:block">
			<div className="w-96 max-w-full relative md:float-start md:relative mx-auto md:mr-12 md:mb-12 mb-8">
				<div className="peer group relative overflow-hidden aspect-square border hover:translate-1.25 shadow-[10px_10px] hover:shadow-[0px_0px] shadow-black dark:shadow-white transition duration-200 cursor-pointer hover:shadow-main hover:border-main">
					<Image
						src="/profile.jpeg"
						alt="profile pic"
						fill={true}
						className="w-full h-full object-cover scale-150 group-hover:saturate-25"
					/>
				</div>
				<ProfileOverlay />
			</div>
			<h1 className="font-bold text-4xl md:text-5xl mb-4 order-first">
				Hello! I&apos;m Mehek
			</h1>
			<p className="my-4 text-justify">
				I&apos;m a 24 year old software engineer currently working at Infinity
				Ward on the Call of Duty franchise. At IW, I&apos;m on the rendering
				team and I mostly work on writing C++ code for the cross-platform game
				engine, but I also occasionally get to touch pipeline, tools,
				automation, and UI.
			</p>
			<p className="my-4 text-justify">
				Though I&apos;m now located in Los Angeles, I originally grew up in New
				Jersey before moving to Providence, RI where I completed my
				bachelor&apos;s degree in computer science at Brown University. At
				Brown, I was a TA for CS1230: Intro To Computer Graphics and a member of
				the Dash research group.
			</p>
			<p className="my-4 text-justify">
				Aside from coding and playing video games, you can usually find me
				watching too much TV, board gaming, reading, picking up assorted arts
				and crafts projects, and playing the violin poorly.
			</p>
		</div>
	);
}
