<template>
  <div>
    <div class = "">
      <div class = "courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32">
        ENGINEERING
      </div>
    </div>


   

    

    <div @click= "synbio=true; console.log(synbio)" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Wet Lab
        </span>
    </div>

    <div @click = "synbio=false; console.log(synbio)" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Dry Lab
        </span>
    </div>
    
    <Scrollspy class = "ss-synbio" :currentPage="currentPage" initialSection="trans">
      <div class = "grid grid-cols-12 gap-4 p-8">
        <div class = "col-span-3 max-md:hidden">
          <nav class = "sticky top-16 border-r-8 py-8" >
            <ul>
              <li>
                <div class = "class-trans cursor-pointer text-2xl" ref = "transButton">Transformation</div>
              </li>
              <li>
                <div class = "class-pe cursor-pointer text-2xl" ref = "peButton">Protein Expression</div>
              </li>
              <li>
                <div class = "class-oil cursor-pointer text-2xl" ref = "oilButton">OIL8 Plasmid Strain Selection</div>
              </li>

              <li>
                <div class = "class-plasm cursor-pointer text-2xl" ref = "plasmButton">Plasmid Extraction</div>
              </li>

              <li>
                <div class = "class-pefa cursor-pointer text-2xl" ref = "pefaButton">Protein Expression for Anti-IL8</div>
              </li>
              <li>
                <div class = "class-lnp cursor-pointer text-2xl" ref = "lnpButton">Lipid Nanoparticle Quantification</div>
              </li>

            </ul>
          </nav>  
        </div>

        <div class = "col-span-9 max-md:col-span-12 text-justify text-xl">
          <section id = "trans">
            <h1>
              Transformation
            </h1>
            <h2>
              Design:  
<br />
Preparation of Competent E. coli TG1 cells using CaCl2 solution and Heat shock Transformation with GFP plasmid. 
<br />
Build: 
<br />
 Link to Protocol for Transformation> 
<br />
Test:  
<br />
Plating of transformed and non-transformed control bacteria in ampicillin plates. Successful Transformation was achieved. However, the plates have lawns. 
<br />
Learn:  
The transformation efficiency seems to be quite high and hence the incubation or/and the volume of solution must be reduced.  
<br /><br />
Design:  
<br />
Same Protocol, with lower incubation and halving the volume of transformant cells to be plated. 
<br />
Build:  
<br />
Link to transformation protocol> 
<br />
Test:  
<br />
Plating of transformed and non-transformed control bacteria in kanamycin plates. Individual colonies of transformed bacteria were obtained. 

 
<br /><br />
Motivation:  
<br />
A lab session with our instructors led us to a new realization: a combination of MgCl2 and CaCl2 is more potent for competency and is more stable compared to simple CaCl2 competency, due to the larger atomic size of Mg2+. 
 
<br /><br />
Design: 
<br />
Preparation of competent cells with MgCl2 at first suspension and CaCl2 in the second suspension. Transformation as usual. 
<br />
Build:  
<br />
Link to modifications in transformation protocol: The one with MgCl2> 
<br />
Test:  
<br />
Plating of transformed and non-transformed control bacteria in kanamycin agar plates. Successful, with marked increase in number of single colonies.
<br />
            </h2>
          </section>

          <section id = "pe">
            <h1>
              Protein Expression
            </h1>
            <h2>
              The gene of interest (anti-IL-8) in the plasmid is regulated by the lac operon. IPTG (Isopropyl β-d-1-thiogalactopyranoside), a molecular mimic of allolactose can act as the promoter and is often used because it is not metabolized but as a con, it also has a toxic effect on cells. 

 
<br /><br />
Design:  
<br />
IPTG Induction of transformed bacteria. 
<br />
Build:  
<br />
1mM concentration of IPTG was used to induct E. coli BL21 transformed with GFP AmpR plasmid, cultured to mid-log phase. 
<br />
Test:  
<br />
The cells are pelleted down, and the supernatant is used to run a western blot (Since the protein is extra cytoplasmic). Low expression observed. 
<br />
Learn:
<br />  
After searching for plausible reasons for failure, we narrowed down to the following: 
<br />
-IPTG concentration is not enough 
<br />
-IPTG is not the best inducer in this case (?) 
<br />
-The stock IPTG is too old to promote good enough expression. 
 
