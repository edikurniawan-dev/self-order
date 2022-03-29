<script>
export default {
    data() {
        return {
            itemsMenu: [
                {
                    title: 'Pengaturan',
                    to: '#',
                },
                {
                    title: 'Logout',
                    to: '#',
                },
            ],
        };
    },
    methods: {
        dropdownUserMenu() {
            const dropdown = document.getElementById('dropdown-user-menu');
            dropdown.classList.toggle('hidden');
        },
        sidebarToggle() {
            const sidebar = document.getElementById('sidebar');
            const backdrop = document.getElementById('backdrop');
            sidebar.classList.toggle('hidden');
            backdrop.classList.toggle('hidden');
        },
    },
};
</script>

<template>
    <nav class="fixed z-30 w-full bg-white border-b border-gray-200 shadow-sm">
        <div class="px-4 py-3">
            <div class="flex items-center justify-between">
                <div
                    v-on:click="sidebarToggle"
                    class="flex items-center justify-start"
                >
                    <button
                        class="flex items-center p-1 mr-3 text-gray-600 rounded-lg cursor-pointer md:hidden hover:bg-blue-100 hover:text-blue-800"
                    >
                        <i class="w-6 h-6 fa-solid fa-bars-staggered"></i>
                    </button>
                    <RouterLink
                        to="/"
                        class="flex items-center text-xl font-bold"
                    >
                        <img src="../assets/logo.svg" alt="" class="h-7" />
                    </RouterLink>
                </div>

                <div class="relative inline-flex items-center">
                    <button
                        v-on:click.stop="dropdownUserMenu"
                        type="button"
                        class="flex items-center p-2 text-gray-600 rounded-lg cursor-pointer group hover:bg-blue-100"
                    >
                        <span
                            class="mr-2 font-semibold group-hover:text-blue-800"
                            >Username</span
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 group-hover:text-blue-800"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>

                    <div
                        id="dropdown-user-menu"
                        class="absolute right-0 hidden bg-white border divide-y divide-gray-100 rounded-lg shadow-md top-12"
                    >
                        <div class="px-4 py-3">
                            <span
                                class="block text-sm text-gray-900 dark:text-white"
                                >Nama</span
                            >
                        </div>
                        <ul class="py-1" aria-labelledby="dropdown">
                            <li v-for="(item, i) in itemsMenu" :key="i">
                                <RouterLink
                                    :to="item.to"
                                    class="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-800"
                                    >{{ item.title }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
