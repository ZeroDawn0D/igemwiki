<template>
  <div>
    <div class="">
      <div
        class="courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32"
      >
        NOTEBOOK
      </div>
    </div>
    <!-- IMPORTANT CHANGE TO MAKE HERE-->
    <Scrollspy :currentPage="currentPage" initialSection="may">
      <div class="grid grid-cols-12 gap-4 p-8">
        <div class="col-span-3 max-md:hidden">
          <nav class="sticky overflow-auto h-screen top-16 border-r-8 py-8">
            <ul>
              <li>
                <div class="class-may cursor-pointer text-2xl" ref="mayButton">
                  May
                </div>
                <ul class="list-disc list-inside">
                  <li>
                    <div
                      class="class-may1 cursor-pointer text-md"
                      ref="may1Button"
                    >
                      Week 1
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-may1 cursor-pointer text-md"
                      ref="may1Button"
                    >
                      Week 2
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-may1 cursor-pointer text-md"
                      ref="may1Button"
                    >
                      Week 3
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-may1 cursor-pointer text-md"
                      ref="may1Button"
                    >
                      Week 4
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <div
                  class="class-june cursor-pointer text-2xl"
                  ref="juneButton"
                >
                  June
                </div>
                <ul class="list-disc list-inside">
                  <li>
                    <div
                      class="class-june1 cursor-pointer text-md"
                      ref="june1Button"
                    >
                      Week 1
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-june1 cursor-pointer text-md"
                      ref="june1Button"
                    >
                      Week 2
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-june1 cursor-pointer text-md"
                      ref="june1Button"
                    >
                      Week 3
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-june1 cursor-pointer text-md"
                      ref="june1Button"
                    >
                      Week 4
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <div
                  class="class-july cursor-pointer text-2xl"
                  ref="julyButton"
                >
                  July
                </div>
                <ul class="list-disc list-inside">
                  <li>
                    <div
                      class="class-july1 cursor-pointer text-md"
                      ref="july1Button"
                    >
                      Week 1
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-july1 cursor-pointer text-md"
                      ref="july1Button"
                    >
                      Week 2
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-july1 cursor-pointer text-md"
                      ref="july1Button"
                    >
                      Week 3
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-july1 cursor-pointer text-md"
                      ref="july1Button"
                    >
                      Week 4
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <div
                  class="class-august cursor-pointer text-2xl"
                  ref="augustButton"
                >
                  August
                </div>
                <ul class="list-disc list-inside">
                  <li>
                    <div
                      class="class-august1 cursor-pointer text-md"
                      ref="august1Button"
                    >
                      Week 1
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-august1 cursor-pointer text-md"
                      ref="august1Button"
                    >
                      Week 2
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-august1 cursor-pointer text-md"
                      ref="august1Button"
                    >
                      Week 3
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-august1 cursor-pointer text-md"
                      ref="august1Button"
                    >
                      Week 4
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <div
                  class="class-september cursor-pointer text-2xl"
                  ref="septemberButton"
                >
                  September
                </div>
                <ul class="list-disc list-inside">
                  <li>
                    <div
                      class="class-september1 cursor-pointer text-md"
                      ref="september1Button"
                    >
                      Week 1
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-september1 cursor-pointer text-md"
                      ref="september1Button"
                    >
                      Week 2
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-september1 cursor-pointer text-md"
                      ref="september1Button"
                    >
                      Week 3
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-september1 cursor-pointer text-md"
                      ref="september1Button"
                    >
                      Week 4
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <div
                  class="class-october cursor-pointer text-2xl"
                  ref="octoberButton"
                >
                  October
                </div>
                <ul class="list-disc list-inside">
                  <li>
                    <div
                      class="class-october1 cursor-pointer text-md"
                      ref="october1Button"
                    >
                      Week 1
                    </div>
                  </li>
                  <li>
                    <div
                      class="class-october1 cursor-pointer text-md"
                      ref="october1Button"
                    >
                      Week 2
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-span-9 max-md:col-span-12 text-justify text-xl">
          <section>
            <h1>Key</h1>
            <span
              class="inline-block w-80 bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >Dry Lab</span
            ><br />
            <span
              class="inline-block w-80 bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >Transformation Team</span
            ><br />
            <span
              class="inline-block w-80 bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >Protein Purification Team</span
            ><br />
            <span
              class="inline-block w-80 bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >IVT Team</span
            ><br />
            <span
              class="inline-block w-80 bg-purple-300 border-l-4 border-purple-800 pl-1 pr-1 pb-1 pt-1"
              >LNP Team</span
            ><br />
            <span
              class="inline-block w-80 bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >Western Blot Team</span
            ><br />
            <span
              class="inline-block w-80 bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >InterLab Team</span
            ><br />
            <span
              class="inline-block w-80 bg-orange-300 border-l-4 border-orange-800 pl-1 pr-1 pb-1 pt-1"
              >Mammalian Cell Culture</span
            >
            <br /><br />
          </section>
          <section id="may" ref="may">
            <h1>May</h1>
            <section id="may1" ref=" may1" class="pb-2">
              <h3>Week 1</h3>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                Discussion and tutorial of manual homology modelling using
                Modeller was conducted, and modelling was started on the chain C
                of 6Y6C template.
              </h2>
            </section>
            <section id="may1" ref=" may1" class="pb-2">
              <h3>Week 2</h3>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                iGEM IISc GitHub Organization was formed for better
                collaboration and task management. Antibody and aptide sequences
                were shared with the members, along with resources for basic
                concepts in pharmacokinetics.
              </h2>
            </section>
            <section id="may1" ref=" may1" class="pb-2">
              <h3>Week 3</h3>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>15.05.23</b>
                <br />
                Started training on <i>M. smegmatis</i>: Medium: 7H9+ ADC salts,
                prepared primary cultures.
                <br />
                <b>16.05.23</b>
                <br />
                Plated bacteria on agar-LB plates.
                <br />
                <b>18.05.23</b>
                <br />
                Streak plates observed- single colonies obtained.
                <br />
                <b>19.05.23</b>
                <br />
                Make secondary culture.
                <br />
                <b>21.05.23</b>
                <br />
                Overgrowth, so reinoculated.
              </h2>
            </section>
            <section id="may1" ref=" may1" class="pb-2">
              <h3>Week 4</h3>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                The team conducted another run of the Signal peptide with the
                antibody sequence through SignalP6.0 instead of SignalP 5.0,
                which was previously used. The results were still excellent and
                indicative of our using the CD33 peptide. Various papers
                detailing use and optimisation of LNPs for delivery were
                discussed.
              </h2>
              <h2
                class="bg-purple-300 border-l-4 border-purple-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>22.05.2023</b>
                <br />
                Observing the process of iLNP device Preparation.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>23.05.23</b>
                <br />
                Protein Purification training as Debasis's lab.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>24.05.23</b>
                <br />
                IVT training
                <br /><br />
                <b>10:00 AM</b>
                <br />
                Two tubes are taken.
                <br />
                <ul></ul>
                TUBE 1: Unmodified mRNA (Control)
                <br />
                TUBE 2: N1-Methylpseudo-Uridine modified mRNA (RNA used for
                Mammalian Cells)
                <br />
                DNA: 1µg (Linearized)
                <figure
                  class="grid grid-cols-2 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8"
                >
                  <img
                    class="h-auto w-3/4"
                    src="https://static.igem.wiki/teams/4829/wiki/pages-photos/notebook/ivt-training-data.png"
                    alt="image description"
                  />
                  <figcaption class="mt-2 text-sm">
                    TriLink: 3µM N1-Mpseudo-UTP, Check Sapala's Concentration.
                    (4:1 Cap to GTP ratio most likely)
                  </figcaption>
                </figure>
                2µL: ATP, GTP (15 mM), UTP/N1-Mpseudo-UTP, CTP,10X Reaction
                Buffer (Thawed and kept on ice.)
                <br />
                <ul class="list-disc ml-10">
                  <li>Assembly at Room Temperature.</li>
                </ul>
                20 µL water + 2µL Ribonucleotide Solutions + 10X Buffer (2µL)
                <ul class="list-disc ml-10">
                  <li>
                    Buffer tends to ppt. DNA, Vortex till white ppt. is not
                    seen. Give it a short spin.
                  </li>
                </ul>
                2µL enzyme mix (Spin/Room Temperature)
                <ul class="list-disc ml-10">
                  <li>
                    Incubate for 3 hours (10:45 AM- 2:00 PM) at 37C. <br />Usual
                    yield:
                    <ul class="list-disc ml-10">
                      <li>
                        µg/20µL reaction (Lin DNA) gives
                        <ul class="list-disc ml-10">
                          <li>Unmodified mRNA >1µg/µL</li>
                          <li>Pseudouridine modified mRNA around 1µg/µL.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <b>2:00 PM</b>
                <br />
                Impure RNA + 1µL of DNase (37 C for 15 mins)
                <ul class="list-disc ml-10">
                  <li>
                    Elution in 25-30µL for a higher concentration of yield (for
                    1kb). RNA Gel Electrophoresis (Demonstration later):
                    <ul class="list-disc ml-10">
                      <li>
                        Lin-DNA | Impure RNA (Without DNase) | Pure RNA (With
                        DNase digestion)
                      </li>
                      <li>Run Gel to check the purity of RNA.</li>
                    </ul>
                  </li>
                  <li>
                    For our RNA purification we will use the MegaClear Kit
                    (Simple protocol)
                    <br />
                    LiCl precipitation was done for RNA Purification today.
                  </li>
                </ul>
                <b>2:15 PM</b>
                <br />
                Pure RNA + 30µL water + 30µL LiCl (ThermoFisher 7.5M: available
                in kit)
                <ul class="list-disc ml-10">
                  <li>Kept for 1 hour at -20 C.</li>
                </ul>
                <b>3:15 PM</b>
                <ul class="list-disc ml-10">
                  <li>Centrifuge at 4 C/16000g for 15 mins.</li>
                  <li>
                    Discard the Supernatant and wash the pellet with ice-cold
                    70% ethanol.
                  </li>
                  <li>Resuspend in Nuclease-free water at 65 C.</li>
                </ul>
                Check yield in Nanodrop One Spectrophotometer.
                <br />
                Resultant Yield:
                <br />
                Unmodified (Control) mRNA: 1.7786µg/µL
                <br />
                Pseudouridine Modified mRNA: 1.3737µg/µL.
              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>26.05.23</b>
                <br />
                Competency/ Transformation training at DC lab.
                <br />
                <b>27.05.23</b>
                <br />
                Brought RFP (plate done and extracted plasmid)
                <br />
                <b>28.05.23</b>
                <br />
                Cultures inoculated from TG1 culture were obtained from DC lab.
                <br />
                OD readings recorded: 6pm: S1: 0.253; 9pm: S1: 0.207, S2: 0.206
                <br />
                Streak plate made for cultures.
                <br />
                Incubation at 37°C: 180rpm
                <br />
                Overnight culture: 12 hours incubation.
                <br />
                <b>29.05.23</b>
                <br />
                Culture revival: normal inoculation into LB, 8-hour growth,
                harvest.: Training
                <br />
                OD still at 0.2 for new cultures.
                <br />
                Single colonies obtained; new primary cultures seeded.
                <br />
                <b>30.05.23</b>
                <br />
                Further tests on streaked RFP plate obtained from DC lab,
                colonies extracted and patched in new ampicillin plate- growth
                in all patches, no fluorescence: Contamination confirmed.
                <br />
                BL21 requested from Debasish Lab.
              </h2>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                The team conducted another run of the Signal peptide with the
                antibody sequence through SignalP6.0 instead of SignalP 5.0,
                which was previously used. The results were still excellent and
                indicative of our using the CD33 peptide. Various papers
                detailing use and optimisation of LNPs for delivery were
                discussed.
              </h2>
            </section>
          </section>

          <section id="june" ref="june">
            <h1>June</h1>
            <h2></h2>
            <section id="june1" ref=" june1" class="pb-2">
              <h3>Week 1</h3>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                Papers about the working of generalised mRNA-LNP delivery
                systems in mRNA therapy with considerations in specific diseases
                and the PK-PD analysis and LNP-mRNA delivery by intraperitoneal
                administration were discussed.
              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>01.06.23</b>
                <br />
                Plates and agar autoclaved: plates prepared.
                <br />
                BL21 acquired.
                <br />
                Primary culture seeded and streak plate prepared from stock.
                <br />
                <b>02.06.23</b>
                <br />
                Single colonies obtained in streak plate of BL21, culturing
                done.
                <br />
                <b>03.06.23</b>
                <br />
                TG1 and BL21 reach stationary phase, reinoculated at 12PM.
                <br />
                OD (6PM): 0.06
                <br />
                O-IL8-15 plasmid streak plate + culture brought to 3rd Sem lab.
                <br />
                <b>04.06.23</b>
                <br />
                OD reached 0.3 for BL21 & TG1. Transformation trial 1 initiated
                in BSL2.
                <br />
                Stocks made for BL21 and TG1, stored at -80°C.
                <br />
                One stock of each strain revived, and transformation protocol
                followed with RFP/Ampicillin.
                <br />
                Spread plates prepared.
                <br />
                <b>05.06.23</b>
                <br />
                Note: put control plates for confirmation.
                <br />
                BL21 overgrowth, TG1 undergrowth, Transformation failed.
              </h2>
            </section>
            <section id="june1" ref=" june1" class="pb-2">
              <h3>Week 2</h3>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                Papers about IL-8 concentrations in various stages of
                endometriosis and harmful concentrations of IL-8 were discussed.
                Modelling documentation completed and comparative analysis runs
                performed.
              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>08.06.23</b>
                <br />
                Old unused cultures disposed in bleach.
                <br />
              </h2>
            </section>
            <section id="june1" ref=" june1" class="pb-2">
              <h3>Week 3</h3>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>16.06.23</b>
                <br />
                Revived BL21 Arctic Express transformed with
                Ampicillin/Gentamycin GFP.
                <br />
                <b>17.06.23</b>
                <br />
                Plated revived culture to check transformation.
                <br />
                Considering revived solution as primary: secondary inoculated at
                2PM, extraction at 4AM Considering revived solution as stock:
                primary inoculated at 2PM, secondary inoculated at 11.50PM,
                extraction at 2PM.
                <br />
                Contacted Vinod Sir for missing chemicals. Received by evening,
                thanks to sir.
                <br />
                <b>18.06.23</b>
                <br />
                Alkaline Plasmid Extraction Protocol Attempted twice.
                <br />
                Run 1: Precipitate obtained but single line (close to well)
                obtained in Agar Gel, so genome precipitated instead of plasmid
                (should have shown 3 lines)
                <br />
                Run 2: Precipitate not obtained, possibly because isopropanol is
                light dependent, and due to ineffectiveness of precipitating
                agent, no DNA was precipitated.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>19.06.2023</b>
                <ul class="list-disc ml-10">
                  <li>
                    Learned how to prepare the SDS Page gel in the first
                    semester lab.
                  </li>
                  <li>
                    Things to keep in mind:
                    <ol class="list-decimal ml-10">
                      <li>
                        Use water to check if the gel apparatus is leaking.
                      </li>
                      <li>Must find out percentage of SDS to be used.</li>
                    </ol>
                  </li>
                </ul>
                <b>20.06.2023</b>
                <ul class="list-disc ml-10">
                  <li>
                    We got 1g of pellet of transformed bacteria from the
                    Debasis's lab, and started the first dry run of purification
                    of His-tagged Ferredoxin protein
                  </li>
                </ul>
              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>21.06.23</b>
                <br />
                Run 1 negative result received.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>21.06.23</b>
                <ul class="list-disc ml-10">
                  <li>
                    Prepared the required buffers according to the protocol.
                  </li>
                  <li>
                    Performed lysis and centrifugation, collected samples for
                    SDS Page
                  </li>
                  <li>
                    1mL of Ni resin bed and 7 mL of supernatant kept for
                    overnight tumbling.
                  </li>
                </ul>
              </h2>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                Papers about mRNA-LNP delivery systems and immunogenicity of
                LNPs were discussed.
              </h2>
            </section>
            <section id="june1" ref=" june1" class="pb-2">
              <h3>Week 4</h3>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                Our antibody-antigen was computationally too demanding for
                Autodock, which is generally used with small ligands. Our ligand
                (IL8) has somewhere around 2000 atoms. We turned to several web
                servers, including Patchdock (+Firedock), DockRMSD, ClusPro,
                ZDOCK and GRAMM. Out of these, GRAMM worked for us and provided
                seemingly good results.
              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>22.06.23</b>
                <br />
                Plasmid extraction using kit.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>22.06.23</b>
                <ul class="list-disc ml-10">
                  <li>
                    The resin bed had lost its original blue color indicating
                    successful binding of the protein.
                  </li>
                  <li>
                    After draining the supernatant from the column, we ran 2
                    wash buffers (7 ml each), and 4 x 1 ml of elution buffer.
                  </li>
                  <li>
                    The second elute was brownish red in colour indicating
                    presence of Ferredoxin.
                  </li>
                  <li>Collected samples for SDS Page</li>
                  <li>Performed SDS Page using gel prepared 2 days back.</li>
                  <li>
                    SDS Page failed; the samples diffused sideways once they
                    entered the stacking gel. Troubleshooting:
                    <ol class="list-decimal ml-10">
                      <li>Old gel: we prepared new gel.</li>
                      <li>
                        The power supply kept stopping and did not provide a
                        continuous current.
                      </li>
                    </ol>
                  </li>
                  <li>
                    Things to keep in mind:
                    <ol class="list-decimal ml-10">
                      <li>Use freshly prepared gel for SDS Page</li>
                      <li>
                        Keep checking if the power supply is working at regular
                        intervals.
                      </li>
                    </ol>
                  </li>
                </ul>
              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>23.06.23</b>
                <br />
                More plasmid extraction.
                <br />
                Ran gel, successful plasmid extraction.
                <br />
                Nanodrop: Readings 1.95, 2.03
                <br />
                Concentration: 25 ng/mL
                <br />
                Competent cells prepared, and Transformation done. Stocks
                stored.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>23.06.23</b>
                <ul class="list-disc ml-10">
                  <li>
                    Prepared the solutions required to make the SDS Gel and
                    prepared the gel.
                  </li>
                  <li>
                    The gel was not set even after adding more amounts of TEMED
                    and waiting for over an hour.
                  </li>
                  <li>
                    Troubleshooting:
                    <ol class="list-decimal ml-10">
                      <li>
                        We were using an old APS powder to prepare 10% APS; we
                        got new APS from another lab.
                      </li>
                      <li>
                        On checking, the pH of the pre-prepared Tris-Cl buffer
                        (pH 8.8) was over 10; we prepared fresh Tris-Cl buffer
                        and adjusted the pH to 8.8.
                      </li>
                      <li>
                        The gel kept leaking due to issues with the apparatus;
                        we sealed the bottom of the gel running module (the
                        plates) with parafilm first and finally with agar.
                      </li>
                    </ol>
                  </li>
                  <li>
                    The new gel gave better results, except for some minor
                    issues with the power supply.
                  </li>
                  <li>
                    Prepared the staining and de-staining solution and kept the
                    gel in the staining solution for one hour and in the
                    de-staining solution overnight.
                  </li>
                  <li>
                    One of the gels did not de-stain properly, since the old
                    staining solution was used.
                  </li>
                  <li>
                    Things to keep in mind:
                    <ol class="list-decimal ml-10">
                      <li>
                        Always check the manufacturing and expiration date of
                        the chemicals being used.
                      </li>
                      <li>
                        Use freshly prepared solutions, especially those that
                        must have a specific pH.
                      </li>
                    </ol>
                  </li>
                  <li>
                    After de-staining:
                    <figure
                      class="grid grid-cols-2 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8"
                    >
                      <img
                        class="h-auto w-3/4"
                        src="https://static.igem.wiki/teams/4829/wiki/pages-photos/notebook/2306gel1.jpg"
                        alt="Gel 1"
                      />
                      <figcaption class="mt-2 text-sm">Gel 1</figcaption>
                    </figure>
                    <figure
                      class="grid grid-cols-2 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8"
                    >
                      <img
                        class="h-auto w-3/4"
                        src="https://static.igem.wiki/teams/4829/wiki/pages-photos/notebook/2306gel1.jpg"
                        alt="Gel 2"
                      />
                      <figcaption class="mt-2 text-sm">Gel 2</figcaption>
                    </figure>
                    <figure
                      class="grid grid-cols-1 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8"
                    >
                      <img
                        class="h-auto w-3/4"
                        src="https://static.igem.wiki/teams/4829/wiki/pages-photos/notebook/2306gel3.png"
                        alt="image description"
                      />
                    </figure>
                  </li>
                </ul>
                <ul class="list-disc ml-10">
                  <li>1: After sonication</li>
                  <li>2: After centrifugation</li>
                  <li>3: Resuspended pellet</li>
                  <li>FT: Flowthrough received after overnight binding</li>
                  <li>W1: FT after Wash 1</li>
                  <li>W2: FT after Wash 2</li>
                  <li>E1: Elute received after first round of elution.</li>
                  <li>E2: Elute received after second round of elution.</li>
                  <li>E3: Elute received after third round of elution.</li>
                </ul>
              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>24.06.23</b>
                <br />
                Transformation successful, and Patching done.
                <br />
                Cultures are seeded for protein expression.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>24.06.23</b>
                <ul class="list-disc ml-10">
                  <li>Protein purified in tris-cl pH 8.0 buffer.</li>
                  <li>Obtained elute E2 was desalted.</li>
                  <li>
                    The protein concentration was checked using nanodrop, was
                    2.42mg/ml.
                  </li>
                  <li>SDS-PAGE set up with all samples.</li>
                </ul>
              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>25.06.23</b>
                <br />
                Protein Expression/ Production was failing, even after IPTG
                induction, in both fast and slow induction protocols.
                <br />
                Tried skimmed milk broth instead, no observable changes.
                <br />
                Fluorescence seen after pelleting down and GFP expression
                confirmed. (SM broth had no visible GFP production even after
                pelleting)
                <br />
                New IPTG obtained from DC lab.
                <br />
                For protein expression: 25°C is best.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>25.06.23</b>
                <ul class="list-disc ml-10">
                  <li>Faint bands at 31kDa observed in purified samples.</li>
                </ul>
              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>26.06.23</b>
                <br />
                TG1 cells and transformed DH5a: primary cultures prepped, DH5a
                secondary prepped.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>26.06.23</b>
                <!-- <br />
                BLI performed on the purified sample using Ni-NTA tips.
                <br />
                Data obtained with large error due to release of the protein
                from tips.
                <br />
                Decided to use PBS for eluting instead, since proteins usually
                have better stability in PBS.
                <br />
                Performed another SDS page using the dialyzed E2 sample.
                <br /> -->
                <ul class="list-disc ml-10">
                  <li>
                    BLI performed on the purified sample using Ni-NTA tips.
                  </li>
                  <li>
                    Data obtained with large error due to release of the protein
                    from tips.
                  </li>
                  <li>
                    Decided to use PBS for eluting instead, since proteins
                    usually have better stability in PBS.
                  </li>
                  <li>
                    Performed another SDS page using the dialyzed E2 sample.
                  </li>
                </ul>
                <figure
                  class="grid grid-cols-1 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8"
                >
                  <img
                    class="h-auto w-3/4"
                    src="https://static.igem.wiki/teams/4829/wiki/pages-photos/notebook/2606gel.png"
                    alt="image description"
                  />
                </figure>
              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>27.06.23</b>
                <br />
                Transformation carried out using stock of competent cells. TG1
                and BL21 transformed.
                <br />
                The original secondary pellet washed out, so a new batch is
                prepared.
                <br />
                The new batch did not produce enough pellets.
                <br />
                New batch prepped, to be incubated till OD reaches 0.5.
                <br />
                Transformation trial 3, TG1 transformed and plated.
                <br />
                GFP cultures pelleted and stored at -20°C.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>27.06.23</b>
                <ul class="list-disc ml-10">
                  <li>
                    Got the GFP pellet, and started the second dry run: GFP
                    extraction and purification.
                  </li>
                  <li>Performed lysis, sonication, and centrifugation.</li>
                  <li>Kept the supernatant for overnight binding.</li>
                  <li>Collected the flowthrough.</li>
                  <li>Washed with 2 wash buffers.</li>
                  <li>Performed elution 4 times with 1ml of elution buffer.</li>
                  <li>E2 was greenish, indicating the presence of GFP.</li>
                  <li>Collected samples for SDS Page</li>
                </ul>
              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>28.06.23</b>
                <br />
                Gel run with plasmid: only one band seen, but plates show
                growth.
                <br />
                Patching done.
                <br />
                Primary and secondary cultures prepped for protein purification.
                Since there is no idea about the level of protein production,
                the first batch of 10mL bacteria is cultured, with 4mL uninduced
                control.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>28.06.23</b>
                <ul class="list-disc ml-10">
                  <li>SDS PAGE for the collected samples</li>
                  <li>
                    Multiple bands in the pellet resuspension, the supernatant
                    and the flowthrough are observed.
                  </li>
                  <li>
                    A single band in the E2 indicating the presence of GFP is
                    seen.
                  </li>
                  <li>
                    Streaked pellet lane due to lack of reducing medium
                    (β-mercaptoethanol not added).
                  </li>
                </ul>
                <figure
                  class="grid grid-cols-1 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8"
                >
                  <img
                    class="h-auto w-3/4"
                    src="https://static.igem.wiki/teams/4829/wiki/pages-photos/notebook/2806gel.png"
                    alt="image description"
                  />
                </figure>
              </h2>
              <h2
                class="bg-purple-300 border-l-4 border-purple-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>29.06.2023</b>
                <br />
                Made a few devices.
              </h2>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                Our antibody-antigen was computationally too demanding for
                Autodock, which is generally used with small ligands. Our ligand
                (IL8) has somewhere around 2000 atoms. We turned to several web
                servers, including Patchdock (+Firedock), DockRMSD, ClusPro,
                ZDOCK and GRAMM. Out of these, GRAMM worked for us and provided
                seemingly good results.
              </h2>
            </section>
          </section>
          <section id="july" ref="july">
            <h1>July</h1>
            <h2></h2>
            <section id="july1" ref=" july1" class="pb-2">
              <h3>Week 1</h3>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>1.07.2023</b>
                <ul class="list-disc ml-10">
                  <li>
                    Received 200 ml of transformed and induced bacterial culture
                    (pH=7.4) from the Bacterial transformation team.
                  </li>
                  <li>
                    Centrifuged the culture and collected the supernatant since
                    it is a secreted protein.
                  </li>
                  <li>
                    Buffer selection options: (pH chosen greater than pI).
                    <ul class="list-disc ml-10">
                      <li>Phosphate buffer, pH=8</li>
                      <li>Tris-Cl buffer, pH=8</li>
                      <li>PBS buffer, pH=7.4</li>
                    </ul>
                  </li>
                  <li>
                    Additives:
                    <ul class="list-disc ml-10">
                      <li>PMSF – protease inhibitor</li>
                      <li>β-mercaptoethanol – reducing agent</li>
                      <li>Glycerol</li>
                    </ul>
                  </li>
                  <li>
                    Ran 3 purification trials with composition of the various
                    buffers being as follows:
                    <ul class="list-disc ml-10">
                      <li>Resin: 0.5 mL/trial</li>
                      <li>Buffer: 50mM</li>
                      <li>NaCl: 300mM</li>
                      <li>Glycerol: 10%</li>

                      <li>
                        Equilibration Buffers:
                        <ul class="list-disc ml-10">
                          <li>Buffer: 50mM</li>
                          <li>NaCl: 300mM</li>
                          <li>Glycerol: 10%</li>
                          <li>MilliQ water</li>
                        </ul>
                      </li>
                      <li>
                        Wash Buffer:
                        <ul class="list-disc ml-10">
                          <li>Imidazole: 20mM/40mM</li>
                          <li>NaCl: 300mM</li>
                          <li>Glycerol: 10%</li>
                          <li>MilliQ water</li>
                        </ul>
                      </li>
                      <li>
                        Elution Buffer:
                        <ul class="list-disc ml-10">
                          <li>Imidazole: 300mM</li>
                          <li>NaCl: 300mM</li>
                          <li>Glycerol: 10%</li>
                          <li>Buffer: 50mM</li>
                          <li>MilliQ water</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Prepared 3 SDS gels and loaded the wells with respective
                    samples.
                  </li>
                </ul>
              </h2>
              <h2
                class="bg-purple-300 border-l-4 border-purple-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>1.07.2023</b>
                <br />
                Made the iLNP device.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>02.07.2023</b>
                <ul class="list-disc ml-10">
                  <li>No bands were seen in any of the three gels.</li>
                  <li>
                    Tris buffer:
                    <figure
                      class="grid grid-cols-1 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8"
                    >
                      <img
                        class="h-auto w-3/4"
                        src="https://static.igem.wiki/teams/4829/wiki/pages-photos/notebook/trisgel.jpg"
                        alt="image description"
                      />
                    </figure>
                  </li>
                  <li>
                    PBS buffer:
                    <figure
                      class="grid grid-cols-1 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8"
                    >
                      <img
                        class="h-auto w-3/4"
                        src="https://static.igem.wiki/teams/4829/wiki/pages-photos/notebook/pbsgel.jpg"
                        alt="image description"
                      />
                    </figure>
                  </li>
                  <li>
                    Phosphate Buffer:
                    <figure
                      class="grid grid-cols-1 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8"
                    >
                      <img
                        class="h-auto w-3/4"
                        src="https://static.igem.wiki/teams/4829/wiki/pages-photos/notebook/phosgel.jpg"
                        alt="image description"
                      />
                    </figure>
                  </li>
                  <li>No bands observed, protein absent.</li>
                </ul>
                <b>03.07.2023</b>
                <br />
                Troubleshooting:
                <ul class="list-disc ml-10">
                  <li>
                    Check protein in pellet vs supernatant – reducing SDS-PAGE.
                  </li>
                  <li>Increase binding time.</li>
                  <li>
                    Mix supernatant with lysis buffer, centrifuge and purify
                    again.
                  </li>
                  <li>
                    PBS used for further troubleshooting. Lysis buffer with
                    β-mercaptoethanol prepared.
                  </li>
                  <li>SDS-PAGE setup failed.</li>
                </ul>
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>03.07.2023</b>
                <br />
                Western Blot
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>04.07.2023</b>
                <ul class="list-disc ml-10">
                  <li>New samples mixed with lysis buffer purified.</li>
                  <li>SDS-PAGE and western blot started.</li>
                </ul>
                <b>05.07.2023</b><br />
                <ul class="list-disc ml-10">
                  <li>SDS-PAGE negative, no bands seen.</li>
                  <li>Western blot negative.</li>
                  <li>Ran another Western blot.</li>
                </ul>
                <b>06.07.2023</b>
                <br />
                <ul class="list-disc ml-10">
                  <li>Western blot negative again.</li>
                </ul>
              </h2>
              <h2
                class="bg-purple-300 border-l-4 border-purple-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>06.07.2023</b>
                <br />
                Plasma Bonding.
              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>07.07.2023</b>
                <br />
                Optimization of IPTG concentrations for induction.
                <br />
                <a href="https://static.igem.wiki/teams/4829/wiki/pdf/protein-expression.pdf" class="underline">Link to protocol for optimization of protein expression.</a>
                <br />
                Plate to Primary culture of TG1 (OIL8 transformed)
                <br />
              </h2>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                Data about PK and PD of LNPs was shared. Documentation of
                reasons for targeting IL-8 was completed.
              </h2>
            </section>
            <section id="july1" ref=" july1" class="pb-2">
              <h3>Week 2</h3>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                Docking of scFv with IL-8 was completed. Work on docking was
                tentatively over.
              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>08.07.23</b>
                <br />
                Secondary culture at 8:30 AM. 
                <br>Timepoint for induction missed.
                <br />
                Secondary culture in the evening. 
                <br>Induction at 1 AM (OD=0.67).
                <br>Transform BL21 for higher protein production.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>10.07.23</b>
                <br />
                Western Blot
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>11.07.2023</b>
                <ul class="list-disc ml-10">
    <li>Ran a Western blot.</li>
    <li>Presence of protein seen, but signal extremely low.</li>
    <li>Extremely low protein concentration in supernatant.
        <figure class="grid grid-cols-1 w-3/4 relative left-2/4 -translate-x-2/4 my-8">
            <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/pages-photos/notebook/1107gel.jpg" alt="image description">
        </figure>
    </li>
