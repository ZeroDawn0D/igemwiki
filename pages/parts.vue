<template>
  <div>
    <div class = "">
      <div class = "courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32">
        EXPERIMENTS
      </div>
    </div>
    <!-- IMPORTANT CHANGE TO MAKE HERE-->
    <Scrollspy :currentPage="currentPage" initialSection="plasmid">
      <div class = "grid grid-cols-12 gap-4 p-8">
        <div class = "col-span-3 max-md:hidden">
          <nav class = "sticky overflow-auto h-screen top-16 border-r-8 py-8" >
            <ul>
              <li>
                <div class = "class-plasmid cursor-pointer text-2xl" ref = "plasmidButton">Plasmid Isolation</div>
                

              </li>
              <li>
                <div  class = "class-trans cursor-pointer text-2xl" ref = "transButton">Transformation</div>
                
              </li>

              <li>
                <div  class = "class-protein cursor-pointer text-2xl" ref = "proteinButton">Protein Expression</div>
                        
              </li>

              <li>
                <div  class = "class-pp cursor-pointer text-2xl" ref = "ppButton">Protein Purification</div>
                        
              </li>

              <li>
                <div  class = "class-wb cursor-pointer text-2xl" ref = "wbButton">Western Blot</div>
                     
              </li>
              <li>
                <div  class = "class-age cursor-pointer text-2xl" ref = "ageButton">Agarose Gel Electrophoresis</div>
                  
              </li>

              <li>
                <div  class = "class-sds cursor-pointer text-2xl" ref = "sdsButton">SDS Page</div>
               

              </li>

              <li>
                <div  class = "class-ivt cursor-pointer text-2xl" ref = "ivtButton">IVT</div>
              </li>

              <li>
                <div  class = "class-rga cursor-pointer text-2xl" ref = "rgaButton">Ribogreen Assay</div>
              </li>

              <li>
                <div  class = "class-hela cursor-pointer text-2xl" ref = "helaButton">Transfection into HeLa cells</div>
              </li>

              <li>
                <div  class = "class-lnp cursor-pointer text-2xl" ref = "lnpButton">LNP formulation</div>
              </li>

              <li>
                <div  class = "class-lmc cursor-pointer text-2xl" ref = "lmcButton">LNP mRNA Combination</div>
              </li>

              <li>
                <div  class = "class-ac cursor-pointer text-2xl" ref = "acButton">Aptide Conjugation</div>
              </li>

              <li>
                <div  class = "class-gpl cursor-pointer text-2xl" ref = "gplButton">General Lab Procedures</div>
              </li>


            </ul>
          </nav>  
        </div>

        <div class = "col-span-9 max-md:col-span-12 text-justify text-xl">
          <section id = "plasmid" ref = "plasmid">
            <h1>
              Plasmid Isolation
            </h1>
            <h2>
<b>Cell Harvesting:</b> Bacterial cells containing the desired plasmid are grown in culture and then harvested. The cells are typically treated to disrupt their cell walls, releasing the plasmids into the solution. 
<br />
<b>Cell Lysis and DNA Release:</b> The harvested cells are subjected to lysis, breaking open their membranes and releasing cellular components. Plasmid DNA, along with other cellular components, is liberated into the lysate. 
<br />
<b>Removing Cellular Debris:</b> The lysate is centrifuged to separate the cellular debris and larger particles from the liquid containing the plasmid DNA. 
<br />
<b>Selective Precipitation or Column Purification:</b> Plasmid DNA can be selectively precipitated using alcohol, where the DNA molecules aggregate while other impurities remain in solution. Alternatively, column purification methods employ specialized matrices that selectively bind DNA while allowing contaminants to be washed away. 
<br />
<b>Elution and Concentration:</b> The purified plasmid DNA is eluted from the purification matrix or recovered from the precipitation process. It is then concentrated through ethanol precipitation or centrifugation. 
<br />
<b>Quality Assessment:</b> The extracted plasmid DNA is assessed for quality and quantity using techniques like spectrophotometry or agarose gel electrophoresis. 
          

          <a class = "inline-block" target = "_blank" href = "https://static.igem.wiki/teams/4829/wiki/pdf/plasmidisolation.pdf">  
              <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Protocol
          </span>
          </div>
        </a>
            </h2>
          
          </section>

          <section id = "trans" ref = "trans">
            <h1>
              Transformation
            </h1>
            <h2>
