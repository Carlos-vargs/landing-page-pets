import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import CloudRightImage2 from '@components/clouds/CloudRightImage2'
import BoneIcon from '@components/icons/BoneIcon';
import bgImage from '../../../resources/images/image-background-h.jpg'
import Services from './Services';
import CatIcon from '@components/icons/CatIcon';
import SpaIcon from '@components/icons/SpaIcon';
import HouseDogIcon from '@components/icons/HouseDogIcon';

function Section1() {

	let timer = 1
	let timer1 = 0
	let timer2 = 0


	const data = [
		{
			id: "635a21fd-2b57-4913-8e43-c7ff39e19dd1",
			title: "Cat Boarding",
			description: `Your pets will also be exposed to plenty
of human interaction, time outside.`,
			icon: <CatIcon />,
			op: timer,

		},
		{
			id: "773cd688-d68f-495c-9291-a209a64a4dff",
			title: "Pet Spaa",
			description: `We have a variety of quality shampoos
as well as medicated shampoo.`,
			icon: <SpaIcon />,
			op: timer1,

		},
		{
			id: "c0408e0b-f018-4198-a90d-74cb3e2820a2",
			title: "Dog Boarding",
			description: `Short term and long term pet board.
Luxury dog kennels, exercise.`,
			icon: <HouseDogIcon />,
			op: timer2,
		},
	]



	return (
		<Flex w="full" justifyContent="space-between" alignItems="flex-start" className="scroll-mt"
			pl={['28px', '28px', '28px', '78px', '78px']}
		>

			<Box>
				<Heading fontWeight="800" fontSize="76px" fontWeight="700" mt="60px" >
					<Text as="strong" fontWeight="800" fontSize="76px" fontWeight="700" color="#ED6436" >Enjoy Your </Text> <br />
					Holiday
				</Heading>
				<Flex mt="50px" position="relative" h="100px" w="500px" mb="80px">
					{
						data.map(e => <Services key={e.id} data={e} />)
					}
				</Flex>
				<Flex
					w="260px"
					mt="30px"
					cursor="pointer"
					transition="transform .3s ease"
					position="relative"
					_hover={{
						transform: "rotate(10deg)"

					}} >
					<BoneIcon
						url={bgImage.src}
						x={'-110'}
						y={'0'}
						sizeW={'200%'}
						sizeH={'100%'}
						id={'bone23-0321bdce-223xadfg'}
					/>
					<Text as="strong"
						color="white"
						fontSize="20px"
						top="39%"
						left="28%"
						transform="rotate(-6deg)"
						position="absolute"
						textTransform="uppercase"
					>
						boox now
					</Text>
				</Flex>
			</Box>

			<CloudRightImage2
				id={'wolfImg'}
				url={'https://images.unsplash.com/photo-1541876176131-3f5e84a7331a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'}
				x={'-380'}
				y={'-200'}
				sizeW={'180%'}
				sizeH={'180%'}
			/>
		</Flex>
	);
}

export default Section1;