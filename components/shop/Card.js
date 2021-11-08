import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import Btn from '@components/Btn';
import React from 'react';
import Onsale from './OnSale';
import Rate from './Rate';

function Card({ data }) {

    const colorBase = "#ed6436"

    return (
        <Flex
            border="1px solid #0000001a"
            borderRadius="20px"
            w="270px"
            overflow="hidden"
            gridGap="20px"
            direction="column"
            h="auto"
            alignItems="center"
            pb="36px"
            transition="all .6s ease"
            position="relative"
            cursor="pointer"
            _hover={{ boxShadow: "lg" }}
            textAlign="center"
        >
            <Image src={data.image} w="full" h="270px" />
            <Flex direction="column" alignItems="center" >
                <Text as="span" fontSize="12px" textTransform="uppercase" color={colorBase} fontWeight="700" mb="8px" >{data.categorie}</Text>
                <Heading fontWeight="700" fontSize="24px" _hover={{ color: colorBase }} textTransform="capitalize" >{data.name}</Heading>
                <Rate data={data.rate} />
                <Stack mt="6px" fontWeight="700" mb="16px" >
                    {
                        data.offer.available
                            ? <Flex gridGap="8px" alignItems="flex-end" >
                                <Text color="gray" textDecoration="line-through" fontWeight="400" fontSize="14px" >${data.price}</Text>
                                <Text>${data.offer.price}</Text>
                            </Flex>
                            : <Text>${data.price}</Text>
                    }
                </Stack>
                <Btn
                    fSize={'14px'}
                    title={'ADD TO CART'}
                    borderTopStartRadius={'none'}
                    change={true}
                    colorHover={'#ed6436'}
                    color={'white'}
                    width={'140px'}
                    gap={'12px'}
                    fw={'700'}
                />
                {
                    data.offer.available
                        ? <Onsale />
                        : ''
                }
            </Flex>
        </Flex>
    );
}

export default Card;