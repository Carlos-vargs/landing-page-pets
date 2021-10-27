import { Center, Flex } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"
import logo from "../../resources/images/kasam-house-logo-h.png"
import ContainerNavHeader from './ContainerNavHeader';
import ContainerNavHeaderResponsive from './ContainerNavHeaderResponsive';


function Header() {

	const nav = [
		{
			id: '06d65c88-5a7e-49b5-9b69-054bb4892634',
			url: '#home',
			title: 'home',
		},
		{
			id: '1eaa0d45-5201-4716-b576-ae443c61541a',
			url: '#about',
			title: 'about',
		},
		{
			id: '5267ac9b-b19e-4207-904b-a16e64095224',
			url: '#services',
			title: 'services',
		},
		{
			id: 'e744c6cc-7e0e-4809-a8c0-02f55baa41bd',
			url: '#reviews',
			title: 'reviews',
		},
		{
			id: '7dc3ff75-f257-430e-9d99-a4e5fbe42dde',
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
			px={['28px', '28px', '28px', '78px', '78px']}
			justifyContent='space-between'
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