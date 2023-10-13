<template>
  <div>
    <div class = "">
      <div class = "courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32">
        EDUCATION
      </div>
    </div>
<div class = "text-lg w-3/4 text-justify relative left-2/4 -translate-x-2/4" >
<mark class =  "courierprimebold text-lg">“Nothing in science has any value to society if it is not communicated."  </mark>
<br>
-<span class = "courierprimebold">Anne Roe, American clinical psychologist and researcher </span>
<br><br>
MetraMorpheus brings together synthetic biology and endometriosis. As we started our interactions with people outside the scientific circle, we realised that there was widespread ignorance to both these aspects. In order to gauge the situation better, we conducted multiple surveys, following the guidelines laid down by iGEM.  

 <br><br>

The results showed that only 37% and 6.3% of people have heard about synthetic biology and endometriosis respectively.  Among the 37% of respondents knowing about synthetic biology, most are in the age group of 19-23 i.e., college students. Among the school students, this falls to a mere 16.5%.  
<br><br>
<figure class="grid grid-cols-2 relative relative left-2/4 -translate-x-2/4">
  <img class="h-auto w-1/2 rounded-lg" src="https://static.igem.wiki/teams/4829/wiki/awards/education/form1b.png" alt="image description">
  <img class="h-auto w-1/2 rounded-lg" src="https://static.igem.wiki/teams/4829/wiki/awards/education/form2b.png" alt="image description">
</figure>


<br><br>
Our core belief is that everyone, regardless of age or level of education, should have the opportunity to get informed about global challenges and the development of new technologies applied to solve them. Thus, we as the iGEM IISc team felt the responsibility to take meaningful action. We wanted to leave a lasting impact on the community by trying to bridge the gap between the ivory towers of research and the general public.  
<br><br>
Hence, we valued education very highly in our project, with efforts directed towards both the themes, while trying to ensure mutual learning afterward. The biggest challenge here was to reach and include everyone in this discussion. Having a variety of educational tools appeared essential to us, as well as adopting a language accessible to a wide audience. 
   
</div>
    

    <div @click= "synbio=true; console.log(synbio); " class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Synthetic Biology
        </span>
    </div>

    <div @click = "synbio=false; console.log(synbio); " class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Endometriosis Awareness
        </span>
    </div>
    
    <Scrollspy class = "ss-synbio" :currentPage="currentPage" initialSection="bc">
      <div class = "grid grid-cols-12 gap-4 p-8">
        <div class = "col-span-3 max-md:hidden">
          <nav class = "overflow-auto h-screen sticky top-16 border-r-8 py-8" >
            <ul>
              <li>
                <div class = "class-bc cursor-pointer text-lg" ref = "bcButton">Biotechnology in Curricula</div>
              </li>

              <li>
                <div class = "class-nbd cursor-pointer text-lg" ref = "nbdButton">National Biotechnology Day</div>
              </li>

              <li>
                <div class = "class-od cursor-pointer text-lg" ref = "odButton">Open Day</div>
              </li>

              <li>
                <div class = "class-carv cursor-pointer text-lg" ref = "carvButton">Carvaan</div>
              </li>
              <li>
                <div class = "class-sv cursor-pointer text-lg" ref = "svButton">School Visits</div>
              </li>
              <li>
                <div class = "class-sc cursor-pointer text-lg" ref = "scButton">Science Camp</div>
              </li>
              <li>
                <div class = "class-wsb cursor-pointer text-lg" ref = "wsbButton">Workshop on Synthetic Biology</div>
              </li>
              <li>
                <div class = "class-ij cursor-pointer text-lg" ref = "ijButton">Interaction with Juniors</div>
              </li>
              <li>
                <div class = "class-dle cursor-pointer text-lg" ref = "dleButton">Databased Launch Event</div>
              </li>
              <li>
                <div class = "class-rdl cursor-pointer text-lg" ref = "rdlButton">Rising Dry Lab</div>
              </li>
              <li>
                <div class = "class-hrp cursor-pointer text-lg" ref = "hrpButton">How to read papers</div>
              </li>
              <li>
                <div class = "class-quiz cursor-pointer text-lg" ref = "quizButton">Synbio Quiz</div>
              </li>
              <li>
                <div class = "class-verse cursor-pointer text-lg" ref = "verseButton">Into the iGEMverse</div>
              </li>
              <li>
                <div class = "class-symp cursor-pointer text-lg" ref = "sympButton">iGEM Symposium</div>
              </li>
              <li>
                <div class = "class-wiki cursor-pointer text-lg" ref = "wikiButton">New Wikipedia Page on Aptides</div>
              </li>
              <li>
                <div class = "class-radio cursor-pointer text-lg" ref = "radioButton">Yuvavani on All India Radio</div>
              </li>
              <li>
                <div class = "class-broch cursor-pointer text-lg" ref = "brochButton">Brochures and Articles</div>
              </li>
              <li>
                <div class = "class-lang cursor-pointer text-lg" ref = "langButton">Language Project</div>
              </li>
              <li>
                <div class = "class-game cursor-pointer text-lg" ref = "gameButton">Synbio Games</div>
              </li>
              <li>
                <div class = "class-acti cursor-pointer text-lg" ref = "actiButton">Activity Sheets</div>
              </li>
              <li>
                <div class = "class-infor cursor-pointer text-lg" ref = "inforButton">Informative Videos</div>
              </li>


              <li>
                <div  class = "class-prot cursor-pointer text-lg" ref = "protButton">Video Protocols</div>
              </li>
            </ul>
          </nav>  
        </div>

        <div class = "col-span-9 max-md:col-span-12 text-justify text-xl">
          <h2>
            India is a developing country, and the general public is often ignorant about the developments of modern science. However, recent successes in pharmaceutical and space research in the country has increased the enthusiasm of people towards science. This was also reflected in our survey where we asked the people about the importance of scientific research in society. Respondents gave an average importance of 3.62 in a scale of 5. 


            <figure class="grid grid-cols-1 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/form1d.png">
