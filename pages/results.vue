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
                <div class = "class-may cursor-pointer text-2xl" ref = "mayButton">May</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-may1 cursor-pointer text-md" ref = "may1Button" >Week 1</div>
                  </li>
                  <li>
                    <div class = "class-may1 cursor-pointer text-md" ref = "may1Button" >Week 2</div>
                  </li>
                  <li>
                    <div class = "class-may1 cursor-pointer text-md" ref = "may1Button" >Week 3</div>
                  </li>
                  <li>
                    <div class = "class-may1 cursor-pointer text-md" ref = "may1Button" >Week 4</div>
                  </li>
                </ul>
              </li>
      

              <li>
                <div class = "class-june cursor-pointer text-2xl" ref = "juneButton">June</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-june1 cursor-pointer text-md" ref = "june1Button" >Week 1</div>
                  </li>
                  <li>
                    <div class = "class-june1 cursor-pointer text-md" ref = "june1Button" >Week 2</div>
                  </li>
                  <li>
                    <div class = "class-june1 cursor-pointer text-md" ref = "june1Button" >Week 3</div>
                  </li>
                  <li>
                    <div class = "class-june1 cursor-pointer text-md" ref = "june1Button" >Week 4</div>
                  </li>
                </ul>
              </li>

              <li>
                <div class = "class-july cursor-pointer text-2xl" ref = "julyButton">July</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-july1 cursor-pointer text-md" ref = "july1Button" >Week 1</div>
                  </li>
                  <li>
                    <div class = "class-july1 cursor-pointer text-md" ref = "july1Button" >Week 2</div>
                  </li>
                  <li>
                    <div class = "class-july1 cursor-pointer text-md" ref = "july1Button" >Week 3</div>
                  </li>
                  <li>
                    <div class = "class-july1 cursor-pointer text-md" ref = "july1Button" >Week 4</div>
                  </li>
                </ul>
              </li>

              <li>
                <div class = "class-august cursor-pointer text-2xl" ref = "augustButton">August</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-august1 cursor-pointer text-md" ref = "august1Button" >Week 1</div>
                  </li>
                  <li>
                    <div class = "class-august1 cursor-pointer text-md" ref = "august1Button" >Week 2</div>
                  </li>
                  <li>
                    <div class = "class-august1 cursor-pointer text-md" ref = "august1Button" >Week 3</div>
                  </li>
                  <li>
                    <div class = "class-august1 cursor-pointer text-md" ref = "august1Button" >Week 4</div>
                  </li>
                </ul>
              </li>

              <li>
                <div class = "class-september cursor-pointer text-2xl" ref = "septemberButton">September</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-september1 cursor-pointer text-md" ref = "september1Button" >Week 1</div>
                  </li>
                  <li>
                    <div class = "class-september1 cursor-pointer text-md" ref = "september1Button" >Week 2</div>
                  </li>
                  <li>
                    <div class = "class-september1 cursor-pointer text-md" ref = "september1Button" >Week 3</div>
                  </li>
                  <li>
                    <div class = "class-september1 cursor-pointer text-md" ref = "september1Button" >Week 4</div>
                  </li>
                </ul>
              </li>

              <li>
                <div class = "class-october cursor-pointer text-2xl" ref = "octoberButton">October</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-october1 cursor-pointer text-md" ref = "october1Button" >Week 1</div>
                  </li>
                  <li>
                    <div class = "class-october1 cursor-pointer text-md" ref = "october1Button" >Week 2</div>
                  </li>
                </ul>
              </li>


            </ul>
          </nav>  
        </div>

        <div class = "col-span-9 max-md:col-span-12 text-justify text-xl">
          <section id = "may" ref = "may">
            <h1>
              May
            </h1>
            <h2>
                 
            </h2>
            <section id = "may1" ref = " may1">
              <h3>
                Week 1
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "may1" ref = " may1">
              <h3>
                Week 2
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "may1" ref = " may1">
              <h3>
                Week 3
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "may1" ref = " may1">
              <h3>
                Week 4
              </h3>
              <h2>

              </h2>
            </section>


            </section>

            <section id = "june" ref = "june">
            <h1>
              June
            </h1>
            <h2>
                 
            </h2>
            <section id = "june1" ref = " june1">
              <h3>
                Week 1
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "june1" ref = " june1">
              <h3>
                Week 2
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "june1" ref = " june1">
              <h3>
                Week 3
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "june1" ref = " june1">
              <h3>
                Week 4
              </h3>
              <h2>

              </h2>
            </section>


            </section>
            <section id = "july" ref = "july">
            <h1>
              July
            </h1>
            <h2>
                 
            </h2>
            <section id = "july1" ref = " july1">
              <h3>
                Week 1
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "july1" ref = " july1">
              <h3>
                Week 2
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "july1" ref = " july1">
              <h3>
                Week 3
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "july1" ref = " july1">
              <h3>
                Week 4
              </h3>
              <h2>

              </h2>
            </section>


            </section>
            <section id = "august" ref = "august">
            <h1>
              August
            </h1>
            <h2>
                 
            </h2>
            <section id = "august1" ref = " august1">
              <h3>
                Week 1
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "august1" ref = " august1">
              <h3>
                Week 2
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "august1" ref = " august1">
              <h3>
                Week 3
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "august1" ref = " august1">
              <h3>
                Week 4
              </h3>
              <h2>

              </h2>
            </section>


            </section>
            <section id = "september" ref = "september">
            <h1>
              September
            </h1>
            <h2>
                 
            </h2>
            <section id = "september1" ref = " september1">
              <h3>
                Week 1
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "september1" ref = " september1">
              <h3>
                Week 2
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "september1" ref = " september1">
              <h3>
                Week 3
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "september1" ref = " september1">
              <h3>
                Week 4
              </h3>
              <h2>

              </h2>
            </section>


            </section>
            <section id = "october" ref = "october">
            <h1>
              October
            </h1>
            <h2>
                 
            </h2>
            <section id = "october1" ref = " october1">
              <h3>
                Week 1
              </h3>
              <h2>

              </h2>
            </section>
            <section id = "october1" ref = " october1">
              <h3>
                Week 2
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