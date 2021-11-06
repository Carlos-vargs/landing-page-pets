import { nanoid } from "nanoid"

const data = [
    {
        id: nanoid(),
        name: "air dried beef",
        rate: 5,
        price: "30.00",
        categorie: "beef",
        image: '/pet_food/food1.png',
        offer: {
            available: true,
            price: "28.00",
        }
    },
    {
        id: nanoid(),
        name: "air dried lamb",
        rate: 3,
        price: "34.00",
        categorie: "food",
        image: 'pet_food/food2.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: nanoid(),
        name: "air dried salmon",
        rate: 5,
        price: "9.99",
        categorie: "fish",
        image: 'pet_food/food3.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: nanoid(),
        name: "beef dog rewards",
        rate: 4,
        price: "20.00",
        categorie: "rewards",
        image: 'pet_food/food4.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: nanoid(),
        name: "dry beef food",
        rate: 5,
        price: "16.00",
        categorie: "beef",
        image: 'pet_food/food5.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: nanoid(),
        name: "dry chicken food",
        rate: 5,
        price: "30.00",
        categorie: "food",
        image: 'pet_food/food6.png',
        offer: {
            available: true,
            price: "28.00",
        }
    },
    {
        id: nanoid(),
        name: "dry lamb food",
        rate: 5,
        price: "34.00",
        categorie: "food",
        image: 'pet_food/food7.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: nanoid(),
        name: "dry salmon food",
        rate: 5,
        price: "20.00",
        categorie: "fish",
        image: 'pet_food/food8.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: nanoid(),
        name: "fish dog rewards",
        rate: 3,
        price: "12.00",
        categorie: "rewards",
        image: 'pet_food/food9.png',
        offer: {
            available: true,
            price: "10.00",
        }
    },
    {
        id: nanoid(),
        name: "free range chicken",
        rate: 4,
        price: "16.00",
        categorie: "food",
        image: 'pet_food/food10.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: nanoid(),
        name: "lamb dog rewards",
        rate: 5,
        price: "36.00",
        categorie: "rewards",
        image: 'pet_food/food11.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: nanoid(),
        name: "rewards beef food",
        rate: 5,
        price: "20.00",
        categorie: "beef",
        image: 'pet_food/food12.png',
        offer: {
            available: true,
            price: "18.00",
        }
    },
    {
        id: nanoid(),
        name: "salmon full meal",
        rate: 3,
        price: "20.00",
        categorie: "fish",
        image: 'pet_food/food13.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: nanoid(),
        name: "tuna full meal",
        rate: 5,
        price: "19.00",
        categorie: "fish",
        image: 'pet_food/food14.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: nanoid(),
        name: "venison dog rewards",
        rate: 4,
        price: "20.00",
        categorie: "food",
        image: 'pet_food/food15.png',
        offer: {
            available: false,
            price: null,
        }
    },
]

export default data