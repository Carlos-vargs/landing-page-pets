import React, { useState } from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Stack, Text } from '@chakra-ui/layout';
import MenuIcon from '@icons/MenuIcon';
import XIcon from '@icons/XIcon';
import NavHeader from '@components/NavHeader';
import logo from '../../resources/images/kasam-house-logo-w.png'
import ContainerSocialNetworks from '@components/social_networks/ContainerSocialNetworks';
import Facebook from '@components/social_networks/Facebook';
import Instagram from '@components/social_networks/Instagram';
import Github from '@components/social_networks/Github';
import Twitter from '@components/social_networks/Twitter';
import { nanoid } from 'nanoid';

function ContainerNavHeaderResponsive({ data }) {


    const [isOpen, setisOpen] = useState(false)
    const [sizeRight, setSizeRight] = useState(0)

    function setOpen() {
        setisOpen(true)
    }

    function setClose() {
        setisOpen(false)
    }

    function handleClick() {
        if (isOpen) {
            setSizeRight(1000)

            setTimeout(() => {
                setClose()
            }, 400);

        } else {
            setSizeRight(0)

            setOpen()

        }
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
        <Center
            display={['flex', 'flex', 'flex', 'none', 'none']}
            alignItems="center"
            alignSelf="center"

        >
            <Box onClick={handleClick} cursor="pointer" h="40px" w="40px" _hover={{
                color: '#ED6436',
            }}>
                <MenuIcon />
            </Box>

            {
                isOpen && <Stack
                    className="animate__animated animate__fadeInRightBig"
                    position="absolute"
                    h="100vh"
                    zIndex="44"
                    left={`${sizeRight}px`}
                    transition="all 1s ease"
                    right="0" bottom="0"
                    top="0"
                    bgColor="#ED6436"
                    color="white"
                    justifyContent="flex-start"
                    alignItems="center"
                    pt="24%"

                >
                    <Box position="absolute" w="38px" h="38px" right="39px" top="35px" onClick={handleClick} title="Close">
                        <XIcon />
                    </Box>

                    <Image
                        src={logo.src}
                        w="196px"
                    />

                    <Stack pt="40px" fontSize="26px" gridGap="20px">
                        {
                            data.map(e => <NavHeader onClick={handleClick} lineColor={'white'} color={'white'} key={e.id} h={'50px'} data={e} />)
                        }
                        <ContainerSocialNetworks data={socialNetworks} mtSize={'29px !important'} gap={'14px'} revert={true} />
                    </Stack>

                </Stack>
            }

        </Center>
    );
}

export default ContainerNavHeaderResponsive;