</figure>

However, knowledge about synthetic biology was less, as mentioned above. We also saw lower values at the school level, probably because of the preference towards engineering and medicine. Hence, our efforts were directed towards the 2 goals: Inform the public about synthetic biology and raise awareness among the young students about science.  
          </h2>
          <section id = "bc">
            <h1>
              Biotechnology in Curricula
            </h1>
            <h2>
              By introducing students to biotechnology at an early stage, we can equip them with valuable skills and knowledge, fostering scientific literacy and opening doors to numerous future career opportunities. India has started implementing its National Education Policy 2023, which emphasizes the need for research and application-based education. We went through the curriculum of various education boards in the country and realised that the applications of biotechnology are being taught already, without explaining the underlying principles. 

 
<br /><br />
Hence we prepared a detailed recommendation, and met the secretaries of education in Jharkhand, Shri K Ravi Kumar, and Karnataka, Sri Ritesh Kumar Singh, submitting it. We are now assisting Jharkhand Government’s Council of Educational Research & Training to form their curriculum for the next session, including biotechnology in multiple chapters. Our proposal was also taken by iGEM IITD team to Mrs. Ranjana Arora, Committee member at the National Council of Educational Research & Training, where she assured us of action in the coming months.  

 <figure class="grid grid-cols-2 relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4 " src="https://static.igem.wiki/teams/4829/wiki/awards/education/education-secretaries/govt2.jpg " alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/education-secretaries/govt1.jpg " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Team members Sheersh Sen and Shloak Vatsal meeting with the education secretaries of Karnataka and Jharkhand.</figcaption>
</figure> 


    <div @click = "() => {pdf('proposal-dropdown')}" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Read Proposal
        </span>
    </div>
    <iframe id = "proposal-dropdown" class = "hidden w-3/4 aspect-square relative left-2/4 -translate-x-2/4 "  src = "https://static.igem.wiki/teams/4829/wiki/awards/education/education-secretaries/biotech-in-education-proposal.pdf" >
    </iframe>

            </h2>
          </section>

          <section id = "nbd">
            <h1>
              National Biotechnology Day
            </h1>
            <h2>
              We realised that by recognising the contributions and impact of biotechnology through a dedicated day of celebration, we can foster public awareness and appreciation for this transformative field. It gives us the opportunity to educate and inspire future generations of scientists, researchers, and innovators. And demonstrate our nation’s commitment to scientific progress. Such a day of recognition will foster a culture of scientific curiosity, promote investments in research and development, and strengthen collaborations between academia, industry, and government bodies.  

 <br /> <br />

To gather support for the idea, we launched a campaign on [Change org], gathering more than 1000 signatures. We mailed 1000+ biology and biotechnology professors from 250+ institutes across the country and met Dr Ajit Dua, CEO of Punjab Biotechnology Incubator and Director of Punjab State Biotech Corporation, and the Directors of Bangalore Bioinnovation Centre, submitting our detailed recommendations. iGEM IITD team took our proposal to the Department of Biotechnology, India where we received positive feedback from Dr. Amit P Parikh, Scientific Officer.  

 <br /> <br />

We also released simplified versions of government documents on biotechnology, making it more accessible and bringing it to the forefront of people’s consciousness. We hope that the movement we started as part of our project bears fruits for science in the country and across the world.  

 <figure class=" grid grid-cols-2 relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4 " src="https://static.igem.wiki/teams/4829/wiki/awards/education/education-secretaries/change-ss.jpeg " alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/education-secretaries/pbti-ceo.jpg" alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our poster for the Biotechnology Day Petition; Our team member Aditya meeting with the CEO of PBTI and director of BBC.</figcaption>
</figure> 


    <div @click = "() => {pdf('proposal2-dropdown')}" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Read Proposal
        </span>
    </div>
    <iframe id = "proposal2-dropdown" class = "hidden w-3/4 aspect-square relative left-2/4 -translate-x-2/4 "  src = "https://static.igem.wiki/teams/4829/wiki/awards/education/education-secretaries/biotech-day-proposal.pdf" >
    </iframe>

            </h2>
          </section>
          <section id = "od">
            <h1>
              Open Day
            </h1>
            <h2>
              Our first outreach event was the IISc Open Day 2023, organised on the 4th of March. We set up a booth, in collaboration with Naturalists, and talked about various things, including Synthetic Biology, iGEM, and The Central Dogma. It was our first experience with event management and a great learning in engaging both children and parents.  

 <figure class=" grid grid-cols-2  relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4 " src="https://static.igem.wiki/teams/4829/wiki/awards/education/openday/openday1.jpg" alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/openday/openday2.jpg" alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Some shots from the iGEM stall at the IISc Open Day.</figcaption>
