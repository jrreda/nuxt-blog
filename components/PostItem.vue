<template>
    <div class="post-container py-8">
        <!-- Post Title -->
        <h3 class="text-3xl font-bold">
            <NuxtLink :to="`/posts/${props.post.id}`">
                {{ props.post.title }}
            </NuxtLink>
        </h3>

        <!-- Post Meta -->
        <div class="post-meta text-gray-700 flex items-center space-x-2">
            <div>{{ props.post.created_at }}</div>
            <div>&middot;</div>
            <div>{{ props.post.user.name }}</div>
        </div>

        <!-- Post Preview -->
        <div class="post-preview leading-relaxed mt-4 line-clamp-3">
            {{ props.post.body }}
        </div>

        <!-- Read more -->
        <div class="mt-4">
            <NuxtLink :to="`/posts/${props.post.id}`" class="bg-blue-700 hover:bg-blue-800 text-white rounded inline-block px-4 py-2">
                Read More
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    post: Object,
});
</script>
