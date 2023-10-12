<template>
  <div>
    <div class = "">
      <div class = "courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32">
        SAFETY
      </div>
    </div>
    <!-- IMPORTANT CHANGE TO MAKE HERE-->
    <div class =  "">
      We recognise that our project requires considerable safety and security to ensure successful completion. Hence, we have undertaken several safety measures as documented below:  
<div class = >
PARTS SAFETY  
</div>
All components of our project have been recorded in our safety form. The proteins Interleukin 8 and O-IL8-15 were checked in with iGEM. Both proteins have undergone extensive review by the team’s Principal Investigators as well as the iGEM Safety and Security Committee before being approved for use in the laboratories.   

LAB SAFETY  

To ensure absolute safety of everyone involved in laboratory work, all team members were screened and certified by the Office of Laboratory Safety and Environmental Health (OLSEH) in IISc before commencement of wet lab procedures.  

Lab instructors Dr. Lavanya S. and Mr. HS Vinod accompanied us during each lab session and offered invaluable advice and supervision to ensure equipment health and overall safety.  

All experiments and procedures were conducted in BSL-2 laboratories and proper lab attire like lab coats, fresh nitrile gloves and footwear was mandated for students and staff alike.  
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