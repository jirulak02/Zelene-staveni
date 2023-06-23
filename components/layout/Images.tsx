"use client";

import Image from "next/image";
import { useState } from "react";

import Modal from "../ui/Modal";

export type ImagesProps = {
	data: ImageProps[];
};

export type ImageProps = {
	id: string;
	name?: string;
	alt: string;
	url: string;
};

export const startItem: ImageProps = {
	id: "",
	name: "",
	alt: "",
	url: "",
};

export default function Images({ data }: ImagesProps) {
	const [openModal, setOpenModel] = useState(false);
	const [itemState, setItemState] = useState(startItem);

	function modalHandler(item: ImageProps) {
		setItemState(item);
		setOpenModel(true);
	}

	function closeModal() {
		setOpenModel(false);
	}

	return (
		<div className="grid grid-cols-2 gap-2 sm:grid-cols-auto">
			{data.map((item) => (
				<Image
					key={item.id}
					className="m-auto w-[200px] cursor-pointer sm:m-0"
					alt={item.alt}
					width="400"
					height="300"
					placeholder="blur"
					blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
					src={item.url}
					onClick={() => {
						modalHandler(item);
					}}
				/>
			))}
			{openModal && <Modal item={itemState} close={closeModal} />}
		</div>
	);
}
