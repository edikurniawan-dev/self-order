<script>
export default {
    data() {
        return {
            itemsMenu: [
                {
                    title: 'Terms and conditions',
                    link: 'javascript:void(0)',
                },
                {
                    title: 'Privacy Policy',
                    link: 'javascript:void(0)',
                },
            ],
            socialMediaItems: [
                {
                    icon: 'fa-brands fa-facebook-square',
                    link: 'javascript:void(0)',
                },
                {
                    icon: 'fa-brands fa-instagram',
                    link: 'javascript:void(0)',
                },
                {
                    icon: 'fa-brands fa-twitter',
                    link: 'javascript:void(0)',
                },
            ],
        };
    },

    name: 'Footer',
};
</script>

<template>
    <footer class="flex flex-col">
        <div
            class="flex flex-col items-center justify-center p-4 mx-4 my-6 bg-white rounded-lg shadow md:justify-between md:flex-row"
        >
            <ul class="flex flex-wrap items-center mb-6 md:mb-0">
                <li v-for="(item, i) in itemsMenu" :key="i">
                    <a
                        :href="item.link"
                        class="mr-4 text-sm font-normal text-gray-500 hover:underline hover:decoration-blue-800 hover:text-blue-800 md:mr-6"
                        >{{ item.title }}</a
                    >
                </li>
            </ul>
            <div class="flex space-x-6 sm:justify-center">
                <a
                    v-for="(item, i) in socialMediaItems"
                    :key="i"
                    :href="item.link"
                    class="text-gray-500 hover:text-blue-900"
                >
                    <i :class="item.icon" class="h-5"></i>
                </a>
            </div>
        </div>
        <p class="px-4 my-5 text-sm text-center text-gray-500">
            &copy;{{ new Date().getFullYear() }}
            <a
                href="/"
                class="hover:underline hover:decoration-blue-800 hover:text-blue-800"
                ><span class="font-bold">SelfOrder</span></a
            >. All rights reserved.
        </p>
    </footer>
</template>
