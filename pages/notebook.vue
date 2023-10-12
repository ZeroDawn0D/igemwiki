<template>
  <div>
    <div class = "">
      <div class = "courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32">
        NOTEBOOK
      </div>
    </div>
    <!-- IMPORTANT CHANGE TO MAKE HERE-->
    <Scrollspy :currentPage="currentPage" initialSection="may">
      <div class = "grid grid-cols-12 gap-4 p-8">
        <div class = "col-span-3 max-md:hidden">
          <nav class = "sticky overflow-auto h-screen top-16 border-r-8 py-8" >
            <ul>
              <li>
                <div class = "class-may cursor-pointer text-2xl" ref = "mayButton">May</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-may1 cursor-pointer text-md" ref = "may1Button" >Week 1</div>
                  </li>
                  <li>
                    <div class = "class-may1 cursor-pointer text-md" ref = "may1Button" >Week 2</div>
                  </li>
                  <li>
                    <div class = "class-may1 cursor-pointer text-md" ref = "may1Button" >Week 3</div>
                  </li>
                  <li>
                    <div class = "class-may1 cursor-pointer text-md" ref = "may1Button" >Week 4</div>
                  </li>
                </ul>
              </li>
      

              <li>
                <div class = "class-june cursor-pointer text-2xl" ref = "juneButton">June</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-june1 cursor-pointer text-md" ref = "june1Button" >Week 1</div>
                  </li>
                  <li>
                    <div class = "class-june1 cursor-pointer text-md" ref = "june1Button" >Week 2</div>
                  </li>
                  <li>
                    <div class = "class-june1 cursor-pointer text-md" ref = "june1Button" >Week 3</div>
                  </li>
                  <li>
                    <div class = "class-june1 cursor-pointer text-md" ref = "june1Button" >Week 4</div>
                  </li>
                </ul>
              </li>

              <li>
                <div class = "class-july cursor-pointer text-2xl" ref = "julyButton">July</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-july1 cursor-pointer text-md" ref = "july1Button" >Week 1</div>
                  </li>
                  <li>
                    <div class = "class-july1 cursor-pointer text-md" ref = "july1Button" >Week 2</div>
                  </li>
                  <li>
                    <div class = "class-july1 cursor-pointer text-md" ref = "july1Button" >Week 3</div>
                  </li>
                  <li>
                    <div class = "class-july1 cursor-pointer text-md" ref = "july1Button" >Week 4</div>
                  </li>
                </ul>
              </li>

              <li>
                <div class = "class-august cursor-pointer text-2xl" ref = "augustButton">August</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-august1 cursor-pointer text-md" ref = "august1Button" >Week 1</div>
                  </li>
                  <li>
                    <div class = "class-august1 cursor-pointer text-md" ref = "august1Button" >Week 2</div>
                  </li>
                  <li>
                    <div class = "class-august1 cursor-pointer text-md" ref = "august1Button" >Week 3</div>
                  </li>
                  <li>
                    <div class = "class-august1 cursor-pointer text-md" ref = "august1Button" >Week 4</div>
                  </li>
                </ul>
              </li>

              <li>
                <div class = "class-september cursor-pointer text-2xl" ref = "septemberButton">September</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-september1 cursor-pointer text-md" ref = "september1Button" >Week 1</div>
                  </li>
                  <li>
                    <div class = "class-september1 cursor-pointer text-md" ref = "september1Button" >Week 2</div>
                  </li>
                  <li>
                    <div class = "class-september1 cursor-pointer text-md" ref = "september1Button" >Week 3</div>
                  </li>
                  <li>
                    <div class = "class-september1 cursor-pointer text-md" ref = "september1Button" >Week 4</div>
                  </li>
                </ul>
              </li>

              <li>
                <div class = "class-october cursor-pointer text-2xl" ref = "octoberButton">October</div>
                <ul class = "list-disc list-inside">
                  <li>
                    <div class = "class-october1 cursor-pointer text-md" ref = "october1Button" >Week 1</div>
                  </li>
                  <li>
                    <div class = "class-october1 cursor-pointer text-md" ref = "october1Button" >Week 2</div>
                  </li>
                </ul>
              </li>


            </ul>
          </nav>  
        </div>

        <div class = "col-span-9 max-md:col-span-12 text-justify text-xl">
          <section id = "may" ref = "may">
            <h1>
              May
            </h1>
            <h2>
                 
            </h2>
            <section id = "may1" ref = " may1">
              <h3>
                Week 1
              </h3>
              <h2>
                Discussion and tutorial of manual homology modelling using Modeller was conducted, and modelling was started on the chain C of 6Y6C template
              </h2>
            </section>
            <section id = "may1" ref = " may1">
              <h3>
                Week 2
              </h3>
              <h2>
                iGEM IISc GitHub Organization was formed for better collaboration and task management. Antibody and aptide sequences were shared with the members, along with resources for basic concepts in pharmacokinetics. 
              </h2>
            </section>
            <section id = "may1" ref = " may1">
              <h3>
                Week 3
              </h3>
              <h2>
                15.05.23 
