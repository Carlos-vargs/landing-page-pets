import { Center } from '@chakra-ui/layout';
import MenuIcon from '@icons/MenuIcon';
import React from 'react';

function ContainerNavHeaderResponsive({ data }) {
    return (
        <Center
            w="40px" h="40px"
            display={['flex', 'flex', 'flex', 'none', 'none']}
            alignItems="center"
            alignSelf="center"
            _hover={{
                color: '#ED6436',
            }}
        >
            <MenuIcon />
        </Center>
    );
}

export default ContainerNavHeaderResponsive;