<br /><br />
Design:  
<br />
Induction with lactose (skimmed milk) instead of IPTG. 
<br />
Build:  
<br />
Use Skimmed Milk Broth (1% peptone + 1% NaCl + 0.5% Yeast Extract + 1% Skimmed milk powder in MilliQ water) as a culture medium cum inducer- since allolactose can directly induce lac operons. 
<br />
Test:  
<br />
Curdling of Milk is seen when autoclaved. 
<br />
Learn: 
<br />
Skimmed Milk broth can be sterilized after preparation, we have to prepare the media in a sterile environment. 

 
<br /><br />
Design: 
<br />
Skimmed Milk broth/ Lactose Induction 
<br />
Build: 
<br />
Autoclave LB solution and add 1% sterile skimmed milk powder. 
<br />
Test: 
<br />
The cells are pelleted down, and the supernatant is used to run a western blot (Since the protein is extra cytoplasmic), which showed almost negligible induction. 
<br />
Learn:  
<br />
Skimmed Milk is not a good promoter. 

 
<br /><br />
Design:  
<br />
We try a gradient of IPTG concentrations on different cultures to optimize induction. Fresh IPTG stocks (100mM) were procured. 
<br />
Build:  
<br />
link to Optimization of Expression under protein expression in experiments> 
<br />
Test:  
<br />
The cells are pelleted down, and the supernatant is used to run a western blot (Since the protein is extra cytoplasmic) which shows sufficient induction at 1mM.  
<br />
A piece of paper in a clear plastic container
<br />
Description automatically generated 

 
<br /><br />
Design: 
<br />
We now varied the temperature of final incubation to optimize the temperature requirements of our plasmid. 
<br />
Build: 
<br />
Prepare cultures, induce with 1mM IPTG, and incubate for 12-14 hours at 10°, 15°, 20°, 25°, 30°, 37°C. 
<br />
Test: 
<br />
We again ran a western blot with all types of supernatants and got the strongest signal at 25°C. (?DATA) 
<br />
Learn: 
<br />
The optimized conditions for our plasmid to produce proteins in bacterial BL21 chassis is 1mM IPTG at 25°C at 230 rpm. 
            </h2>
          </section>

          <section id = "oil">
            <h1>
              OIL8 Plasmid Strain Selection
            </h1>
            <h2>
              Design:  
<br />
We compared TG1 and BL21 strains of E. coli to choose a chassis for protein expression.  Both were transformed with OIL-8 plasmid. 
<br />
Build:  
<br />
We induced transformed cultures of both strains with the same concentration of IPTG at the same conditions. 
<br />
Test:  
<br />
BL21 showed considerably high expression in the Western Blot with cell lysates from both cultures. 
<br />
A blue and yellow paint on a white surface
<br />
Description automatically generated 
<br />
Learn:  
<br />
BL21 was chosen as chassis for protein production. 
            </h2>
          </section>
          <section id = "plasm">
            <h1>
              Plasmid Extraction
            </h1>
            <h2>
              Design:  
<br />
Kit-free Extraction to isolate plasmid from E. coli DH5-alpha bacteria containing OIL-8 plasmid (provided by AddGene). 
<br />
Build:  
<br />
Alkaline Lysate Protocol <link to protocol> 
<br />
Test: 
<br />
No pellet was left over at the end of the protocol. 
<br />
Learn:  
<br />
The isopropanol necessary to precipitate the plasmid is light-sensitive, also the reason why it is kept in coloured bottles. So, the very old stocks we had were possibly quite ineffective. 

 
<br /><br />
Design: 
<br />
Same as before, with new isopropanol procured from the chemistry lab. 
<br />
Build: 
<br />
link to alkaline lysate protocol>. 
<br />
Test: 
<br />
No pellet is obtained, leading to a search for better procedures since our experience meant we didn’t have optimally pure reagents or conditions necessary to carry out the process with enough precision to give us a workable yield. 

 
<br /><br />
Design:  
<br />
We resort to using ThermoFisher MiniPrep Kit for plasmid extraction. 
<br />
Build:  
<br />
Link to MiniPrep Kit Protocol> 
<br />
Test:  
<br />
Successful, with viable concentrations under Nanodrop- about 25µg/mL. 
<br />
 

  
            </h2>
          </section>
          <section id = "pefa">
            <h1>
              Protein Expression for Anti-IL8
            </h1>
            <h2>
              Design:  
