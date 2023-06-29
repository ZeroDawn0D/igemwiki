<template>
  <div>
    <div class = "halftone-wrapper">
      <div class = "h-64 halftone text-black font-bold text-9xl max-md:text-6xl max-md:h-32">
        DESCRIPTION
      </div>
    </div>
    <Scrollspy :currentPage="currentPage" initialSection="abstract">
      <div class = "grid grid-cols-12 gap-4 p-8">
        <div class = "col-span-3 max-md:hidden">
          <nav class = "sticky top-16 border-r-8 py-8" >
            <ul>
              <li>
                <div class = "class-abstract cursor-pointer text-3xl" ref = "abstractButton">Abstract</div>
              </li>
              <li>
                <div  class = "class-name cursor-pointer text-3xl" ref = "nameButton">Project Name</div>
              </li>
            </ul>
          </nav>  
        </div>

        <div class = "col-span-9 max-md:col-span-12 text-justify text-xl">
          <section id = "abstract" ref = "abstract">
            <h1>
              Abstract
            </h1>

            <h2>
              MetraMorpheus is our attempt to treat endometriosis, which affects approximately 190 million women worldwide and causes debilitating pain and bleeding. The present treatments are either complication-prone (surgery) or ineffective and associated with an increased risk of breast cancer (hormonal therapy).
              <br /><br/>
              That changes now.
              <br /><br/>
              In a first to improve the lives of these women, we intend to develop not one, but TWO mRNA-based approaches to treat endometriosis.
              Not only have we come up with two possible treatments, but we also plan to introduce a modular system to create mRNA-based therapeutics to treat far more than just endometriosis. We do this as we realise that mRNA-based technologies are far cheaper for the rural population to purchase and access than the monoclonal antibodies presently developed (and mRNA-based therapeutics can be a substitute for these!).

              First, we aim to express the downregulated CD36 on the membranes of peritoneal macrophages to induce the clean-up of ectopic tissue, which was impaired, almost certainly due to the downregulation of CD36.
              Next, we aim to target the chemokine Interleukin-8 (IL-8), which stimulates the adhesion of fibronectin to endometrial cells, is pro-inflammatory, and is potently angiogenic. Several studies (including one as recent as early 2023) have shown that targeting IL8 significantly reduces endometriotic tissue volume
              <br />
              As India enters her ‘aristeia’, we can’t have her most productive population held down by the shackles of reproductive disorders and related societal attitudes. We can’t have her rural population held down by their lack of ability to buy new and more expensive drugs to improve their quality of living, for it is only when the population is healthy that they are productive, and only when they are productive, that India progresses! MetraMorpheus is our attempt to address both pressing issues!
              
              We have also made it our mission to give biotech get the importance it deserves in a country with immense yet untapped potential in this field. MetraMorpheus can take India to the next level.
            </h2>
          </section>

          <section id = "name">
            <h1>
              Choosing a Project Name
            </h1>
            <h2>
              Here, Metra implies uterus,  but in this context, it stands for Endometriosis affecting the entire reproductive system
              Morpheus is the Greek God of dreams and sleep.
              Essentially, our therapy endeavours to soothe and heal an inflamed reproductive system.
              Together, it invokes ‘metamorphosis’, the change we intend to see in the disease process and in the patient's quality of life.
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
            currentPage: "description"
        };
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