</ul>
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>12.07.23</b>
                <br />
                Plate to Primary culture at 12:30 AM. Secondary culture at
                10:30AM.
                <br />
                Competency protocol starts from 2 PM (At OD around 0.4). Two
                MCTs are stored in -80°C. Extracted plasmid quantified.
                <br>
                <b>13.07.23</b>
                <br />
                Transformation (from vial labelled iP3). Plated transformed
                cells and untransformed competent cells (control).
                <br />
                Cells from single colonies patched Kan-LB-Agar plates at 12 PM.
                <br />
                Patched plates are kept in cold room after 10-11 hours of
                incubation.
                <br /><b>14.07.23</b>
                <br />
                Primary culture (5mL LB + Kanamycin) from the plate at 12:45 PM.
                <br />
                Secondary culture at 9 PM.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>14.07.23</b>
                <br />
                Western Blot
              </h2>
            </section>
            <section id="july1" ref=" july1" class="pb-2">
              <h3>Week 3</h3>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>15.07.23</b>
                <br />
                Induction with 1mM IPTG at 12:15 AM
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>16.07.2023</b>
                <ul class="list-disc ml-10">
                  <li>Newly transformed BL21 sample obtained.</li>
                  <li>Western blot started.</li>
                </ul>
                <b>17.07.2023</b>
                <br />
                <ul class="list-disc ml-10">
                  <li>Western blot failed.</li>
                </ul>
                <b>20.07.2023</b>
                <ul>
                  <li>New western blot done. Strong signal observed.</li>
                  <li>The presence of substantial amount of protein confirmed.
                    <figure class="grid grid-cols-1 w-3/4 relative left-2/4 -translate-x-2/4 my-8">
                        <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/pages-photos/engineering/bact-blot.png" alt="image description">
                    </figure>
                  </li>
                </ul>
                <b>21.07.23</b>
                <ul class="list-disc ml-10">
                    <li>Tried ammonium sulfate precipitation on sample.</li>
                    <li>Optimization by running the precipitation at 40%, 50%, 60%, 65%, and 70% saturated solutions.</li>
                    <li>Good pellets observed in 60-70% range.</li>
                    <li>Ran SDS-PAGE with all samples.
                      <figure class="grid grid-cols-1 w-3/4 relative left-2/4 -translate-x-2/4 my-8">
                            <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/pages-photos/engineering/gelammonium-sulp.jpg" alt="image description">
                        </figure>
                    </li>
                    <li>Bands only at ~31kDa. Better than expected.</li>
                    <li>Ammonium sulfate precipitation shall be done at 70% saturation</li>
                </ul>

              </h2>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                Papers relating IL-8 levels with active lesion score and stage
                of endometriosis were discussed.
              </h2>
            </section>
            <section id="july1" ref=" july1" class="pb-2">
              <h3>Week 4</h3>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>22.07.2023</b>
                <br />
                <ul class="list-disc ml-10">
                  <li>Ammonium sulphate precipitation started, kept for overnight
                incubation.</li>
                </ul>
              </h2>
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>22.07.2023</b>
                <ul class="list-disc ml-10">
                  <li>POA: Repeated culturing of RFP transformed DH5α under the
                hypothesis that with no antibiotic for selection, the plasmid
                will slowly be lost.</li>
                  <li>No change in OD after 3 sequential subcultures so untransformed
                DH5α sourced from Sem 1 Lab.</li>
                </ul>
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>23.07.2023</b>
                <ul class="list-disc ml-10">
    <li>Protein pelleted at 5000rpm for 30 mins.</li>
    <li>Samples dissolved in fresh buffer and then desalted to remove excess salts.</li>
    <li>New column with Ni-NTA equilibrated with buffer, then kept for overnight binding with desalted sample.</li>