</figure> 

            </h2>
          </section>

          <section id = "carv">
            <h1>
              Carvaan
            </h1>
            <h2>
              We used the experience gained at the Open Day to launch a grand pan-India collaboration. Associating with Pravega, our college fest, we organized Carvaan in 8 Indian cities , where we invited multiple teams from across the country to present their project and synbio concepts to a large audience. Amidst the electrifying atmosphere, iGEM stalls dedicated to the field of synthetic biology stood as a beacon of scientific innovation and discovery. 

<figure class=" grid grid-cols-2 relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/carvaan/carvaanbhub3.jpg " alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/carvaan/carvaanblr1.jpg " alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/carvaan/carvaanblr2.jpg " alt="image description">

  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/carvaan/carvaanblr6.jpg " alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/carvaan/carvaanblr8.jpg " alt="image description">

  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">iGEM IISc team at Carvaan.</figcaption>
</figure> 

            </h2>
          </section>

          <section id = "sv">
            <h1>
              School Visits
            </h1>
            <h2>
              Over the summer, when many of our team members returned home, they conducted visits to schools in their hometowns. We made presentations in 16 schools in 9 states across the country. The presentation  “Life in Research” for junior classes, and “Introduction to Synthetic Biology” for senior classes.  
<br /> <br />
During the presentations, we realised that we also needed to provide them practical experience to quench the curiosity of children. 

 
 <figure class=" grid grid-cols-2 relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/school-visits/20230802-115800.jpg " alt="image description">
  

  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/school-visits/img-20230624-wa0053.jpg  " alt="image description">

  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/school-visits/img-20230626-170637738.jpg" alt="image description">
  
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/school-visits/img-20230630-wa0014.jpg " alt="image description">

  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/school-visits/whatsapp-image-2023-07-15-at-18-44-23.jpeg " alt="image description">

  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure> 

<div @click = "() => {pdf('lir-dropdown')}" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Life in Research
        </span>
    </div>
    <iframe id = "lir-dropdown" class = "hidden w-3/4 aspect-square relative left-2/4 -translate-x-2/4 "  src = "https://static.igem.wiki/teams/4829/wiki/awards/education/school-visits/life-in-research.pdf" >
    </iframe>


    <div @click = "() => {pdf('g2syn-dropdown')}" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Guide to Synbio
        </span>
    </div>
    <iframe id = "g2syn-dropdown" class = "hidden w-3/4 aspect-square relative left-2/4 -translate-x-2/4 "  src = "https://static.igem.wiki/teams/4829/wiki/awards/education/summer-camp/beginners-guide-to-synbio-1.pdf " >
    </iframe>
            </h2>
          </section>

          <section id = "sc">
            <h1>
              Science Camp
            </h1>
            <h2>
              With the aim of including practical experience, we organised a science camp for school students of classes 6-12 from Bangalore on 15th July 2023. We hosted over a 100 students, parents and teachers from 25 schools across the city. The event delved into the wonders of synthetic biology, inspiring a passion for careers in science and fostering a deeper understanding of the scientific method. 
<br /><br />
The camp featured the following talks:  
<br />
1. "An Introduction to Endometriosis": Aditya Ammembal explained the excruciating condition of endometriosis, its available treatments and our approach to tackle it using aptides and LNPs. 
<br />
2. "Understanding Life through Computational Thinking": Mrigank Pawagi and Yukta Subramanian gave an introduction to the problem-solving strategy in biology, including Decomposition, Pattern Recognition, Abstraction, and Algorithm Design. 
<br />
3. "A Beginners Guide to Synthetic Biology": Shloak Vatsal talked about synthetic biology's basic principles and processes like plasmids, biobricks and restriction enzymes. 
<br />
4. "Branches of Biology": Mayank Pandhari talked about the various fields of biology and their recent developments, including biotechnology, microbiology, ecology, and interdisciplinary biology. 
<br />
5. "Life in Research": Vyaas Ramasubramanian introduced the students to the world of scientific research, the scientific method, the future of science, and why we chose IISc. 
<br />
6. "Science and Design": Sheersh Sen explained the meaning of design in science through experimentation, innovation, ethics and communication. He also had a fun conversation about black holes and time travel. 
<br /><br />
The lab exhibits included exhibits and experiments suited for various age groups: Agar Art, Gel Electrophoresis, Streaking and Spreading, Bacteria treated with Gram Test and Nigrosine, Bradford Assay, and Autoclave, to name a few. During the visit, we showed them various machines and protocols used in the lab, their functions and the safety aspects related to them.  
<br /><br />
Organising the event proved to be a major lesson for us, and our experience from the Open Day and Carvaan helped to make it a great success, with positive feedback from all attendees. However we felt that we should invite undergraduate students too, as they can get more involved in the lab, and actually undertake these experiments in a more formal setting. 

<figure class=" grid grid-cols-2 relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/summer-camp/instapost-01-summercamp.png" alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/summer-camp/instapost-03-summercamp.png " alt="image description">

  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/summer-camp/instapost-04-summercamp.png " alt="image description">

  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure> 

