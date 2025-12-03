<script lang="ts">
    import { base } from '$app/paths';
    
</script>

<div class="min-h-screen">

    <main class="mx-auto px-4 sm:px-6 lg:px-8">
        
        <section class="relative">
            <!-- Special title that overlays with banner -->
            <div class="relative w-full flex items-center -top-16">
                <div class="max-w-6xl mx-auto sm:px-6">
                    <h2 class="relative top-4 text-4xl font-light text-center font-merriweather bg-white pt-6 px-14 md:px-32 ">
                        404
                    </h2>
                </div>
            </div>
            
          
               
        </section>


          <section class="relative">
             <div class="max-w-6xl mx-auto pt-4">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <img 
                            src={base + '/image4.jpg'} 
                            alt="Tücsök Vendégház" 
                            class="rounded-lg h-64 w-auto shadow-lg ml-auto"
                        />
                    </div>
                    <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
                    
                        <p class="font-semibold text-teal-700">
                            A keresett oldal nem található...
                        </p>
                    </div>
                </div>
            </div>
          </section>
        
    </main>
</div>