</ul>

                <b>24.07.2023</b>
                <ul class="list-disc ml-10">
    <li>Protein purified in Tris-Cl pH 8.0 buffer.</li>
    <li>Obtained elute E2 was desalted.</li>
    <li>The protein concentration was checked using a nanodrop, was 2.42 mg/mL.</li>
    <li>SDS-PAGE set up with all samples.</li>
</ul>
                
                <b>25.07.2023</b> 
                <ul class="list-disc ml-10">
    <li>BLI performed on the purified sample using Ni-NTA tips.</li>
    <li>Data obtained with large error due to the release of the protein from tips.</li>
    <li>Decided to use PBS for eluting instead, since proteins usually have better stability in PBS.</li>
</ul>

              </h2>
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>28.07.2023</b> <br>
                Tests for viability of expired chloramphenicol stocks
                using zone of clearance technique. Stock is viable.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>29.07.2023</b> 
                <ul class="list-disc ml-10">
    <li>Protein purification is performed with spin columns.</li>
    <li>PBS used for elution.</li>
    <li>SDS-PAGE set up.</li>
</ul>

                
                <b>31.07.2023 </b>
                <ul class="list-disc ml-10">
    <li>BLI performed on freshly purified sample.</li>
    <li>Bad data from BLI, protein dissociated more in PBS compared to Tris-Cl buffer.</li>