<div @click = "() => {pdf('metra-dropdown')}" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          About MetraMorpheus
        </span>
    </div>
    <iframe id = "metra-dropdown" class = "hidden w-3/4 aspect-square relative left-2/4 -translate-x-2/4 "  src = "https://static.igem.wiki/teams/4829/wiki/awards/education/summer-camp/metramorpheus.pdf " >
    </iframe>


    <div @click = "() => {pdf('summer-dropdown')}" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Summer Camp
        </span>
    </div>
    <iframe id = "summer-dropdown" class = "hidden w-3/4 aspect-square relative left-2/4 -translate-x-2/4 "  src = "https://static.igem.wiki/teams/4829/wiki/awards/education/summer-camp/copy-of-your-paragraph-text.pdf " >
    </iframe>

            </h2>
          </section>

          <section id = "wsb">
            <h1>
              Workshop on Synthetic Biology
            </h1>
            <h2>
              We then invited undergraduate students from Bengaluru to a workshop on synthetic biology on 13th August. We trained them in basic lab techniques of streaking and spreading, and synbio lab techniques of bacterial transformation and mammalian cell transfection. We also demonstrated various protocols used by us including protein purification and IVT.  

<figure class=" grid grid-cols-2 relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/synbio-workshop/synbio-workshop.jpg" alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/synbio-workshop/workshop.png " alt="image description">

  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure> 

            </h2>
          </section>

          <section id = "ij">
            <h1>
              Interaction with Juniors
            </h1>
            <h2>
              With the current cycle coming to an end, we wanted to prepare the next team to start their project in time. Hence, we organised a fresher’s orientation, where our team talked about iGEM, IISc's participation in the competition, the proposed timetable and the activities we have planned for them. It was enthralling to see over 100 future iGEMers turning up for the event!

              <br><br>

It has helped them start brainstorming 2 months ahead of us, and we hope would translate into greater success. We also decided to include them in certain tasks to make them familiar with the various aspects of a project. 


<figure class=" grid grid-cols-2 relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/junior-interaction/orn1.jpg" alt="image description">

  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/junior-interaction/orn3.png " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure> 
            </h2>
          </section>

          <section id = "dle">
            <h1>
              Databased Launch Event
            </h1>
            <h2>
              Databased is the UG CS club of IISc, run by the students of the B.Tech. program. During their launch, to attract B.Tech. students into iGEM, we presented the dry lab aspect of our project in great detail. It was aimed to include people with a new expertise into the iGEM ecosystem at IISc. The event was a big success with multiple freshers applying for our “Rising Dry Lab” program.  

<figure class=" relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/databased-launch/databased-launch.jpeg " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure> 

<div @click = "() => {pdf('dbd-dropdown')}" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Databased Presentation
        </span>
    </div>
    <iframe id = "dbd-dropdown" class = "hidden w-3/4 aspect-square relative left-2/4 -translate-x-2/4 "  src = "https://static.igem.wiki/teams/4829/wiki/awards/education/databased-launch/databased-presentation.pdf" >
    </iframe>
            </h2>
          </section>

          <section id = "rdl">
            <h1>
              Rising Dry Lab
            </h1>
            <h2>
In order to help freshmen get acquainted with problem-solving in synthetic biology, we ran a “Rising Dry Lab” program where we recruited 5-8 first year students. These students worked closely with the Dry Lab team to get introduced to important topics like protein modeling, pharmacokinetic modeling, documentation, software reproducibility, etc., and received handholding and guidance in terms of material, directions and examples. Eventually, these students were involved in wrapping up some of the ongoing tasks in the Dry Lab team and most of them were able to make concrete contributions to both the documentation and even to some of the modeling or other software-related aspects. Most of these students are from a mathematics and computing background, which is often underrepresented in iGEM teams – we hope that this effort at inclusivity will enable the future iGEM teams to leverage technology in a much better way. 
<figure class=" relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/rising-dry-lab/rising-dry-lab.jpg" alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure> 


            </h2>
          </section>
            
            <section id = "hrp">
            <h1>
             How to Read papers
            </h1>
            <h2>
One of the most important skills in the research course is the ability to read scientific papers. iGEM IISc, collaborating with Naturalists, organised a guidance session on how to read papers on 25th August.  
<br><br>
For the people interested in joining iGEM next year, we then provided simple papers to read, learning about various advances in the fields, and the ability to identify problems.  
<figure class=" relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/read-paper/haw-paper-read.jpeg" alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure> 
            </h2>
          </section>

          <section id = "quiz">
            <h1>
              Synbio Quiz
            </h1>
            <h2>
              While organising the above events, we realised iGEM is limited to UGs only at IISc. Hence, we organised a quiz in collaboration with the Quiz Club of IISc. With over 100 participants and 40 teams, the event was a great success, popularising iGEM into various circles of the institution. The questions were sourced from concepts and historic developments in biotechnology.  

<figure class=" grid grid-cols-2 relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/quiz-synbio/quiz.png " alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/quiz-synbio/synbio-quiz.jpg" alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure>
            </h2>
          </section>

          <section id = "verse">
            <h1>
              Into the iGEMverse
            </h1>
            <h2>

Our survey on SynBio had shown that many people do not know about iGEM, even if they have heard about synbio. Our team was also approached by many people in graduate biotechnology courses across the country, whose teams do not participate in iGEM. Being such an important platform for the development of synbio, we felt that more people would be empowered to contribute to synbio upon knowing about iGEM. Hence, we planned a series of 3 talk shows by past iGEMers and representatives to spread awareness about the same. 

 <br><br>

Sana Jalili, iGEM Promoter, “My Journey with iGEM” 
<br>
Shreya Kulkarni, iGEM Startups, “Prospects after iGEM” 
<br>
Jeevan Subodh, iGEM Ambassador, “How to start a new iGEM team” 
<br>

<figure class=" relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/igemverse/igemverse.png " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure>

