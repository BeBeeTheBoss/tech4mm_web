<template>
    <button class="poppins-bold px-3 py-2 rounded-pill" :class="classes">{{text}}</button>
</template>

<script setup>
import {defineProps} from "vue"
const props = defineProps({
  text: String,
  classes : String
})
</script>

<style>

</style>