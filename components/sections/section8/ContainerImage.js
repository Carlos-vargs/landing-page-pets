import React from 'react';
import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import CloudLeftImage1 from '@components/clouds/CloudLeftImage1';
import ballForDog from '../../../resources/images/orange-ball.png'
import kasam from "../../../resources/images/kasam2.png";

function ContainerImage() {
    return (
        <Flex
            w={['100%', '100%', '100%', '160%', '160%',]}
            position="relative"
            mt={['40px', '40px', '40px', '0px', '0px']}

        >
            <CloudLeftImage1 fill="#FFC833" />
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
            <Image
                src={kasam.src}
                position="absolute"
                right="20%"
                bottom="20%"
                w="300px" />
        </Flex>
    );
}

export default ContainerImage;