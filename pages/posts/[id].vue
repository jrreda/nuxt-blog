<template>
    <div class="container mx-auto w-1/2 py-8">
        <!-- Page Title -->
        <Title>{{ $route.params.id }} | {{ title }}</Title>

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

        <!-- Post Content -->
        <div class="post-content mt-4">
            {{ $route.params.id }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui, esse aspernatur corrupti quidem provident eligendi dolores quasi, dignissimos quisquam sapiente quaerat quibusdam, ullam enim iste nemo. Dicta minus doloremque, quisquam provident architecto tempora aperiam doloribus. Repellat id facere quam omnis natus maiores aut dolorum, eligendi, laboriosam totam eaque. Reprehenderit dolores repellat fuga ratione quo id non, eum facilis dolore necessitatibus? Odit id a fugiat, aspernatur nihil neque facere excepturi! Commodi magnam veritatis adipisci aspernatur nisi quod, corrupti maxime accusamus nobis officiis recusandae eaque ad iure debitis odit voluptate nostrum voluptatem nemo exercitationem sapiente reiciendis cum ea amet. Deserunt, perspiciatis.
        </div>
    </div>
</template>

<script setup>
    const title = useState('title');
</script>