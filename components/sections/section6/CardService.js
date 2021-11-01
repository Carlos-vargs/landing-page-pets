import React from 'react';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import HouseDogIcon from '@icons/HouseDogIcon';

function CardService({ data }) {
    return (
        <Flex
            px="34px"
            direction="column"
            bgColor="#F2F2F4"
            color="black"
            borderRadius="30px"
            zIndex="1"
            h="500px"
            w="full"
            justifyContent="center"
            minW="296px"
            mx="-10px"
            alignItems={['center', 'center', 'center', 'flex-start', 'flex-start']}
            textAlign={['center', 'center', 'center', 'left', 'left']}

        >
            <Stack mb="24px" >
                <Text as="span" color="#ED6436" textTransform="uppercase" fontWeight="700" >pet care</Text>
                <Heading fontWeight="700" fontSize="38px" >
                    {
                        data.time !== 1
                            ? `${data.time} Days`
                            : `${data.time} Day`
                    }
                </Heading>
            </Stack>
            <Box w="80px" h="80px" >
                <HouseDogIcon />
            </Box>
            <Stack
                mt="24px"
                justifyContent="space-between"
                gridGap="4px"
            >
                {
                    data.services.map(e => <Text key={e.id} >
                        {e.sevice}
                    </Text>)
                }
            </Stack>
            <Flex fontWeight="700" fontSize="48px" mt="44px"  >
                <Text as="span" fontSize="24px">$</Text>
                <Text as="span" mt="-12px" >{data.price}</Text>
            </Flex>

        </Flex>
    );
}

export default CardService;