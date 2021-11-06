import { Flex } from '@chakra-ui/layout';
import React from 'react';

function Onsale() {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            color="white"
            borderRadius="full"
            w="60px" h="60px"
            bgColor="#82c55b"
            position="absolute"
            top="16px"
            right="10px"
        >
            Sale!
        </Flex>
    );
}

export default Onsale;