import { Divider, Flex, Text } from '@chakra-ui/layout';
import React from 'react';

function Services({ data }) {

    return (
        <Flex h="full"
            opacity={data.op}
            position="absolute"
            userSelect="none"
            cursor="pointer"
            transition="opacity 500ms ease 0s"
            animation={`${data.time}s ${data.animationName} infinite`}
            direction={['column', 'column', 'column', 'row', 'row']}
        >
            {data.icon}
            <Divider display={['none', 'none', 'none', 'flex', 'flex']} borderColor="black" mx="28px" orientation='vertical' />
            <Flex direction="column" gridGap="12px" >
                <Text as="h4" fontWeight="800" fontSize="22px" color="inherit" >
                    {data.title}
                </Text>
                <Text whiteSpace="pre-wrap" color="black" >
                    {data.description}
                </Text>
            </Flex>
        </Flex>
    );
}

export default Services;