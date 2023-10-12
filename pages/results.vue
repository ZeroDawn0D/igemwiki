<template>
  <div>
    <div class = "">
      <div class = "courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32">
        RESULTS
      </div>
    </div>
    <!-- IMPORTANT CHANGE TO MAKE HERE-->
    <Scrollspy :currentPage="currentPage" initialSection="may">
      <div class = "grid grid-cols-12 gap-4 p-8">
        <div class = "col-span-3 max-md:hidden">
          <nav class = "sticky overflow-auto h-screen top-16 border-r-8 py-8" >
            <ul>
              <li>
                <div class = "class-dr cursor-pointer text-2xl" ref = "drButton">Dry Runs</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-dr1 cursor-pointer text-md" ref = "dr1Button" >RFP Transformation</div>

                  </li>
                  <li>
                    <div class = "class-dr1 cursor-pointer text-md" ref = "dr1Button" >GFP Transformation</div>
                    
                  </li>
                  <li>
                    <div class = "class-dr1 cursor-pointer text-md" ref = "dr1Button" >His-tagged Ferredoxin Purification</div>
                    
                  </li>
                  
                </ul>
              </li>

              <li>
                <div class = "class-wl cursor-pointer text-2xl" ref = "wlButton">Wet Lab</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-wl1 cursor-pointer text-md" ref = "wl1Button" >O-IL-8 plasmid extraction and transformation</div>

                  </li>
                  <li>
                    <div class = "class-wl1 cursor-pointer text-md" ref = "wl1Button" >BLI of purified anti-IL8</div>
                    
                  </li>
                  <li>
                    <div class = "class-wl1 cursor-pointer text-md" ref = "wl1Button" >mRNA Transfection into HeLa Cells</div>
                    
                  </li>
                  <li>
                    <div class = "class-wl1 cursor-pointer text-md" ref = "wl1Button" >LNP formulation and characterisation</div>
                    
                  </li>
                  
                </ul>
              </li>
              <li>
                <div class = "class-dl cursor-pointer text-2xl" ref = "dlButton">Dry Lab</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-dl1 cursor-pointer text-md" ref = "dl1Button" >scFc Structure Modelling</div>

                  </li>
                  <li>
                    <div class = "class-dl1 cursor-pointer text-md" ref = "dl1Button" >Nanobodies</div>
                    
                  </li>
                  <li>
                    <div class = "class-dl1 cursor-pointer text-md" ref = "dl1Button" >Docking</div>
                    
                  </li>
                  <li>
                    <div class = "class-dl1 cursor-pointer text-md" ref = "dl1Button" >Toxicity Estimation subheading</div>
                    
                  </li>

                  <li>
                    <div class = "class-dl1 cursor-pointer text-md" ref = "dl1Button" >mRNA Optimisation subheading</div>
                    
                  </li>
                  
                </ul>
              </li>

            </ul>
          </nav>  
        </div>

        <div class = "col-span-9 max-md:col-span-12 text-justify text-xl">
          <section id = "may" ref = "may">
            <h1>
              Dry Runs
            </h1>
            <h2>
                 
            </h2>
            <section id = "may1" ref = " may1">
              <h3>
                RFP Transformations
              </h3>
              <h2>

              </h2>
            </section>
            


            </section>



        </div>
      </div>
    </Scrollspy>
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