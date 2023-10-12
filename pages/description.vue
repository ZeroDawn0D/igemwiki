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
                Endometriosis is a disease that affects at least 1 in 10 women during their youth and middle age, which is 247 million women worldwide, and 42 million in India alone.[1][2]  

To understand this condition, we must first understand the tissue involved, endometrium. This is the innermost lining of the uterus, which responds to hormonal changes during a woman’s menstrual cycle. 

In endometriosis, tissue resembling endometrium is noted outside the uterine cavity, invading the uterine muscles, fallopian tubes, ovaries, rectum, ureters, and connective tissues of the pelvis. Rarely, endometriosis can also affect distant organs, such as the brain and lungs, causing involuntary jerking, convulsions and coughing of blood every time the woman enters the menstrual phase of the reproductive cycle.

The disease is often progressive and highly debilitating. In more severe forms it causes extreme menstrual pain, pelvic pain beyond menstrual cycles, heavy menstrual bleeding, and acute pain during sexual intercourse. It can also cause damage to vital pelvic organs, with associated bleeding from the rectum and pain while opening bowels, or damage to kidneys due to invasion into the ureters. 

Endometriosis also leads to subfertility due to the extensive distortion of internal anatomy it causes. Assisted reproduction technologies are less successful in women who have endometriosis than in those who are sub-fertile due to other causes. 

Unfortunately, research on this condition is largely unexplored and heavily underfunded compared to the magnitude of the problem. There is a general lack of awareness about this condition amongst the scientific community and the public, particularly policymakers and political leaders. Women with this condition are often dismissed as malingerers and attention seekers and suffer silently. The lag period from onset of symptoms to diagnosis is, on average, 4-5 years [3][4], implying that patients with endometriosis suffer for long before they receive treatment; and the treatment itself is quite inadequate.  


[GRAPH HERE]
            </h2>
            
            </section>

            <section id = "curt" ref = "curt">
            <h1>
              Current treatments
            </h1>
            <h2>
                 [Poster showing shortcomings of current treatments] 

Even if diagnosed early, endometriosis treatment is limited to excision surgery and hormonal pills. 

The success rate of surgery is low and inconsistent, and surgeon’s lack of experience can damage vital organs in the peritoneal cavity. Further, the cost of surgery in India is between $3,000 – $3,700[4] in private healthcare, which is a huge sum for most patients. This price assumes that the surgery is without complications, which isn’t always true. Surgery can have a recurrence rate of 50%, requiring multiple surgeries.[6]. Endometriosis is responsible for 25-50% of cases of subfertility[7], and surgery could contribute by diminishing the ovarian reserve and damaging the fallopian tubes.   

Hormonal therapy often renders the patient unable to conceive, and prolonged use of hormonal pills has been linked to an increased risk of breast cancer. [8] Further, the effectiveness of such drugs is often not confirmed.  

Hence, the need of the hour is to develop a treatment that doesn’t alter the hormonal environment of the patient and is affordable and accessible to the masses. 
            </h2>
            
            </section>
            <section id = "solulu" ref = "solulu">
            <h1>
              Our Solution
            </h1>
            <h2>
                 To meet the shortcomings of the current therapies, we designed MetraMorpheus. This mRNA-based therapy blocks the chemokine interleukin-8 (CXCL8), which has been proven to promote the progression of endometriosis.[9] It is blocked by the antibody O-1L8-15, produced inside the defective cells themselves upon receiving mRNA.  

The mRNA is delivered by encapsulating inside lipid nanoparticles (LNPs) and injected through intraperitoneal injections. Upon reaching the targeted tissue, the following pathway is activated: 

[Biorender IL-8 pathway / Adjoining text]  

However, IL-8 is an essential immunoregulator for the body. To ensure specificity to the disease process we decorate an LNP with aptides - a peptide of 26 amino acids. It specifically targets the Extracellular Domain B of fibronectin[10], which is overexpressed in endometriotic tissue [11].  

[Biorender Animation, mRNAs encapsulating in LNPs and decorated by Aptides?] 
            </h2>
            
            </section>

            <section id = "inspi" ref = "inspi">
            <h1>
              Inspiration
            </h1>
            <h2>
                 To overcome the problems of existing methods, we looked at endometriosis from a fresh point of view: it is not hormone dependent only. Rather, it is also influenced heavily by immune dysregulation.  