<br />
Started training on M. smegmatis: Medium: 7H9+ ADC salts, prepared primary cultures. 
<br />
<br />
16.05.23 
<br />
Plated bacteria on agar-LB plates. 
<br />
<br />
18.05.23 
<br />
Streak plates observed- single colonies obtained. 
<br /><br />
19.05.23 
<br />
Make secondary culture. 
<br /><br />
21.05.23 
<br />
Overgrowth, so reinoculated. 
              </h2>
            </section>
            <section id = "may1" ref = " may1">
              <h3>
                Week 4
              </h3>
              <h2>
                The team conducted another run of the Signal peptide with the antibody sequence through SignalP6.0 instead of SignalP 5.0, which was previously used. The results were still excellent and indicative of our using the CD33 peptide. 

Various papers detailing use and optimisation of LNPs for delivery were discussed. 
<br />
<br />
22.05.2023:  
<br />
Observing the process of iLNP device Preparation. 
<br /><br />
23.05.23 
<br />
Protein Purification training as Debasis’s lab. 
<br /><br />
24.05.23 
<br />
IVT training 
<br /><br />
10:00 AM 
<br />
Two tubes are taken. 
<br />
TUBE 1: Unmodified mRNA (Control) 
<br />
TUBE 2: N1-Methylpseudo-Uridine modified mRNA (RNA used for Mammalian Cells) 
<br />
DNA: 1µg (Linearized) 
<br />
A picture containing text, screenshot, font, number
<br />
Description automatically generatedTriLink: 3µM N1-Mpseudo-UTP, Check Sapala’s Concentration. (4:1 Cap to GTP ratio most likely) 

 
<br />
2µL: ATP, GTP (15 mM), UTP/N1-Mpseudo-UTP, CTP,10X Reaction Buffer (Thawed and kept on ice.) 
<br />
Assembly at Room Temperature. 
<br />
20 µL water + 2µL Ribonucleotide Solutions + 10X Buffer (2µL) 
<br />
Buffer tends to ppt. DNA, Vortex till white ppt. is not seen. Give it a short spin. 
<br />
2µL enzyme mix (Spin/Room Temperature) 
<br />
Incubate for 3 hours (10:45 AM- 2:00 PM) at 37 C. 
<br />
Usual yield:  
<br />
1µg/20µL reaction (Lin DNA) gives:  
<br />
Unmodified mRNA >1µg/µL 
<br />
Pseudouridine modified mRNA around 1µg/µL. 
<br /><br />
2:00 PM 
<br />
Impure RNA + 1µL of DNase (37 C for 15 mins) 
<br />
Elution in 25-30µL for a higher concentration of yield (for 1kb). 
<br />
RNA Gel Electrophoresis (Demonstration later):  
<br />
Lin-DNA | Impure RNA (Without DNase) | Pure RNA (With DNase digestion) 

 
<br />
Run Gel to check the purity of RNA. 

 
<br />
For our RNA purification we will use the MegaClear Kit (Simple protocol) 
<br />
LiCl precipitation was done for RNA Purification today. 
<br /><br />
2:15 PM 
<br />
Pure RNA + 30µL water + 30µL LiCl (ThermoFisher 7.5M: available in kit) 
<br />
Kept for 1 hour at -20 C. 
<br /><br />
3:15 PM 
<br />
Centrifuge at 4 C/16000g for 15 mins. 
<br />
Discard the Supernatant and wash the pellet with ice-cold 70% ethanol. 
<br />
Resuspend in Nuclease-free water at 65 C. 
<br />
Check yield in Nanodrop One Spectrophotometer. 
<br />
Resultant Yield:  
<br />
Unmodified (Control) mRNA: 1.7786µg/µL 
<br />
Pseudouridine Modified mRNA: 1.3737µg/µL. 
<br /><br />
26.05.23 
<br />
Competency/ Transformation training at DC lab. 
<br /><br />
27.05.23 
<br />
Brought RFP (plate done and extracted plasmid) 
<br /><br />
28.05.23 
<br />
Cultures inoculated from TG1 culture were obtained from DC lab.  
<br />
OD readings recorded:    6pm: S1: 0.253;     9pm: S1: 0.207, S2: 0.206 
<br />
Streak plate made for cultures. 
<br />
Incubation at 37°C: 180rpm 
<br />
Overnight culture: 12 hours incubation. 
<br /><br />
29.05.23 
<br />
Culture revival: normal inoculation into LB, 8-hour growth, harvest.: Training 
<br />
OD still at 0.2 for new cultures.  
<br />
Single colonies obtained; new primary cultures seeded. 
<br /><br />
30.05.23 
<br />
Further tests on streaked RFP plate obtained from DC lab, colonies extracted and patched in new ampicillin plate- growth in all patches, no fluorescence: Contamination confirmed. 
<br />
BL21 requested from Debasish Lab. 


              </h2>
            </section>


            </section>

            <section id = "june" ref = "june">
            <h1>
              June
            </h1>
            <h2>
                 
            </h2>
            <section id = "june1" ref = " june1">
              <h3>
                Week 1
              </h3>
              <h2>
                Papers about the working of generalised mRNA-LNP delivery systems in mRNA therapy with considerations in specific diseases and the PK-PD analysis and LNP-mRNA delivery by intraperitoneal administration were discussed.
