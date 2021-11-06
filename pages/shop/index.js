import { Flex } from '@chakra-ui/layout';
import Card from '@components/shop/Card';
import React, { useEffect, useState } from 'react';

export default function shop() {

    const [petFood, setPetFood] = useState([]);

    useEffect(() => {
        window
            .fetch('/api/pet_food')
            .then(res => res.json())
            .then(({ data, length }) => { setPetFood(data) })
    }, []);

    return (
        <Flex
            py="100px"
            gridGap="36px"
            flexWrap="wrap"
            px={['16px', '16px', '16px', '78px', '78px']}
            justifyContent="center"
        >
            {
                petFood.map(e => <Card key={e.id} data={e} />)
            }
        </Flex>
    );
}
