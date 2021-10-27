import { Center } from '@chakra-ui/layout';
import Btn from '@components/Btn';
import PhoneIcon from '@icons/PhoneIcon';
import NavHeader from '@components/NavHeader';
import React from 'react';

function ContainerNavHeader({ data, phoneNumber }) {
    return (
        <Center gridGap="44px" display={['none', 'none', 'none', 'flex', 'flex']} >
            {
                data.map(e => <NavHeader key={e.id} data={e} />)
            }
            <Btn
                title={phoneNumber}
                borderTopStartRadius={'none'}
                change={false}
                colorHover={'white'}
                color={'black'}
                width={'200px'}
                gap={'12px'}
                icon={true}
                widthIcon={'20px'}
                widthContainerIcon={'40px'}
                iconSvg={<PhoneIcon solid={true} />}
            />
        </Center>
    );
}

export default ContainerNavHeader;