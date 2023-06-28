<template>
    <div :class="this.className">
        <ul class="w-full flex flex-col text-white pt-4">
            <button class="back" type="button" @click="closeSubMenu()">BACK</button>
            <span class="arrow-left"></span>
            <slot/>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        className: {type: String},
        closeSubMenu: {type: Function},
        selected: {type: String}
    },
}
</script>
