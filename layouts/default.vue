<template>
    <div class="bg-gray-100 min-h-screen text-gray-900">
        <Title>{{ title }}</Title>
        <!-- Navigation bar -->
        <nav class="bg-white shadow text-lg px-6 py-6">
            <div class="container mx-auto flex items-center justify-between px-6">
                <div>
                    <nuxt-link to="/">Logo</nuxt-link>
                </div>
                <div>
                    <ul class="flex space-x-12 px-3">
                        <li>
                            <nuxt-link to="/">Home</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/create">Create</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/about">About</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contact">Contact</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <slot />
    </div>
</template>

<script setup>
    const title = useState('title', () => "Nuxt 3 Blog");
</script>

<style>
    .router-link-active {
        font-weight: bold;
    }
</style>