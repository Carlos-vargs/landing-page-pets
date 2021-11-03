import { Flex } from '@chakra-ui/layout';
import React from 'react';
import Card from './Card';
import ContainerImage from './ContainerImage';

function Section8() {
    return (
        <Flex
            w="full"
            className="scroll-mt"
            flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']}
            mt={['40px', '40px', '40px', '78px', '78px']}
            pr={['0px', '0px', '0px', '78px', '78px']}
            alignItems="center"
            gridGap="24px"
            mb="100px"
        >
            <ContainerImage />
            <Card />
        </Flex>
    );
}

export default Section8;