</ul>

              </h2>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                Discussion of plans to simulate the structure of LNP with mRNA
                was held.
              </h2>
            </section>
          </section>
          <section id="august" ref="august">
            <h1>August</h1>
            <h2></h2>
            <section id="august1" ref=" august1" class="pb-2">
              <h3>Week 1</h3>
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>03.08.2003</b>
                <br />

                DH5α sourced from Rachit’s lab. Culturing and plating done.
                <br />

                <b>06.08.2023</b>
                <br />
                Transformation performed for experiment 1.
                <br />

                <b>07.08.2023</b>
                <br />
                Patching done satisfactory single colonies formed.
              </h2>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                Modelling softwares for pharmacokinetic models were found. All
                dependencies for Ribotree were installed for the purpose of mRNA
                optimization. Aptide and Fibronectin EDB docking was completed.
              </h2>
            </section>
            <section id="august1" ref=" august1" class="pb-2">
              <h3>Week 2</h3>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                Improvements were made to the Biobricks registry entries using
                Large Language Models and documentation of the same was made.
                <br>
                PK-sim software was found for working on PK modelling, and
                tutorials for PK modelling were conducted.
              </h2>
              <h2
                class="bg-orange-300 border-l-4 border-orange-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>09.08.23</b>
                <ul class="list-disc ml-10">
    <li>Thawing of cells - stir in 37°C bath for about 1 minute (quickly, since it contains DMSO).</li>
    <li>Add 1 ml of the culture to the cells slowly and gently mix them.</li>
    <li>Centrifuge at room temperature at 300g for 5 mins.</li>
    <li>Add 2 ml of media to the pellet and resuspend.</li>
    <li>Transfer to culturing flask and add 2 ml more of media to ensure complete transfer.</li>
