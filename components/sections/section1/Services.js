import { Divider, Flex, Text } from '@chakra-ui/layout';
import SpaIcon from '@components/icons/SpaIcon';
import React from 'react';

function Services({ data }) {

    return (
        <Flex h="full" opacity={data.op} transition="all .4s ease" position="absolute"  >
            { data.icon }
            <Divider borderColor="black" mx="28px" orientation="vertical" />
            <Flex direction="column" gridGap="12px" >
                <Text as="h4" fontWeight="800" fontSize="22px" >
                    { data.title }
                </Text>
                <Text whiteSpace="pre-wrap" >
                    { data.description }
                </Text>
            </Flex>
        </Flex>
    );
}

export default Services;