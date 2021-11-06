import { Flex } from '@chakra-ui/layout';
import StarIcon from '@icons/StarIcon';
import { nanoid } from 'nanoid';
import React from 'react';

function Rate({ data }) {

    const starNumber = new Array(data)
    starNumber.fill(data, 0)

    let result = 5 - data

    const starOff = new Array(result)
    starOff.fill(starOff, 0)


    return (
        <Flex mt="6px" gridGap="2px" >
            {
                starNumber.map(e => <StarIcon key={nanoid()} color={'#ed6436'} />)
            }
            {
                starOff.map(e => <StarIcon key={nanoid()} color={'#D0D0D0'} />)
            }
        </Flex>
    );
}

export default Rate;