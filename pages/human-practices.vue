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
          <section id = "overv" ref = "overv">
            <h1>
              Overview
            </h1>

            <h2>
              One of the fundamental goals of MetraMorpheus was to be a people’s project. From brainstorming to implementation, we have closely involved our stakeholders. We took input from the stakeholders to design our project initially and regularly took their feedback on our proposed design. We then tried to close the loop between both through our implementation.  

Interacting with people was a source of great inspiration. We integrated new ideas and suggestions for wet and dry labs, outreach, and the business model, sometimes even changing these aspects significantly. This made it possible to make our project better and push it towards excellence. It is amazing what we can achieve by broadening our horizons and implementing the gained knowledge. 

During our project, we had multiple interactions with our stakeholders, taking and implementing new suggestions regularly. This helped us create feedback loops involving reflection, responsibility, and responsiveness between MetraMorpheus and the world. On this page, we have recorded the most important suggestions from the interactions with different stakeholders and how we took actions on the same. 
            </h2>
          </section>

          <section id = "dra" ref = "dra">
            <h1>
              Dr Rachit Aggarwal
            </h1>

            <h2>

              https://static.igem.wiki/teams/4829/wiki/awards/ihp/rachit.png 

Towards the end of our brainstorm, our seniors suggested us to contact Dr Rachit Aggarwal, from the Drug Delivery Lab at IISc, to know the feasibility of our delivery system. Dr Rachit has since been associated closely with the project, later agreeing to become our primary PI. 

Suggestion: He suggested us to use LNPs instead of exosomes for delivery. He also provided us with papers for the same. 

Action: The suggestion completely changed the course of the project. During the brainstorming, we had prepared a roadmap for an exosome-based solution, with an extensive literature review of 2 months. After his suggestion, we went through the papers and soon found out that LNPs would really be a better idea.  

He also helped us in procuring the lipids, suggesting us to buy instead of trying to synthesize them. It also paved way for our transition to mRNA later, as one of the papers he had given discussed mRNA vaccines for COVID delivered by lipids. 

Suggestion: He suggested us to provide him weekly updates to promote accountability of different groups and better planning. 

Action: We have been making weekly targets and updating him since. Not only has it boosted our productivity, but also helped different groups convey their progress to the entire team, making the work proceed synchronously. 

Suggestion: He suggested us to look into the clearance mechanism of scFvs in the body, methods to increase the circulation time of LNPs and IV vs IM as the mode of injection into the body. 

Action: After the literature review suggested by him, we found out that it is possible to conjugate a CD47-mimicking peptide to prevent the unwanted phagocytosis of our LNP before it reaches the site. His suggestions helped us find a set of peptides that mimic the active binding site of CD47 that could potentially be conjugated to our DSPE PEG Maleimide. It has been added to our experimental design and we are yet to investigate this in detail.  

Our scFv antibody, even when combined with IL8 and including the tags, has a diameter of less than 10 nm so that it can get cleared out from the body effectively through the kidneys. This, unfortunately, also implies a lower circulation time for the antibody. Hence, we are attempting antibody accumulation at the site and greater tissue penetration to make up for this.  (The box dimensions are 7.2nm X 5.4nm X 9nm) 

 

We also found out that the IV mode of injection would be a better choice for our purpose. 

Suggestion: In order to develop a PK/PD model to figure out dosages for our therapeutic, he suggested us to look into “EPR” mechanism and how it improves retention of nanoparticles during diseases like cancer. 

Action: We initiated a literature review to investigate EPR in cancers. This helped us draw parallels between cancer and endometriosis on the basis of inflammation, in order to predict efficiencies of our mRNA-LNPs. This also led us to try including FcRn in the linker of the scFv and we approached last year’s IISERP team for help. 

Suggestion: He suggested us to find solid numbers for accumulation of LNPs in inflamed tissues and use numbers to come up with a rough estimate for optimal dosage. 

Action: We collected existing data on LNP efficiencies and of other nanoparticles used in treatment of cancers and then went through the literature to find out protein release studies from mRNA-LNPs, helping us to calculate the optimal dosage. This is very important, because along with gathering data for research, we were also able to calculate the price of each dose for a successful business model. 
            </h2>
          </section>
          <section id = "ddc" ref = "ddc">
            <h1>
              Dr Dipshika Chakravorty
            </h1>

            <h2>
               

