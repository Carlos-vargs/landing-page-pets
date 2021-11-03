import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Flex } from '@chakra-ui/layout';
import CloudLeftImage1 from '@components/clouds/CloudLeftImage1';
import ballForDog from '../../../resources/images/orange-ball.png'
import kasam from "../../../resources/images/kasam2.png";
import CloudLeftImgBorderNone from '@components/clouds/CloudLeftImgBorderNone';

function ContainerImage() {
    return (
        <Flex
            w={['100%', '100%', '100%', '160%', '160%',]}
            position="relative"
            mt={['40px', '40px', '40px', '0px', '0px']}

        >
            <Box position="relative" w={['100%', '100%', '100%', '160%', '160%',]}>
                <CloudLeftImage1
                    fill="#FFC833"
                />
                <Box position="absolute" w="full" h="full" top="0" zIndex="2" >
                    <CloudLeftImgBorderNone
                        url={kasam.src}
                        x={'500'}
                        y={'-40'}
                        sizeW={'100%'}
                        sizeH={'100%'}
                        id={'kas3e2'}
                    />

                </Box>
            </Box>
            <Image
                animation='rotate 10s infinite linear'
                position="absolute"
                objectFit="cover"
                maxW="200px"
                w={['80px', '80px', '100px', '150px', '150px', '40%']}
                left={['10%', '10%', '10%', '20%', '20%']}
                top="20%"
                src={ballForDog.src}
            />
        </Flex>
    );
}

export default ContainerImage;