<br /><br />
                01.06.23 
<br />
Plates and agar autoclaved: plates prepared. 
<br />
BL21 acquired. 
<br />
Primary culture seeded and streak plate prepared from stock. 
<br /><br />
02.06.23 
<br />
Single colonies obtained in streak plate of BL21, culturing done. 
<br /><br />
03.06.23 
<br />
TG1 and BL21 reach stationary phase, reinoculated at 12PM.  
<br />
OD (6PM): 0.06 
<br />
O-IL8-15 plasmid streak plate + culture brought to 3rd Sem lab. 
<br /><br />
04.06.23 
<br />
OD reached 0.3 for BL21 & TG1. Transformation trial 1 initiated in BSL2. 
<br />
Stocks made for BL21 and TG1, stored at -80°C. 
<br />
One stock of each strain revived, and transformation protocol followed with RFP/Ampicillin. 
<br />
Spread plates prepared. 
<br /><br />
05.06.23 
<br />
Note: put control plates for confirmation. 
<br />
BL21 overgrowth, TG1 undergrowth, Transformation failed. 


              </h2>
            </section>
            <section id = "june1" ref = " june1">
              <h3>
                Week 2
              </h3>
              <h2>
Papers about IL-8 concentrations in various stages of endometriosis and harmful concentrations of IL-8 were discussed. Modelling documentation completed and comparative analysis runs performed.
<br /><br />
08.06.23 
<br />
Old unused cultures disposed in bleach. 
<br />
              </h2>
            </section>
            <section id = "june1" ref = " june1">
              <h3>
                Week 3
              </h3>
              <h2>
