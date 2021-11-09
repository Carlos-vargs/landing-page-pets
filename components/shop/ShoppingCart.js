import React from 'react';
import Btn from '@components/Btn';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { Image } from '@chakra-ui/image';
import { nanoid } from 'nanoid';
import Onsale from './OnSale';

function ShoppingCart({ isOpen, handleClick, data, setData, oldStateData }) {

    let hash = {}
    const prices = []

    const filteredItems = data.sort((a, b) => a.id === b.id ? b.count - a.count : a - b).filter(o => hash[o.product.id] ? false : hash[o.product.id] = true)

    filteredItems.forEach(e => prices.push(e.count * e.product.price))

    const subtotal = prices.reduce((acc, e) => acc + e, 0).toFixed(2)

    if (filteredItems) {
        typeof window !== "undefined" ? localStorage.setItem('itemsCart', JSON.stringify(filteredItems)) : []
    }

    function deleteItem(index) {

        filteredItems.splice(index, 1)

        setData({ ...oldStateData, productsInTheCart: filteredItems })

    }

    return (
        <Modal isOpen={isOpen} onClose={handleClick}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader >
                    Shopping Cart
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody textAlign="left">
                    <Flex gridGap="26px" direction="column" px="20px" cursor="pointer">
                        {
                            filteredItems.length !== 0
                                ? ""
                                : <Flex>No products in the cart.</Flex>
                        }
                        {
                            filteredItems.map((e, i) => <Flex key={nanoid()} justifyContent="space-between" alignItems="center" >
                                <Flex gridGap="26px" alignItems="center" >
                                    <Flex position="relative">
                                        <Image src={e.product.image} w="100px" h="100px" border="1px solid #0000001a" borderRadius="12px" />
                                        {
                                            e.product.offer.available
                                                ? <Onsale width={'30px'} height={'30px'} top={'-12px'} right={'-9px'} fontSize="11px" />
                                                : ""
                                        }
                                    </Flex>
                                    <Stack>
                                        <Heading as="h6" fontSize="16px" textTransform="capitalize" >{e.product.name}</Heading>
                                        <Text fontSize="14px" >{e.count} x ${e.product.offer.available ? e.product.offer.price : e.product.price}</Text>
                                    </Stack>
                                </Flex>
                                <Flex borderRadius="full" minH="24px" minW="24px" textAlign="center" alignItems="center" justifyContent="center" fontWeight="bold" bgColor="#ed6436" color="white" userSelect="none" onClick={() => deleteItem(i)} _hover={{ backgroundColor: '#82C55B' }} >x</Flex>
                            </Flex>
                            )
                        }
                        <Flex justifyContent="space-between" borderTop="2px solid #EDEDED" py="20px" >
                            <Text textTransform="uppercase" color="black" >subtotal:</Text>
                            ${subtotal}
                        </Flex>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Box onClick={handleClick} w="120px" >
                        <Btn
                            title={'Close'}
                            borderTopEndRadius={'none'}
                            change={true}
                            colorHover={'#ed6436'}
                            color={'white'}
                            width={'full'}
                            fw={'700'}
                        />
                    </Box>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ShoppingCart;