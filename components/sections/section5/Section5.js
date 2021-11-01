import React from 'react';
import { Flex } from '@chakra-ui/layout';
import CloudLeftImage1 from '@components/clouds/CloudLeftImage1';
import ReviewContainer from './ReviewContainer';

function Section5() {
    return (
        <Flex
            className="scroll-mt-11"
            id="reviews"
            w="full"
            gridGap={['100px', '100px', '100px', '30px', '30px']}
            pr={['0px', '0px', '0px', '78px', '78px']}
            direction={['column', 'column', 'column', 'row', 'row']}
            textAlign={['center', 'center', 'center', 'left', 'left']}
            alignItems="center"
        >
            <Flex
                w="full"
                position="relative"
            >
                <CloudLeftImage1
                    fill="#8AC36D"
                />
            </Flex>
            <ReviewContainer />
        </Flex>
    );
}

export default Section5;