https://static.igem.wiki/teams/4829/wiki/awards/ihp/dipshika.jpg 

 

Dr Dipshikha has been a PI for many iGEM teams in India. She has been closely involved with our project and has advised us since the brainstorming phase. She was our primary contact at the DBS, often helping us contact experts and manage the admin work too. She later agreed to join as a Secondary PI for our project. 

Suggestion: The original name of our project was “Project Endometriosis”, with a minimalist logo. Dr Dipshikha suggested us to choose a name that echoes better with our concept, expressing our goal in a better way. She also suggested we remake our logo, including components of our proposed solution, such that the viewer can deduce it immediately. 

Action: We brainstormed hard, finally choosing MetraMorpheus as our project name. Here's how we came up with the name:  

- Metra means Uterus, and Morpheus is the Greek God of Sleep and Dreams: we are literally putting the disease to sleep! 

- Metramorpheus is a play on the word "Metamorphosis", representing the change we aim to bring in the lives of millions of women worldwide. 

https://static.igem.wiki/teams/4829/wiki/logo/metramorpheus.png 

 

We also changed the logo to include an mRNA coming out of the a lipid, and an antibody, representing O-IL8-15. It represented the proposed mechanism of action of our solution, and the final product that does the job. 

Suggestion: When we proposed our workflow to her, she suggested multiple changes, especially the inclusion of controls at various steps of our project. She later gave us insight into the controls for steps like IVT and protein expression, such as introducing random stop codons in the middle of the CDS, so that we expect no expression from this in the supernatant. She also suggested us to use angiogenesis, tube formation assay and repeated confocal measurements to test hypotheses as to whether CD36 expression after producing a membrane bound protein is indeed recycled and whether repeated injections of the mRNA would be required. 

Action: We introduced multiple controls in each of our protocols, the details of which can be seen on our [experiments] and [results] page. Not only did it help making our workflow more robust, but help us identify problems and rectify them promptly.   

Suggestion: Before the All India iGEM Meet, we made our presentation to her, and she gave several suggestions, such as increasing the emphasis on human practices, improving the visual appeal and including page wise references. 

 

[AIIM Logo] 

Action: Our presentation underwent a major overhaul after the meeting, where we redesigned it entirely, increasing its visual appeal, adding proper references both in text and detailed and added 4 more pages of Human Practices. It helped us deliver a successful presentation at the meet, drawing praise from the judges and teams there. 

[Old presentation ss] 

https://static.igem.wiki/teams/4829/wiki/awards/ihp/oldppt.jpg 

 

 -> [New presentation ss] 

https://static.igem.wiki/teams/4829/wiki/awards/ihp/newppt.jpg 

 

Suggestion: Upon introducing the [CD36 idea], she pointed out that macrophages might get recycled even without any extra peptides, since membrane proteins are energy demanding.  

Action: The idea seemed to have a sound theoretical backing, and hence we undertook a literature review. We found the idea has not been tried before, and hence needs to be verified and we have added it to the tests needed to be undertaken. If successful, it would bring down the required number of doses and subsequent the cost of treatment, fulfilling our fundamental goal of making it widely accessible. 

            </h2>
          </section>
          <section id = "nifr" ref = "nifr">
            <h1>
              National Institute for Research in Reproductive and Child Health
            </h1>

            <h2>
              https://static.igem.wiki/teams/4829/wiki/awards/ihp/dr-shrabani-mukherjee.jpg 

 

Dr Shrabani Mukherjee : Dr Dipshikha suggested us to contact her to understand the effects of our treatment in physiological conditions. She suggested us to include more complex pathways in the future to identify novel targets to treat the condition. Hence, we made it our foremost goal in the business model to research new targets and expand our solution. She also referred us to Dr Geetanjali Sachdeva, the Director of NIRRCH. https://www.snuchennai.edu.in/wp-content/uploads/2022/04/Dr-Shrabani-Mukherjee.jpg 

 

