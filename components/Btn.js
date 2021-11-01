import React, { Fragment } from 'react';
import { Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

export default function Btn({
    fw,
    py,
    txt,
    gap,
    icon,
    color,
    title,
    width,
    fSize,
    change,
    iconSvg,
    widthIcon,
    alignSelf,
    colorHover,
    letterSpacing,
    widthContainerIcon,
    borderTopEndRadius,
    borderTopStartRadius,
    borderBottomStartRadius,
    borderBottomEndRadiusRadius,
}) {

    const colorShadow = "#ed6436"

    return (
        <Fragment>
            <Button
                py={py}
                textTransform={txt}
                alignSelf={alignSelf}
                fontWeight={fw}
                fontSize={fSize}
                letterSpacing={letterSpacing}
                display="flex"
                borderRadius="full"
                borderTopStartRadius={borderTopStartRadius}
                borderTopEndRadius={borderTopEndRadius}
                borderBottomStartRadius={borderBottomStartRadius}
                borderBottomEndRadius={borderBottomEndRadiusRadius}
                position="relative"
                colorScheme="white"
                justifyContent={icon ? 'flex-start' : 'center'}
                color={color}
                gridGap={gap}
                zIndex="1"
                px="0px"
                w={width}
                transition="all .3s ease-out"
                overflow="hidden"
                boxShadow={change ? `0 0 0 48px ${colorShadow} inset` : `0 0 0 2px ${colorShadow} inset`}
                _hover={{
                    color: colorHover,
                    boxShadow: `${change ? `0 0 0 2px ${colorShadow} inset` : `0 0 0 48px ${colorShadow} inset`}`
                }}
                _focus={{
                    color: colorHover,
                    boxShadow: `${change ? `0 0 0 2px ${colorShadow} inset` : `0 0 0 48px ${colorShadow} inset`}`
                }}
            >
                {
                    icon && <Flex color="white" justifyContent="center" w={widthContainerIcon} h="full" bgColor={colorShadow} >
                        <Flex w={widthIcon} >
                            {iconSvg}
                        </Flex>
                    </Flex>
                }
                {title}
            </Button>
        </Fragment>
    );
}