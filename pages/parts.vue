<template>
  <div>
    <div class = "">
      <div class = "courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32">
        HUMAN PRACTICES
      </div>
    </div>



    
    <Scrollspy class = "ss-synbio" :currentPage="currentPage" initialSection="overv">
      <div class = "grid grid-cols-12 gap-4 p-8">
        <div class = "col-span-3 max-md:hidden">
          <nav class = "overflow-auto h-screen sticky top-16 border-r-8 py-8" >
            <ul>
              <li>
                <div class = "class-overv cursor-pointer text-2xl" ref = "overvButton">Overview</div>
              </li>
              <li>
                <div class = "class-dra cursor-pointer text-2xl" ref = "draButton">Dr Rachit Aggarwal</div>
              </li>
              <li>
                <div class = "class-ddc cursor-pointer text-2xl" ref = "ddcButton">Dr Dipshika Chakravorty</div>
              </li>
              <li>
                <div class = "class-nifr cursor-pointer text-2xl" ref = "nifrButton">National Institute for Research in Reproductive and Child Health</div>
              </li>
              <li>
                <div class = "class-nv cursor-pointer text-2xl" ref = "nvButton">Nimi Vashi</div>
              </li>
              <li>
                <div class = "class-bbc cursor-pointer text-2xl" ref = "bbcButton">Bangalore Bioinnovation Centre</div>
              </li>

              <li>
                <div class = "class-s cursor-pointer text-2xl" ref = "sButton">Samarth</div>
              </li>
              <li>
                <div class = "class-dsrgs cursor-pointer text-2xl" ref = "dsrgsButton">Dr Subba Rao Gangi Setty</div>
              </li>
              <li>
                <div class = "class-dgr cursor-pointer text-2xl" ref = "dgrButton">Dr Graca Raposo</div>
              </li>
              <li>
                <div class = "class-dsj cursor-pointer text-2xl" ref = "dsjButton">Dr Siddarth Jhunjhunwala</div>
              </li>
              <li>
                <div class = "class-dmka cursor-pointer text-2xl" ref = "dmkaButton">Dr MK Ammembal</div>
              </li>

              <li>
                <div class = "class-val cursor-pointer text-2xl" ref = "valButton">Vinod and Lavanya</div>
              </li>
              <li>
                <div class = "class-dcac cursor-pointer text-2xl" ref = "dcacButton">Dr Christian Andrew Choe</div>
              </li>
              <li>
                <div class = "class-as cursor-pointer text-2xl" ref = "asButton">Amar Singh</div>
              </li>
              <li>
                <div class = "class-nb cursor-pointer text-2xl" ref = "nbButton">Nisha Barge</div>
              </li>
              <li>
                <div class = "class-rro cursor-pointer text-2xl" ref = "rroButton">RR Ojha from QUAXON</div>
              </li>
              <li>
                <div class = "class-nab cursor-pointer text-2xl" ref = "nabButton">Nandika Bhattacharya</div>
              </li>
              <li>
                <div class = "class-vaask cursor-pointer text-2xl" ref = "vaaskButton">Vinayak Annapure and Shreya Kulkarni</div>
              </li>
              <li>
                <div class = "class-drv cursor-pointer text-2xl" ref = "drvButton">Dr Raghavan Varadarajan</div>
              </li>
              <li>
                <div class = "class-das cursor-pointer text-2xl" ref = "dasButton">Dr Ajay Singh</div>
              </li>
              <li>
                <div class = "class-drb cursor-pointer text-2xl" ref = "drbButton">Dr Ramray Bhat</div>
              </li>
              <li>
                <div class = "class-dpd cursor-pointer text-2xl" ref = "dpdButton">Dr Prajakta Dandekar</div>
              </li>
              <li>
                <div class = "class-jk cursor-pointer text-2xl" ref = "jkButton">J Konnowich</div>
              </li>
              <li>
                <div class = "class-es cursor-pointer text-2xl" ref = "esButton">Education Secretaries</div>
              </li>
              <li>
                <div class = "class-ddip cursor-pointer text-2xl" ref = "ddipButton">DD Interview Panel</div>
              </li>
              <li>
                <div class = "class-dlb cursor-pointer text-2xl" ref = "dlbButton">Dr Lavanya Bhagavatula</div>
              </li>
              <li>
                <div class = "class-dsr cursor-pointer text-2xl" ref = "dsrButton">Dr Shilpa Rao</div>
              </li>
              <li>
                <div class = "class-dam cursor-pointer text-2xl" ref = "damButton">Dr Abhishek Mangeshikar</div>
              </li>

            </ul>
          </nav>  
        </div>

        <div class = "col-span-9 max-md:col-span-12 text-justify text-xl">
          <section id = "abstract" ref = "abstract">
            <h1>
              Abstract 1
            </h1>

            <h2>
              
            </h2>
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
            currentPage: "education",
            synbio: true
        };
    },
    watch:{
      synbio(newSynbio, oldSynbio){
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
      this.$refs.abstractButton.addEventListener("click", ()=>{this.scrollTo("abstract")})

      this.$refs.nameButton.addEventListener("click", ()=>{this.scrollTo("name")})
  
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
}</style>