https://static.igem.wiki/teams/4829/wiki/awards/ihp/dr-geetanji-director-360x270.jpg 

 

Dr Geetanjali Sachdeva: She listened to our project keenly and gave useful feedback regarding its technicalities. Being an expert in the field of reproductive health, her approval to the IL8 idea boosted our confidence. However, for the CD36 idea, she asked us to check the glycosylation state when produced using mRNA. We added as a test to be conducted for the final treatment. For an immediate answer, we attended the mRNA symposium to understand about the ways that the best from industry and academia are producing proteins using mRNA. There, we got feedback from Professor Raghavan that glycosylation is usually not a problem in production of these proteins. https://nirrh.res.in/wp-content/uploads/2021/03/Dr-Geetanji_director-360x270.jpg 
            </h2>
          </section>
          <section id = "nv" ref = "nv">
            <h1>
              Nimi Vashi
            </h1>

            <h2>
               

https://static.igem.wiki/teams/4829/wiki/awards/ihp/nimi.jpeg 

 

We came in contact with Nimi through the WhatsApp group of iGEM India. She is a scientist at Epinoma, and has been an iGEM judge in the past. She advised our team at each step of the project, helping us make it successful. 

Suggestion: She suggested us to watch the jamboree presentation of TU Eindhoven team from the last year and take notes for your project. 

Action: The factors leading to the success of TU Eindhoven last year greatly influenced our project. It guided our optimisation in both planning and presentation to align with the judging criteria. Our coordinators tailored their strategies using the unique pointers from their presentation. This inspiration helped us refine our timeline, activities, and the project as a whole. 

Suggestion: She advised us to create a better business plan that can take the project to fruition beyond iGEM, even if we are not competing for the special prize, as it gives a sense of completion to the project 

Action: Our team worked hard on the entrepreneurship aspect of our project, contacting the Bangalore Bioinnovation Centre and SID at IISc to create a business model that is both profitable and sustainable in the long run. We also presented her with new avenues where the project could be expanded, like more diseases and Organ-on-a-Chip, and she gave very useful feedback on their implementation. Our business model can be credited largely to her suggestions and feedback. 

Suggestion: She suggested us to check other diseases that can be targeted using our method. She explained how products don’t always work, and a business should have multiple avenues to earn. 

Action: It led to the conceptualization of a broad mRNA based therapeutic platform, that can be used to produce targeted therapy for a wide spectrum of conditions. We are trying to treat TNBC, ovarian cancer and endometrial cancer, by developing scFv’s and dAb’s against IL6 (combination of IL6 and IL8 blockade are reported to give good results in these cancers). We have also developed anti PD1 scFv’s and dAb’s with the aim to reduce the abhorrent cost and possibly increase their efficacy. Hence, the advice not just improved our business model, but also led us to explore more avenues of research in the field. 
            </h2>
          </section>
          <section id = "bbc" ref = "bbc">
            <h1>
              Bangalore Bioinnovation Centre
            </h1>

            <h2>
              Jitendra Kumar: He commented that attempts to create an mRNA based therapeutic, even if they fail, are essential. This is because mRNA based therapeutic system is non-existent in the country, and such projects would help in fostering further research. This motivated us further to explore more conditions that can be treated using our approach.  

https://static.igem.wiki/teams/4829/wiki/awards/ihp/jitendra-bioinno.jpeg 

 

https://media.licdn.com/dms/image/C4E03AQFgAZpR65LQYA/profile-displayphoto-shrink_800_800/0/1517714151886?e=1702512000&v=beta&t=KgpHMy8avu99_A5IABknKAe--AZIRII1cSQ-jxzLfNg 

 

 

Dr. Ravikumar: He suggested us to add binding affinity test in the experimental design, to provide reliable data for the project. We implemented this and it became an integral part of our DBTL cycle. He also suggested us to explore in vitro translation for producing and testing out the scFv. This too became one of our final actions towards isolating O-IL8-15. He also told us about chitosan derived delivery  system, an interesting research that he himself has worked on. He suggested we try this in addition to our initial approach of LNPs. Indeed, this cropped up again in the mRNA meeting, where it became clear that a few others in the Indian mRNA industry are also trying this out. We have added this as an additional avenue we would explore in the future. 

