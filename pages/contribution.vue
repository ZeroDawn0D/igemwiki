<template>
  <div>
    <div class = "">
      <div class = "courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32">
        CONTRIBUTION
      </div>
    </div>
    <!-- IMPORTANT CHANGE TO MAKE HERE-->
    <Scrollspy :currentPage="currentPage" initialSection="may">
      <div class = "grid grid-cols-12 gap-4 p-8">
        <div class = "col-span-3 max-md:hidden">
          <nav class = "sticky overflow-auto h-screen top-16 border-r-8 py-8" >
            <ul>
              <li>
                <div class = "class-mrna cursor-pointer text-2xl" ref = "mrnaButton">mRNA-based platform</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-may1 cursor-pointer text-md" ref = "may1Button" >Designing</div>
                  </li>
                  <li>
                    <div class = "class-may1 cursor-pointer text-md" ref = "may1Button" >Optimisation</div>
                  </li>
                  
                </ul>
              </li>


            </ul>
          </nav>  
        </div>

        <div class = "col-span-9 max-md:col-span-12 text-justify text-xl">
          <h2>
            In 2023, Team IISc-Bengaluru is bringing something unique to BioBricks! We are introducing an mRNA-based platform into the registry for the FIRST TIME EVER. This makes it easier for future teams and researchers to build up on our designs for mRNA constructs and create their own mRNA constructs! We are extremely pleased to announce that, in this regard, we are introducing a modified T7 promoter that is used by the few labs working in this niche area. This modified promoter is also modified for the use of clean cap AG (from tri link biotech) and related caps! And we do not stop there! We are also introducing not one, but 27 new sequences, which fit into our mRNA platform! (Our parts have NO twins) Our BioBricks can be viewed in the following link: 
          </h2>
          <section id = "mrna" ref = "mrna">
            <h1>
              mRNA-based platform:
            </h1>
            <h2>
                 This part can be used to design an mRNA construct for protein replacement therapy. Our constructs are optimised for human cell expression, and Moderna currently patents the UTRs and not available to be put up on the registry. However, the sequences are freely available and are listed below. The system's modularity comes from the fact that the CDS can be switched in and out of our design, as required by the researcher. Further, the advantage of an mRNA-based platform is that a plasmid backbone is not a prerequisite for transfection and expression. This implies that one can simply buy gene fragments for a sequence and run that directly through IVT. If the total sequence is under 2,000 bp, PCR can also be run with minimal error, implying that the sequence can be amplified and used without going through the tedious and error prone process of cloning! Further, the transfection efficiency of mRNA is higher than that of DNA, which makes the experimental procedure of using mRNA much easier for simple applications. 

Here we offer 2 new composite BioBricks, which include 3 new sequences: In other words, we introduce the blueprint to form new mRNA therapeutics and give 4 examples of the same! 
            </h2>
            <section id = "mrna1" ref = " mrna1">
              <h3>
                Designing an mRNA Construct
              </h3>
              <h2>
To build a functional mRNA construct, you must choose your CDS sequence and UTRs if you’re looking to optimize it. We have optimized our sequences using the RiboTree tool from Das labs at Stanford. Both have been submitted to the registry. These sequences can be used in any (bacterial) vector with the BioBricks prefix and suffix in it, as the vector simply does not matter as long as it can be propagated in a bacterial species! (Also please note that the vector you use must have a polyA tail of sufficient length included in it). To avoid buying a new vector, one can also carry out post transcriptional tailing to get the functional mRNA. 

<br /><br />

BBa_K4829000 is a new T7 promoter, meant for In vitro transcription. 
<br />
BBa_K4829001 and BBa_K4829026 are signal peptides for secretion. 
<br />
BBa_K4829004 and BBa_K4829005 are Moderna’s UTR sequences, which are very good for use in an academic setting. 
<br />
BBa_K4829002 and BBa_K4829007 to BBa_K4829012 are all scFv’s and dAb coding sequences. These sequences have been incorporated into the composite biobricks below. 
<br />
BBa_K4829003, BBa_K4829013 to BBa_K4829018 are ALL examples of Sequences, which, on IVT will give mRNA coding for a dAb or an scFv.   
<br />
BBa_K4829019 to BBa_K4829025 are all RNA sequences (that code for ONLY the CDS of the above composite biobricks) optimised by Ribotree for enhanced stability!  
              </h2>
            </section>

            <section id = "mrna2" ref = " mrna2">
              <h3>
                Optimisation of the sequences with Ribotree, in collboration with Das Labs in Stanford
              </h3>
              <h2>
                <figure class="max-w-lg relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4 " src=" https://static.igem.wiki/teams/4829/wiki//best-parts-collection/das-labs.png" alt="image description">