</ul>

              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>09.08.23</b>
                <br />
                InterLab Calibration and Experiment 1 done.
              </h2>
              <h2
                class="bg-orange-300 border-l-4 border-orange-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>10.08.23</b>
                <ul class="list-disc ml-10">
    <li>Media will be turbid - growth of cells / contamination.</li>
    <li>Media would have changed color - indicates metabolic activity (acidic products).</li>
    <li>Transfer culture from a flask to falcon.</li>
    <li>Cells are pelleted, then resuspended gently in 5 ml fresh media.</li>
    <li>Count cells. If cells are unhealthy, use trypan blue while counting.</li>
    <li>Make it 2x10^5 cells/ml, so 5 ml in flask will have approximately a million cells.</li>
</ul>

              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>13.08.2023</b>
                <br />
                Transformations performed for Experiment 2 and 3
              </h2>
              <h2
                class="bg-orange-300 border-l-4 border-orange-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>14.08.23</b>
                <ul class="list-disc ml-10">
    <li>Take 2 ml of culture and centrifuge.</li>
    <li>Resuspend pellet in fresh media.</li>
    <li>Count cells.</li>
    <li>PMA helps in differentiation into macrophages. On adding PMA, mix well, since it tends to settle (contains DMSO).</li>
</ul>

              </h2>
            </section>
            <section id="august1" ref=" august1" class="pb-2">
              <h3>Week 3</h3>
              <h2
                class="bg-orange-300 border-l-4 border-orange-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>15.08.23</b>
                
                <ul class="list-disc ml-10">
    <li>Cells have adhered to the culture plate.</li>
    <li>Remove media without touching the bottom. Wash cells gently with PBS.</li>
    <li>Add fresh media.</li>
    <li>Cells are ready for use after 24 hours.</li>
