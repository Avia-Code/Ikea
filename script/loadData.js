import { getData } from './getData.js';

const wishList = ['idd001', 'idd002', 'idd003', 'idd004', 'idd005'];
const cartList = [
    {
        id: 'idd006',
        count: 3
    },
    {
        id: 'idd007',
        count: 1
    },
    {
        id: 'idd008',
        count: 2
    }
];
export const loadData = () => {

    if (location.search) {
        const search = decodeURI(location.search);
        console.log('search: ', search);
        const prop = search.split('=')[0].slice(1);
        console.log('prop: ', prop);
        const value = search.split('=')[1];
        console.log('value: ', value);

        if (prop === 's') {
            getData.search(value, ((data) => console.log(data)));
        }
        else if (prop === 'wishlist') {
            getData.wishList(wishList, (data) => console.log(data));
        }
        else if (prop === 'cat' || prop === 'subcat'){
            getData.category(prop, value, (data) => console.log(data));
        }
    }

    if (location.hash) {
        const goodId = location.hash.slice(1);
        getData.item(goodId,(data)=>console.log(data));
    }

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));
    }

    // getData.catalog((data) => console.log(data));
    
    // getData.subcatalog('мебель',(data) => console.log(data));

};