<iframe title="IISc-Bengaluru: Into the iGEMverse | by Sana Jalili (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/b52ecdce-b481-415b-b929-db342f988d79" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 
            </h2>
          </section>

          <section id = "symp">
            <h1>
              iGEM Symposium
            </h1>
            <h2>
              As our iGEM project concludes for the year, we are organising a symposium, on 16th October. It will feature talks by various mentors about the different facets of the project.  
<br /><br>
Intracellular Trafficking by Dr. Graca Raposo 
<br />
Introduction to Endometriosis by Dr. Hemant Kanojiya 
<br />
Introduction to Drug Delivery by Dr. Rachit Aggarwal 
<br />
Introduction to mRNAs and their Applications by Dr. Raghavan Varadarajan 
<br />
Team Presentation by the IISc iGEM team 
<br /><br>
We plan to make this an yearly ritual, where teams from that year would explain their project in the symposium. 
<br />

<figure class=" relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/symposium/symposium-a4.png" alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure>

 
            </h2>
          </section>

          <section id = "wiki">
            <h1>
              New Wikipedia Page on Aptides
            </h1>
            <h2>
              While looking for specific targeting peptides, we found about aptides. However, the published research is scattered across various journals. To help future researchers find and utilise this great tool easily, we made a Wikipedia page, compiling exhaustively the published work in the field. We also created an informative video on the topic. 

<figure class=" relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/aptides-wikipedia/whatsapp-image-2023-10-12-at-03-11-52.jpg " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure>
            </h2>
          </section>

          <section id = "radio">
            <h1>
              Yuvavani on All India Radio
            </h1>
            <h2>
              Yuvavani is a program on All India Radio, the public radio broadcaster of India, where they discuss issues of importance to the youth of the country. We contacted them and talked about the introduction to a life in research and synthetic biology in their show. The explanation was a new challenge since we didn’t have slides visualising our words, and hence we had to simplify it down. 

<figure class=" relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/yuvavani/yuvavani.jpeg " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure>
            </h2>
          </section>

          <section id = "broch">
            <h1>
              Brochures and Articles
            </h1>
            <h2>
              To make our research more accessible to people, we published various articles and brochures, explaining our work in a simplified manner. 

 
<br /><br />
This includes brochures on: 
<br />
A Friendly Guide to Life in Research: It was the culmination of all the feedback we received during our school visits. We made it more appealing to the younger audience by including more illustrations and comments of college students pursuing research. 
<br />
   <div @click = "() => {pdf('lifr-dropdown')}" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Life in Research
        </span>
    </div>
    <iframe id = "lifr-dropdown" class = "hidden w-3/4 aspect-square relative left-2/4 -translate-x-2/4 "  src = "https://static.igem.wiki/teams/4829/wiki/awards/education/brochure-articles/life-in-research-brochure-final.pdf" >
    </iframe>



<br><br>



A Friendly Guide to Biotechnology: It included various applications of biotechnology, how it developed over the years and a comprehensive glossary of terms in the field. It also had an appeal to support our campaign for the national biotechnology day and was very well received by the audience. 
<br />
A Friendly and Comprehensive Guide to Synthetic Biology: This comprehensive guide contains a near exhaustive list of theory, concepts, protocols necessary to get a person started with synthetic biology. This would be of extreme value to future teams and aspiring scientists. 

 <br /><br />

We also got featured on the <a href = "https://kernel.iisc.ac.in/the-race-to-remedy-endometriosis" class = "text-violet-500">front page of Kernel</a>, IISc’s monthly research magazine.  
<br /> <br />
Our team contributed significantly to the newsletter of Naturalists, the Biology Club of IISc, with articles explaining alternative ideas we had during the brainstorming, namely Virovory and Biofilm Inhibition, and an Introduction to Synthetic Biology and iGEM. 
<br /><br />

<figure class=" relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-screen" src="https://static.igem.wiki/teams/4829/wiki/awards/education/brochure-articles/kernel-homepage.jpg " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Front page of Kernel</figcaption>
</figure>






<div @click = "() => {pdf('natur')}" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "hidden text-4xl courierprime cursor-pointer">
          Naturalists Article
        </span>
    </div>
    <img id = "natur" src = "https://static.igem.wiki/teams/4829/wiki/awards/education/brochure-articles/naturalist.png " class = " hidden w-screen">



            </h2>
          </section>

          <section id = "lang">
            <h1>
              Language Project
            </h1>
            <h2>
              India is a land of massive diversity, with 780 identified languages in the country. To take the message of synbio to a large audience, we translated our articles and brochures in 18 Indian languages, Hindi, Bengali, Malayalam, Telugu, Marathi, Tamil, Urdu, Assamese, Bhojpuri, Dogri, Gujarati, Konkani, Maithili, Mizo, Odia, Punjabi, Sasnkrit, Kannada, spoken by 94% people in India. Our team consists of members from various states who speak various languages. Some of the languages were translated with the help of Google Translate and then confirmed with native speakers. These were then sent to newspapers and magazines across the country. Several of them have been published, and some are under publication right now. We also translated our brochures, project promotion video and presentation video into the above languages. We collaborated with the IITD and HKU iGEM teams, translating their project promotion video and science story books respectively.  

