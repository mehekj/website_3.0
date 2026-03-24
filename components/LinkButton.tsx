"use client";

import Link from "next/link";
import { PropsWithChildren } from "react";

interface LinkButtonProps {
	href: string;
	icon?: React.ReactNode;
}

export default function LinkButton(props: PropsWithChildren<LinkButtonProps>) {
	return (
		<Link
			href={props.href}
			target="_blank"
			className="group border-1 px-4 py-2 cursor-pointer hover:translate-[-2px] hover:shadow-[5px_5px] hover:border-main shadow-black dark:shadow-white hover:shadow-main transition duration-200"
		>
			{props.icon} {props.children}
		</Link>
	);
}