</ul>
              </h2>
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>16.08.2023</b><br> InterLab protocols 2 and 3 completed.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>21.08.2023</b><br> IVT done CD36 and CD36 control, with satisfactory
                results.
              </h2>
            </section>
            <section id="august1" ref=" august1" class="pb-2">
              <h3>Week 4</h3>
              <h2 class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1">
                <b>26.08.2023 - 28.08.2023</b><br> Protein Expression protocol completed.
                </h2>
              <h2
                class="bg-gray-300 border-l-4 border-gray-800 pl-1 pr-1 pb-1 pt-1"
              >
                Breaking errors in the RiboTree tool were fixed (and reported to
                the creators). The RiboTree software was run on 4 sequences
                (Main sequence(seq), seq + 3' UTR, 5' + seq, and 5' + seq + 3').
              </h2>
            </section>
          </section>
          <section id="september" ref="september">
            <h1>September</h1>
            <h2></h2>
            <section id="september1" ref=" september1" class="pb-2">
              <h3>Week 1</h3>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>05.09.2023</b>
                <br />
                <ul class="list-disc ml-10">
                  <li>Protein pellet purification using urea extraction was performed
                in case the protein was localized in Inclusion Bodies (IBs).</li>
                </ul>
                <b>06.09.2023</b>
                <ul class="list-disc ml-10">
    <li>SDS-PAGE performed on the extracted pellet.
        <figure class="grid grid-cols-1 w-3/4 relative left-2/4 -translate-x-2/4 my-8">
            <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/pages-photos/notebook/0609gel.png" alt="SDS-PAGE image">
        </figure>
    <br>Lane 1 - Ladder.
    <br>Lane 2 - Unpurified pellet.
    <br>Lane 3 - Urea-extracted pellet.</li>
    <li>Protein bands not observed. Extraction has not changed anything, protein probably absent.</li>
