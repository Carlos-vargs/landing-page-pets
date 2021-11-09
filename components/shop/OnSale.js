import { Flex } from '@chakra-ui/layout';
import React from 'react';

function Onsale({ width, height, top, right, fontSize }) {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            color="white"
            borderRadius="full"
            w={width} h={height}
            bgColor="#82c55b"
            position="absolute"
            top={top}
            right={right}
            fontSize={fontSize}
        >
            Sale!
        </Flex>
    );
}

export default Onsale;