import Image01 from '../assets/image-01.png';
import Image02 from '../assets/image-02.png';
import Image03 from '../assets/image-03.png';
import Image04 from '../assets/image-04.png';
import Image05 from '../assets/image-05.png';
import Image06 from '../assets/image-06.png';

export const games = [
    {
        id: 1,
        image: Image01,
        name: 'The Legend of Zelda: Link’s Awakening',
        plataform: [
            {
                id: 1,
                name: 'Nintendo Switch'
            },
            {
                id: 2,
                name: 'PC'
            },
        ],
        category: [
            {
                id: 1,
                name: 'Action'
            },
            {
                id: 2,
                name: 'Adventure'
            },
        ],
        price: 299.00
    },
    {
        id: 2,
        image: Image02,
        name: 'Animal Crossing: New Horizons',
        plataform: [
            {
                id: 1,
                name: 'Nintendo Switch'
            },
            {
                id: 2,
                name: 'PC'
            },
        ],
        category: [
            {
                id: 3,
                name: 'Simulation'
            },
        ],
        price: 350.00
    },
    {
        id: 3,
        image: Image03,
        name: 'Celeste',
        plataform: [
            {
                id: 2,
                name: 'PC'
            },
        ],
        category: [
            {
                id: 1,
                name: 'Action'
            },
            {
                id: 2,
                name: 'Adventure'
            },
            {
                id: 4,
                name: 'Indie'
            }
        ],
        price: 36.99
    },
    {
        id: 4,
        image: Image04,
        name: 'Hades',
        plataform: [
            {
                id: 1,
                name: 'Nintendo Switch'
            },
            {
                id: 2,
                name: 'PC'
            },
        ],
        category: [
            {
                id: 1,
                name: 'Action'
            },
            {
                id: 4,
                name: 'Indie'
            },
            {
                id: 2,
                name: 'Adventure'
            },
            {
                id: 5,
                name: 'RPG'
            }
        ],
        price: 47.49
    },
    {
        id: 5,
        image: Image05,
        name: 'Knockout City™',
        plataform: [
            {
                id: 1,
                name: 'Nintendo Switch'
            },
            {
                id: 2,
                name: 'PC'
            },
        ],
        category: [
            {
                id: 1,
                name: 'Action'
            },
            {
                id: 4,
                name: 'Indie'
            },
            {
                id: 5,
                name: 'RPG'
            }
        ],
        price: 99.00
    },
    {
        id: 6,
        image: Image06,
        name: 'Dota 2',
        plataform: [
            {
                id: 2,
                name: 'PC'
            },
        ],
        category: [
            {
                id: 1,
                name: 'Action'
            },
            {
                id: 2,
                name: 'Adventure'
            },
        ],
        price: 0
    }
]