While many theories remain to explain how the disease is established, we realised from our literature review that there is ectopic tissue in the peritoneum, and that it isn’t cleared up due to dysfunction of the immune system, leading to the chronic inflammation that is characteristic to endometriosis.   

We started collating literature to identify the targets of our treatment. The downregulation of chemokine IL-8 had the most favourable evidence in suppressing Endometriosis. We brainstormed various methods, including exosomes with miRNA, targeted fusion proteins, taking out cells and reinjecting them after genetic modification, etc. But the problem seemed to be that all of them were too expensive and had been tried without remarkable success.   

It was then that our primary PI, Dr Rachit Aggarwal, suggested us to use mRNA encapsulated in LNPs. Our Project, MetraMorpheus stems from the question “What if we make the defective tissue treat itself?” This can be an effective solution, eliminating the need for expensive therapies. 
            </h2>
            
            </section>
            <section id = "proj" ref = "proj">
            <h1>
              Our Project
            </h1>
            <h2>
                 During the iGEM project, we designed, built, and tested the proof of concept of MetraMorpheus. Together with stakeholders we validated the problem, designed the therapy, and validated this solution to make the therapy desirable, feasible, safe, and responsible for the world (see Human Practices). The proof of concept is developed and tested in vitro in the lab (see Experiments and Results). Our aim was to show that the designed plasmid can produce the mRNA required to express O-IL8-15 successfully. Additionally, the produced O-IL8-15 binds to IL8 and reduce the markers of inflammation. We have also characterised the LNPs with encapsulated mRNAs. Furthermore, together with stakeholders in the industry, we created a business plan for MetraMorpheus that allows translation of the project idea directly into a new venture (see Entrepreneurship). 

Fundamental Goals of the Project:  

Make Endometriosis treatment affordable: With the expected cost of our treatment being $8 per dose, MetraMorpheus makes the treatment accessible to millions of people worldwide. 

Taking the project to the people: Spreading awareness about the condition with widespread outreach and public engagement and imroving our solution based on the feedback recieved 

Scaling up: To make the idea a reality, we have prepared a comprehensive business model, complete with a timeline for implementation. 
            </h2>
            
            </section>

            <section id = "comp" ref = "comp">
            <h1>
              Components
            </h1>
            <section id = "comp1" ref = " comp1">
              <h3>
                mRNA
              </h3>
              <h2>
                mRNA, or messenger RNA, is a crucial molecule involved in the process of gene expression. It carries genetic information from the DNA in the cell's nucleus to the ribosomes in the cytoplasm, where it serves as a template for protein synthesis. mRNA is transcribed from DNA through a process called transcription, where an enzyme called RNA polymerase creates a complementary RNA strand based on the DNA template.   

mRNA molecules are single-stranded and composed of a linear sequence of nucleotides. Each nucleotide in mRNA consists of one of four bases: adenine (A), cytosine (C), guanine (G), or uracil (U). The order of these bases in the mRNA sequence determines the order of amino acids during protein synthesis.   

Once synthesised, mRNA undergoes several modifications to ensure its stability and functionality. These modifications include adding a protective cap structure at the 5' end and a poly(A) tail at the 3' end. These modifications help in mRNA stability, nuclear export, and efficient translation. To make the mRNA we produce by IVT stable, improve its efficiency, and reduce its immunogenicity, we use modified nucleotides like N1-methyl pseudouridine and cap the mRNA with cap analogues. [12]  

              </h2>
            </section>
            <section id = "comp1" ref = " comp1">
              <h3>
                LNPs
              </h3>
              <h2>
                Lipid Nanoparticles (LNPs) are a versatile and promising delivery system in the field of medicine and biotechnology. Composed of lipids arranged in a spherical structure, LNPs can encapsulate and protect therapeutic molecules such as drugs or nucleic acids. This protective coating enhances the stability and bioavailability of the cargo molecules, allowing them to be efficiently delivered to target cells or tissues. LNPs have shown great potential in various applications, including gene therapy, vaccination, and targeted drug delivery, offering new avenues for treating diseases and advancing medical research.

                [IMAGE]
              </h2>
            </section>
            <section id = "comp1" ref = " comp1">
              <h3>
                Aptides
              </h3>
              <h2>
