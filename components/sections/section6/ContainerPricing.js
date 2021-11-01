import React, { Fragment } from 'react';
import CardOffer from './CardOffer';
import CardService from './CardService';

function ContainerPricing({ data }) {

    return (
        <Fragment>
            {
                data.map(e => e.offer ? <CardOffer key={e.id} data={e} /> : <CardService key={e.id} data={e} />)
            }
        </Fragment>
    );
}

export default ContainerPricing;