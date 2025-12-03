<script lang="ts">
    import { base } from '$app/paths';
    
    const address = '2642 Nógrád, Kodály Zoltán utca 21.';
    const phone1 = '+36 30 493 2559'; 
    const phone2 = '+36 30 384 6843';
    const email = `pellet.philippe@gmail.com`;
   
</script>

<svelte:head>
    <title>Tücsök Vendégház</title>
    <meta name="description" content="Ízlésesen berendezett vendégházunk Nógrád faluban, a Börzsöny szívében várja a pihenni vágyókat." />
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen">

    <main class="mx-auto px-4 sm:px-6 lg:px-8">
        
        <section class="relative">
            <div class="relative w-full flex items-center -top-16">
                <div class="w-full">
                    <h2 class="relative top-4 text-4xl font-light text-center font-merriweather max-w-5/6 lg:max-w-1/3 bg-white pt-6 mx-auto ">
                        A vendégházról
                    </h2>
                </div>
            </div>
            
            <div class="max-w-6xl mx-auto pt-4">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
                    <div class="px-12 lg:px-0">
                        <img 
                            src={base + '/photos/4.jpg'} 
                            alt="Tücsök Vendégház" 
                            class="rounded-lg shadow-lg w-full "
                        />
                    </div>
                    <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Ízlésesen berendezett vendégházunk Nógrád faluban, a Börzsöny szívében, 
                            a vár aljában várja a pihenni vágyókat.
                        </p>
                        <p>
                            A ház néhány perc sétára található a vasútállomástól, 
                            abszolút csendes környezetben. Nógrád falu kedvelt kiindulópontja számos túrának, 
                            az Országos Kéktúra vonalán helyezkedik el.
                        </p>
                        <p>
                            Az antik bútorokkal berendezett vendégházban két szoba áll a vendégek rendelkezésére. 
                            A házban jól felszerelt konyha, étkező, fürdőszoba is található. 
                            Pótágyakkal összesen hat férőhelyes a ház.
                        </p>
                        <p>
                            Hangulatos kis kert is tartozik a házhoz.
                        </p>
                        <p class="font-semibold text-teal-700">
                            Látogasson el hozzánk, élvezze a harapnivalóan friss levegőt és a tücsökmuzsikát!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="max-w-7xl mx-auto relative mt-20 mb-16">
            <div class="absolute inset-0 -z-10 w-screen left-1/2 -translate-x-1/2">
                <div class="relative w-full h-full">
                    <div class="absolute inset-0 bg-linear-to-t from-white via-white/70 to-transparent"></div>
                </div>
            </div>
            
            <div class="relative">
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div class="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src={base + `/photos/9.jpg`} 
                            alt={`Vendégház kép 9`}
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div class="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src={base + `/photos/11.jpg`} 
                            alt={`Vendégház kép 11`}
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div class="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src={base + `/photos/18.jpg`} 
                            alt={`Vendégház kép 18`}
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div class="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src={base + `/photos/3.jpg`} 
                            alt={`Vendégház kép 3`}
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
               
            </div> 
        </section>

        <section id="arak" class="relative pt-12 pb-24 scroll-mt-6">
            <div class="absolute inset-0 -z-10 w-screen left-1/2 -translate-x-1/2 pt-12">
                <div class="relative w-full h-full">
                    <img 
                        src={base + '/castle.jpg'} 
                        alt="Background" 
                        class="w-full h-full object-cover opacity-15"
                    />
                </div>
            </div>

            <div class="relative w-full flex items-center mb-16">
                <div class="w-full">
                    <h2 class="relative text-4xl font-light text-center font-merriweather max-w-5/6 lg:max-w-1/3 pt-4 mx-auto h-full">
                            Árak
                        <div class="absolute h-full bg-white bottom-0 right-full w-[150%]"></div>
                        <div class="absolute h-full bg-white bottom-0 left-full w-[150%]"></div>
                    </h2>
                </div>
            </div>

                <div class="max-w-4xl mx-auto mb-12">
                    <h3 class="text-2xl font-semibold text-gray-700 mb-6 text-center">
                        16-99 éves korig (éjszakánként)
                    </h3>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr class="bg-teal-600">
                                    <th class="border border-gray-300 px-4 py-3">1 fő</th>
                                    <th class="border border-gray-300 px-4 py-3">2 fő</th>
                                    <th class="border border-gray-300 px-4 py-3">3 fő</th>
                                    <th class="border border-gray-300 px-4 py-3">4 fő</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center bg-white">
                                    <td class="border border-gray-300 px-4 py-3">22 000 Ft</td>
                                    <td class="border border-gray-300 px-4 py-3">22 000 Ft</td>
                                    <td class="border border-gray-300 px-4 py-3">30 000 Ft</td>
                                    <td class="border border-gray-300 px-4 py-3">37 500 Ft</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="max-w-4xl mx-auto mb-8">
                    <h3 class="text-2xl font-semibold text-gray-700 mb-6 text-center">
                        Gyerekek (éjszakánként)
                    </h3>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr class="bg-teal-600">
                                    <th class="border border-gray-300 px-4 py-3">&lt; 2 éves</th>
                                    <th class="border border-gray-300 px-4 py-3">&lt; 12 éves</th>
                                    <th class="border border-gray-300 px-4 py-3">&lt; 16 éves</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center bg-white">
                                    <td class="border border-gray-300 px-4 py-3">0 Ft</td>
                                    <td class="border border-gray-300 px-4 py-3">5 000 Ft</td>
                                    <td class="border border-gray-300 px-4 py-3">6 000 Ft</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="max-w-4xl mx-auto pt-4">
                    <p class="text-gray-600 text-center text-lg">
                        Az árak HUF-ban értendők és tartalmazzák az ÁFÁ-t. 
                        Külön fizetendő az idegenforgalmi adó, melynek mértéke naponta 300 Ft 
                        minden 18. életévét betöltött vendég után.
                    </p>
                </div>
        </section>

        <section id="kapcsolat" class="relative pb-16 scroll-mt-32">
                 <div class="relative w-full flex items-center -top-16">
                <div class="w-full">
                    <h2 class="relative max-w-5/6 top-4 text-4xl font-light text-center font-merriweather lg:max-w-1/3 bg-white pt-6 mx-auto ">
                        Kapcsolat
                    </h2>
                </div>
            </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Kérjük a foglaláshoz vegye fel velünk a kapcsolatot a megadott elérhetőségek egyikén.</h3>
                        </div>
                        
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Cím</h3>
                            <p class="text-gray-700 text-lg mb-2">{address}</p>
                            <a 
                                href="https://goo.gl/maps/apxuay222FYJWhPt6" 
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-xl text-teal-600 hover:text-teal-700 underline inline-block"
                            >
                                Megjelenítés Google Maps-en
                            </a>
                        </div>
                        
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Email</h3>
                            <a 
                                href={`mailto:${email}`}
                                class="text-gray-700 hover:text-teal-600 text-lg transition duration-150"
                            >
                                {email}
                            </a>
                        </div>
                        
                        <div class="phone-link">
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Telefonszám</h3>

                            <div class="flex flex-col space-y-1">
                                <a 
                                    href={`tel:${phone1.replace(/\s/g, '')}`}
                                    class="text-gray-700 text-lg"
                                >
                                    {phone1}
                                </a>
                                
                                <a 
                                    href={`tel:${phone2.replace(/\s/g, '')}`}
                                    class="text-gray-700 text-lg"
                                >
                                    {phone2}
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">NTAK Regisztrációs szám</h3>
                            <p class="text-gray-700 text-lg">MA22048920</p>
                        </div>
                    </div>

                    <div class="h-96 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            title="Tücsök Vendégház térkép"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.596874120231!2d19.04515457673546!3d47.90548736728996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a8555c28a4a19%3A0xd3ebdc4ddc5c9810!2zVMO8Y3PDtmsgdmVuZMOpZ2jDoXo!5e0!3m2!1shu!2sus!4v1764598323221!5m2!1shu!2sus"
                            width="100%"
                            height="100%"
                            style="border:0;"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
        </section>

    </main>
</div>

<style>
    @media (min-width: 768px) {
        .phone-link a {
            pointer-events: none;
            color: inherit;
            text-decoration: none;
            cursor: default;
        }
    }
</style>