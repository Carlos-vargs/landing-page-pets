import { Flex, Text } from '@chakra-ui/layout';
import ArrowRightIcon from '@icons/ArrowRightIcon';
import React from 'react';

function CardService({ data }) {
    return (
        <Flex
            borderRadius="3xl"
            bgColor="#F2F2F4"
            px="40px"
            maxW="320px"
            py="50px"
            direction="column"
            gridGap="40px"
            alignItems={['center', 'center', 'center', 'center', 'flex-start']}
            textAlign={['center', 'center', 'center', 'center', 'left']}
        >
            <Flex w="60px" >
                {data.icon}
            </Flex>
            <Flex direction="column" gridGap="16px" >
                <Text as="h5" fontSize="26px" fontWeight="700" textTransform="capitalize" >
                    {data.title}
                </Text>
                <Text lineHeight="1.6" fontSize="18px" >
                    {data.description}
                </Text>
            </Flex>
            <Flex
                fontSize="14px"
                transition="color .3s ease"
                textTransform="uppercase"
                fontWeight="700"
                color="#EF6436"
                cursor="pointer"
                gridGap="14px"
                userSelect="none"
                _hover={{
                    color: "black",
                }}
            >
                view more
                <Flex w="16px" >
                    <ArrowRightIcon />
                </Flex>
            </Flex>

        </Flex>
    );
}

export default CardService;