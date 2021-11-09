import React, { useEffect, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { Spinner } from '@chakra-ui/spinner';
import Card from '@components/shop/Card';
import ShoppingCarIcon from '@icons/ShoppingCarIcon';
import { nanoid } from 'nanoid';
import Btn from '@components/Btn'
import ShoppingCart from '@components/shop/ShoppingCart';


export default function shop() {

    const URL = '/api/pet_food'

    const [data, setData] = useState({
        loading: false,
        error: null,
        petFood: [],
        categories: [],
        sortingData: "",
        productsInTheCart: [],
    })

    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        fetchPetFood()
    }, []);

    async function fetchPetFood() {

        setData({ ...data, loading: true })

        try {

            const response = await window.fetch(URL)
            const product = await response.json()

            setData({
                ...data, loading: false, petFood: product.data, categories: product.categories,
            })

        } catch (error) {
            setData({
                loading: false,
                error: error,
            })
        }

    }

    function handleChange(e) {
        setData({ ...data, sortingData: e.target.value })
    }

    function handleClick() {
        if (isOpen) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    if (data.loading) {
        return (
            <Flex py="200px" w="full" justifyContent="center" alignItems="center">
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="#ed6436"
                    size="xl"
                />
            </Flex>
        )
    };

    const filteredData = data.petFood.filter(e => data.sortingData !== "" ? e.categorie === data.sortingData : e);

    return (
        <Flex
            py="100px"
            justifyContent="center"
            direction="column"
            alignItems="center"
            px={['16px', '16px', '16px', '78px', '78px']}
            gridGap="40px"
        >
            <Flex
                justifyContent="space-between"
                flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']}
                alignItems="center"
                gridGap="20px"
                w="full"
            >
                <Box w={['200px', '200px', '300px', '300px', '300px']} >
                    <Select
                        onChange={handleChange}
                        textTransform="capitalize"
                        borderRadius="50px" h="52px"
                        placeholder={`Sort by ${data.sortingData}`}
                        _focus={{

                            borderColor: '#ED6436',
                            boxShadow: `0 0 0 1px #ED6436`,
                        }}
                    >
                        {
                            data.categories.map(e => <Text as="option" key={nanoid()} textTransform="capitalize" value={e}>Sort by {e}</Text>)
                        }
                    </Select>
                </Box>
                <Flex justifyContent="center" alignItems="center" position="relative" onClick={handleClick} >
                    <Btn
                        p={'12px'}
                        title={<ShoppingCarIcon />}
                        change={true}
                        colorHover={'#ed6436'}
                        color={'white'}
                        width={'46px'}
                        height={'46px'}
                    />
                    {
                        data.productsInTheCart.length !== 0
                            ? <Flex position="absolute"
                                top="-6px" right="-29px"
                                bgColor="#ed6436"
                                borderRadius="full"
                                h="30px" w="30px"
                                color="white"
                                justifyContent="center"
                                alignItems="center"
                            >
                                {data.productsInTheCart.length}
                            </Flex>
                            : ""
                    }
                </Flex>
                <ShoppingCart isOpen={isOpen} setData={setData} oldStateData={data}  data={data.productsInTheCart} handleClick={handleClick} />
            </Flex>
            <Flex
                gridGap="36px"
                alignItems="center"
                flexWrap="wrap"
                justifyContent="center"
            >
                {
                    filteredData.map(e => <Card setData={setData} oldStateData={data} key={e.id} data={e} />)
                }
            </Flex>
        </Flex>
    );
}
