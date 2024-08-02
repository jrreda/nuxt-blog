<template>
    <div class="container mx-auto w-1/2 py-8">
        <!-- Page Title -->
        <Title>{{ post.title }} | {{ title }}</Title>

        <!-- Post Title -->
        <h3 class="text-3xl font-bold">
            <NuxtLink :to="`/posts/1`">
                {{ post.title }}
            </NuxtLink>
        </h3>

        <!-- Post Meta -->
        <div class="post-meta text-gray-700 flex items-center space-x-2">
            <div>{{ post.created_at }}</div>
            <div>&middot;</div>
            <div>{{ post.user.name }}</div>
        </div>

        <!-- Post Content -->
        <div class="post-content mt-4">
            {{ $route.params.id }} {{ post.body }}
        </div>
    </div>
</template>

<script setup>
    const title = useState('title');
    const route = useRoute();

    const { data: post } = await useFetch(`http://nuxt-backend.test/api/post/${route.params.id}`);
</script>