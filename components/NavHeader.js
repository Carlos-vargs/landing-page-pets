import { Link } from '@chakra-ui/layout';
import React from 'react';


function NavHeader({ data }) {
    return (
        <Link
            href={data.url}
            display="flex"
            position="relative"
            alignItems="center"
            h="full"
            alignSelf="center"
            textTransform="capitalize"
            fontWeight="700"
            _before={{
                content: '""',
                position: "absolute",
                top: "100%",
                backgroundColor: "#ed6436",
                width: "100%",
                height: "2px",
                transform: "scaleX(0)",
                transition: "all .3s ease"
            }}
            _hover={{
                _before: {
                    transform: "scaleX(1)"
                },
                color: "#ed6436",
                textDecoration: "none",
            }}
            _focus={{
                _before: {
                    transform: "scaleX(1)"
                },
                color: "#ed6436",
                textDecoration: "none",
                boxShadow: "none"

            }}
        >
            {data.title}
        </Link>
    );
}

export default NavHeader;