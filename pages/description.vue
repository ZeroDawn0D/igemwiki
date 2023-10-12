<template>
  <div>
    <div class = "">
      <div class = "courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32">
        DESCRIPTION
      </div>
    </div>
    <!-- IMPORTANT CHANGE TO MAKE HERE-->
    <Scrollspy :currentPage="currentPage" initialSection="endo">
      <div class = "grid grid-cols-12 gap-4 p-8">
        <div class = "col-span-3 max-md:hidden">
          <nav class = "sticky overflow-auto h-screen top-16 border-r-8 py-8" >
            <ul>
              <li>
                <div class = "class-endo cursor-pointer text-2xl" ref = "endoButton">Endometriosis</div>
                
              </li>

              <li>
                <div class = "class-curt cursor-pointer text-2xl" ref = "curtButton">Current treatments</div>
                
              </li>
              
              <li>
                <div class = "class-solulu cursor-pointer text-2xl" ref = "soluluButton">Our Solution</div>
                
              </li>
              <li>
                <div class = "class-inspi cursor-pointer text-2xl" ref = "inspiButton">Inspiration</div>
                
              </li>

              <li>
                <div class = "class-proj cursor-pointer text-2xl" ref = "projButton">Our Project</div>
                
              </li>

              <li>
                <div class = "class-comp cursor-pointer text-2xl" ref = "compButton">Components</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-comp1 cursor-pointer text-md" ref = "comp1Button" >mRNA</div>
                  </li>
                  <li>
                    <div class = "class-comp1 cursor-pointer text-md" ref = "comp1Button" >LNPs</div>
                  </li>
                  <li>
                    <div class = "class-comp1 cursor-pointer text-md" ref = "comp1Button" >Aptides</div>
                  </li>
                  <li>
                    <div class = "class-comp1 cursor-pointer text-md" ref = "comp1Button" >O-IL8-15</div>
                  </li>
                </ul>
              </li>


              <li>
                <div class = "class-fut cursor-pointer text-2xl" ref = "futButton">Future Outlook</div>
                
              </li>
              <li>
                <div class = "class-ref cursor-pointer text-2xl" ref = "refButton">References</div>
                
              </li>

              

              


            </ul>
          </nav>  
        </div>

        <div class = "col-span-9 max-md:col-span-12 text-justify text-xl">
          <section id = "endo" ref = "endo">
            <h1>
              Endometriosis
            </h1>
            <h2>
                 
            </h2>
            
            </section>

            <section id = "curt" ref = "curt">
            <h1>
              Current treatments
            </h1>
            <h2>
                 
            </h2>
            
            </section>
            <section id = "solulu" ref = "solulu">
            <h1>
              Our Solution
            </h1>
            <h2>
                 
            </h2>
            
            </section>

            <section id = "inspi" ref = "inspi">
            <h1>
              Inspiration
            </h1>
            <h2>
                 
            </h2>
            
            </section>
            <section id = "proj" ref = "proj">
            <h1>
              Our Project
            </h1>
            <h2>
                 
            </h2>
            
            </section>

            <section id = "comp" ref = "comp">
            <h1>
              Components
            </h1>
            <h2>
                 
            </h2>
            <section id = "comp1" ref = " comp1">
              <h3>
                mRNA
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "comp1" ref = " comp1">
              <h3>
                LNPs
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "comp1" ref = " comp1">
              <h3>
                Aptides
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "comp1" ref = " comp1">
              <h3>
                O-IL8-15
              </h3>
              <h2>

              </h2>
            </section>

            <section id = "fut" ref = "fut">
            <h1>
              Future Outlook
            </h1>
            <h2>
                 
            </h2>
            
            </section>

            <section @click = "referenceToggle" id = "ref" ref = "ref">
            <h1 class = "cursor-pointer">
                <div class = "mt-4 wireframe2">
                <span class = "text-4xl courierprime cursor-pointer">
              References
              </span>
              </div>
            </h1>

            <h2 class = "refContent hidden">
              Reference Text
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
      },
      referenceToggle(){
        let refC = document.getElementsByClassName("refContent")[0]
        if(refC.style.display == "none"){
          refC.style.display = "block"
        }else{
          refC.style.display = "none"
        }
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