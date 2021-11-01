import React from 'react';
import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import CloudLeftImage1 from '@components/clouds/CloudLeftImage1';
import branch from '../../../resources/images/branch.png'
import foodForDog from '../../../resources/images/dog-food.png'
import ballForDog from '../../../resources/images/orange-ball.png'

function ContainerImages() {
    return (
        <Flex
            w={['100%', '100%', '100%', '160%', '160%',]}
            position="relative"
            mt={['40px', '40px', '40px', '0px', '0px']}
        >
            <CloudLeftImage1
                id={'bg-yellow-32asq211'}
                fill="#FFC833"
                x={'0'}
                y={'-400'}
                sizeW={'180%'}
                sizeH={'180%'}
            />
            <Image
                animation='move 15s infinite linear'
                position="absolute"
                objectFit="cover"
                bottom="20%"
                right="20%"
                w={['200px', '200px', '300px', '400px', '40%']}
                src={branch.src}
            />
            <Image
                animation='move 10s infinite linear'
                position="absolute"
                objectFit="cover"
                w={['200px', '200px', '300px', '400px', '50%']}
                right={['10%', '10%', '10%', '0', '0']}
                bottom={['40%', '40%', '40%', '30%', '30%']}
                src={foodForDog.src}
            />
            <Image
                animation='rotate 10s infinite linear'
                position="absolute"
                objectFit="cover"
                maxW="200px"
                w={['80px', '80px', '100px', '150px', '150px', '40%']}
                left={['10%', '10%', '10%', '40%', '40%']}
                top="20%"
                src={ballForDog.src}
            />
        </Flex>

    );
}

export default ContainerImages;