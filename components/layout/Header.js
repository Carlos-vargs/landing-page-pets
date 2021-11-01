import { Center, Flex } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"
import { nanoid } from 'nanoid';
import logo from "../../resources/images/kasam-house-logo-h.png"
import ContainerNavHeader from './ContainerNavHeader';
import ContainerNavHeaderResponsive from './ContainerNavHeaderResponsive';


function Header() {

	const nav = [
		{
			id: nanoid(),
			url: '#home',
			title: 'home',
		},
		{
			id: nanoid(),
			url: '#about',
			title: 'about',
		},
		{
			id: nanoid(),
			url: '#services',
			title: 'services',
		},
		{
			id: nanoid(),
			url: '#reviews',
			title: 'reviews',
		},
		{
			id: nanoid(),
			url: '#pricing',
			title: 'pricing',
		},
	]

	const phoneNumber = "+1 435 237-2950"

	return (
		<Flex
			as="header"
			w={'full'}
			h="80px"
			px={['16px', '16px', '16px', '78px', '78px']}
			justifyContent='space-between'
			position="fixed"
			bgColor="white"
			zIndex="9999"
		>
			<Center>
				<Image width="full" h="44px" src={logo.src} alt={'logo'} />
			</Center>
			<ContainerNavHeaderResponsive data={nav} />
			<ContainerNavHeader data={nav} phoneNumber={phoneNumber} />
		</Flex >
	);
}

export default Header;