Aptides are an exciting new class of high affinity peptides, introduced by Kim et al. in 2012[10], and are extremely specific, showing binding affinities with the target molecules in the nM range. They have a great advantage over other targeting molecules currently in conventional use (like aptamers and antibodies). Antibodies have been in the limelight of the scientific community for their specific binding and accurate targeting. However, these wonder molecules are dogged by complex intellectual property issues, and further have issues in terms of penetrability. These issues are overcome by aptides, peptides having a maximum length of about 30 Amino Acids, meaning that they’re extremely small, which promotes excellent tissue penetration ability, an issue especially associated with larger molecules like antibodies.  

They can be generated through combinatorial methods and exhibit high affinity and selectivity towards their intended targets. Aptides have gained attention in various biomedical applications, including targeted drug delivery, diagnostic imaging, and therapeutic interventions. Their unique properties make them a promising tool in developing precision medicine and personalised therapeutics.[10][13]   The small size of the aptide makes it have excellent application in targeted drug delivery, especially as this means that it can be conjugated easily to lipids of LNPs. It also reduces the chance that the immune system of the patient will recognise and reject it, though in LNP formulations, due to many aptide molecules, the pattern recognition properties of the immune system may react mildly to them. 

The conjugation of aptides to lipids to form specific liposomes and LNPs has yielded excellent results in the accumulation of the LNPs/ liposomes in the target tissue.[14] The aptide we’re using binds to the EDB of fibronectin, proven to be overexpressed in endometriotic tissue. This aptide is a mere 26 Amino Acids long and has about the same affinity to it as many full-size antibodies.  

[IMAGE]

 https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb   


              </h2>
            </section>
            <section id = "comp1" ref = " comp1">
              <h3>
                O-IL8-15
              </h3>
              <h2>
This antibody (designed by SGC Karolinska[15]) is one in a very special format called ‘scFv’ or single-chain variable fragment. Single-chain variable fragment (scFv) antibodies are engineered antibody fragments that retain the antigen-binding capability of full-length antibodies but in a smaller, single-chain format. scFv antibodies are composed of the variable regions of an antibody’s heavy and light chains, connected by a flexible peptide linker. This design allows them to be produced in microbial systems like bacteria or yeast, enabling easier and cost-effective production compared to traditional antibody formats. scFv antibodies have many applications, including diagnostics, therapeutics, and research tools. Their small size, high specificity, and modifiability make them valuable in targeting specific molecules and studying protein interactions in various biological systems

[IMAGE]

In fact, the small size of this antibody made it optimal for us to use in mRNA-based therapeutics, as larger mRNA sequences are harder to encapsulate in an LNP.

[IMAGE]
              </h2>
            </section>

            <section id = "fut" ref = "fut">
            <h1>
              Future Outlook
            </h1>
            <h2>
                 The proof of concept of our O-IL8-15 therapeutic serves as a foundation for a new mRNA based treatment platform and further research in synthetic biology. Considering our promising results (see Results), future research will focus on finding new targets, optimising the mRNA design and stability of scFv proteins, and further research into nanobodies. (see Experimental Outlook on the Results page). The therapeutic should now be tested in vivo, through animal and clinical trials, to confirm the effects there. Next to optimizing the proof of concept, the technology should be patented to protect the IP for future business opportunities (see Entrepreneurship). 

The proposed implementation of MetraMorpheus is shown here: 

[Biorender showing IP injection, LNPs going and treating and Explainer Text] 

MetraMorpheus is currently designed for Endometriosis, however, the modularity of the mRNA based platform offers great potential for this treatment to be applicable to multiple diseases at a very low cost.  
            </h2>
            
            </section>

            <section @click = "referenceToggle" id = "ref" ref = "ref">
            <h1 class = "inline-block cursor-pointer">
                <div class = "mt-4 wireframe2">
                <span class = "text-4xl courierprime cursor-pointer">
              References
              </span>
              </div>
            </h1>

            
            
            </section>
            <h2 class = "refContent hidden text-sm">
              1. Gajbhiye RK, Montgomery G, Pai MV, et al Protocol for a case–control study investigating the clinical phenotypes and genetic regulation of endometriosis in Indian women: the ECGRI study.BMJ Open 2021;11:e050844. DOI: https://doi.org/10.1136/bmjopen-2021-050844