16.06.23 
<br />
Revived BL21 Arctic Express transformed with Ampicillin/Gentamycin GFP. 
<br /><br />
17.06.23 
<br />
Plated revived culture to check transformation.  
<br />
Considering revived solution as primary: secondary inoculated at 2PM, extraction at 4AM 
Considering revived solution as stock: primary inoculated at 2PM, secondary inoculated at 11.50PM, extraction at 2PM. 
<br />
Contacted Vinod Sir for missing chemicals. Received by evening, thanks to sir. 
<br /><br />
18.06.23 
<br />
Alkaline Plasmid Extraction Protocol Attempted twice. 
<br />
Run 1: Precipitate obtained but single line (close to well) obtained in Agar Gel, so genome precipitated instead of plasmid (should have shown 3 lines) 
<br />
Run 2: Precipitate not obtained, possibly because isopropanol is light dependent, and due to ineffectiveness of precipitating agent, no DNA was precipitated. 
<br /><br />
19.06.2023 
<br />
Learned how to prepare the SDS Page gel in the first semester lab. 
<br />
Things to keep in mind: 
<br />
Use water to check if the gel apparatus is leaking. 
<br />
Must find out percentage of SDS to be used. 

 
<br /><br />
20.06.2023 
<br />
We got 1g of pellet of transformed bacteria from the Debasis’s lab, and started the first dry run of purification of His-tagged Ferredoxin protein 

 
<br /><br />
21.06.23 
<br />
Run 1 negative result received. 
<br />
Prepared the required buffers according to the protocol.  
<br />
Performed lysis and centrifugation, collected samples for SDS Page 
<br />
1mL of Ni resin bed and 7 mL of supernatant kept for overnight tumbling. 

              </h2>
            </section>
            <section id = "june1" ref = " june1">
              <h3>
                Week 4
              </h3>
              <h2>
Our antibody-antigen was computationally too demanding for Autodock, which is generally used with small ligands. Our ligand (IL8) has somewhere around 2000 atoms. We turned to several web servers, including Patchdock (+Firedock), DockRMSD, ClusPro, ZDOCK and GRAMM. Out of these, GRAMM worked for us and provided seemingly good results. 
<br /><br />
22.06.23 
<br />
Plasmid extraction using kit. 
<br />
The resin bed had lost its original blue color indicating successful binding of the protein. 
<br />
After draining the supernatant from the column, we ran 2 wash buffers (7 ml each), and 4 x 1 ml of elution buffer.  
<br />
The second elute was brownish red in colour indicating presence of Ferredoxin. 
<br />
Collected samples for SDS Page 
<br />
Performed SDS Page using gel prepared 2 days back. 
<br />
SDS Page failed; the samples diffused sideways once they entered the stacking gel.  
<br />
Troubleshooting: 
<br />
Old gel: we prepared new gel. 
<br />
The power supply kept stopping and did not provide a continuous current. 
<br />
Things to keep in mind: 
<br />
Use freshly prepared gel for SDS Page 
<br />
Keep checking if the power supply is working at regular intervals. 

 
<br /><br />
23.06.23 
<br />
More plasmid extraction. 
<br />
Ran gel, successful plasmid extraction. 
<br />
Nanodrop: Readings 1.95, 2.03 
<br />
Concentration: 25 ng/mL 
<br />
Competent cells prepared, and Transformation done. Stocks stored. 
<br />
Prepared the solutions required to make the SDS Gel and prepared the gel. 
<br />
The gel was not set even after adding more amounts of TEMED and waiting for over an hour. 
<br />
Troubleshooting: 
<br />
We were using an old APS powder to prepare 10% APS; we got new APS from another lab. 
<br />
 On checking, the pH of the pre-prepared Tris-Cl buffer (pH 8.8) was over 10; we prepared fresh Tris-Cl buffer and adjusted the pH to 8.8. 
<br />
 The gel kept leaking due to issues with the apparatus; we sealed the bottom of the gel running module (the plates) with parafilm first and finally with agar. 

<br />
 The new gel gave better results, except for some minor issues with the power supply. 
