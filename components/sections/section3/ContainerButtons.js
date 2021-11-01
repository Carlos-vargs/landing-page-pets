import { Flex } from '@chakra-ui/layout';
import Btn from '@components/Btn';
import React from 'react';

function ContainerButtons({ data }) {
    return (
        <Flex
            gridGap="20px"
            flexDirection={['row', 'row', 'row', 'row', 'row']}
            flexWrap="wrap"
            mb={['44px','44px','44px','0px','0px']}
            mx={['auto','auto','auto','0px','0px']}
            justifyContent={['center','center','center','flex-start','flex-start']}
        >
            {
                data.map(e => <Btn
                    py={'22px'}
                    txt={'uppercase'}
                    key={e.id}
                    fSize={['12px', '12px', '12px', '14px', '14px']}
                    letterSpacing={'1.2px'}
                    title={e.title}
                    borderTopStartRadius={'none'}
                    change={true}
                    colorHover={'#ed6436'}
                    color={'white'}
                    width={['140px', '140px', '140px', '164px', '164px', '164px']}
                    gap={'12px'}
                    fw={'700'}
                    alignSelf={['center', 'center', 'center', 'flex-start', 'flex-start']}
                />)
            }
        </Flex>
    );
}

export default ContainerButtons;