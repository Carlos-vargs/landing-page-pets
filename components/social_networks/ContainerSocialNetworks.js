import { Flex, Link, Box } from '@chakra-ui/layout';
import React, { Fragment } from 'react';

export default function ContainerSocialNetworks({ data, mtSize, gap }) {
    return (
        <Fragment>
            <Flex mt={mtSize} justifyContent="center" gridGap={gap}  >
                {
                    data.map(e =>
                        <Link
                            key={e.id}
                            justifyContent="center"
                            alignItems="center"
                            transition="all .3s ease-out"
                            w="40px"
                            h="40px"
                            shadow="0 0 0 48px #ed6436 inset"
                            borderRadius="full"
                            color="white"
                            href={e.url}
                            display="flex"
                            isExternal
                            title={e.socialNetwork}
                            _hover={{
                                color: "#ed6436",
                                boxShadow: "0 0 0 2px #ed6436 inset"
                            }}
                            _focus={{
                                color: "#ed6436",
                                boxShadow: "0 0 0 2px #ed6436 inset"
                            }}
                        >
                            <Flex
                                pl={e.pl}
                                pt={e.pt}
                                w="20px"
                                h="20px"
                            >
                                {e.iconSvg}
                            </Flex>
                        </Link>
                    )
                }
            </Flex>
        </Fragment>
    );
}