<br />
Prepared the staining and de-staining solution and kept the gel in the staining solution for one hour and in the de-staining solution overnight. 
<br />
One of the gels did not de-stain properly, since the old staining solution was used. 
<br />
Things to keep in mind: 
<br />
Always check the manufacturing and expiration date of the chemicals being used. 
<br />
Use freshly prepared solutions, especially those that must have a specific pH. 
<br />
After de-staining: 
<br />
Gel 1: Gel 2:A plastic container with blue liquid in it
<br />
[IMG]   

 
<br />
1: After sonication 
<br />
2: After centrifugation 
<br />
3: Resuspended pellet 
<br />
FT: Flowthrough received after overnight binding 
<br />
W1: FT after Wash 1 
<br />
W2: FT after Wash 2 
<br />
E1: Elute received after first round of elution. 
<br />
E2: Elute received after second round of elution. 
<br />
E3: Elute received after third round of elution. 

 
<br /><br />
24.06.23 
<br />
Transformation successful, and Patching done.  
<br />
Cultures are seeded for protein expression. 
<br />
Protein purified in tris-cl pH 8.0 buffer. 
<br />
Obtained elute E2 was desalted. 
<br />
The protein concentration was checked using nanodrop, was 2.42mg/ml. 
<br />
SDS-PAGE set up with all samples. 

 
<br /><br />
25.06.23 
<br />
Protein Expression/ Production was failing, even after IPTG induction, in both fast and slow induction protocols.  
<br />
Tried skimmed milk broth instead, no observable changes. 
<br />
Fluorescence seen after pelleting down and GFP expression confirmed. (SM broth had no visible GFP production even after pelleting) 
<br />
New IPTG obtained from DC lab. 
<br />
For protein expression: 25°C is best. 
<br />
Faint bands at 31kDa observed in purified samples. 

 
<br /><br />
26.06.23 
<br />
TG1 cells and transformed DH5a: primary cultures prepped, DH5a secondary prepped. 
<br />
BLI performed on the purified sample using Ni-NTA tips.  
<br />
Data obtained with large error due to release of the protein from tips. 
<br />
Decided to use PBS for eluting instead, since proteins usually have better stability in PBS. 
<br />
Performed another SDS page using the dialyzed E2 sample. 
<br />
A close up of a blue liquid
<br />
Description automatically generated 
<br /><br />
27.06.23 
<br />
Transformation carried out using stock of competent cells. TG1 and BL21 transformed. 
<br />
The original secondary pellet washed out, so a new batch is prepared. 
<br />
The new batch did not produce enough pellets. 
<br />
New batch prepped, to be incubated till OD reaches 0.5. 
<br />
Transformation trial 3, TG1 transformed and plated. 
<br />
GFP cultures pelleted and stored at -20°C. 
<br />
Got the GFP pellet, and started the second dry run: GFP extraction and purification. 
<br />
Performed lysis, sonication, and centrifugation.  
<br />
Kept the supernatant for overnight binding. 
<br />
Collected the flowthrough. 
<br />
Washed with 2 wash buffers. 
<br />
Performed elution 4 times with 1ml of elution buffer. 
<br />
E2 was greenish, indicating the presence of GFP. 
<br />
Collected samples for SDS Page 

 

 
<br /><br />
28.06.23 
<br />
Gel run with plasmid: only one band seen, but plates show growth.  
<br />
Patching done. 
<br />
Primary and secondary cultures prepped for protein purification. Since there is no idea about the level of protein production, the first batch of 10mL bacteria is cultured, with 4mL uninduced control. 
<br />
SDS PAGE for the collected samples 
<br />
Multiple bands in the pellet resuspension, the supernatant and the flowthrough are observed. 
<br />
A single band in the E2 indicating the presence of GFP is seen. 
<br />
Streaked pellet lane due to lack of reducing medium (β-mercaptoethanol not added). 
<br />
[IMG]  
<br /><br />
29.06.2023:  
<br />
Made a few devices. 
              </h2>
            </section>


            </section>
            <section id = "july" ref = "july">
            <h1>
              July
            </h1>
            <h2>
                 
            </h2>
            <section id = "july1" ref = " july1">
              <h3>
                Week 1
              </h3>
              <h2>
 1.07.2023 
