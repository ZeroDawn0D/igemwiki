<script setup >


import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const burger = ref(false)

//const appear = document.getElementsByClassName("burgerMenu")

const team = ref(false)
const project = ref(false)
const awards = ref(false)

function change(str){
	if(str==="team"){
		team = ! team
	}
}
watch(burger, async(newBurger, oldBurger) =>{	
	let appear = document.getElementsByClassName("burgerMenu")
	if (newBurger){
		appear[0].style.display = "block"
		appear[1].style.display = "block"
	}else{
		appear[0].style.display = "none"
		appear[1].style.display = "none"
	}

})

watch(team, async(newTeam, oldTeam) =>{
	let appear = document.getElementsByClassName("team")[0]
	if(newTeam){
		appear.style.maxHeight = "max-content"
	}
	else{
		appear.style.maxHeight = "0px"
	}
})
watch(project, async(newProj, oldProj) =>{
	let appear = document.getElementsByClassName("proj")[0]
	if(newProj){
		appear.style.maxHeight = "max-content"
	}
	else{
		appear.style.maxHeight = "0px"
	}
})
watch(awards, async(newAward, oldAward) =>{
	let appear = document.getElementsByClassName("awards")[0]
	if(newAward){
		appear.style.maxHeight = "max-content"
	}
	else{
		appear.style.maxHeight = "0px"
	}
})


</script>


<template>
<div class = "hidden burgerMenu h-screen w-screen fixed  z-20 bg-gray-600/50">
</div>
<div class = "hidden burgerMenu h-screen w-3/4 fixed z-30 bg-white">
	<div class = "flex justify-between items-center my-3">
		<img src="https://static.igem.wiki/teams/4829/wiki/logo/metramorpheus.png" class = "w-28" />
		<div >
			<img src = "close.svg" class = "cursor-pointer" @click = "burger = !burger">
		</div>
	</div>

	<nav class = "ml">
		<div class = "" @click="team = !team">
			Team ▼
		</div>
		<div class = "team max-h-0 overflow-hidden">
			<NuxtLink class = "block" to="/team">
				Team
			</NuxtLink>
			<NuxtLink class = "block" to="/attributions">
				Attributions
			</NuxtLink>
		</div>
		
		<div class = "" @click = "project = !project">
			Project ▼
		</div>
		<div class = "proj max-h-0 overflow-hidden">
			<NuxtLink class = "block" to="/contribution">
				Contribution
			</NuxtLink>
			<NuxtLink class = "block" to="/description">
				Description
			</NuxtLink>
			<NuxtLink class = "block" to="/engineering">
				Engineering
			</NuxtLink>
			<NuxtLink class = "block" to="/experiments">
				Experiments
			</NuxtLink>
			<NuxtLink class = "block" to="/notebook">
				Notebook
			</NuxtLink>
			<NuxtLink class = "block" to="/results">
				Results
			</NuxtLink>
			<NuxtLink class = "block" to="/safety">
				Safety
			</NuxtLink>
		</div>

		<div>
			<NuxtLink to="/human-practices">
				Human Practices
			</NuxtLink>
		</div>

		<div class = "" @click = "awards = !awards">
			Awards ▼
		</div>

		<div class = "awards max-h-0 overflow-hidden">
			<NuxtLink class = "block" to="/medals">
				Medals
			</NuxtLink>

			<NuxtLink class = "block" to="/education">
				Education
			</NuxtLink>

			<NuxtLink class = "block" to="/entrepreneurship">
				Entrepreneurship
			</NuxtLink>

		</div>
	</nav>
</div>


<div class ="sticky top-0 w-screen h-16 max-md:h-20 bg-white flex align-center md:justify-evenly shadow-xl justify-between z-10 ">
	<NuxtLink to="/" class = "cursor-pointer">
		<img src="https://static.igem.wiki/teams/4829/wiki/logo/metramorpheus.png" class = "w-28  relative top-2/4 -translate-y-2/4" />
	</NuxtLink>
	
	<nav class="inline-block max-md:hidden">
		  <Menu as="div" class="relative inline-block text-left top-2/4 -translate-y-2/4">
		    <div>
		      <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 hover:text-violet-500">
		        Team ▼
		      </MenuButton>
		    </div>
		      <MenuItems class="absolute z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
		        <div class="py-1">
		          <MenuItem v-slot="{ active }">
		            <NuxtLink to="/team" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Team</NuxtLink>
		          </MenuItem>
		          <MenuItem v-slot="{ active }">
		            <NuxtLink to="/attributions" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Attributions</NuxtLink>
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
		            <NuxtLink to="/contribution" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Contribution</NuxtLink>
		          </MenuItem>
		          <MenuItem v-slot="{ active }">
		            <NuxtLink to="/description" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Description</NuxtLink>
		          </MenuItem>
		          <MenuItem v-slot="{ active }">
		            <NuxtLink to="/engineering" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Engineering</NuxtLink>
		          </MenuItem>
		          <MenuItem v-slot="{ active }">
		            <NuxtLink to="/experiments" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Experiments</NuxtLink>
		          </MenuItem>
		          <MenuItem v-slot="{ active }">
		            <NuxtLink to="/notebook" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Notebook</NuxtLink>
		          </MenuItem>
		          <MenuItem v-slot="{ active }">
		            <NuxtLink to="/results" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Results</NuxtLink>
		          </MenuItem>
		          <MenuItem v-slot="{ active }">
		            <NuxtLink to="/safety" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Safety</NuxtLink>
		          </MenuItem>
		        </div>
		      </MenuItems>
		  </Menu>

		  <!--
		  <div class = "relative inline-block text-left  top-2/4 -translate-y-2/4">
		  	<button class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 hover:text-violet-500">
		  		Safety
		  	</button>
		  </div>
		-->
		  <div class = "relative inline-block text-left  top-2/4 -translate-y-2/4">
		  	<NuxtLink to="/human-practices">
		  	<button class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 hover:text-violet-500">
		  		Human Practices
		  	</button>
		  </NuxtLink>
		  </div>

		  <Menu as="div" class="relative inline-block text-left  top-2/4 -translate-y-2/4">
		    <div>
		    	<MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 hover:text-violet-500">
		        	Awards ▼
		    	</MenuButton>
		    </div>
		      	<MenuItems class="absolute z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
		        	<div class="py-1">
		        		<MenuItem v-slot="{ active }">
		            		<NuxtLink to="/medals" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Medals</NuxtLink>
		          		</MenuItem>

		          		<MenuItem v-slot="{ active }">
		            		<NuxtLink to="/education" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Education</NuxtLink>
		          		</MenuItem>
		          		<MenuItem v-slot="{ active }">
		            		<NuxtLink to="/entrepreneurship" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Entrepreneurship</NuxtLink>
		          		</MenuItem>
		        	</div>
		      	</MenuItems>
		  </Menu>

	</nav>

	<div class = "md:hidden cursor-pointer">
		<img src = "burger.svg" @click = "burger = !burger; console.log(burger)" class = "w-14 relative top-2/4 -translate-y-2/4">
		
	</div>
</div>


</template>


<style scoped>

</style>