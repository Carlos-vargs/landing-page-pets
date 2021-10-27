import { Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import CloudLeftImage1 from '@components/clouds/CloudLeftImage1';
import { Image } from '@chakra-ui/image';
import branch from '../../../resources/images/branch.png'
import foodForDog from '../../../resources/images/dog-food.png'
import ballForDog from '../../../resources/images/orange-ball.png'
import Btn from '@components/Btn';

function Section2() {



    return (
        <Flex
            w="full"
        >
            <Flex w="800px" h="800px" position="relative" >
                <CloudLeftImage1
                    id={'bg-yellow-32asq211'}
                    fill="#FFC833"
                    x={'0'}
                    y={'-400'}
                    sizeW={'180%'}
                    sizeH={'180%'}
                />
                <Image position="absolute" objectFit="cover" w="200px" src={branch.src} />
                <Image position="absolute" objectFit="cover" w="200px" src={foodForDog.src} />
                <Image position="absolute" objectFit="cover" w="200px" src={ballForDog.src} />
            </Flex>
            <Flex direction="column" gridGap="30px" px="36px" justifyContent="center" >
                <Heading fontSize="58px" fontWeight="700" >
                    We can keep <br />
                    <Heading as="strong" color="#ED6436" fontSize="58px" fontWeight="700" > them happy </Heading>
                </Heading>
                <Text whiteSpace="pre-wrap" fontSize="18px" lineHeight="1.7" >
                    From the time our friends sniff their way through the door
                    in the morning until they wag their weary, but satisfied
                    tails out in the afternoon, we cater to their nature.
                </Text>
                <Btn
                    fSize={'14px'}
                    letterSpacing={'1.2px'}
                    title={'BOOK NOW'}
                    borderTopStartRadius={'none'}
                    change={true}
                    colorHover={'black'}
                    color={'white'}
                    width={'136px'}
                    gap={'12px'}
                    fw={'700'}
                />
            </Flex>
        </Flex>
    );
}

export default Section2;