import Image from "next/image";

import { dataKytky } from "@/components/data/SluzbyStrechy";
import ContainerBezova from "@/components/layout/ContainerBezova";
import Images from "@/components/layout/Images";

export default function Plantaz() {
	return (
		<ContainerBezova>
			<div className="flex flex-col space-y-3 md:space-y-5">
				<div
					className="m-auto flex items-center justify-center rounded-full bg-neutral-100"
					style={{ width: "120px", height: "120px" }}
				>
					<Image
						style={{ width: "50px" }}
						alt="Ikona skalničky"
						width="100"
						height="100"
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
						src="https://uploadthing.com/f/e3b98002-4bf2-4acc-8f1c-be888af923e2_flowers.png"
					/>
				</div>
				<h3 className="text-center text-hneda">Máme vlastní plantáž</h3>
				<Images data={dataKytky} />
			</div>
		</ContainerBezova>
	);
}
