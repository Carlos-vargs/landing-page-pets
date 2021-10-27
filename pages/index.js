import { Fragment } from "react";
import Section1 from "@components/sections/section1/Section1";
import Section2 from "@components/sections/section2/Section2";

export default function Home() {
	return (
		<Fragment>
			<Section1 />
			<Section2 />
		</Fragment>
	);
}
