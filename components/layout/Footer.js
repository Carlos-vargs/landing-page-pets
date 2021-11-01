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
import { nanoid } from 'nanoid';


function Footer() {

    const info = {
        about: [
            {
                id: nanoid(),
                title: "Salt Lake City, Utah(UT)",
            },
            {
                id: nanoid(),
                title: "+1 435 237-2950",
            },
            {
                id: nanoid(),
                title: "Mon - Sun: 8AM - 8PM"
            },

        ],
        quickLinks: [
            {
                id: nanoid(),
                title: "Dog Boarding Services",
            },
            {
                id: nanoid(),
                title: "Cat Boarding Services",
            },
            {
                id: nanoid(),
                title: "Spa and Grooming Services",
            },
        ]
    }

    const socialNetworks = [
        {
            id: nanoid(),
            socialNetwork: 'Facebook',
            iconSvg: <Facebook />,
            pl: '6px'
        },
        {
            id: nanoid(),
            socialNetwork: 'Instagram',
            iconSvg: <Instagram />,
            url: 'https://www.instagram.com/nc_cvargas',
        },
        {
            id: nanoid(),
            socialNetwork: 'Github',
            iconSvg: <Github />,
            url: 'https://github.com/Carlos-vargs',
        },
        {
            id: nanoid(),
            socialNetwork: 'Twitter',
            iconSvg: <Twitter />,
            url: 'https://twitter.com/nc_cvargas',
            pt: "2px"
        },
    ]


    return (
        <Flex
            bgColor="transparent"
            mt="40px"
            px={['0px', '0px', '0px', '78px', '78px']}
            direction={['column', 'column', 'column', 'row', 'row']}
            flexWrap="wrap"
            gridGap={['20px', '20px', '20px', '100px', '100px']}
            justifyContent={['center', 'center', 'center', 'center', 'space-between']}
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
            <Stack >
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
                    colorHover={'#ed6436'}
                    color={'white'}
                    width={'full'}
                    gap={'12px'}
                    fw={'700'}
                />

            </Stack>
        </Flex>
    );
}

export default Footer;