<br />
Received 200 ml of transformed and induced bacterial culture (pH=7.4) from the Bacterial transformation team. 
<br />
Centrifuged the culture and collected the supernatant since it is a secreted protein. 
<br />
Buffer selection options: (pH chosen greater than pI). 
<br />
Phosphate buffer, pH=8 
<br />
Tris-Cl buffer, pH=8 
<br />
PBS buffer, pH=7.4 
<br />
Additives: 
<br />
PMSF – protease inhibitor 
<br />
β-mercaptoethanol – reducing agent 
<br />
Glycerol 
<br />
Ran 3 purification trials with composition of the various buffers being as follows: 
<br />
Resin: 0.5 mL/trial 
<br />
Buffer: 50mM 
<br />
NaCl: 300mM 
<br />
Glycerol: 10% 
<br />
Equilibration Buffers: 
<br />
Buffer: 50mM 
<br />
NaCl: 300mM 
<br />
Glycerol: 10% 
<br />
MilliQ water 
<br />
Wash Buffer: 
<br />
Imidazole: 20mM/40mM 
<br />
NaCl: 300mM 
<br />
Glycerol: 10% 
<br />
MilliQ water 
<br />
Buffer: 50mM 
<br />
Elution Buffer: 
<br />
Imidazole: 300mM 
<br />
NaCl: 300mM 
<br />
Glycerol: 10% 
<br />
Buffer: 50mM 
<br />
MilliQ water 
<br />
Prepared 3 SDS gels and loaded the wells with respective samples. 
<br />
Made the iLNP device.  
<br /><br />
02/07/2023 
<br />
No bands were seen in any of the three gels. 
<br />
Tris buffer:
<br /> 
[IMG]
<br />
PBS buffer
<br />
[IMG]
<br />
Phosphate Buffer: 
<br />
[IMG]                                                                                 
<br />
No bands observed, protein absent. 
<br /><br />
03.07.2023 
<br />
Troubleshooting 
<br />
Check protein in pellet vs supernatant – reducing SDS-PAGE. 
<br />
Increase binding time. 
<br />
Mix supernatant with lysis buffer, centrifuge and purify again. 
<br />
PBS used for further troubleshooting. Lysis buffer with β-mercaptoethanol prepared. 
<br />
SDS-PAGE setup failed. 
<br />
Western Blot 
<br /><br />
04.07.2023 
<br />
New samples mixed with lysis buffer purified.  
<br />
SDS-PAGE and western blot started. 
<br /><br />
05.07.2023 
<br />
SDS-PAGE negative, no bands seen. 
<br />
Western blot negative.  
<br />
Ran another Western blot. 
<br /><br />
06.07.2023 
<br />
Western blot negative again 
<br />
Plasma Bonding. 

 
<br /><br />
07.07.2023 
<br />
Optimization of IPTG concentrations for induction. 
<br />
[link to optimization of protein expression]
<br />
Plate to Primary culture of TG1 (OIL8 transformed)
<br />
              </h2>
            </section>
            <section id = "july1" ref = " july1">
              <h3>
                Week 2
              </h3>
              <h2>
Docking of scFv with IL-8 was completed. Work on docking was tentatively over.
<br /><br />
08.07.23:  
<br />
Secondary culture at 8:30 AM.  
Timepoint for induction missed. 
<br />
Secondary culture in the evening. 
Induction at 1 AM (OD=0.67). 
Transform BL21 for higher protein production. 
<br /><br />
10.07.23 
<br />
Western Blot 
<br /><br />
11.07.2023 
<br />
Ran a Western blot.  
<br />
Presence of protein seen, but signal extremely low. 
<br />
Extremely low protein concentration in supernatant. 
<br />
[IMG]
<br /><br />
12.07.23:  
<br />
Plate to Primary culture at 12:30 AM. 
Secondary culture at 10:30AM. 
<br />
Competency protocol starts from 2 PM (At OD around 0.4). Two MCTs are stored in -80°C. 
Extracted plasmid quantified. 
<br /><br />
13.07.23:  
<br />
Transformation (from vial labelled iP3). 
Plated transformed cells and untransformed competent cells (control). 
<br />
Cells from single colonies patched Kan-LB-Agar plates at 12 PM.
<br /> 
Patched plates are kept in cold room after 10-11 hours of incubation. 
  
