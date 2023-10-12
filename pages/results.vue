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
                 Practice: To ensure all our experiments proceeded smoothly and produced viable data successfully, the entire wet-lab team underwent training for all basic synthetic biology procedures like bacterial transformation in E. coli, his-tag protein purification, gel analysis, etc. 
            </h2>
            <section id = "may1" ref = " may1">
              <h3>
                RFP Transformations
              </h3>
              <h2>
                Standard RFP DNA used for control and trial runs was used to transform E. coli TG1 cells. The transformation procedure did not yield good results due to sample contamination and use of incorrect inducer.
              </h2>
            </section>
            
            <section id = "may1" ref = " may1">
              <h3>
                GFP Transformations
              </h3>
              <h2>
                Standard GFP DNA used for control and trial runs was used to transform E. coli TG1 and BL21 cells. The rationale for using BL21 cells has been outlined in the Engineering page. The plasmid conferred ampicillin-resistance to the transformed bacteria. IPTG (Isopropyl ß-D-1-thiogalactopyranoside) was used to induce protein production. The following pictures indicate successful transformation, culturing of transformed bacteria, induction of protein production, and an SDS PAGE denoting the expression of protein. 

                <figure class="max-w-lg relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4 " src="https://static.igem.wiki/teams/4829/wiki/pages-photos/results/gfp-pellet.jpg " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">GFP expressed in bacterial pellets after induction</figcaption>
</figure> 

<figure class="max-w-lg relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4 " src="https://static.igem.wiki/teams/4829/wiki/pages-photos/results/tg1-single-colonies.jpg " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Transformed E. coli TG1 colonies in Ampicillin plate. </figcaption>
</figure> 

<figure class="max-w-lg relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4 " src="https://static.igem.wiki/teams/4829/wiki/pages-photos/results/tg1-single-colonies.jpg " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">SDS Page showing presence of the GFP. </figcaption>
</figure> 

<figure class="max-w-lg relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4 " src="https://static.igem.wiki/teams/4829/wiki/pages-photos/results/tg1-single-colonies.jpg " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400"></figcaption>
</figure> 


              </h2>
            </section>

            <section id = "may1" ref = " may1">
              <h3>
                His-tagged Ferredoxin Purification
              </h3>
              <h2>
                Protein was extracted and purified from transformed cells which were engineered to produce said protein. After successful cell lysis, the extracted protein was analyzed using SDS-PAGE. The pictures indicate successful extraction and the corresponding gel-runs.


                <figure class="max-w-lg relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4 " src="https://static.igem.wiki/teams/4829/wiki/pages-photos/results/sds-fer.jpg " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400"> </figcaption>
</figure> 

<figure class="max-w-lg relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4 " src="https://static.igem.wiki/teams/4829/wiki/pages-photos/results/ferredoxin-purified.jpg">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400"> </figcaption>
</figure> 


              </h2>

            </section>

</section>
            <section id = "may" ref = "may">
            <h1>
             Wet lab
            </h1>
            <h2>
                 The wet-lab team used a multi-layer approach to obtain a set of comprehensive and valid proof of concepts. The various layers were: 
<br /><br />
Validity of the bacterial expression plasmid (for antibody O-IL8-15) in terms of bacterial transformation and protein production 
<br /><br />
Validity of DNA/mRNA sequence of the antibody, modified for use in Human Cell lines 
<br /><br />
Testing the neutralizing efficiency of the produced antibody against IL-8. This occurs in two parts: 
<br />
a)Testing the protein produced by the bacterial plasmid 
<br />
b)Testing the protein produced by HeLa cells transfected with mRNA obtained from modified DNA sequence 
<br /><br />
Encapsulating the mRNA into lipid nanoparticles (LNPs) to produce a feasible method of mRNA delivery into diseased cells  
            </h2>
            <section id = "may1" ref = " may1">
              <h3>
               O-IL-8 plasmid extraction and transformation
              </h3>
              <h2>
                the plasmid for the Anti-IL-8 antibody was delivered in E. coli DH5-α cells. The plasmid was extracted using GeneJET ® Plasmid Miniprep Kit and was analyzed using a nanodrop spectrophotometer. The data presented below indicates that our samples were pure for the most part. 
<br />
12 vials of plasmid were isolated: 
<br />
Random vials were checked for concentration using NanoDrop:  
<br />
260/280: 1.95; 260/230: 2.03; Concentration: 25ng/µL 
<br />
260/230: 2.01; 260/280: 1.95; Concentration: 25ng/µL 
<br />
260/230: 1.83; 260/280:1.88; Concentration: 25ng/µL 
<br />
The extracted DNA was then used to transform E. coli BL-21 and TG-1 cells. After successful transformation, single colonies were obtained by patching and plating on Kanamycin plates. 
<figure class="max-w-lg relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4 " src="https://static.igem.wiki/teams/4829/wiki/pages-photos/results/oil8-plate.jpg">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400"> </figcaption>
</figure> 
<br />
Once, single colonies were isolated, their cell cultures (especially of E. coli BL21 cells) were used to induce protein production through IPTG.  
<br />
The cell lysate was run through a western blot to check for protein production. The visible bands (yellow) at 31kDa indicate successful protein production. 
<br>
With this, we were able to obtain our first, most basic proof of concept. 
<br>
After confirming the presence of the anti-IL-8 antibody, the protein was extracted and purified to a concentration of 0.07 mg/mL (measured through a nanodrop spectrophotometer). 
<br>
Once the DNA sequence was confirmed to work as intended (i.e., intended protein is produced), DNA fragments from Twist BioScience with the same sequence was used for IVT (in-vitro transcription) to obtain mRNA (for further experiments) in a hassle-free manner. The following data and graphs indicate the success of the IVT procedure for CD36 and anti-IL-8 DNA. 


              </h2>
            </section>
            



            <section id = "may1" ref = " may1">
              <h3>
                BLI of ouur purified anti-IL8
              </h3>
              <h2>
                To test the efficacy of our anti-IL-8 antibody, we performed BLI (Bio-layer interferometry) in order to measure the binding efficiency of the antibody with IL-8. Ni-NTA tips were used as our protein has a His-tag. 
