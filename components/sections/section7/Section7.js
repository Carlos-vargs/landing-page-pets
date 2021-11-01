import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import CloudRightImage2 from '@components/clouds/CloudRightImage2'
import BoneIcon from '@icons/BoneIcon';
import bgImage from '../../../resources/images/image-background-h.jpg'
import PhoneIcon from '@icons/PhoneIcon';
import AlarmClockIcon from '@icons/AlarmClockIcon';
import BallIcon from '@icons/BallIcon';
import { nanoid } from 'nanoid';
import Card from './Card';

function Section7() {

    const data = [
        {
            id: nanoid(),
            icon: <AlarmClockIcon />,
            title: 'from 8 am to 10 pm',
            description: `Timings are drop off after 8am and collection is before 
10am on the morning of going home.`
        },
        {
            id: nanoid(),
            icon: <BallIcon colorFill={'#7AC143'} />,
            title: 'favourite toys',
            description: `If your dog has separation anxiety we encourage you to
bring something that smells like home.`
        },
    ]

    return (
        <Flex
            id="home"
            w="full"
            className="scroll-mt"
            justifyContent={['center', 'center', 'center', 'space-between', 'space-between',]}
            alignItems={['center', 'center', 'center', 'flex-start', 'flex-start',]}
            pl={['0px', '0px', '0px', '78px', '78px']}
            textAlign={['center', 'center', 'center', 'left', 'left']}
            flexDirection={['column', 'column', 'column', 'row', 'row']}
            pt="80px"
        >

            <Box w="full" >
                <Heading fontSize={['50px', '50px', '70px', '70px', '70px']} fontWeight="700" mt="60px" >
                    Check-in <Text as="strong" fontSize="inherit" fontWeight="inherit" color="#ED6436">Time</Text>
                </Heading>
                <Flex direction="column" pt="77px" gridGap="44px" >

                    {
                        data.map(e => <Card key={e.id} data={e} />)
                    }

                </Flex>
                <Flex
                    w="260px"
                    mt={['0px', '0px', '0px', '30px', '30px']}
                    cursor="pointer"
                    transition="transform .3s ease"
                    position="relative"
                    mx={['auto', 'auto', 'auto', '0px', '0px']}
                    justifyContent="center"
                    _hover={{
                        transform: "rotate(10deg)"

                    }} >
                    <Flex
                        w={['210px', '210px', '210px', '90%', '90%',]}
                        h={['210px', '210px', '210px', '90%', '90%',]}

                    >
                        <BoneIcon
                            url={bgImage.src}
                            x={'-110'}
                            y={'0'}
                            sizeW={'200%'}
                            sizeH={'100%'}
                            id={'0e0c67fa-1602-4a9d-86ba-32fc73c12670'}
                        />
                    </Flex>
                    <Text as="strong"
                        color="white"
                        fontSize="20px"
                        top={['43%', '43%', '43%', '39%', '39%']}
                        left="14%"
                        transform="rotate(-6deg)"
                        position="absolute"
                        textTransform="uppercase"
                        userSelect="none"
                        display="flex"
                        w="auto"
                        fontSize="17px"
                        alignItems="center"

                    >
                        <Flex color="white" justifyContent="center" w="26px" h="full" >
                            <PhoneIcon solid={true} />
                        </Flex>
                        +1 (435) 237-2950
                    </Text>
                </Flex>
            </Box>

            <Box w={['100%', '100%', '100%', '160%', '160%']} maxW="1000px" >
                <CloudRightImage2
                    id={'wolfImg'}
                    url={'https://images.unsplash.com/photo-1541876176131-3f5e84a7331a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'}
                    x={'-380'}
                    y={'-200'}
                    sizeW={'180%'}
                    sizeH={'180%'}
                />
            </Box>

        </Flex>
    );
}

export default Section7;