<br>
2. https://www.who.int/news-room/fact-sheets/detail/endometriosis
<br>
3. https://www.theguardian.com/global-development/2023/may/01/indias-taboos-around-womens-pain-leave-endometriosis-sufferers-in-agony-acc 
<br>
4. Santos TM, Pereira AM, Lopes RG, Depes Dde B. Lag time between onset of symptoms and diagnosis of endometriosis. Einstein (Sao Paulo). 2012 Jan-Mar;10(1):39-43. doi: 10.1590/s1679-45082012000100009. PMID: 23045824. 
<br>
5. https://www.endographics.org/infographics/endometriosis-funding-by-the-numbers 
<br>
6. Sofiane Bendifallah, et. al; Recurrence after Surgery for Colorectal Endometriosis: A Systematic Review and Meta-analysis, Journal of Minimally Invasive Gynecology, Volume 27, Issue 2, 2020, Pages 441-451.e2, ISSN 1553-4650, https://doi.org/10.1016/j.jmig.2019.09.791 
<br>
7. . Bulletti, C., Coccia, M.E., Battistoni, S. et al. Endometriosis and infertility. J Assist Reprod Genet 27, 441–447 (2010). https://doi.org/10.1007/s10815-010-9436-1 
<br>
8. Ammembal, A.M.K., Udupa, K. Combined Oral Contraceptives and Breast Cancer: an Unsolved Conundrum. Indian J Gynecol Oncolog 19, 67 (2021). https://doi.org/10.1007/s40944-021-00561-5 
<br>
9. Ayako Nishimoto-Kakiuchi et al., A long-acting anti–IL-8 antibody improves inflammation and fibrosis in endometriosis. Sci.Transl.Med.15,eabq5858(2023).DOI:10.1126/scitranslmed.abq5858 
<br>
10. Saw, P. E.; Xu, X.; Kim, S.; Jon, S. Biomedical Applications of a Novel Class of High-Affinity Peptides. Acc. Chem. Res. 2021, 54, 3576– 3592, DOI: 10.1021/acs.accounts.1c00239 
<br>
11. Simón-Gracia, L.; Kiisholts, K.; Petrikaitė, V.; Tobi, A.; Saare, M.; Lingasamy, P.; Peters, M.; Salumets, A.; Teesalu, T. Homing Peptide-Based Targeting of Tenascin-C and Fibronectin in Endometriosis. Nanomaterials 2021, 11, 3257. https://doi.org/10.3390/nano11123257 
<br>
12. Jill Whitley, et. al, Development of mRNA manufacturing for vaccines and therapeutics: mRNA platform requirements and development of a scalable production process to support early phase clinical trials, Translational Research, Volume 242, 2022, Pages 38-55, ISSN 1931-5244, https://doi.org/10.1016/j.trsl.2021.11.009 
<br>
13. S. Kim , D. Kim , H. H. Jung , I. H. Lee , J. I. Kim , J. Y. Suh and S. Jon , Bio-inspired design and potential biomedical applications of a novel class of high-affinity peptides, Angew. Chem., Int. Ed., 2012, 51 , 1890 —1894, https://doi.org/10.1002/anie.201107894 
<br>
14. Guangzhi Gu, Quanyin Hu, Xingye Feng, Xiaoling Gao, Jiang Menglin, Ting Kang, Di Jiang, Qingxiang Song, Hongzhuan Chen, Jun Chen,PEG-PLA nanoparticles modified with APTEDB peptide for enhanced anti-angiogenic and anti-glioma therapy,Biomaterials,Volume, Issue 28,2014,Pages 8215-8226,ISSN 0142-9612, https://doi.org/10.1016/j.biomaterials.2014.06.022  
<br>
15. Anna Säll, et. al, Generation and analyses of human synthetic antibody libraries and their application for protein microarrays, Protein Engineering, Design and Selection, Volume 29, Issue 10, October 2016, Pages 427–437, https://doi.org/10.1093/protein/gzw042 
            </h2>

            </section>


           



        </div>
      </div>
    </Scrollspy>



    <iframe src = "https://static.igem.wiki/teams/4829/wiki/desc.pdf">
    </iframe>
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