<script>
  import { onMount } from 'svelte';
  import { Fancybox } from '@fancyapps/ui';
  import '@fancyapps/ui/dist/fancybox/fancybox.css';
  import { base } from '$app/paths';

  const images = Array.from({ length: 22 }, (_, i) => i + 1);

  const getImageUrl = (num, isThumb = false) => {
    const path = isThumb ? '/photos/thumb/' : '/photos/';
    return `${base}${path}${num}.jpg`;
  };

  onMount(() => {
    Fancybox.bind('[data-fancybox]', {
      Carousel: {
        Thumbs: {
      type: "classic",
    },
    Toolbar: {
      display: {
        left: ["counter"],
        middle: [],
        right: ["close"],
      },
    },
  },
    });

    return () => {
      Fancybox.destroy();
    };
  });
</script>

<svelte:head>
  <title>Tücsök Vendégház | Galéria</title>
  <meta name="description" content="Tekintse meg Tücsök Vendégházunk képeit, galériánkat." />
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen">
  <main class="mx-auto px-4 sm:px-6 lg:px-8">
    <section class="relative pb-24">
      <div class="relative w-full flex items-center -top-16">
        <div class="w-full">
          <h2 class="relative top-4 text-4xl font-light text-center font-merriweather max-w-5/6 lg:max-w-1/3 bg-white pt-6 mx-auto">
            Galéria
          </h2>
        </div>
      </div>

      <div class="max-w-6xl mx-auto pt-8">
        <div class="bg-white p-6 md:p-8 space-y-6">
          <div class="text-gray-700 leading-relaxed">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {#each images as imageNum}
                <a
                  href={getImageUrl(imageNum)}
                  data-fancybox="gallery"
                  data-caption=""
                  class="block group overflow-hidden rounded shadow-md transition-shadow duration-300"
                >
                  <div class="relative aspect-square overflow-hidden">
                    <img
                      src={getImageUrl(imageNum, true)}
                      alt=""
                      width="300"
                      height="300"
                      loading="lazy"
                      class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