</figure> 
              We are currently collaborating with Das Labs in Stanford to optimise our RNA sequence for optimal translational efficiency and stability. Though we have not tested out our new sequences due to lack of resources and time, the software has already been proven to be quite reliable! 
<br><br>
So, why have we included the RNA sequences optimised by ribotree as separate sequences? 
<br><br>
We have done this as we cannot introduce changes in a sequence to leave out restriction sites if the ultimate goal is to be the 'best possible sequence'! 

  <br><br>

The following table has all our parts: 
<table class="tg">
<thead>
  <tr>
    <th class="tg-6397">&nbsp;&nbsp;&nbsp;<br>Number&nbsp;&nbsp;&nbsp;</th>
    <th class="tg-6397">&nbsp;&nbsp;&nbsp;<br>Type&nbsp;&nbsp;&nbsp;</th>
    <th class="tg-6397">&nbsp;&nbsp;&nbsp;<br>Short description&nbsp;&nbsp;&nbsp;&nbsp;</th>
    <th class="tg-6397">&nbsp;&nbsp;&nbsp;<br>Designer(s)&nbsp;&nbsp;&nbsp;</th>
    <th class="tg-6397">&nbsp;&nbsp;&nbsp;<br>Length&nbsp;&nbsp;&nbsp;</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829000<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829000"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829000</span></a>&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>T7 promoter&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>A&nbsp;&nbsp;&nbsp;modified T7 promoter, meant for use in mRNA synthesis, and capping with CleanCap®AG&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal, Dr.&nbsp;&nbsp;&nbsp;Raghavan Varadarajan, Dr. Debajyoti Chakraborty&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>37 bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829001<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829001"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829001</span></a> &nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;<br> &nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Coding&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Codes for the CD33 signal peptide&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal, Natural&nbsp;&nbsp;&nbsp;selection and evolution&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>51bp<br>&nbsp;&nbsp;&nbsp;<br> &nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829002<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829002"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829002</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Coding&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>This sequence codes for the scFv&nbsp;&nbsp;&nbsp;antibody O-IL8-15, by SGC Karolinksa&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>SGC Karolinska&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>831bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829003<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829003"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829003</span></a>&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Composite (coding)&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>This sequence, on In-vitro&nbsp;&nbsp;&nbsp;transcription, produces mRNA coding for an scFv against IL8&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal, Dr.&nbsp;&nbsp;&nbsp;Raghavan Varadarajan, Dr. Debajyoti Chakraborty&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>1086bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829004<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829004"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829004</span></a>&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Regulatory (UTR)&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>5' UTR patented by Modernatx&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Modernatx&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>61bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829005<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829005"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829005</span></a>&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Regulatory (UTR)&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>3' UTR patented by Modernatx&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Modernatx&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>110bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829006<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829006"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829006</span></a>&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Coding&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br> <br>&nbsp;&nbsp;&nbsp;<br>PolyA tail for an mRNA sequence.&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>100bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829007<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829007"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829007</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Coding&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br> <br>&nbsp;&nbsp;&nbsp;<br>PolyA tail for an mRNA sequence.&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>351bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829008<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829008"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829008</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Coding&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br> <br>&nbsp;&nbsp;&nbsp;<br>Sequence coding for Q-IL6-9, an&nbsp;&nbsp;&nbsp;scFv against IL6&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;<br> &nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>SGC Karolinska&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>837bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829009<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829009"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829009</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Coding&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Sequence coding for a dAb against&nbsp;&nbsp;&nbsp;IL6&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal<br>&nbsp;&nbsp;&nbsp;<br> &nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>354bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829010<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829010"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829010</span></a>&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Coding&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br> <br>&nbsp;&nbsp;&nbsp;<br>This sequence codes for an scFv&nbsp;&nbsp;&nbsp;against PD1 <br>&nbsp;&nbsp;&nbsp;<br> &nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal<br>&nbsp;&nbsp;&nbsp;<br> &nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>804bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829011<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829011"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829011</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Coding&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br> <br>&nbsp;&nbsp;&nbsp;<br>This codes for a dAb against PD1 <br>&nbsp;&nbsp;&nbsp;<br> &nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal<br>&nbsp;&nbsp;&nbsp;<br> &nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>387bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829012<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829012"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829012</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Coding&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Membrane receptor CD36&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal, Natural&nbsp;&nbsp;&nbsp;selection and evolution&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>1416bp<br>&nbsp;&nbsp;&nbsp;<br> &nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829013<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829013"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829013</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Composite (Coding)&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>IVT of&nbsp;&nbsp;&nbsp;this sequence produces mRNA coding for a dAb against IL8&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal &nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>706bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829014<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829014"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829014</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Composite (Coding)&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>This sequence, on In-vitro&nbsp;&nbsp;&nbsp;transcription, produces mRNA coding for an scFv against IL6&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal &nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>1192bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829015<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829015"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829015</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Composite (Coding)&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>IVT of this sequence produces mRNA&nbsp;&nbsp;&nbsp;coding for a dAb against IL6&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal &nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>709bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829016<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829016"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829016</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Composite (Coding)&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>IVT of this sequence produces mRNA&nbsp;&nbsp;&nbsp;coding for an scFv antibody blocking PD1<br>&nbsp;&nbsp;&nbsp;<br> &nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>1192bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829017<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829017"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829017</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Composite (Coding)&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>IVT of this sequence produces mRNA&nbsp;&nbsp;&nbsp;coding for a dAb blocking PD1&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>739bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829018<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829018"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829018</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Composite (Coding)&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br> <br>&nbsp;&nbsp;&nbsp;<br>IVT of this sequence produces mRNA&nbsp;&nbsp;&nbsp;coding for the CD36 membrane protein <br>&nbsp;&nbsp;&nbsp;<br> &nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>1720bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829019<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829019"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829019</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>RNA&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Ribotree optimised sequence for&nbsp;&nbsp;&nbsp;the CDS of BBa_K4829003&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Mrigank Pawagi, Das Labs, Aditya&nbsp;&nbsp;&nbsp;Kamath Ammembal&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>882bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829020<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829020"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829020</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>RNA&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Ribotree optimised sequence for&nbsp;&nbsp;&nbsp;the CDS of BBa_K4829013&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Mrigank Pawagi, Das Labs, Aditya&nbsp;&nbsp;&nbsp;Kamath Ammembal&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>402bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829021<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829021"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829021</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>RNA&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Ribotree optimised sequence for&nbsp;&nbsp;&nbsp;the CDS of BBa_K4829014&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Mrigank Pawagi, Das Labs, Aditya&nbsp;&nbsp;&nbsp;Kamath Ammembal&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>888bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829022<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829022"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829022</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>RNA&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Ribotree optimised sequence for&nbsp;&nbsp;&nbsp;the CDS of BBa_K4829015&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Mrigank Pawagi, Das Labs, Aditya&nbsp;&nbsp;&nbsp;Kamath Ammembal&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>405bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829023<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829023"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829023</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>RNA&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Ribotree optimised sequence for&nbsp;&nbsp;&nbsp;the CDS of BBa_K4829016&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Mrigank Pawagi, Das Labs, Aditya&nbsp;&nbsp;&nbsp;Kamath Ammembal&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>855 bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829024<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829024"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829024</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>RNA&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Ribotree optimised sequence for&nbsp;&nbsp;&nbsp;the CDS of BBa_K4829017&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Mrigank Pawagi, Das Labs, Aditya&nbsp;&nbsp;&nbsp;Kamath Ammembal&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br> <br>&nbsp;&nbsp;&nbsp;<br>387 bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829025<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829025"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829025</span></a>&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>RNA&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Ribotree optimised sequence for&nbsp;&nbsp;&nbsp;the CDS of BBa_K4829018&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br> <br>&nbsp;&nbsp;&nbsp;<br> <br>&nbsp;&nbsp;&nbsp;<br> <br>&nbsp;&nbsp;&nbsp;<br> <br>&nbsp;&nbsp;&nbsp;<br>Mrigank Pawagi, Das Labs, Aditya&nbsp;&nbsp;&nbsp;Kamath Ammembal&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>1416 bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>BBa_K4829026<br>&nbsp;&nbsp;&nbsp;<br><a href="http://parts.igem.org/Part:BBa_K4829026"><span style="color:blue">http://parts.igem.org/Part:BBa_K4829026</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Coding&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br> <br>&nbsp;&nbsp;&nbsp;<br>This sequence codes for the signal&nbsp;&nbsp;&nbsp;peptide of Albumin(HSA)&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;<br> &nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>Aditya Kamath Ammembal&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-8fdm">&nbsp;&nbsp;&nbsp;<br>48 bp&nbsp;&nbsp;&nbsp;</td>
  </tr>
</tbody>
</table>
<br>
These biobricks can be incorporated into the following vector: 
<figure class="w-3/4 relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4 " src="https://static.igem.wiki/teams/4829/wiki//best-parts-collection/final-plasmid.png " alt="image description">

</figure> 
<br>
The Genes encoding the UTRs and protein of interest can easily be cloned into this vector by Genscript. Even better, cloning is not strictly required for the use of mRNA technology! One can use DNA fragments and perform PCR, perform IVT and directly use this mRNA in experiments!(After tailing). 


              </h2>
            </section>
          


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


.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-8fdm{font-family:Verdana, Geneva, sans-serif !important;text-align:left;vertical-align:middle}
.tg .tg-6397{font-family:"Courier New", Courier, monospace !important;font-size:22px;font-weight:bold;text-align:left;
  vertical-align:middle}

</style>