<template>
    <div class="post-container py-8">
        <!-- Post Title -->
        <h3 class="text-3xl font-bold">
            <NuxtLink :to="`/posts/1`">
                Title of Post
            </NuxtLink>
        </h3>

        <!-- Post Meta -->
        <div class="post-meta text-gray-700 flex items-center space-x-2">
            <div>Jul 5, 2024</div>
            <div>&middot;</div>
            <div>Mahmoud Reda</div>
        </div>

        <!-- Post Preview -->
        <div class="post-preview leading-relaxed mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptatem, illo earum et sapiente voluptates dolorem alias? Ducimus, tempora? Pariatur asperiores harum necessitatibus earum, doloremque delectus tenetur magni minima blanditiis ullam, ipsa sequi! Qui recusandae excepturi, voluptate animi suscipit ut?
        </div>

        <!-- Read more -->
        <div class="mt-4">
            <NuxtLink :to="`/posts/1`" class="bg-blue-700 hover:bg-blue-800 text-white rounded inline-block px-4 py-2">
                Read More
            </NuxtLink>
        </div>
    </div>
</template>