<b>Preparation of Competent Cells:</b> Prior to transformation, recipient cells are made "competent" through treatments that increase their permeability. Chemical methods, heat shocks, or electroporation are employed to create temporary openings in the cell membrane, allowing the uptake of foreign DNA. 
<br />
<b>DNA Uptake:</b> The exogenous DNA, which can carry genes of interest, regulatory elements, or markers, is mixed with competent cells. The treated cells are exposed to specific conditions, such as a brief electrical pulse or heat shock, that further increase membrane permeability, enabling the DNA to enter the cells. 
<br />
<b>Integration or Maintenance:</b> Following uptake, the fate of the exogenous DNA varies. In some cases, the foreign DNA may be integrated into the host genome through homologous recombination. Alternatively, it may persist as an episome, an independent genetic element within the cell. 
<br />
<b>Expression of Transgenes:</b> Once integrated or retained, the exogenous DNA can confer new traits upon the transformed cells. This might include antibiotic resistance, production of specific proteins, or alteration of metabolic pathways. 
            
            <a class = "inline-block" target = "_blank" href = "https://static.igem.wiki/teams/4829/wiki/pdf/transformation.pdf">  
              <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Protocol
          </span>
          </div>
        </a>


            </h2>
           
          </section>
          <section id = "protein" ref = "protein">
            <h1>
              Protein Expression
            </h1>
            <h2>
                 <a class = "inline-block" target = "_blank" href = "https://static.igem.wiki/teams/4829/wiki/pdf/protein-expression.pdff">  
              <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Protocol
          </span>
          </div>
        </a>

            </h2>
            
          </section>

          <section id = "pp" ref = "pp">
            <h1>
              Protein Purification
            </h1>
            <h2>
                 

                 <a class = "inline-block" target = "_blank" href = "https://static.igem.wiki/teams/4829/wiki/pdf/protein-purification.pdf">  
              <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Protocol
          </span>
          </div>
        </a>
            </h2>
            
          </section>


          <section id = "wb" ref = "wb">
            <h1>
              Western Blot
            </h1>
            <h2>
                 In essence, these blotting technique uses the principles of molecular complementarity (base pairing) to detect and analyze specific molecules (proteins) within complex mixtures, enabling researchers to study gene expression, identify mutations, and analyze protein profiles. 

                 <a class = "inline-block" target = "_blank" href = "https://static.igem.wiki/teams/4829/wiki/pdf/western-blot.pdf">  
              <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Protocol
          </span>
          </div>
        </a>

            </h2>
            

            
          </section>

          <section id = "age" ref = "age">
            <h1>
              Agarose Gel Electrophoresis
            </h1>
            <h2>
              Agarose gel electrophoresis is a technique used to separate DNA fragments based on their size and charge. The process occurs within a gel matrix made from agarose; a polysaccharide derived from seaweed. DNA samples are loaded into wells at one end of the gel, and an electric field is applied. The negatively charged DNA molecules move towards the positively charged electrode, propelled by the electric field. The agarose gel acts as a molecular sieve, slowing down the migration of larger DNA fragments more than smaller ones. This creates distinct bands along the gel, each representing DNA fragments of specific sizes. To visualize the separated DNA fragments, a DNA stain is often used. This stain binds to the DNA molecules, making them visible under ultraviolet light. By comparing the migration of unknown DNA samples to that of known DNA markers of known sizes, scientists can accurately determine the size of the fragments. 


              <a class = "inline-block" target = "_blank" href = "https://static.igem.wiki/teams/4829/wiki/pdf/agarose-gel-electrophoresis.pdf">  
              <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Protocol
          </span>
          </div>
        </a>

            </h2>
            

          </section>

          <section id = "sds" ref = "sds">
            <h1>
              SDS Page
            </h1>
            <h2>
                 

                 <a class = "inline-block" target = "_blank" href = "https://static.igem.wiki/teams/4829/wiki/pdf/sds-page.pdf">  
              <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Protocol
          </span>
          </div>
        </a>

            </h2>
            
          </section>

          <section id = "ivt" ref = "ivt">
            <h1>
              IVT
            </h1>
            <h2>
              In vitro translation, also known as cell-free translation or protein synthesis, is a pivotal molecular biology technique that allows for the synthesis of proteins outside of living cells. This process closely mimics the natural protein synthesis that occurs within cells but takes place in a controlled laboratory setting. The key components of in vitro translation include a cell-free extract, which contains the necessary cellular machinery for transcription and translation, as well as a DNA or RNA template encoding the protein of interest. 
