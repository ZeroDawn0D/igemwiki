<template>
  <div>
    <div class = "halftone-wrapper">
      <div class = "h-64 halftone text-black font-bold text-9xl max-md:text-6xl max-md:h-32">
        PARTS
      </div>
    </div>
    <Scrollspy :currentPage="currentPage" initialSection="intro">
      <div class = "grid grid-cols-12 gap-4 p-8">
        <div class = "col-span-3 max-md:hidden">
          <nav class = "sticky top-16 border-r-8 py-8" >
            <ul>
              <li>
                <div class = "class-intro cursor-pointer text-3xl" ref = "introButton">Intro</div>
              </li>
              <li>
                <div  class = "class-mrna cursor-pointer text-3xl" ref = "mrnaButton">mRNA Platform</div>
                <ul>
                  <li>
                    <div class = "class-mrna1 cursor-pointer text-xl" ref = "mrna1Button" >mRNA Construct</div>
                  </li>
                  <li>
                    <div class = "cursor-pointer text-xl">Golden Gate Cloning</div>
                  </li>
                </ul>
              </li>

              <li>
                <div  class = "class-usage cursor-pointer text-3xl" ref = "nameButton">Usage and Biology</div>
                <ul>
                  <div class = "cursor-pointer text-xl ">Gene Activation</div>
                  <div class = "cursor-pointer text-xl ">Experimental Design</div>
                </ul>          
              </li>

            </ul>
          </nav>  
        </div>

        <div class = "col-span-9 max-md:col-span-12 text-justify text-xl">
          <section id = "intro" ref = "intro">
            <h1>
              Intro
            </h1>

            <h2>
              In 2023, Team IISc-Bengaluru is bringing something unique to BioBricks. For the first time, we are introducing an mRNA-based platform into the registry. This makes it easier for future teams and researchers to build up on our designs for mRNA constructs and create their own mRNA constructs. We are extremely pleased to announce that in this regard, we are introducing a modified T7 promoter that is used by the few labs working in this niche area. This modified promoter is also modified for the use of clean cap AG (from tri link biotech) and related caps. And we do not stop there. We are also introducing not one, but 2 new sequences. Our BioBricks can be viewed in the following link: 
            </h2>
          </section>

          <section id = "mrna" ref = "mrna">
            <h1>
              mRNA-based Platform
            </h1>
            <h2>
              This part can be used to design an mRNA construct for protein replacement therapy. Our constructs are optimized for human cell expression and the UTRs are currently patented by Moderna, and not available to be put up on the registry. However, the sequences are freely available and are listed below. The system's modularity comes from the fact that the CDS can be switched in and out of our design, as required by the researcher. Further, the advantage of an mRNA-based platform is that a plasmid backbone is not a prerequisite for transfection and expression. This implies that one can simply buy gene fragments for a sequence and run that directly through IVT. If the total sequence is under 2,000 bp, PCR can also be run with minimal error, implying that the sequence can be amplified and used without going through the tedious and error prone process of cloning! Further, the transfection efficiency of mRNA is higher than that of DNA, which makes the experimental procedure of using mRNA much easier for simple applications. 

              Here we offer 2 new composite BioBricks, which include 3 new sequences: In other words, we introduce the blueprint to form new mRNA therapeutics and give 4 examples of the same! 
            </h2>

            <section id = "mrna1" ref = "mrna1">
              <h3>
                mRNA Construct
              </h3>
              <h2>
                To build a functional mRNA construct, you must choose your CDS sequence and UTRs if you’re looking to optimize it. We have optimized our sequences using the RiboTree tool from Das labs at Stanford. Both have been submitted to the registry. These sequences can be used in any (bacterial) vector with the BioBricks prefix and suffix in it, as the vector simply does not matter, if it can be propagated in a bacterial species! (Also please note that the vector you use must have a polyA tail of sufficient length included in it).  

                Bba_K747016 to Bba_K747031 predefines the nucleotide of the 4. and the 5. nucleotide.  

                Bba_K747032 to Bba_K747047 predefines the nucleotide of the 6. and the 7. nucleotide.  

                Bba_K747048 to Bba_K747063 predefines the nucleotide of the 8. and the 9. nucleotide.  

                Bba_K747064 to Bba_K747079 predefines the nucleotide of the 10. and the 11. nucleotide.  

                Bba_K747080 to Bba_K747095 predefines the nucleotide of the 12. and the 13. nucleotide.  

  

                (Modified T7 promoter) 

                This part allows you to predefine the binding affinity of the 2. nucleotide (adenine) and the 3. nucleotide (adenine) in the 14 nucleotide target sequence.  

                Target sequence: T AA NN NN NN NN NN T  
              </h2>
            </section>
          </section>


          <section id = "usage">
            <h1>
              Usage and Biology
            </h1>
            <h3>
              Gene Activatiobn
            </h3>
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
      this.$refs.introButton.addEventListener("click", ()=>{this.scrollTo("intro");})

      this.$refs.mrnaButton.addEventListener("click", ()=>{this.scrollTo("mrna")})
      
      this.$refs.mrna1Button.addEventListener("click", ()=>{this.scrollTo("mrna1")})
    }
}
</script>