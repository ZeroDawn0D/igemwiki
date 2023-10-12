<template>
  <div>
    <div class = "">
      <div class = "courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32">
        EDUCATION
      </div>
    </div>


   

    

    <div @click= "synbio=true; console.log(synbio)" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Synthetic Biology
        </span>
    </div>

    <div @click = "synbio=false; console.log(synbio)" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Endometriosis Awareness
        </span>
    </div>
    
    <Scrollspy class = "ss-synbio" :currentPage="currentPage" initialSection="bc">
      <div class = "grid grid-cols-12 gap-4 p-8">
        <div class = "col-span-3 max-md:hidden">
          <nav class = "sticky top-16 border-r-8 py-8" >
            <ul>
              <li>
                <div class = "class-bc cursor-pointer text-2xl" ref = "bcButton">Biotechnology in Curricula</div>
              </li>

              <li>
                <div class = "class-nbd cursor-pointer text-2xl" ref = "nbdButton">National Biotechnology Day</div>
              </li>

              <li>
                <div class = "class-od cursor-pointer text-2xl" ref = "odButton">Open Day</div>
              </li>

              <li>
                <div class = "class-carv cursor-pointer text-2xl" ref = "carvButton">Carvaan</div>
              </li>
              <li>
                <div class = "class-sv cursor-pointer text-2xl" ref = "svButton">School Visits</div>
              </li>
              <li>
                <div class = "class-sc cursor-pointer text-2xl" ref = "scButton">Science Camp</div>
              </li>
              <li>
                <div class = "class-wsb cursor-pointer text-2xl" ref = "wsbButton">Workshop on Synthetic Biology</div>
              </li>
              <li>
                <div class = "class-ij cursor-pointer text-2xl" ref = "ijButton">Interaction with Juniors</div>
              </li>
              <li>
                <div class = "class-dle cursor-pointer text-2xl" ref = "dleButton">Databased Launch Event</div>
              </li>
              <li>
                <div class = "class-rdl cursor-pointer text-2xl" ref = "rdlButton">Rising Dry Lab</div>
              </li>
              <li>
                <div class = "class-hrp cursor-pointer text-2xl" ref = "hrpButton">How to read papers</div>
              </li>
              <li>
                <div class = "class-quiz cursor-pointer text-2xl" ref = "quizButton">Synbio Quiz</div>
              </li>
              <li>
                <div class = "class-verse cursor-pointer text-2xl" ref = "verseButton">Into the iGEMverse</div>
              </li>
              <li>
                <div class = "class-symp cursor-pointer text-2xl" ref = "sympButton">iGEM Symposium</div>
              </li>
              <li>
                <div class = "class-wiki cursor-pointer text-2xl" ref = "wikiButton">New Wikipedia Page on Aptides</div>
              </li>
              <li>
                <div class = "class-radio cursor-pointer text-2xl" ref = "radioButton">Yuvavani on All India Radio</div>
              </li>
              <li>
                <div class = "class-broch cursor-pointer text-2xl" ref = "brochButton">Brochures and Articles</div>
              </li>
              <li>
                <div class = "class-lang cursor-pointer text-2xl" ref = "langButton">Language Project</div>
              </li>
              <li>
                <div class = "class-game cursor-pointer text-2xl" ref = "gameButton">Synbio Games</div>
              </li>
              <li>
                <div class = "class-acti cursor-pointer text-2xl" ref = "actiButton">Activity Sheets</div>
              </li>
              <li>
                <div class = "class-infor cursor-pointer text-2xl" ref = "inforButton">Informative Videos</div>
              </li>


              <li>
                <div  class = "class-prot cursor-pointer text-2xl" ref = "protButton">Video Protocols</div>
              </li>
            </ul>
          </nav>  
        </div>

        <div class = "col-span-9 max-md:col-span-12 text-justify text-xl">
          <section id = "bc">
            <h1>
              Biotechnology in Curricula
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "nbd">
            <h1>
              Natioanl Biotechnology Day
            </h1>
            <h2>
              
            </h2>
          </section>
          <section id = "od">
            <h1>
              Open Day
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "carv">
            <h1>
              Carvaan
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "sv">
            <h1>
              School Visits
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "sc">
            <h1>
              Science Camp
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "wsb">
            <h1>
              Workshop on Synthetic Biology
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "ij">
            <h1>
              Interaction with Juniors
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "dle">
            <h1>
              Databased Launch Event
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "rdl">
            <h1>
              Rising Dry Lab
            </h1>
            <h2>
              
            </h2>
          </section>
            
            <section id = "hrp">
            <h1>
             How to Read papers
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "quiz">
            <h1>
              Synbio Quiz
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "verse">
            <h1>
              Into the iGEMverse
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "symp">
            <h1>
              iGEM Symposium
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "wiki">
            <h1>
              New Wikipedia Page on Aptides
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "radio">
            <h1>
              Yuvavani on All India Radio
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "broch">
            <h1>
              Brochures and Articles
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "lang">
            <h1>
              Language Project
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "game">
            <h1>
              Synbio Games
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "acti">
            <h1>
              Activity Sheets
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "infor">
            <h1>
              Informative Videos
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "prot">
            <h1>
              Video Protocols
            </h1>
            <h2>
              
            </h2>
          </section>
              
        </div>
      </div>
    </Scrollspy>



    <Scrollspy class = "ss-endo hidden" :currentPage="currentPage" initialSection="endo">
      <div class = "grid grid-cols-12 gap-4 p-8">
        <div class = "col-span-3 max-md:hidden">
          <nav class = "sticky top-16 border-r-8 py-8" >
            <ul>
              <li>
                <div class = "class-endo cursor-pointer text-2xl" ref = "endoButton">Understanding Endometriosis</div>
              </li>
              <li>
                <div  class = "class-inter cursor-pointer text-2xl" ref = "interButton">DD Interview</div>
              </li>

              <li>
                <div  class = "class-masc cursor-pointer text-2xl" ref = "mascButton">Mascot Competition</div>
              </li>

              <li>
                <div  class = "class-infpo cursor-pointer text-2xl" ref = "infpoButton">Informative Posts</div>
              </li>


              <li>
                <div  class = "class-wymp cursor-pointer text-2xl" ref = "wympButton">Symposium on Women's Health</div>
              </li>

              <li>
                <div  class = "class-collab cursor-pointer text-2xl" ref = "collabButton">Collaborative Publication with UZurich</div>
              </li>

              <li>
                <div  class = "class-brochu cursor-pointer text-2xl" ref = "brochuButton">Brochure on Endometriosis</div>
              </li>

            </ul>
          </nav>  
        </div>

        <div class = "col-span-9 max-md:col-span-12 text-justify text-xl">
          <section id = "endo" ref = "endo">
            <h1>
              Understanding Endometriosis
            </h1>

            <h2>
              
            
            </h2>
          </section>

          <section id = "inter">
            <h1>
              DD Interview
            </h1>
            <h2>
              
            </h2>
          </section>
          <section id = "masc">
            <h1>
              Mascot Competition
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "infpo">
            <h1>
              Informative Posts
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "wymp">
            <h1>
              Symposium on Women's Health
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "collab">
            <h1>
              Collaborative Publication with UZurich
            </h1>
            <h2>
              
            </h2>
          </section>

          <section id = "brochu">
            <h1>
              Brochure on Endometriosis
            </h1>
            <h2>
              
            </h2>
          </section>

        </div>
      </div>
    </Scrollspy>

    <div @click= "synbio=true; console.log(synbio);scrollTo('bc')" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Synthetic Biology
        </span>
    </div>

    <div @click = "synbio=false; console.log(synbio);scrollTo('endo')" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Endometriosis Awareness
        </span>
    </div>





  </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: "education",
            synbio: true
        };
    },
    watch:{
      synbio(newSynbio, oldSynbio){
        scrollTo
        let ssSyn = document.getElementsByClassName("ss-synbio")[0]
        let ssEndo = document.getElementsByClassName("ss-endo")[0]
        if(newSynbio){
          ssSyn.style.display = "block"
          ssEndo.style.display = "none"
          
        }else{
          ssSyn.style.display = "none"
          ssEndo.style.display = "block"
          
        }
      }
    },
    methods:{
      scrollTo(id){
        console.log(id)
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
      }
    },
    mounted(){
     // this.$refs.abstractButton.addEventListener("click", ()=>{this.scrollTo("abstract")})

      //this.$refs.nameButton.addEventListener("click", ()=>{this.scrollTo("name")})
  
    }
}
</script>


<style scoped>
.title-text{
  font-family: CourierPrimeBold;
}
  h1{
  font-family: courierprimebold;
}
h2{
  font-family: Verdana;
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