<br /><br />
14.07.23:  
<br />
Primary culture (5mL LB + Kanamycin) from the plate at 12:45 PM
<br />
Secondary culture at 9 PM 
<br />
Western Blot 
              </h2>
            </section>
            <section id = "july1" ref = " july1">
              <h3>
                Week 3
              </h3>
              <h2>
15.07.23:  
<br />
Induction with 1mM IPTG at 12:15 AM 
<br /><br />
16.07.2023 
<br />
Newly transformed BL21 sample obtained. 
<br />
Western blot started. 
<br /><br />
17.07.2023 
<br />
Western blot failed. 
<br /><br />
20.07.2023 
<br />
New western blot done. Strong signal observed. 
<br />
The presence of substantial amount of protein confirmed. 
<br />
[IMG]

 
<br /><br />
21.07.23 
<br />
Tried ammonium sulphate precipitation on sample. 
<br />
Optimization by running the precipitation at 40,50, 60, 65, and 70% saturated solutions. 
<br />
Good pellets observed in 60-70% range. 
<br />
Ran SDS-PAGE with all samples. 
<br />
A close-up of a blue square
<br />
Description automatically generated                                     

<br />
Bands only at   ̴31kDa. Better than expected. 
<br />
Ammonium sulphate precipitation shall be done at 70% saturation
              </h2>
            </section>
            <section id = "july1" ref = " july1">
              <h3>
                Week 4
              </h3>
              <h2>
22.07.2023 
<br />
Ammonium sulphate precipitation started, kept for overnight incubation. 
<br />
POA: Repeated culturing of RFP transformed DH5α under the hypothesis that with no antibiotic for selection, the plasmid will slowly be lost.
<br />
No change in OD after 3 sequential subcultures so untransformed DH5α sourced from Sem 1 Lab. 

 
<br /><br />
23.07.2023 
<br />
Protein pelleted at 5000rpm for 30 mins.  
<br />
Samples dissolved in fresh buffer and then desalted to remove excess salts. 
<br />
New column with Ni-NTA equilibrated with buffer, then kept for overnight binding with desalted sample. 

 
<br /><br />
24.07.2023 
<br />
Protein purified in tris-cl pH 8.0 buffer. 
<br />
Obtained elute E2 was desalted. 
<br />
The protein concentration was checked using nanodrop, was 2.42mg/mL. 
<br />
SDS-PAGE set up with all samples. 
              </h2>
            </section>


            </section>
            <section id = "august" ref = "august">
            <h1>
              August
            </h1>
            <h2>
                 
            </h2>
            <section id = "august1" ref = " august1">
              <h3>
                Week 1
              </h3>
              <h2>
03.08.2003
<br />

DH5α sourced from Rachit’s lab. Culturing and plating done.
<br /><br />
 

06.08.2023
<br />
Transformation performed for experiment 1. 
<br /><br />
 

07.08.2023 
<br />
Patching done satisfactory single colonies formed. 
              </h2>
            </section>
            <section id = "august1" ref = " august1">
              <h3>
                Week 2
              </h3>
              <h2>
Improvements were made to the Biobricks registry entries using Large Language Models and documentation of the same was made. 

