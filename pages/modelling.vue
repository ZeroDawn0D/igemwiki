<template>
  <div>
    <div >
      <div class = "courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32">
        MODELLING
      </div>
    </div>
    <!-- IMPORTANT CHANGE TO MAKE HERE-->
    <div class =  "w-3/4 max-md:w-screen  relative left-2/4 -translate-x-2/4">
      
      <iframe src="https://static.igem.wiki/teams/4829/wiki/modelling/modelling.pdf" width="100%" height="800px"></iframe>


    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: "parts"
        };
    },
    methods:{
      scrollTo(id){
        console.log(id)
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
      }
    },
    mounted(){
      //this.$refs.introButton.addEventListener("click", ()=>{this.scrollTo("intro");})

      //this.$refs.mrnaButton.addEventListener("click", ()=>{this.scrollTo("mrna")})
      
      //this.$refs.mrna1Button.addEventListener("click", ()=>{this.scrollTo("mrna1")})
    }
}
</script>


<style scoped>
  h1{
  font-family: courierprimebold;
}
h2{
  font-family: Courier New;
  font-weight: 700;
}
h3{
  font-family: courierprimebold;
}
nav{
  font-family: courierprime;
}

li>div{
  display: inline;
}
</style>