You can read the articles here:
<ul class="underline ml-10 list-disc">
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/gujurati/gujarati-emdometriosis.pdf">Gujarati</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/dogri/dogri-final-endo.pdf">Dogri</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/konkani/konkani-endometriosis.pdf">Konkani</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/bhojpuri/bhojpuri-biotech-final.pdf">Bhojpuri</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/tamil/tamil-final-endo.pdf">Tamil</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/malayalam/malayalam-endo-final.pdf">Malayalam</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/kannada/kannada-endo-final.pdf">Kannada</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/urdu/urdu-endo-final.pdf">Urdu</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/telugu/telugu-endo-final.pdf">Telugu</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/punjabi/punjabi-biotech-final.pdf">Punjabi</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/marathi/marathi-endo-final.pdf">Marathi</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/hindi/hindi-endo-final.pdf">Hindi</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/odia/odia-endo-final.pdf">Odia</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/bengali/endometriosis-bengali.pdf">Bengali</a></li>
</ul>

Brochures:
<ul class="underline ml-10 list-disc">
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/urdu/urdy-biotech-final.pdf">Urdu</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/telugu/telugu-biotech-final.pdf">Telugu</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/tamil/biotech-tamil-final.pdf">Tamil</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/sanskrit/biotech-day-sanskrit.pdf">Sanskrit</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/punjabi/punjabi-biotech-final.pdf">Punjabi</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/odia/odia-biotech-final.pdf">Odia</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/mizo/mizo-biotech-day.pdf">Mizo</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/assamese/biotech-day-assamese.pdf">Assamese</a></li>
    <li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/dogri/dogri-biotech-final.pdf">Dogri</a></li>
<li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/bhojpuri/bhojpuri-biotech-final.pdf">Bhojpuri</a></li>
<li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/gujurati/gujarati-biotech-day.pdf">Gujarati</a></li>
<li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/hindi/hindi-biotech-final.pdf">Hindi</a></li>
<li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/kannada/kannada-biotech-final.pdf">Kannada</a></li>
<li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/konkani/biotech-day-konkani.pdf">Konkani</a></li>
<li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/maithili/biotech-day-maithili.pdf">Maithili</a></li>
<li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/malayalam/malayalam-biotech-final.pdf">Malayalam</a></li>
<li><a href="https://static.igem.wiki/teams/4829/wiki/language-brochures/bengali/biotech-day-bengali.pdf">Bengali</a></li>

</ul>
            </h2>
          </section>

          <section id = "game">
            <h1>
              Synbio Games
            </h1>
            <h2>

<figure class=" relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/synbio-games/instapost-03-summercamp.png " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure> 

Using the feedback received in school visits, we modified popular games like UNO, Snakes and Ladders, Monopoly, Tic Tac Toe, and Trading Cards, with rules highlighting the importance of lab safety, biosafety and health. We received great feedback from both children and the teachers when we showed it to them during the science camp. 




<div @click = "() => {pdf('rulebook-dropdown')}" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Rulebook
        </span>
    </div>
    <iframe id = "rulebook-dropdown" class = "hidden w-3/4 aspect-square relative left-2/4 -translate-x-2/4 "  src = "https://static.igem.wiki/teams/4829/wiki/awards/education/synbio-games/rulebook.pdf" >
    </iframe>

 
            </h2>
          </section>

          <section id = "acti">
            <h1>
              Activity Sheets
            </h1>
            <h2>
              To engage students in junior classes, we created activity sheet consisting of colouring activities, matching DNA fragments to amino acid sequences, etc. We distributed them in government schools around Bengaluru with the help of NoteBook Drive, a student run body at IISc. Our members also visited these schools and taught origami and thumb painting to these students. 

