import { Box, Center, Flex, Text } from '@chakra-ui/layout';
import QuoteRightIcon from '@icons/QuoteRightIcon';
import React from 'react';

function ReviewContainer() {
    return (
        <Center
            w="68%"
            flexDirection="column"
            gridGap="46px"
            alignItems={['center', 'center', 'center', 'flex-start', 'flex-start']}
        >
            <Flex
                fontSize="26px"
                fontWeight="700"
                lineHeight="1.6"
                position="relative"
                whiteSpace="pre-wrap"

            >
                <Box
                    position="absolute"
                    w={['40px', '40px', '60px', '70px', '70px']}
                    color="#ed6436"
                    left="0"
                    top={['-50px', '-50px', '-50px', '-90px', '-90px']}
                >
                    <QuoteRightIcon />
                </Box>
                We love bring Lexi to Kasams house! The
                staff is always so friendly and it's so
                convenient for our busy schedules!
            </Flex>
            <Flex
                gridGap="10px"
                direction="column"
                fontWeight="700"
            >
                <Text color="#ed6436" textTransform="uppercase" >jane cole</Text>
                <Text >Owner</Text>
            </Flex>
        </Center>
    );
}

export default ReviewContainer;