</ul>

              </h2>
            </section>
            <section id="september1" ref=" september1" class="pb-2">
              <h3>Week 2</h3>
              <h2
                class="bg-purple-300 border-l-4 border-purple-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>11.09.2023</b>
                <br />
                First run of DLS.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>11.09.2023</b>
                <br />
                IVT done for IL8 and IL8 control, with bad results.
              </h2>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>14.09.2023</b>
                <br />
                Primer Reconstruction at Dipshikha's Lab
              </h2>
            </section>
            <section id="september1" ref=" september1" class="pb-2">
              <h3>Week 3</h3>
              <h2
                class="bg-pink-300 border-l-4 border-pink-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>21.09.2023</b>
                <br />
                PCR products obtained, cloned from.
              </h2>
            </section>
          </section>
          <section id="october" ref="october">
            <h1>October</h1>
            <h2></h2>
            <section id="october1" ref=" october1" class="pb-2">
              <h3>Week 1</h3>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>04.10.2023</b>
                <br />
                IVT done for IL8 and IL8 control, with satisfactory results.
              </h2>
              <h2
                class="bg-purple-300 border-l-4 border-purple-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>06.10.2023</b>
                <br />
                Second Run of DLS, using the previous batch of LNPs.
                <br>
                We added 100 μL of LNP solution to HeLa cells with >90% confluency, and left them in the 	incubator for 6 hrs. No protein detected post transfection 
              </h2>
            </section>
            <section id="october1" ref=" october1" class="pb-2">
              <h3>Week 2</h3>
              <h2
                class="bg-purple-300 border-l-4 border-purple-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>09.10.2023</b>
                <br />
                Third Run of LNP conjugation and DLS.
                <br>
                We added 400 μL of LNP solution this time to HeLa cells with >90% confluency and left them in 	the incubator for 6 hrs. No protein was detected in the supernatant post-transfection, using a 	western blot.  
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>11.10.2023</b>
                <br />
                The third run of BLI was performed using protein extracted from transfected cells. We tried a new Ca 2+ assay using RAW cells at this point, to try and show the functionality of our antibody. However, the control wells showed the same fluorescence signal as all the other wells in the plate. Possibly the Fuo-4 AM we used was faulty, or the IL8 was not activating the RAW cells’ CXCR2 receptors. 
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
      currentPage: "parts",
    };
  },
  methods: {
    scrollTo(id) {
      console.log(id);
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    },
  },
  mounted() {
    //this.$refs.introButton.addEventListener("click", ()=>{this.scrollTo("intro");})
    //this.$refs.mrnaButton.addEventListener("click", ()=>{this.scrollTo("mrna")})
    //this.$refs.mrna1Button.addEventListener("click", ()=>{this.scrollTo("mrna1")})
  },
};
</script>

<style scoped>
h1 {
  font-family: courierprimebold;
}
h2 {
  font-family: Verdana;
}
h3 {
  font-family: courierprimebold;
}
nav {
  font-family: courierprime;
}

li > div {
  display: inline;
}
</style>