Run 1 – 26.07.2023. 
Data Analysis: Combined, equalized. 

Kd = (3.275 ± 1.245) ×10-10 (large error percentage)  
The rise in the graph in the binding steps shows that anti-IL8 is indeed binding to IL8. But the anti-Il8 bound to Ni-NTA tips is not stable and can be seen in the decrease in signal of sensor B2 (control/standard) 

Hence, we switched to a different buffer: PBS, to try and improve binding efficiency of protein to tips. 

Run 2 – 01.08.2023. 
Due to high disassociation of protein form the Ni-NTA tips, we decided to do a multiple cycle BLI   instead, as shown below. 
Data from this run was not analyzed due to the bad association of protein, as before. Tris-Cl   seemed to have a better binding stability than PBS. 


Run 3 – 11.10.2023. 

Combined data: Protein was completely analyzed in Tris-Cl pH 7.4.  

This protein was produced through the use of Promega’s TnT Quick Coupled                 Transcription /Translation System. This gave a large yield of our required protein, which was used for BLI. 

Data Analysis: At each concentration: 

6.25nM of IL8 

Kd = (6.752 ± 0.37) ×10-10 

12.5nM of IL8: 

Kd = (1.965 ± 0.19) ×10-8 

25nM of IL8: 

Kd = (2.878 ± 0.22) ×10-8 


Our protein shows the best results at a concentration of 6.25nM of IL8. All the above graphs  show that the anti-IL8 and IL8 bind to each other, and the Kd value obtained is close to the  previously reported value.   

The high concentration of protein obtained due to the Promega’s TnT Quick Coupled                  Transcription /Translation System kit was very helpful in obtaining the above results. 



              </h2>
            </section>

            <section id = "may1" ref = " may1">
              <h3>
                mRNA Transfection into HeLa Cell
              </h3>
              <h2>
                Further, the mRNA obtained from our DNA construct (modified for human cell lines) was transfected into HeLa cells to check for protein production. We used the constructs, with 2ug of mRNA mixed with 2ul of Lipofectamine MessengerMAX, in each well of a 12 well plate, each well having 0.5 million cells. Running a western blot of the HeLa cell supernatant 6 hours post-transfection showed the successful production and secretion of our antibody (at 31kDa), indicating the validity of our signal peptide and coding sequence. 

We ran a transfection according to <link to protocol> with our plasmid.

Western Blot of Cell culture, showing O-IL8-15 Production. 

The successful Western Blot provided us with our second proof of concept, indicating that the modified DNA sequence can be used for transforming human cells. 


              </h2>



            </section>


            <section id = "may1" ref = " may1">
              <h3>
                LNP formulation and chracterisation
              </h3>
              <h2>
                To encapsulate mRNA into LNPs (lipid nanoparticles), a microfluidic device was used. The LNP was characterized by DLS (dynamic light scattering) technique, the data and graphs for which are provided below: 

Zeta Potential (mV): -1.86mV 

Zeta Deviation (mV): 5.34mV 

Conductivity (mS/cm): 0.915 

Result Quality: Good 

Radius of LNP: Approximately 180nm 

RiboGreen Assay: The Ribogreen assay was used to estimate the encapsulation efficiency of the mRNA by the LNPs. The graph shows the concentration of unencapsulated mRNA against the fluorescence produced by the Ribogreen reagent when it binds with free mRNA. The formula below gives us the percentage of mRNA encapsulated.  

(T−R)T , where T=Total of amount of mRNA used, 
 
 

R= amount of mRNA detected by RiboGreen 
 

 

Temperature: 25.4°C 

ELISA Absorbance values were as follows: (A and B are technical replicates) 

Concentration of RNA in solution: 237 ng/mL 

Result: 99.97% uptake efficiency. We theorized that an uptake efficiency this high could signify nuclease action in the solution, leading to degradation of RNA outside LNPs. 

Three initial batches of LNP: 
RNA concentrations in solution are as follows: 

A: 954.1 ng/mL 

B: 638.7 ng/mL 

C: 874.8 ng/mL 

Uptake Percentages are as follows: 

A: 77.1% 

B: 84.6% 

C: 79.0% 

 

Which are decent values, provided the lack of sterility and bigger-than-usual LNP sizes. 

We also tried a new Ca 2+ assay using RAW cells at this point, to try and show the functionality of our antibody. However, the control wells showed the same fluorescence signal as all the other wells in the plate. Possibly the Fuo-4 AM we used was faulty, or the IL8 was not activating the RAW cells’ CXCR2 receptors.  


              </h2>
            </section>

</section>


<iframe src="https://static.igem.wiki/teams/4829/wiki/modelling/results.pdf" width="100%" height="800px"></iframe>

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