<br />
Since this was a secreted protein, buffers used in training runs wouldn’t have good efficiency with the exact same composition. So, we needed the buffer selection runs. 
<br />
Build:  
<br />
pI= 5.7 -> pH > pI 
<br />
Trial Buffers: Phosphate (pH=8), Tris Cl (pH=8), PBS (pH=7.4) 
<br />
Additives: PMSF [Protease Inhibition], β-mercaptoethanol [Reducing Agent], Glycerol [10%] 
<br />
Comparison: Yield [Nanodrop], Purity [SDS Page], Stability [Aggregation] 
<br />
Salt: NaCl 
<br />
Test:  
<br />
We ran SDS PAGE’s with 1. Varying buffers, 2. Varying salt concentrations 
<br />
Learn: 
<br />
Unclear data. Salt concentration chosen 300mM. 

 
<br /><br />
Design:  
<br />
Western Blot. 
<br />
Build: 
<br />
We run the cell lysate to see if the protein is produced. 
<br />
Test: 
<br />
The gel is successful: visible bands are formed at 31kDa. 
<br />
Learn: 
<br />
Protein is successfully produced by plasmid. 

 
<br /><br />
Design and Build: 
<br />
We decided to carry out ELISA with our Antibody as a secondary and IL8 as primary, using HRP conjugation to quantify the interactions between IL8 and O-IL8-15 
<br />
Test:  
<br />
Unsuccessful, with no colour changes. 
<br />
Learn:  
<br />
Ineffective protein folding might be the reason for failure. So, we looked into literature, and concluded there could be two issues: one, disulphide linkages not being formed properly; two, protein being secreted in form of Inclusion Bodies.  

 
<br /><br />
Design: 
<br />
Ammonium Sulphate Precipitation to concentrate supernatant. 
<br />
Build: 
<br />
link to ammonium sulphate precipitation protocol>. 
<br />
Test: 
<br />
Ran the above at varying concentrations to find the optimum saturation. 
<br />
Learn: 
<br />
70% saturation was found to be best.  
<br /><br />
Design: 
<br />
BLI with Tris Cl as a buffer  
<br />
Build:  
<br />
BLI gives us a quantitative measure of the binding affinity of IL8 and Anti IL8. 
<br />
Test:  
<br />
We get unclear data. 
<br />
Learn:  
<br />
The buffer might have led to improper binding. Hence, we change the buffer to PBS. 

 
<br /><br />
Design:  
<br />
BLI with PBS as buffer 
Build:  
<br />
Quantitative test of binding affinity of IL8 and Anti IL8. 
<br />
Test: 
<br />
Worse binding compared to Tris-Cl. 
<br />
Learn: 
<br />
Ineffective folding might be the issue. We changed our buffer back to Tris-Cl. All further steps used Tris-Cl pH 7.4, unless mentioned. 

 
<br /><br />
Design:  
<br />
Urea precipitation to check presence of protein in IBs 
Build:  
<br />
insert urea protocol> 
<br />
Test: 
<br />
SDS-PAGE showed no presence of protein in purified pellet. 
<br />
Learn: 
<br />
Protein may not have been properly produced, due to lack of formation of disulphide linkages. Should either use shuffle cells or target protein to periplasmic space using PelB signal peptide. 

 
<br /><br />
Design:  
<br />
Switch to SHuffle Cells.  
We transfect SHuffle Cells using the original plasmid as well as we have. These cells are designed to produce necessary disulphide linkage as and where required, thus solving our issue. 
<br />
Test: 
<br />
To Be Done 

 
<br />
Design:  
<br />
We designed a new plasmid with PelB signaling peptide instead of OmpA 
<br />
Build:  
<br />
We intend to transform the chassis with modified plasmid to send the protein first to the periplasmic space, to render the necessary disulphide bonds. 
<br />
Test:  
<br />
To Be Done 
            </h2>
          </section>
          <section id = "lnp">
            <h1>
              Lipid Nanoparticle Quantification
            </h1>
            <h2>
              Design:  
