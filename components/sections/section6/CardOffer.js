import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import HouseDogIcon from '@icons/HouseDogIcon';
import bgImage from '../../../resources/images/image-background.jpg';
import React from 'react';

function CardOffer({ data }) {
    return (
        <Flex
            bgPosition="bottom"
            px="44px"
            direction="column"
            backgroundImage={`url(${bgImage.src})`}
            color="white"
            py="52px"
            borderRadius="30px"
            zIndex="2"
            w="full"
            minW="340px"
            alignItems={['center', 'center', 'center', 'flex-start', 'flex-start']}
            textAlign={['center', 'center', 'center', 'left', 'left']}
        >
            <Stack mb="24px" >
                <Text as="span" textTransform="uppercase" fontWeight="700" >pet care</Text>
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

export default CardOffer;