Rita Sree Sarma: She explained to us the nitty-gritty of business and suggested us to pitch it as a femtech startup, a promising and novel market in India. She also suggested us to go for a B2B business model, focused on THC’s. She is a major influence on the development of our business model, as we included many of her suggestions.  

https://media.licdn.com/dms/image/D5603AQEtLPiJWYw0Uw/profile-displayphoto-shrink_400_400/0/1677129910869?e=1702512000&v=beta&t=Ela1ks8I__-P-8CIlzfHsa0jBbva0Pj2kGXSXNRPLzY 

 

https://static.igem.wiki/teams/4829/wiki/awards/ihp/rita-shree-bioinno.jpeg 

 
            </h2>
          </section>
          <section id = "s" ref = "s">
            <h1>
              Samarth
            </h1>

            <h2>
               

https://static.igem.wiki/teams/4829/wiki/awards/ihp/samarth.jpeg 

 

Samarth is a research scholar at IISc. He has been an integral advisor to the team since the beginning, forming our opinions on the various parts of the project. 

Suggestions: He pointed out the gaping hole in our exosome idea, which was the unavailability of the targeting molecule. Though we had proceeded somewhat with our literature review, he stopped us from going too far into the implementation of the plan.  

Actions: This is where we found about aptides, while trying to close the loophole pointed by him. Aptides became an integral part of our project, the backbone of targeting specificity we wanted to introduce.  

Suggestions: He also looked at the paper from where our exosome idea had originated and recommended that we try interleukin 10 blockade, with a full-size IL10 Ab.  

Action: We started exploring resources on the various cytokines that can be targeted. It was from this suggestion that the usage of the scFv against IL8 came to us, thus determining the core of the project. 

Suggestions: He suggested that while presenting our idea to anyone, more visualisations of processes, and less text is desirable. 

Action: Since then, we have tried to include more visualisations in our presentation, using posters, biorenders, etc. and minimise the text part. Not only did it help in explaining the project better to our stakeholders, but also helped a lot in our education efforts while presenting to young students. 
            </h2>
          </section>
          <section id = "dsrgs" ref = "dsrgs">
            <h1>
              Dr Subba Rao Gangi Shetty
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "dgr" ref = "dgr">
            <h1>
              Dr Graca Raposo
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "dsj" ref = "dsj">
            <h1>
              Dr Siddarth Jhunjhunwala
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "dmka" ref = "dmka">
            <h1>
              Dr MK Ammembal
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "val" ref = "val">
            <h1>
              Vinod and Lavanya
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "dcac" ref = "dcac">
            <h1>
              Dr Christian Andrew Choe
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "as" ref = "as">
            <h1>
              Amar Singh
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "nb" ref = "nb">
            <h1>
              Nisha Barge
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "rro" ref = "rro">
            <h1>
              RR Ojha from QUAXON
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "nab" ref = "nab">
            <h1>
              Nandika Bhattacharya
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "vaask" ref = "vaask">
            <h1>
              Vinayak Annapure and Shreya Kulkarni
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "drv" ref = "drv">
            <h1>
              Dr Raghavan Varadarajan
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "das" ref = "das">
            <h1>
              Dr Ajay Singh
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "drb" ref = "drb">
            <h1>
              Dr Ramray Bhat
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "dpd" ref = "dpd">
            <h1>
              Dr Prajakta Dandekar
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "jk" ref = "jk">
            <h1>
              J Konnowich
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "es" ref = "es">
            <h1>
              Education Secretaries
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "ddip" ref = "ddip">
            <h1>
              DD Interview Panel
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "dlb" ref = "dlb">
            <h1>
              Dr Lavanya Bhagavatula
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "dsr" ref = "dsr">
            <h1>
              Dr Shilpa Rao
            </h1>

            <h2>
              
            </h2>
          </section>
          <section id = "dam" ref = "dam">
            <h1>
              Dr Abhishek Mangeshikar
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
      //this.$refs.abstractButton.addEventListener("click", ()=>{this.scrollTo("abstract")})

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
}</style>

