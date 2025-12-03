<script lang="ts">
    import { base } from '$app/paths';
    
    const address = '2642 Nógrád, Kodály Zoltán utca 21.';
    const phone1 = '+36 30 493 2559'; 
    const phone2 = '+36 30 384 6843';
    const email = `pellet.philippe@gmail.com`;
</script>

<svelte:head>
    <title>Tücsök Vendégház | Programok</title>
    <meta name="description" content="A Tücsök Vendégház adatvédelmi tájékoztatója." />
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen">
    <main class="mx-auto px-4 sm:px-6 lg:px-8">
        <section class="relative pb-24">
            <div class="relative w-full flex items-center -top-16">
                <div class="w-full">
                    <h2 class="relative top-4 text-4xl font-light text-center font-merriweather max-w-5/6 lg:max-w-1/3 bg-white pt-6 mx-auto">
                       Programok
                    </h2>
                </div>
            </div>
            
            <div class="max-w-6xl mx-auto pt-8">
                <div class="bg-white rounded-lg p-6 md:p-8 space-y-6">
                    <div class="text-gray-700 leading-relaxed space-y-8">
                      <h2 class="text-2xl">Hamarosan...</h2>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>

<style>
    :global(body) {
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    
    .font-merriweather {
        font-family: 'Merriweather', Georgia, serif;
    }
</style>