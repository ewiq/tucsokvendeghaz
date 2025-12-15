<script lang="ts">
	import './layout.css';
	import { Menu, X, Mail, Phone, MapPin } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { base } from '$app/paths';
	import { afterNavigate } from '$app/navigation';

	afterNavigate(({ to, from }) => {
		if (to?.route.id !== from?.route.id && to?.url.hash === '') {
			window.scrollTo({ top: 0, behavior: 'instant' });
		}

		if (to?.route.id === '/' && to?.url.hash) {
			document.title = 'Tücsök Vendégház';
		}
	});

	let { children } = $props();

	function createUrl(href: string) {
		if (href.startsWith('/#')) return base + href;
		if (href === '/') return base || '/';
		return base + (href === '/' ? '' : href);
	}

	const navItems = [
		{ name: 'Főoldal', href: '/' },
		{ name: 'Árak', href: '/#arak' },
		{ name: 'Kapcsolat', href: '/#kapcsolat' },
		{ name: 'Galéria', href: '/galeria' },
		{ name: 'Programok', href: '/programok' }
	];

	const email = `pellet.philippe@gmail.com`;
	const address = 'Nógrád, Kodály Zoltán u. 21.';
	const phone1 = '+36 30 493 2559';
	const phone2 = '+36 30 384 6843';

	let isMobileMenuOpen = $state(false);
	let isScrolled = $state(false);
	
	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	$effect(() => {
		const handleScroll = () => {
			if (isMobileMenuOpen) isMobileMenuOpen = false;
			const bannerHalfHeight = window.innerHeight * 0.4;
			isScrolled = window.scrollY > bannerHalfHeight;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>Tücsök Vendégház</title>
	<link rel="icon" href={`${base}/favicon.png`} />
	<meta name="description" content="Tücsök Vendégház - Kényelmes szálláshely nyugodt környezetben." />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
</svelte:head>

<div class="font-[Montserrat] min-h-screen flex flex-col overflow-x-hidden">
	<div class="w-full h-[60vh] min-h-[400px] max-h-[700px]"></div>
	<div class="fixed top-0 left-0 right-0 w-full h-[60vh] min-h-[400px] max-h-[700px] overflow-hidden z-0">
		<img src={createUrl('/banner.jpg')} alt="Tücsök Vendégház" class="w-full h-full object-cover" />
	</div>

	<header class="fixed top-0 left-0 right-0 w-full z-20 shadow-sm flex items-center transition-all duration-300 {isScrolled ? 'bg-white h-20' : 'bg-white/75 h-32'}">
		<div class="container mx-auto h-full px-4 flex justify-between items-center w-full">
			<a href={createUrl('/')} class="flex items-center h-full">
				<h1 class="text-3xl font-merriweather md:text-4xl xl:text-5xl font-semibold sm:font-normal tracking-wide text-gray-800 transition-all duration-300 {isScrolled ? 'pl-10' : 'pt-0'}">
					Tücsök Vendégház
				</h1>
			</a>

			<nav class="hidden lg:flex space-x-4 xl:space-x-8 h-full font-medium transition-all duration-300 items-center pt-8">
				{#each navItems as item}
					<a
						href={createUrl(item.href)}
						class="whitespace-nowrap relative text-gray-800 text-xl hover:text-teal-600 transition tracking-wide uppercase
							after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full
							after:bg-teal-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300
							hover:after:scale-x-100"
					>
						{item.name}
					</a>
				{/each}
			</nav>

			<button onclick={toggleMobileMenu} class="lg:hidden p-2 text-gray-800 relative w-12 h-12">
				<div class="absolute inset-0 flex items-center justify-center transition-all duration-300 {isMobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}">
					<Menu class="h-8 w-8" />
				</div>
				<div class="absolute inset-0 flex items-center justify-center transition-all duration-300 {isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}">
					<X class="h-8 w-8" />
				</div>
			</button>
		</div>

		{#if isMobileMenuOpen}
			<div transition:slide={{ duration: 150 }} class="lg:hidden absolute z-30 w-full {isScrolled ? 'bg-white top-20' : 'bg-white/70 top-32'} left-0 right-0">
				<div class="px-4 py-2 text-right space-y-2 shadow-lg rounded-bl-lg">
					{#each navItems as item}
						<a
							href={createUrl(item.href)}
							onclick={() => (isMobileMenuOpen = false)}
							class="border-b border-gray-500 block px-3 py-2 text-xl font-medium text-gray-700 hover:text-teal-600 transition uppercase tracking-wider"
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</header>

	<main class="grow h-full w-full bg-white z-10 relative">
		{@render children()}
	</main>

	<footer class="bg-teal-900 text-white mt-0 z-2">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="flex flex-col space-y-3">
					<div class="flex items-center space-x-3">
						<MapPin class="h-5 w-5 shrink-0" />
						<p class="whitespace-nowrap">{address}</p>
					</div>
					<div class="flex items-center space-x-3">
						<Mail class="h-5 w-5 shrink-0" />
						<a href={`mailto:${email}`} class="hover:text-teal-300 break-all">{email}</a>
					</div>
					<div class="flex items-center space-x-3">
						<Phone class="h-5 w-5 shrink-0" />
						<div class="flex flex-col">
							<a href={`tel:${phone1.replace(/\s/g, '')}`}>{phone1}</a>
							<a href={`tel:${phone2.replace(/\s/g, '')}`}>{phone2}</a>
						</div>
					</div>
				</div>

				<div class="flex flex-col md:items-center justify-start space-y-2">
					<h2 class="text-xl tracking-wide">Tücsök Vendégház</h2>
					<p class="text-gray-300 font-light pb-2">&copy; {new Date().getFullYear()}</p>
					<p class="text-gray-300 text-sm">NTAK Regisztrációs szám:</p>
					<p class="text-gray-300 text-sm">MA25119024</p>
				</div>

				<div class="flex flex-col items-start md:items-end space-y-2">
					<a href={createUrl('/adatvedelmi')} class="hover:text-teal-300">Adatvédelmi tájékoztató</a>
						<div class="hover:text-teal-300">
					<a
							href={base + '/Tücsök_Vendeghaz_Hazirend_HU.pdf'}
							target="_blank"
							rel="noopener noreferrer"
						>
						Házirend
						</a>
				</div>
				</div>
			
			</div>
		</div>
	</footer>
</div>
