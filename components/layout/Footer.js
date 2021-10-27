import React from 'react';
import { Box, Flex, Heading, Stack } from '@chakra-ui/layout';
import logo from '../../resources/images/kasam-house-logo-v.png'
import { Image } from '@chakra-ui/image';
import Facebook from '@components/social_networks/Facebook';
import Instagram from '@components/social_networks/Instagram';
import Github from '@components/social_networks/Github';
import Twitter from '@components/social_networks/Twitter';
import ContainerSocialNetworks from '@components/social_networks/ContainerSocialNetworks';
import { Input } from '@chakra-ui/input';
import Btn from '@components/Btn';


function Footer() {

    const info = {
        about: [
            {
                id: "FV03eweu_G",
                title: "Salt Lake City, Utah(UT)",
            },
            {
                id: "KdZ8ObRRN2",
                title: "+1 435 237-2950",
            },
            {
                id: "gxR0xG_Gr5",
                title: "Mon - Sun: 8AM - 8PM"
            },

        ],
        quickLinks: [
            {
                id: "9G5DTMoDojy-2",
                title: "Dog Boarding Services",
            },
            {
                id: "b-v4IPi8832E7",
                title: "Cat Boarding Services",
            },
            {
                id: "_863rbrHL1cYp",
                title: "Spa and Grooming Services",
            },
        ]
    }

    const socialNetworks = [
        {
            id: "004a2301-92c5-489b-9c77-301f72b77968",
            socialNetwork: 'Facebook',
            iconSvg: <Facebook />,
            pl: '6px'
        },
        {
            id: "dd08d91d-8488-4071-b274-b7c07f6c8895",
            socialNetwork: 'Instagram',
            iconSvg: <Instagram />,
            url: 'https://www.instagram.com/nc_cvargas',
        },
        {
            id: "8a0dc83b-4eca-41a3-9b40-b006323829d9",
            socialNetwork: 'Github',
            iconSvg: <Github />,
            url: 'https://github.com/Carlos-vargs',
        },
        {
            id: "5513d04d-7e31-4470-8e03-31f18cd7339e",
            socialNetwork: 'Twitter',
            iconSvg: <Twitter />,
            url: 'https://twitter.com/nc_cvargas',
            pt: "2px"
        },
    ]


    return (
        <Flex
            px={['28px', '28px', '28px', '78px', '78px']}
            direction={['column', 'column', 'column', 'row', 'row']}
            flexWrap="wrap"
            gridGap={['20px', '20px', '20px', '100px', '100px']}
            justifyContent="space-between"
            alignItems={['center', 'center', 'center', 'flex-start', 'flex-start',]}
            textAlign={['center', 'center', 'center', 'left', 'left']}
            paddingBlockEnd="26px"
        >
            <Stack w="196px" >
                <Image src={logo.src} />
                <ContainerSocialNetworks data={socialNetworks} mtSize={'29px !important'} gap={'14px'} />
            </Stack>
            <Stack gridGap="2px" >
                <Heading as="h3" color="#ed6436" fontSize="23px" >About</Heading>
                {
                    info.about.map(e => <Box key={e.id} >{e.title}</Box>)
                }
            </Stack>
            <Stack gridGap="2px" >
                <Heading as="h3" color="#ed6436" fontSize="23px" >Quick Links</Heading>
                {
                    info.quickLinks.map(e => <Box key={e.id} >{e.title}</Box>)
                }
            </Stack>
            <Stack>
                <Heading as="h3" color="#ed6436" fontSize="23px" >Newsletter</Heading>
                <Input
                    placeholder="Your email"
                    border="1px solid gray"
                    borderRadius="full"
                    w="full"
                    type="email"
                    autoComplete="email"
                    _placeholder={{ textAlign: "center" }}
                />
                <Btn
                    fSize={'12px'}
                    letterSpacing={'1.2px'}
                    title={'SUBSCRIBE'}
                    borderTopEndRadius={'none'}
                    change={true}
                    colorHover={'black'}
                    color={'white'}
                    width={'full'}
                    gap={'12px'}
                />

            </Stack>
        </Flex>
    );
}

export default Footer;