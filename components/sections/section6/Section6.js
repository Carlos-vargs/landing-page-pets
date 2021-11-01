import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import Btn from '@components/Btn';
import { nanoid } from 'nanoid';
import ContainerPricing from './ContainerPricing';

function Section6() {

    const data = [
        {
            id: nanoid(),
            time: 1,
            offer: false,
            price: 50,
            services: [
                {
                    id: nanoid(),
                    sevice: 'Double room',
                    available: true,
                },
                {
                    id: nanoid(),
                    sevice: 'Socialise',
                    available: true,
                },
                {
                    id: nanoid(),
                    sevice: 'Brush',
                    available: true,
                },
                {
                    id: nanoid(),
                    sevice: 'Pet TV',
                    available: false,
                },
            ]
        },
        {
            id: nanoid(),
            time: 10,
            offer: true,
            price: 350,
            services: [
                {
                    id: nanoid(),
                    sevice: 'Single room',
                    available: true,
                },
                {
                    id: nanoid(),
                    sevice: 'Socialise',
                    available: true,
                },
                {
                    id: nanoid(),
                    sevice: 'Excercise',
                    available: true,
                },
                {
                    id: nanoid(),
                    sevice: 'Custom Meals',
                    available: true,
                },
                {
                    id: nanoid(),
                    sevice: 'Spa and Grooming',
                    available: true,
                },
            ]
        },
        {
            id: nanoid(),
            time: 20,
            offer: false,
            price: 550,
            services: [
                {
                    id: nanoid(),
                    sevice: 'Single room',
                    available: true,
                },
                {
                    id: nanoid(),
                    sevice: 'Excercise 2x',
                    available: true,
                },
                {
                    id: nanoid(),
                    sevice: 'Custom Meals',
                    available: true,
                },
                {
                    id: nanoid(),
                    sevice: 'Grooming 2x',
                    available: false,
                },
            ]
        },
    ]

    return (
        <Flex
            id="pricing"
            className="scroll-mt"
            px={['40px', '40px', '40px', '78px', '78px']}
            w="full"
            mt="110px"
            gridGap="20px"
            direction={['column', 'column', 'column', 'row', 'row']}
        >
            <Flex
                justifyContent="center"
                textAlign={['center', 'center', 'center', 'left', 'left']}
                direction="column"
                gridGap="32px"
                alignItems={['center', 'center', 'center', 'flex-start', 'flex-start']}
            >
                <Text textTransform="uppercase" fontSize="14px" fontWeight="700" color="#ED6436" >
                    bring your pet
                </Text>
                <Heading fontSize="40px" textTransform="capitalize" fontWeight="700" >
                    the best choice
                </Heading>
                <Text lineHeight="1.6" fontSize="1.1rem" >
                    We take the responsibility of caring
                    for pets very seriously. They are
                    members of your family.
                </Text>
                <Btn
                    txt={'uppercase'}
                    change={true}
                    title={'get quote'}
                    fw={'700'}
                    color={'white'}
                    borderTopStartRadius={'0px'}
                    width={'128px'}
                    fSize={'14px'}
                    colorHover={'#ED6436'}

                />
            </Flex>
            <Flex
                justifyContent="center"
                w="full"
                alignItems="center"
                direction={['column', 'column', 'column', 'row', 'row']}
                gridGap={['30px', '30px', '30px', '0px', '0px']}
                mt={['40px', '40px', '40px', '0px', '0px']}
            >
                <ContainerPricing data={data} />
            </Flex>
        </Flex>
    );
}

export default Section6;