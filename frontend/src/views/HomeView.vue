<script>
import Footer from '@/components/Footer.vue';
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
    methods: {
        ...mapActions({
            setCategoryId: 'setCategoryId',
            addToChart: 'addToChart',
            incrementItem: 'incrementItem',
            decrementItem: 'decrementItem',
            removeItem: 'removeItem',
            deleteOrderItems: 'deleteOrderItems',
        }),

        currencyFormat(value) {
            return value.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
            });
        },

        orderListToggle() {
            const orderList = document.getElementById('order-list');
            orderList.classList.toggle('hidden');
        },
    },

    computed: {
        ...mapState([
            'itemsProducts',
            'itemsMenu',
            'categoryId',
            'itemsOrder',
            'additionalPrice',
        ]),
        ...mapGetters([
            'getOrderItems',
            'getTotalOrderItems',
            'getSubTotal',
            'getCalculateTax',
            'getTotal',
        ]),

        filteredProducts() {
            if (this.categoryId) {
                return this.itemsProducts.filter(
                    (item) => item.categoryId == this.categoryId,
                );
            }

            return this.itemsProducts;
        },
    },

    components: {
        Footer,
    },
};
</script>

<template>
    <div
        id="backdrop"
        class="fixed inset-0 z-10 hidden bg-gray-900 opacity-50"
    ></div>
    <aside
        id="sidebar"
        class="fixed top-0 left-0 z-20 flex-col flex-shrink-0 hidden w-64 h-screen pt-16 duration-75 bg-white md:flex md:h-full transition-width"
        aria-label="Sidebar"
    >
        <div
            class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200"
        >
            <div class="flex flex-col flex-1 pt-3 pb-4 overflow-y-auto">
                <div class="flex-1 px-3 space-y-1 bg-white divide-y">
                    <div class="flex flex-col w-full space-y-2">
                        <div
                            v-for="(item, i) in itemsMenu"
                            :key="i"
                            class="flex items-center w-full text-base font-semibold text-gray-500 rounded-lg hover:bg-blue-100 group"
                        >
                            <input
                                type="radio"
                                :id="item.id"
                                :value="item.id"
                                v-model="categoryId"
                                hidden
                                @change="setCategoryId(item.id)"
                            />
                            <label
                                :for="item.id"
                                class="flex w-full p-3 cursor-pointer"
                            >
                                <div class="">
                                    <i
                                        :class="item.icon"
                                        class="w-6 h-6 group-hover:text-blue-800"
                                    ></i>
                                </div>
                                <div
                                    class="flex items-center justify-between w-full text-menu"
                                >
                                    <span
                                        class="ml-3 group-hover:text-blue-800"
                                        >{{ item.title }}</span
                                    >
                                </div>
                            </label>
                        </div>
                        <button
                            v-on:click="orderListToggle"
                            class="flex items-center w-full text-base font-semibold text-gray-500 rounded-lg lg:hidden hover:bg-blue-100 group"
                        >
                            <label class="flex w-full p-3 cursor-pointer">
                                <div class="">
                                    <i
                                        class="w-6 h-6 fa-solid fa-basket-shopping group-hover:text-blue-800"
                                    ></i>
                                </div>
                                <div
                                    class="flex items-center justify-between w-full text-menu"
                                >
                                    <span class="ml-3 group-hover:text-blue-800"
                                        >Order List</span
                                    >
                                </div>
                            </label>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </aside>

    <div class="ml-0 md:ml-64">
        <main class="relative flex flex-col-reverse mx-5 my-6 lg:flex-row">
            <div
                class="grid w-full grid-cols-2 mr-0 lg:mr-5 md:grid-cols-3 lg:w-3/5 gap-x-5 gap-y-7"
            >
                <button
                    v-for="(product, i) in filteredProducts"
                    v-on:click="addToChart(product.id)"
                    :key="i"
                    class="flex flex-col mb-3 rounded-lg"
                >
                    <div class="overflow-hidden rounded-lg">
                        <img
                            :src="`src/assets/img/${product.image}`"
                            :alt="product.image"
                        />
                    </div>
                    <div class="flex flex-col items-center w-full py-2">
                        <span class="font-semibold text-center capitalize">{{
                            product.title
                        }}</span>
                        <span class="text-gray-500">
                            {{ currencyFormat(product.price) }}
                        </span>
                    </div>
                </button>
            </div>
            <div
                id="order-list"
                class="lg:sticky lg:block hidden shadow w-full mb-5 lg:mb-0 lg:w-2/5 bg-white rounded-lg top-[5.5rem] h-full p-4"
            >
                <div class="flex items-center justify-between">
                    <span class="font-semibold text-blue-800">Order List</span>
                    <button
                        v-on:click="orderListToggle"
                        class="flex items-center p-1 rounded-lg lg:hidden hover:bg-blue-100"
                    >
                        <i
                            class="text-gray-500 hover:text-blue-800 fa-solid fa-minimize"
                        ></i>
                    </button>
                </div>
                <hr class="mt-2" />
                <ul>
                    <li
                        v-for="(orderItem, i) in getOrderItems"
                        :key="i"
                        class="flex flex-col"
                    >
                        <div class="flex justify-between py-3">
                            <div class="flex flex-col">
                                <span class="font-semibold capitalize">
                                    {{ orderItem.title }}
                                </span>
                                <div
                                    class="flex items-center justify-between pt-2"
                                >
                                    <span class="text-gray-500">
                                        {{ currencyFormat(orderItem.price) }}
                                    </span>
                                    <div class="flex items-center ml-6">
                                        <button
                                            v-on:click="
                                                decrementItem(orderItem.id)
                                            "
                                            class="flex items-center"
                                        >
                                            <i
                                                class="h-6 fa-solid fa-square-minus hover:text-blue-800 text-slate-300"
                                            ></i>
                                        </button>
                                        <span
                                            class="mx-3 font-semibold text-blue-800"
                                            >{{ orderItem.quantity }}</span
                                        >
                                        <button
                                            v-on:click="
                                                incrementItem(orderItem.id)
                                            "
                                            class="flex items-center"
                                        >
                                            <i
                                                class="h-6 fa-solid fa-square-plus hover:text-blue-800 text-slate-300"
                                            ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col justify-between">
                                <div class="flex justify-end">
                                    <button
                                        v-on:click="removeItem(orderItem.id)"
                                        class="flex items-center"
                                    >
                                        <i
                                            class="text-red-500 hover:text-red-700 h-7 fa-solid fa-rectangle-xmark"
                                        ></i>
                                    </button>
                                </div>
                                <span class="font-semibold">
                                    {{
                                        currencyFormat(
                                            getTotalOrderItems(
                                                orderItem.quantity,
                                                orderItem.price,
                                            ),
                                        )
                                    }}
                                </span>
                            </div>
                        </div>
                        <hr />
                    </li>
                </ul>
                <div v-if="getOrderItems.length" class="">
                    <ul class="mt-3">
                        <li class="flex justify-between">
                            <span class="font-semibold">Sub Total</span>
                            <span class="font-semibold">
                                {{ currencyFormat(getSubTotal) }}
                            </span>
                        </li>
                        <li class="flex justify-between">
                            <span class="font-semibold">
                                {{ additionalPrice.value }}%
                                {{ additionalPrice.title }}
                            </span>
                            <span class="font-semibold">
                                {{ currencyFormat(getCalculateTax) }}
                            </span>
                        </li>
                        <hr class="mt-3" />
                        <li class="flex justify-between mt-3">
                            <span class="text-lg font-bold">Total</span>
                            <span class="text-lg font-bold">
                                {{ currencyFormat(getTotal) }}
                            </span>
                        </li>
                    </ul>
                    <div class="flex justify-between mt-5 space-x-4">
                        <button
                            v-on:click="deleteOrderItems"
                            class="flex items-center justify-center w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
                        >
                            Cancel
                        </button>
                        <button
                            class="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-800 rounded hover:bg-blue-900"
                        >
                            Pay
                        </button>
                    </div>
                </div>
                <div v-else class="w-full mt-4 text-center">
                    <span class="font-semibold">Silahkan Pilih Menu </span>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>