<br />
LNP formulation  
<br />
Build: 
<br />
hyperlink to protocol> 
<br />
Test: 
<br />
DLS (Dynamic Light Scattering) analysis of the first LNP batch yielded results showing a radius of around 180nm.  
<br />
Learn:  
<br />
Tested LNPs are close to required characteristics. Nishanth, who helped us in this process, advised us to redo the fabricate the LNPs at high speed to reduce the LNP sizes to near about 100nm. 

 
<br />
Test: 
<br />
Second run of DLS yielded LNP sizes of about 500nm. 
<br />
Learn: 
<br />
The high speeds used could have damaged the microfluidic device, resulting in a larger average radius due to improper mixing. We hypothesized the cause for the radius mismatch as lack of information and optimization of the speed necessary for the LNP. 
            </h2>
          </section>
          

          
              
        </div>
      </div>
    </Scrollspy>



    <Scrollspy class = "ss-endo hidden" :currentPage="currentPage" initialSection="spmc">
      <div class = "grid grid-cols-12 gap-4 p-8">
        <div class = "col-span-3 max-md:hidden">
          <nav class = "sticky top-16 border-r-8 py-8" >
            <ul>
              <li>
                <div class = "class-spmc cursor-pointer text-2xl" ref = "spmcButton">Signal Peptide for Mammalian Cells</div>
              </li>
              <li>
                <div class = "class-dab cursor-pointer text-2xl" ref = "dabButton">dAb Design</div>
              </li>
              
              <li>
                <div class = "class-pk cursor-pointer text-2xl" ref = "pkButton">PK/QSP</div>
              </li>
              <li>
                <div class = "class-had cursor-pointer text-2xl" ref = "hadButton">Homology and docking</div>
              </li>
              <li>
                <div class = "class-pd cursor-pointer text-2xl" ref = "pdButton">Primer Design</div>
              </li>
              <li>
                <div class = "class-bb cursor-pointer text-2xl" ref = "bbButton">Biobricks</div>
              </li>
              <li>
                <div class = "class-te cursor-pointer text-2xl" ref = "teButton">Toxicity estimation</div>
              </li>


            </ul>
          </nav>  
        </div>

        <div class = "col-span-9 max-md:col-span-12 text-justify text-xl">
          <section id = "spmc" ref = "spmc">
            <h1>
              Signal Peptide for Mammalian Cells
            </h1>

            <h2>
              Design: 
<br />
Use TPA as a mammalian signal peptide, as it is the mostly used in genetic constructs. 
<br />
Test: 
<br />
Use SignalP 6.0 to check efficiency of signaling. 
Learn: 
<br />
tPA shows good secretion probability on SignalP 6.0,  

 
<br /><br />
Design: 
<br />
Based on feedbacks from PhD students and on literature review , we decided to investigate the multiple signal peptides. 

 
<br />
We moved our focus to using CD33 as a mammalian signal peptide. 
<br />
Test: 
<br />
We used SignalP 6.0 to check efficiency of signaling, along with a few other signal peptides: 
<br />
[TABLE]
<br />
[IMG]
<br />
Learn: 
<br />
Good efficiency is seen for CD33, significantly higher than in tPA. So we selected it as our signal peptide for mammalian protein expression. 
            
            </h2>
          </section>

          <section id = "dab" ref = "dab">
            <h1>
              dAb Design
            </h1>

            <h2>
              Design:  
<br />
The standard procedure Camelisation i.e. removal of the entirely of the sequence except the VH (Variable head), followed by the replacement of four hydrophobic with more hydrophilic amino acids to avoid the exposure of such a sizeable hydrophobic region to solvent, and other similar changes to increase stability. 
<br />
link to modeling/ dAb design> 
<br />
Build: 
<br />
To make a preliminary version of such a molecule, do the following:  
<br />
Take the VH and VL regions and go through the sequences. Change the amino acid positions to the ones mentioned above if it is not already this.  
<br />
Join the 2 sequences with a linker: GGGGSGGGGSGGGGS. 
<br />
This simple change is all it takes to get a preliminary scFv!  
<br />
Test: 
<br />
Checked our results with docking and GRAMM, which gave very good results! 
            
            </h2>
          </section>
          <section id = "pk" ref = "pk">
            <h1>
              PK/QSP
            </h1>

            <h2>
              Aim of PK/PD: To determine the movement of the LNP based drug through the body and determine the body’s biological response to it. 
