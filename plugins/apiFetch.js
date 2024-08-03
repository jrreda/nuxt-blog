import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    nuxtApp.provide(
        'apiFetch',
        $fetch.create({ baseURL: 'http://nuxt-backend.test/' })
        // $fetch.create({ baseURL: config.BASE_URL })
    )
})