PK-sim software was found for working on PK modelling, and tutorials for PK modelling were conducted.
<br /><br />
09.08.23 
<br />
Thawing of cells - stir in 37°C bath for about 1 minute (quickly, since it contains DMSO) 
<br />
Add 1ml of the culture to the cells slowly and gently mix them. 
<br />
Centrifuge at room temperature at 300g for 5 mins 
<br />
Add 2 ml of media to the pellet and resuspend. 
<br />
Transfer to culturing flask and add 2 ml more of media to ensure complete transfer. 
<br />
InterLab Calibration and Experiment 1 done.
<br /><br />
10.08.23 
<br />
Media will be turbid - growth of cells / contamination. 
<br />
Media would have changed color - indicates metabolic activity (acidic products) 
<br />
Transfer culture from a flask to falcon. 
<br />
Cells are pelleted, then resuspended gently in 5ml fresh media. 
<br />
Count cells. If cells are unhealthy, use trypan blue while counting. 
<br />
Make it 2×105 cells/ml, so 5ml in flask will have approximately a million cells. 

 <br /><br />

13.08.2023
<br />
Transformations performed for Experiment 2 and 3
<br /><br />
14.08.23 
<br />
Take 2ml of culture and centrifuge. Resuspend pellet in fresh media. 
<br />
Count cells. 
<br />
PMA helps in differentiation into macrophages. On adding PMA, mix well, since it tends to settle (contains DMSO)


              </h2>
            </section>
            <section id = "august1" ref = " august1">
              <h3>
                Week 3
              </h3>
              <h2>
15.08.23 

Cells have adhered to the culture plate. 

Remove media without touching the bottom. Wash cells gently with PBS. 

Add fresh media. 

Cells are ready for use after 24 hours. 

16.08.2023

InterLab protocols 2 and 3 completed.

21.08.2023 

IVT done CD36 and CD36 control, with satisfactory results. 
              </h2>
            </section>
            <section id = "august1" ref = " august1">
              <h3>
                Week 4
              </h3>
              <h2>
Breaking errors in the RiboTree tool were fixed (and reported to the creators). The RiboTree software was run on 4 sequences (Main sequence(seq), seq + 3' UTR, 5' + seq, and 5' + seq + 3').

26.08.2023 - 28.08.2023

Protein Expression protocol completed.

 
              </h2>
            </section>


            </section>
            <section id = "september" ref = "september">
            <h1>
              September
            </h1>
            <h2>
                 
            </h2>
            <section id = "september1" ref = " september1">
              <h3>
                Week 1
              </h3>
              <h2>
05.09.2023 
<br />
Protein pellet purification using urea extraction was performed in case the protein was localized in Inclusion Bodies (IBs). 
<br /><br />
06.09.2023 
<br />
SDS-PAGE performed on extracted pellet. 
<br />
[IMG]
<br />
Lane 1 - Ladder. 
<br />
Lane 2 - Unpurified pellet. 
<br />
Lane 3 - Urea extracted pellet. 
<br />
Protein bands not observed. Extraction has not changed anything, protein probably absent. 

              </h2>
            </section>
            <section id = "september1" ref = " september1">
              <h3>
                Week 2
              </h3>
              <h2>
11.09.2023:  
<br />
First run of DLS. 
<br />
IVT done for IL8 and IL8 control, with bad results. 
<br /><br />
14.09.2023 
<br />
Primer Reconstruction at Dipshikha’s Lab 
              </h2>
            </section>
            <section id = "september1" ref = " september1">
              <h3>
                Week 3
              </h3>
              <h2>
21.09.2023 
<br />
PCR products obtained, cloned from
              </h2>
            </section>
            <section id = "september1" ref = " september1">
              <h3>
                Week 4
              </h3>
              <h2>

              </h2>
            </section>


            </section>
            <section id = "october" ref = "october">
            <h1>
              October
            </h1>
            <h2>
                 
            </h2>
            <section id = "october1" ref = " october1">
              <h3>
                Week 1
              </h3>
              <h2>
04.10.2023 
<br />
IVT done for IL8 and IL8 control, with satisfactory results.  
<br /><br />
06.10.2023:  
<br />
Second Run of DLS, using the previous batch of LNPs. 
              </h2>
            </section>
            <section id = "october1" ref = " october1">
              <h3>
                Week 2
              </h3>
              <h2>
09.10.2023 
<br />
Third Run of LNP conjugation and DLS. 
<br /><br />
11.10.2023 
<br />
Third run of BLI was performed using protein extracted from transfected cells. 
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
</style>