<br /><br />
Design and Build:  
<br />
We designed a lipid nanoparticle which would carry the mRNA inside the endometrial cells. We determined the characteristics of the LNPs prepared. We further use this data to run a simulation. 
<br />
Test: Using the PK-Sim software on Open Systems pharmacology, we get data regarding concentrations of drug in the endometrial tissue over time.  
<br />
Learn: We use this data to optimize the characteristics of the lipid nano particle.
 <br />           
            </h2>
          </section>
          <section id = "had" ref = "had">
            <h1>
              Homology and Docking
            </h1>

            <h2>
              Aim of docking: To determine the structural interactions between IL-8 and Anti IL-8, between the Aptide and the Fibronectin EDB, between PD1 and anti-PD1, IL6 and anti-IL6 and nanobody versions of all antibodies. 
<br />
Design: We determined the sequences of all the required proteins and collected the relevant data for the models from the respective PDB files. One protein was to be the ligand and the other the receptor. The ligand and receptor files were combined to form a complex.pdb file. 
<br />
Build: We ran the ligand and receptor files through GRAMM web docking server and got 10 different models of possible docking orientations. We combined the first ligand model with the receptor model to get a ligand-receptor complex model. 
<br />
Test: We used PRODIGY to determine the ‘predicted binding affinity’ of the proteins. 
<br />
Learn: The data obtained can be used as reference for wet labs.  We also plan to try out all the 10 different models received to figure out which gives results most relevant to the wet lab results. 
            
            </h2>
          </section>
          <section id = "pd" ref = "pd">
            <h1>
              Primer Design
            </h1>

            <h2>
              
            Motivation: 
<br />
Our interaction with Debajyoti, a PhD at Prof. Raghavan’s lab, made us realize that we had a finite stock of DNA, if we weren’t using a plasmid. On further feedback from seniors and mentors, we decided to go ahead with  
<br /><br />
Design: 
<br />
Taking aid from Addgene’s handbook(plasmids 101) and their primer design website, we set out to design a plasmid with the following properties: 
<br />
Length of 18-24 bases.  
<br />
40-60% G/C content. 
<br />
Start and end with 1-2 G/C pairs. 
<br />
Melting temperature (Tm) of 50-60°C. 
<br />
Primer pairs should have a Tm within 5°C of each other. 
<br />
Primer pairs should not have complementary regions. 

 
<br />
Build:  
<br />
The primer sequence were arrived at by using SnapGene
<br />
[TABLE]<br />
[IMG]<br />
Learn: 
<br />
Snapgene cannot check for secondary structures and hence, we were suggested to try out bioinformatics.org.  
<br />
Test: (?ss) 
<br />
The sequence was assessed using bioinformatics.org. 
<br />
[IMG]


 
<br />
Learn: 
<br />
The primer sequence seems to be perfect for manufacturing, based on these online tools. 
            </h2>
          </section>
          <section id = "bb" ref = "bb">
            <h1>
              Biobricks
            </h1>

            <h2>
              [IMG]


<br />
              Latest “Test”: The results obtained were  improved in terms of relevance and coverage, based on feedback by team members. 
<br />
Latest “Learn”: We need more realistic data on what descriptions are good. This data can later also be used to train a model for reinforcment learning. 
            
            </h2>
          </section>
          <section id = "te" ref = "te">
            <h1>
              Toxicity Estimation
            </h1>

            <h2>
              [IMG]

              <br />
            Beyond this, a plan remains to find more comprehensive ways to check the toxicity of our composite mRNA-LNP based on even more parameters and come up with an upper limit for the safe dosage of our therapeutic into the human body. On a more ambitious scale, in silico and in vivo methods could be run simultaneously to check the accuracy of all these computational toxicity prediction tools and give inputs for further improvements based on in vivo data. 
            </h2>
          </section>
          

          

        </div>
      </div>
    </Scrollspy>

    <div @click= "synbio=true; console.log(synbio);scrollTo('trans')" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Wet Lab
        </span>
    </div>

    <div @click = "synbio=false; console.log(synbio);scrollTo('spmc')" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Dry Lab
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

