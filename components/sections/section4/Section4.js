import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { nanoid } from "nanoid"
import DogIcon from '@icons/DogIcon';
import CatIcon from '@icons/CatIcon';
import BrushIcon from '@icons/BrushIcon';
import TaxIcon from '@icons/TaxIcon';
import CardService from './CardService';

function Section4() {

    const services = [
        {
            id: nanoid(),
            url: "#",
            icon: <DogIcon />,
            title: "dog boarding",
            description: `While you're on holiday,
            here's where furry friends
            will spend their time.`,
        },
        {
            id: nanoid(),
            url: "#",
            icon: <CatIcon />,
            title: "cat boarding",
            description: `We have highest quality
            accommodations for even
            the fussiest feline.`,
        },
        {
            id: nanoid(),
            url: "#",
            icon: <BrushIcon colorFill={'#82C55B'} />,
            title: "pet grooming",
            description: `Your dog will leave
            feeling happy, looking
            and smelling great.`,
        },
        {
            id: nanoid(),
            url: "#",
            icon: <TaxIcon />,
            title: "pet taxi",
            description: `If you are short on time
            we can arrange taxi
            transport for you.`,
        },

    ]

    return (
        <Flex
            id="services"
            w="full"
            py="128px"
            px={['20px', '20px', '20px', '76px', '76px']}
            gridGap="30px"
            justifyContent="center"
            alignItems="center"
            flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'nowrap']}
            flexDirection={['column', 'column', 'row', 'row', 'row']}
        >
            {
                services.map(e => <CardService key={e.id} data={e} />)
            }

        </Flex>
    );
}

export default Section4;