<figure class=" grid grid-cols-2 relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/nbd/nbd.jpg " alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/nbd/nbd-2.jpg " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure>
            </h2>
          </section>

          <section id = "infor">
            <h1>
              Informative Videos
            </h1>
            <h2>
              We released a series of videos on various topics of synthetic biology, starting from an introduction to the field to explaining major processes like Transformation and PCR. These are purposed to be a quick introduction to the field, getting a person started with synthetic biology, 
 <iframe title="IISc-Bengaluru: Ethics | Ethics in Science, Biomedical Research and Synthetic Biology (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/a45a9d5e-00ab-4c32-b43d-765a7fd827ef" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: Aptides | Novel Class of Peptides | Amino Acids (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/0ec1250e-b114-4d5e-a5b4-3ecb16ced50b" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: What is Cell? Cytoplasm, Cell Membrane, Cell Wall, DNA, RNA (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/906c55a8-4105-4d5e-930c-5e39d983803f" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: Synthetic Biology | Principles, Applications and Challenges of Synthetic Biology (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/5c595128-2714-41e8-a2a5-7f972df5d948" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: The Central Dogma |  DNA replication, Transcription, Translation | mRNA, Proteins (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/9c67d831-2095-4e4c-bd29-e42a9a91c4fd" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: Plasmids | Bacterial DNA, Genetic Engineering, Synthetic Biology (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/cb9f86a7-152e-40c5-957b-26b8b2572769" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: Bacterial Transformation | Competent Cells, Foreign DNA, Plasmid (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/12a74bab-f12c-4cb8-b608-5e9e441b4d67" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: Lipid Nano Particles | LNPs for mRNA Delivery (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/f351d1cd-c756-4142-82bc-6d51fae31724" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: ELISA | Enzyme Linked Immunosorbent Assay | Sandwich, Competitive, Indirect (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/98fca4e1-2f29-4436-b6d1-c6994aac2fef" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: Biosafety | GMO, Biohazards, Pathogens, Lab Safety (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/b1ea3632-c8f7-4a9e-ab51-54e4bac1e845" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: Biobricks |  Assembly Standard 10, Restriction Enzymes, DNA, Vector (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/26b7a805-0a22-4f42-b7f3-3f64c37eccf0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: Chassis | Biological chassis. Choice of chassis. E coli, S cerevisiae (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/d273bd84-fc41-4d68-b120-0d422e774450" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: ELISA | Enzyme Linked Immunosorbent Assay | Sandwich, Competitiv... (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/e18241e0-449f-4490-8fc4-799621dc09f1" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> ] 
            </h2>
          </section>

          <section id = "prot">
            <h1>
              Video Protocols
            </h1>
            <h2>
              “Show, Don’t Tell” is what inspired us to release video protocols of our experiments, demonstrating lab techniques like making competent cells and bacterial transformation. More such videos have been recorded and are currently being edited. They complement our brochures and would benefit anyone learning synbio. 
<div @click = "() => {pdf('vidprot')}" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Watch Video
        </span>
    </div>

<div id= "vidprot" class = "hidden">
<iframe  title="IISc-Bengaluru: Bacterial Transformation Protocol (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/77188c90-ec36-4c7b-ac5b-461321651789" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
<iframe title="IISc-Bengaluru: Competency Protocol (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/9edbe141-86e7-4ea1-95c5-7ba43c4bac86" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
</div>
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
                <div class = "class-endo cursor-pointer text-lg" ref = "endoButton">Understanding Endometriosis</div>
              </li>
              <li>
                <div  class = "class-inter cursor-pointer text-lg" ref = "interButton">DD Interview</div>
              </li>

              <li>
                <div  class = "class-masc cursor-pointer text-lg" ref = "mascButton">Mascot Competition</div>
              </li>

              <li>
                <div  class = "class-infpo cursor-pointer text-lg" ref = "infpoButton">Informative Posts</div>
              </li>


              <li>
                <div  class = "class-wymp cursor-pointer text-lg" ref = "wympButton">Symposium on Women's Health</div>
              </li>

              <li>
                <div  class = "class-collab cursor-pointer text-lg" ref = "collabButton">Collaborative Publication with UZurich</div>
              </li>

              <li>
                <div  class = "class-brochu cursor-pointer text-lg" ref = "brochuButton">Brochure on Endometriosis</div>
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
              We first conducted a 4-part talk series, inviting various experts in the field for interviews. Apart from spreading awareness about the condition, they also provided us with valuable feedback about our project, helping us improve our treatment for better practical uses. 



<figure class="grid grid-cols-2 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/understanding-endometriosis/abhishek.png  " alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/understanding-endometriosis/ammembaltalk.png " alt="image description">
  
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/understanding-endometriosis/hemant.png  " alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/understanding-endometriosis/hemantkanojiyacreds.jpg " alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/understanding-endometriosis/shilparao.png " alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/understanding-endometriosis/ammembal.png " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure>
<iframe title="IISc-Bengaluru: Understanding Endometriosis - Dr M Kamath Ammembal | Symptoms, Tr... (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/3279f3d1-a8ee-4500-ac6e-2bb0f67e9cb7" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: Understanding Endometriosis - Dr Hemant Kanojiya | Symptoms, Treatments (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/80e6c56f-811b-4ca0-b799-acc62d3a3e1e" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: Understanding Endometriosis - Dr Abhishek Mangeshikar | Surgeries, Treatments (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/206474c1-7d79-4182-8e3e-6edaa3e3cdb6" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

 

<iframe title="IISc-Bengaluru: Understanding Endometriosis - Dr Shilpa Rao | Personal Experience, Treatments (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/172743f7-17f6-47c4-a711-58917336acae" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>



            
            </h2>
          </section>

          <section id = "inter">
            <h1>
              DD Interview
            </h1>
            <h2>
              <figure class=" relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/doordarshan/dd.jpg" alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure> 

We approached Doordarshan, the state broadcaster of India, for a talk show with experts. Because the target audience of such health shows is the rural and backward audiences, we also talked about menstrual health and programs by the government to promote it in rural areas The panelists also suggested us ways to make the campaign more accessible by including more languages, which led to the conceptualization of the language project. 
            </h2>
          </section>
          <section id = "masc">
            <h1>
              Mascot Competition
            </h1>
            <h2>
              <figure class=" grid grid-cols-2 relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/mascot-contest/img-20231012-wa0003.jpg" alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/mascot-contest/img-20231012-wa0007.jpg" alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/mascot-contest/whatsapp-image-2023-10-12-at-04-11-36.jpg  " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure> 


To make our project more appealing and people friendly, we organised a mascot competition, where we explained our project to artists and designers. We got more than 50 entries, of which Lipi-Di was judged to be the best. It was designed by Umang Majumdar, who was then invited to join the design and wiki teams. 
            </h2>
          </section>

          <section id = "infpo">
            <h1>
              Informative Posts
            </h1>
            <h2>

 <figure class=" grid grid-cols-2 relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/informative-posts/ch1pg1.png " alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/informative-posts/ch1pg2.jpg " alt="image description">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/informative-posts/screenshot-2023-10-12-112714.png " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure> 

To reach out to a wide audience, we created posts on multiple social media platforms. We were guided by Dr Shilpa Rao on how to make it more people friendly. We chose the comic theme to appeal to the younger generation too. 
            </h2>
          </section>

          <section id = "wymp">
            <h1>
              Symposium on Women's Health
            </h1>
            <h2> 
 
<figure class=" relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/awards/education/whealth-symposium/poster.png " alt="image description">
  <figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure> 

On the International Day for action on Women’s health, we invited experts in the field to talk about the various health problems faced by women. The symposium featured: 

“Just Another Woman in Healthcare” by Dr Supraja Chandrasekar, where she talked about the role women healthcare professionals can play in improving women’s health. 

“Introduction to PCOS” by Dr Poonam Parekh, where she talked in great detail about the polycystic ovarian syndrome, a global health issue. 

“Reproductive Challenges to Modern Young Women” by Dr Akshata K Ammembal, where talked about the reproductive problems faced by young women in the professional field, specially in developing countries like India. 

<iframe title="IISc-Bengaluru: Symposium on Women's Health | International Day of Action for Women's He... (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/fdaebb8b-d3de-40b3-aee7-b31527d54f14" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe> 

            </h2>
          </section>

          <section id = "collab">
            <h1>
              Collaborative Publication with UZurich
            </h1>
            <h2>
              UZurich is another team working on Endometriosis this year. We got in touch with them, and exchanged ideas in Human Practices and Wetlab. We sent our project report to them to be published as a joint information booklet, which is under process now. 
            </h2>
          </section>

          <section id = "brochu">
            <h1>
              Brochure on Endometriosis
            </h1>
            <h2>
              Along with our brochures on synthetic biology, we also created a comprehensive guide for Endometriosis. The title page had a Yellow Ribbon, often associated with Endometriosis awareness. It includes details about the symptoms, causes, available treatments and undergoing research in the field. It also includes excerpts from the interviews held during “Understanding Endometriosis”, and FAQs answered by experts in the field. 



<div @click = "() => {pdf('endo-dropdown')}" class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Endometriosis Brochure
        </span>
    </div>
    <iframe id = "endo-dropdown" class = "hidden w-3/4 aspect-square relative left-2/4 -translate-x-2/4 "  src = "https://static.igem.wiki/teams/4829/wiki/awards/education/brochure-articles/endometriosis-final-brochure.pdf " >
    </iframe>

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
        console.log("text")
        let ssSyn = document.getElementsByClassName("ss-synbio")[0]
        let ssEndo = document.getElementsByClassName("ss-endo")[0]
        console.log("text")
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
      },
      pdf(id){
        let elem = document.getElementById(id)
        if(elem.style.display=="none"){
          elem.style.display="block"
        }else{
          elem.style.display="none"
        }
      }
    },
    mounted(){
     this.$refs.bcButton.addEventListener("click", ()=>{this.scrollTo("bc")})
     this.$refs.nbdButton.addEventListener("click", ()=>{this.scrollTo("nbd")})
     this.$refs.odButton.addEventListener("click", ()=>{this.scrollTo("od")})
     this.$refs.carvButton.addEventListener("click", ()=>{this.scrollTo("carv")})
     this.$refs.svButton.addEventListener("click", ()=>{this.scrollTo("sv")})
     this.$refs.scButton.addEventListener("click", ()=>{this.scrollTo("sc")})
     this.$refs.wsbButton.addEventListener("click", ()=>{this.scrollTo("wsb")})
     this.$refs.ijButton.addEventListener("click", ()=>{this.scrollTo("ij")})
     this.$refs.dleButton.addEventListener("click", ()=>{this.scrollTo("dle")})
     this.$refs.rdlButton.addEventListener("click", ()=>{this.scrollTo("rdl")})
     this.$refs.hrpButton.addEventListener("click", ()=>{this.scrollTo("hrp")})
     this.$refs.quizButton.addEventListener("click", ()=>{this.scrollTo("quiz")})
     this.$refs.verseButton.addEventListener("click", ()=>{this.scrollTo("verse")})
     this.$refs.sympButton.addEventListener("click", ()=>{this.scrollTo("symp")})
     this.$refs.wikiButton.addEventListener("click", ()=>{this.scrollTo("wiki")})
     this.$refs.radioButton.addEventListener("click", ()=>{this.scrollTo("radio")})
     this.$refs.brochButton.addEventListener("click", ()=>{this.scrollTo("broch")})
     this.$refs.langButton.addEventListener("click", ()=>{this.scrollTo("lang")})
     this.$refs.gameButton.addEventListener("click", ()=>{this.scrollTo("game")})
     this.$refs.actiButton.addEventListener("click", ()=>{this.scrollTo("acti")})
     this.$refs.inforButton.addEventListener("click", ()=>{this.scrollTo("infor")})
     this.$refs.protButton.addEventListener("click", ()=>{this.scrollTo("prot")});

    this.$refs.endoButton.addEventListener("click", ()=>{this.scrollTo("endo")})
    this.$refs.interButton.addEventListener("click", ()=>{this.scrollTo("inter")})
    this.$refs.mascButton.addEventListener("click", ()=>{this.scrollTo("masc")})
    this.$refs.infpoButton.addEventListener("click", ()=>{this.scrollTo("infpo")})
    this.$refs.wympButton.addEventListener("click", ()=>{this.scrollTo("wymp")})
    this.$refs.collabButton.addEventListener("click", ()=>{this.scrollTo("collab")})
    this.$refs.brochuButton.addEventListener("click", ()=>{this.scrollTo("brochu")})
    


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

