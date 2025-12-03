<script>
  import { onMount } from 'svelte';
  import { Fancybox } from '@fancyapps/ui';
  import '@fancyapps/ui/dist/fancybox/fancybox.css';

  // Array of your images
  const images = Array.from({ length: 20 }, (_, i) => i + 1);

  // Function to get image URLs
  const getImageUrl = (num, isThumb = false) => {
    const path = isThumb ? '/photos/thumb/' : '/photos/';
    return `${path}${num}.jpg`;
  };

  onMount(() => {
    // Initialize Fancybox with updated options
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

    // Cleanup on component destroy
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
      <!-- Title that overlays with banner -->
      <div class="relative w-full flex items-center -top-16">
        <div class="w-full">
          <h2 class="relative top-4 text-4xl font-light text-center font-merriweather max-w-5/6 lg:max-w-1/3 bg-white pt-6 mx-auto">
            Galéria
          </h2>
        </div>
      </div>

      <div class="max-w-6xl mx-auto pt-8">
        <div class="bg-white rounded-lg p-6 md:p-8 space-y-6">
          <!-- Gallery Grid -->
          <div class="text-gray-700 leading-relaxed">


            <!-- Gallery -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {#each images as imageNum}
                <a
                  href={getImageUrl(imageNum)}
                  data-fancybox="gallery"
                  data-caption=""
                  class="block group overflow-hidden rounded-lg shadow-md transition-shadow duration-300"
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

<style>
  /* Custom styling for Fancybox */
  .fancybox__container {
    --fancybox-thumbs-width: 120px;
    --fancybox-thumbs-ratio: 1;
  }

  .fancybox__thumbs .carousel__slide {
    padding: 8px;
  }

  /* Hide captions completely */
  .fancybox__caption {
    display: none !important;
  }

  /* Ensure images fit well in grid */
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
</style>