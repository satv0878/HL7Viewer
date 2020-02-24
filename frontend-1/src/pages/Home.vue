<template>
    <div>
        <h1>All destinations</h1>
        <div :key="destination.name" v-for="destination in destinations">
        <router-link :to="destination.slug">
            <h2>
                {{destination.name}}
            </h2>
        </router-link>
        <figure>

            <router-link :to="destination.name">
                <img :src="require(`@/assets/${destination.image}`)">
                
                
            </router-link>
        </figure>

        </div>

    </div>
</template>
<script>
//import sourceData from '@/data.json'
import store from "@/store.js"
export default {
    
    name :"Home", 
    components: {}, 
    data(){

        return{
            destinations: store.destinations
        }
    }
}
</script>
<style scoped>

</style>