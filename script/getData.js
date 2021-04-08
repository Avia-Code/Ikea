const PARAM = {
    cat: 'category',
    subcat: 'subcategory',
    search: ['category', 'name', 'subcategory', 'description'],
};


export const getData = {
    url: 'database/dataBase.json',
    get(process) {
        fetch(this.url)
            .then(response => response.json())
            .then(process)
            .catch(error => console.log(error));
    },
    wishList(Wishlist, callback) {
        // console.log(list);
        this.get((data) => {
            // console.log(data);
            const result = data.filter(item => Wishlist.includes(item.id));
            // console.log(result);
            callback(result);
        })
    },
    item(goodId, callback) {
        this.get((data) => {
            const result = data.find(item => item.id === goodId);
            callback(result);
        })
    },
    cart(cartList, callback) {
        this.get((data) => {
            const result = data.filter(item => cartList.some(obj => obj.id === item.id))
            callback(result);
        })
    },
    category(prop, value, callback) {
        this.get((data) => {
            const result = data.filter(item =>
                item[PARAM[prop]].toLowerCase() === value.toLowerCase());
            callback(result);
        })
    },
    search(value, callback) {
        this.get((data) => {
            const result = data.filter((item) => {
                for (let prop in item) {
                    if (PARAM.search.includes(prop) &&
                        item[prop].toLowerCase().includes(value.toLowerCase())) {
                        return true;
                    }
                }
            })
            callback(result);
        })
    },
    catalog(callback) {
        this.get((data) => {
            const result = data.reduce((categoryArr, item) => {
                if (!categoryArr.includes(item.category)) {
                    categoryArr.push(item.category);
                }
                return categoryArr;
            }, [])
            callback(result);

            // ! Этот код делает тоже что и код выше, только через колекции set
            // const set = new Set([]);
            // data.forEach((item => {
            //     set.add(item.category);
            // }))
            // console.log(set);
        })
    },
    subcatalog(category, callback) {
        this.get((data) => {
            const result = data
                .filter(item => item.category.toLowerCase() === category.toLowerCase())
                .reduce((subcategoryArr, item) => {
                    if (!subcategoryArr.includes(item.subcategory)) {
                        subcategoryArr.push(item.subcategory);
                    }
                    return subcategoryArr;
                }, [])
            callback(result);
        })
    },
};

getData.get()