import React from 'react';
import { Flex, Text } from '@chakra-ui/layout';

function ContainerIconServices({ data }) {
    return (
        <Flex
            justifyContent={['center', 'center', 'center', 'flex-start', 'flex-start']}
            gridGap="12px"
            flexWrap="wrap"
            px={['20px','20px','20px','0px','0px']}
        >
            {
                data.map(e => <Flex
                    key={e.id}
                    gridGap="6px"
                    w="100px"
                    h="60px"
                    alignItems="center"
                    textTransform="uppercase"
                    fontWeight="700"
                >
                    <Flex w="50px" h="50px" alignItems="center"  >
                        {e.icon}
                    </Flex>
                    <Text as="h6" >
                        {e.title}
                    </Text>
                </Flex>)
            }
        </Flex>
    );
}

export default ContainerIconServices;