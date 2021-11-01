import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';

function Card({ data }) {
    return (
        <Flex
            gridGap="22px"
            direction={['column', 'column', 'column', 'row', 'row']}
            alignItems={['center', 'center', 'center', 'flex-start', 'flex-start',]}
        >
            <Box w="64px" h="64px" >
                {data.icon}
            </Box>
            <Flex direction="column" gridGap="12px">
                <Heading textTransform="uppercase" fontSize="18px" color="#ED6436" >
                    {data.title}
                </Heading>
                <Text whiteSpace="pre-wrap" px={['44px', '44px', '44px', '0px', '0px',]} >
                    {data.description}
                </Text>
            </Flex>
        </Flex >
    );
}

export default Card;