<br />
The process begins with the preparation of a cell-free extract, typically obtained from a suitable source like E. coli or wheat germ, which contains ribosomes, tRNAs, amino acids, and other essential components for protein synthesis. The extract is then combined with the DNA or RNA template, and protein synthesis is initiated through transcription to produce mRNA and translation to synthesize the target protein. 
<br />
In vitro translation offers several advantages, including the ability to study specific aspects of protein synthesis, such as translational control or post-translational modifications, in a highly controlled environment. It is also invaluable for producing large quantities of recombinant proteins for various research and biotechnological applications, including drug development and structural biology studies. 
<br />
We used the ThermoFisher Mega Clear kit and followed the same protocol for this procedure. 


              <a class = "inline-block" target = "_blank" href = "https://static.igem.wiki/teams/4829/wiki/pdf/ivt.pdf">  
              <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Protocol
          </span>
          </div>
        </a>


            </h2> 
          </section>

          <section id = "rga" ref = "rga">
            <h1>
              Ribogreen Assay
            </h1>
            <h2>
              The Ribogreen assay starts with the preparation of a sample containing the nucleic acids of interest. A precisely measured amount of Ribogreen dye is then added to the sample, where it selectively binds to RNA or DNA molecules, inducing a significant increase in fluorescence. The resulting fluorescent signal is directly proportional to the concentration of nucleic acids present in the sample, allowing for accurate and sensitive quantification. 
<br />
We used the Quant-iT™ RiboGreen™ RNA Reagent and Kit, whose protocol can be found from the link below. 

              <a class = "inline-block" target = "_blank" href = "https://static.igem.wiki/teams/4829/wiki/pdf/ribogreen.pdf">  
              <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Protocol
          </span>
          </div>
        </a>
            </h2> 
          </section>
          <section id = "hela" ref = "hela">
            <h1>
              Transfection into HeLa cells
            </h1>
            <h2>
              Transfection is a fundamental molecular biology technique used to introduce foreign genetic material, such as DNA or RNA, into eukaryotic cells. This process serves as a critical tool in various research areas, including functional genomics, gene therapy, and protein expression studies. Transfection enables scientists to manipulate and study gene expression, investigate cellular functions, and develop novel therapies. 
<br />
Transfection can be achieved through various methods, such as chemical transfection, electroporation, lipofection, and viral vectors. We have used lipofection for our purposes. Lipofection utilizes lipid-based carriers to transport genetic material across the cell membrane.

              <a class = "inline-block" target = "_blank" href = "https://static.igem.wiki/teams/4829/wiki/pdf/transfection.pdf">  
              <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Protocol
          </span>
          </div>
        </a>

            </h2> 
          </section>
          <section id = "lnp" ref = "lnp">
            <h1>
              LNP Formation
            </h1>
            <h2>
              Lipid nanoparticles are intricate assemblies of lipids that exhibit remarkable potential for targeted drug delivery and gene therapy. These nanoparticles are typically composed of phospholipids, cholesterol, and other lipid components, forming a stable, biocompatible vesicle structure. Their unique physicochemical properties enable the encapsulation of hydrophobic and hydrophilic payloads, including small molecule drugs, nucleic acids, and therapeutic proteins. 
<br />
Lipid nanoparticles excel in overcoming biological barriers, such as the blood-brain barrier or cellular membranes, facilitating precise and efficient cargo delivery. This controlled delivery can enhance therapeutic efficacy, reduce side effects, and enable the use of previously challenging drug candidates. 
<br />
Protocol for iLNP device preparation: 
              <a class = "inline-block" target = "_blank" href = "https://static.igem.wiki/teams/4829/wiki/pdf/lnp-formulation.pdf">  
              <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Protocol
          </span>
          </div>
        </a>
            </h2> 
          </section>

          <section id = "lmc" ref = "lmc">
            <h1>
              LNP mRNA Combination
            </h1>
            <h2>
              <a class = "inline-block" target = "_blank" href = "https://static.igem.wiki/teams/4829/wiki/pdf/lnp-mrna-combination.pdf">  
              <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Protocol
          </span>
          </div>
        </a>
            </h2> 
          </section>

          <section id = "ac" ref = "ac">
            <h1>
              Aptide Conjugation
            </h1>
            <h2>
              <a class = "inline-block" target = "_blank" href = "https://static.igem.wiki/teams/4829/wiki/pdf/aptide-conjugation.pdf">  
              <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Protocol
          </span>
          </div>
        </a>
            </h2> 
          </section>

          <section id = "gpl" ref = "gpl">
            <h1>
              General Lab Procedures
            </h1>
            <h2>
              <a class = "inline-block" target = "_blank" href = "https://static.igem.wiki/teams/4829/wiki/pdf/general-lab-procedures.pdf">  
              <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Protocol
          </span>
          </div>
        </a>
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