import { createStore } from 'vuex';

const store = createStore({
    state: {
        itemsProducts: [
            {
                id: 1,
                title: 'Bening Bayam',
                price: 20000,
                image: 'bening-bayam.jpg',
                categoryId: 1,
            },
            {
                id: 2,
                title: 'Chicken Wings',
                price: 30000,
                image: 'chicken-wings.jpg',
                categoryId: 1,
            },
            {
                id: 3,
                title: 'Indomie Goreng Nyemek',
                price: 15000,
                image: 'indomie-goreng-nyemek.jpg',
                categoryId: 1,
            },
            {
                id: 4,
                title: 'Indomie Nyemek',
                price: 10000,
                image: 'indomie-nyemek.jpg',
                categoryId: 1,
            },
            {
                id: 5,
                title: 'Jamur Lada Hitam',
                price: 23000,
                image: 'jamur-lada-hitam.jpg',
                categoryId: 1,
            },
            {
                id: 6,
                title: 'Mie Geprek',
                price: 27000,
                image: 'mie-geprek.jpg',
                categoryId: 1,
            },
            {
                id: 7,
                title: 'Mie Sedap',
                price: 22000,
                image: 'mie-sedap.jpg',
                categoryId: 1,
            },
            {
                id: 8,
                title: 'Sambel Baby cumi',
                price: 29000,
                image: 'sambel-baby-cumi.jpg',
                categoryId: 1,
            },
            {
                id: 9,
                title: 'sambel telur teri',
                price: 250000,
                image: 'sambel-telur-teri.jpg',
                categoryId: 1,
            },
            {
                id: 10,
                title: 'sambel tempe',
                price: 17000,
                image: 'sambel-tempe.jpg',
                categoryId: 1,
            },
            {
                id: 11,
                title: 'sambel terasi',
                price: 20000,
                image: 'sambel-terasi.jpg',
                categoryId: 1,
            },
            {
                id: 12,
                title: 'sambel tongkol petai',
                price: 27000,
                image: 'sambel-tongkol-petai.jpg',
                categoryId: 1,
            },
            {
                id: 13,
                title: 'spaghetti sosis pentol',
                price: 35000,
                image: 'spaghetti-sosis-pentol.jpg',
                categoryId: 1,
            },
            {
                id: 14,
                title: 'suwir tongkol kemangi',
                price: 21000,
                image: 'suwir-tongkol-kemangi.jpg',
                categoryId: 1,
            },
            {
                id: 15,
                title: 'Telur crispy',
                price: 10000,
                image: 'telur-crispy.jpg',
                categoryId: 1,
            },
            {
                id: 16,
                title: 'Cocktail',
                price: 10000,
                image: 'cocktail.jpg',
                categoryId: 2,
            },
            {
                id: 17,
                title: 'cranberry red',
                price: 10000,
                image: 'cranberry-red.jpg',
                categoryId: 2,
            },
            {
                id: 18,
                title: 'dum dum thai tea',
                price: 10000,
                image: 'dum-dum-thai-tea.jpg',
                categoryId: 2,
            },
            {
                id: 19,
                title: 'firefly',
                price: 10000,
                image: 'firefly.jpg',
                categoryId: 2,
            },
            {
                id: 20,
                title: 'orange-juice',
                price: 10000,
                image: 'orange-juice.jpg',
                categoryId: 2,
            },
            {
                id: 21,
                title: 'square root',
                price: 10000,
                image: 'square-root.jpg',
                categoryId: 2,
            },
            {
                id: 22,
                title: 'square root ginger beer',
                price: 10000,
                image: 'square-root-ginger-beer.jpg',
                categoryId: 2,
            },
            {
                id: 23,
                title: 'square root mojito',
                price: 10000,
                image: 'square-root-mojito.jpg',
                categoryId: 2,
            },
            {
                id: 24,
                title: 'beanitos',
                price: 8000,
                image: 'beanitos.jpg',
                categoryId: 3,
            },
            {
                id: 25,
                title: 'chocolate bliss balls',
                price: 12000,
                image: 'chocolate-bliss-balls.jpg',
                categoryId: 3,
            },
            {
                id: 26,
                title: 'cookies',
                price: 9000,
                image: 'cookies.jpg',
                categoryId: 3,
            },
            {
                id: 27,
                title: 'organic crave',
                price: 11000,
                image: 'organic-crave.jpg',
                categoryId: 3,
            },
            {
                id: 28,
                title: 'popcorn',
                price: 15000,
                image: 'popcorn.jpg',
                categoryId: 3,
            },
            {
                id: 29,
                title: 'pulsitos',
                price: 13000,
                image: 'pulsitos.jpg',
                categoryId: 3,
            },
            {
                id: 30,
                title: 'alone',
                price: 10000,
                image: 'alone.jpg',
                categoryId: 4,
            },
            {
                id: 31,
                title: 'couple',
                price: 20000,
                image: 'couple.jpg',
                categoryId: 4,
            },
            {
                id: 32,
                title: 'foursome',
                price: 30000,
                image: 'foursome.jpg',
                categoryId: 4,
            },
            {
                id: 33,
                title: 'group',
                price: 50000,
                image: 'group.jpg',
                categoryId: 4,
            },
        ],
        itemsMenu: [
            {
                id: false,
                icon: 'fa-solid fa-border-all',
                title: 'All',
            },
            {
                id: 1,
                icon: 'fa-solid fa-bowl-food',
                title: 'Foods',
            },
            {
                id: 2,
                icon: 'fa-solid fa-champagne-glasses',
                title: 'Drinks',
            },
            {
                id: 3,
                icon: 'fa-solid fa-cookie',
                title: 'Snacks',
            },
            {
                id: 4,
                icon: 'fa-solid fa-chair',
                title: 'Places',
            },
        ],
        additionalPrice: {
            title: 'Tax',
            mode: 'percent',
            value: 10,
        },
        categoryId: false,
        itemsOrder: [],
    },

    getters: {
        getOrderItems: (state) => {
            return state.itemsOrder.map(({ id, quantity }) => {
                let item = state.itemsProducts.find((item) => item.id === id);
                return {
                    id: id,
                    title: item.title,
                    price: item.price,
                    quantity,
                };
            });
        },

        getTotalOrderItems: () => (price, quantity) => {
            return price * quantity;
        },

        getSubTotal: (state, getters) => {
            return getters.getOrderItems.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0);
        },

        getCalculateTax: (state, getters) => {
            return getters.getSubTotal * (state.additionalPrice.value / 100);
        },

        getTotal: (state, getters) => {
            return getters.getSubTotal + getters.getCalculateTax;
        },
    },

    mutations: {
        setCategoryId(state, categoryId) {
            state.categoryId = categoryId;
        },
        addItem(state, idProduct) {
            state.itemsOrder.push({
                id: idProduct,
                quantity: 1,
            });
        },

        incrementItem(state, idProduct) {
            let item = state.itemsOrder.find((item) => item.id === idProduct);
            item.quantity++;
        },
        decrementItem(state, idProduct) {
            let item = state.itemsOrder.find((item) => item.id === idProduct);

            if (item.quantity > 1) {
                item.quantity--;
            }
        },
        removeitem(state, idProduct) {
            let item = state.itemsOrder.findIndex(
                (item) => item.id === idProduct,
            );
            state.itemsOrder.splice(item, 1);
        },

        deleteOrderItems(state) {
            state.itemsOrder = [];
        },
    },

    actions: {
        setCategoryId({ commit }, categoryId) {
            commit('setCategoryId', categoryId);
        },

        addToChart({ commit, state }, idProduct) {
            const found = state.itemsOrder.find(
                (item) => item.id === idProduct,
            );
            if (found) {
                commit('incrementItem', idProduct);
            } else {
                commit('addItem', idProduct);
            }
        },

        incrementItem({ commit }, idProduct) {
            commit('incrementItem', idProduct);
        },

        decrementItem({ commit }, idProduct) {
            commit('decrementItem', idProduct);
        },
        removeItem({ commit }, idProduct) {
            commit('removeitem', idProduct);
        },

        deleteOrderItems({ commit }) {
            commit('deleteOrderItems');
        },
    },
});

export default store;
