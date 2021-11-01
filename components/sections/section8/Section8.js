import { Flex } from '@chakra-ui/layout';
import React from 'react';
import Card from './Card';
import ContainerImage from './ContainerImage';

function Section8() {
    return (
        <Flex
            w="full"
            id="about"
            className="scroll-mt"
            flexDirection={['column', 'column', 'column', 'row', 'row']}
            mt={['40px', '40px', '40px', '78px', '78px']}
            pr={['40px', '40px', '40px', '78px', '78px']}
            gridGap="24px"
            mb="100px"
        >
            <ContainerImage />
            
            <Card />
        </Flex>
    );
}

export default Section8; 