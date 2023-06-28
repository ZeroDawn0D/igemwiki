<script setup >


import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>


<template>
<div class ="sticky top-0 w-screen h-16 max-md:h-20 bg-white flex align-center justify-evenly shadow-xl z-10">
	<NuxtLink to="/" class = "cursor-pointer">
		<img src="https://static.igem.wiki/teams/4829/wiki/logo/metramorpheus.png" class = "w-28  relative top-2/4 -translate-y-2/4" />
	</NuxtLink>

	<nav class="inline-block">
		  <Menu as="div" class="relative inline-block text-left top-2/4 -translate-y-2/4">
		    <div>
		      <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 hover:text-violet-500">
		        Team ▼
		      </MenuButton>
		    </div>
		      <MenuItems class="absolute z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
		        <div class="py-1">
		          <MenuItem v-slot="{ active }">
		            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Team</a>
		          </MenuItem>
		          <MenuItem v-slot="{ active }">
		            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Attributions</a>
		          </MenuItem>
		        </div>
		      </MenuItems>
		  </Menu>

		  <Menu as="div" class="relative inline-block text-left  top-2/4 -translate-y-2/4">
		    <div>
		      <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 hover:text-violet-500">
		        Project ▼
		      </MenuButton>
		    </div>
		      <MenuItems class="absolute z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
		        <div class="py-1">
		          <MenuItem v-slot="{ active }">
		            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Contribution</a>
		          </MenuItem>
		          <MenuItem v-slot="{ active }">
		            <NuxtLink to="/description" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Description</NuxtLink>
		          </MenuItem>
		          <MenuItem v-slot="{ active }">
		            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Engineering</a>
		          </MenuItem>
		          <MenuItem v-slot="{ active }">
		            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Experiments</a>
		          </MenuItem>
		          <MenuItem v-slot="{ active }">
		            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Notebook</a>
		          </MenuItem>
		          <MenuItem v-slot="{ active }">
		            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Results</a>
		          </MenuItem>
		        </div>
		      </MenuItems>
		  </Menu>

		  <div class = "relative inline-block text-left  top-2/4 -translate-y-2/4">
		  	<button class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 hover:text-violet-500">
		  		Safety
		  	</button>
		  </div>

		  <div class = "relative inline-block text-left  top-2/4 -translate-y-2/4">
		  	<button class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 hover:text-violet-500">
		  		Human Practices
		  	</button>
		  </div>

		  <Menu as="div" class="relative inline-block text-left  top-2/4 -translate-y-2/4">
		    <div>
		      <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 hover:text-violet-500">
		        Awards ▼
		      </MenuButton>
		    </div>
		      <MenuItems class="absolute z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
		        <div class="py-1">
		          <MenuItem v-slot="{ active }">
		            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Education</a>
		          </MenuItem>
		          <MenuItem v-slot="{ active }">
		            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Measurement</a>
		          </MenuItem>
		        </div>
		      </MenuItems>
		  </Menu>

	</nav>

</div>

</template>


<style scoped>


</style>