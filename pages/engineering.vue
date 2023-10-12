<template>
  <div>
    <div class="">
      <div
        class="courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32"
      >
        ENGINEERING
      </div>
    </div>

    <section class="p-4">
      <i>“Mistakes are a fact of life. It is the response to error that counts.”</i><br>
      <b>Nikki Giovanni</b>
      <br><br>

<p>The engineering of our project followed the Design-Build-Test-Learn approach. DBTL approach allowed us@ to refine our projects iteratively, learning from each cycle. This process ensured our final biological systems are reliable, functional and robust.</p>

<h3 class="mt-4">Ideation</h3> 

<p>Once we decided to develop a non-invasive treatment to endometriosis, we brainstormed multiple ways of doing it. The very phase of ideation involved the delivery of miRNA using exosomes to endometriotic cells. We looked at literature to choose the target and selected CTGF initially, to prevent fibrosis that takes root later in the lifetime of the patient, delivered using our exosomes. However, we soon found out that we didn’t know the sequence of Extra Domain A of Fibronectin, and hence we can’t use exosomes. </p>
<br>
<p>While going through literature to find alternatives, we came across IL10, with evidence supporting its suppression of Endometriosis. This made us delve deeper into Interleaukins associated with Endometriosis. After extensive review, we realised that IL8 is a more promising target. However, questions remained about the implementation of the same. </p>
<br>
<p>Consulting with Dr Rachit helped us, as we realised LNPs are more versatile and easier to use carriers, with proven applications in the recent pandemic. It was just a matter of time before we connected the dots and decided to use mRNA as our solution, as was the original use case with LNPs.  </p>
<br>
<p>Now, only one challenge remained. IL8 is found everywhere in the body and blocking it everywhere would be fatal. It was then that our original idea came to our rescue, as we found out about the Extra Domain B of fibronectin, overexpressed in Endometriotic tissues. We found in literature, Aptides, a magic peptide sequence that targets EDB of Fn specifically, which made it possible to implement our solution. </p>
<br>
<p>Later on, we explored some other pathways and molecules too, which can be exploited to treat similar conditions. This stemmed from our conversations with various stakeholders as we realised immune dysregulation a major culprit behind Endometriosis. Hence, we targeted macrophages, by activating their CD36 receptor, downregulated in Endometriotic patients. This would also have allowed us to increase the duration our treatment remained effective, as macrophages get recycled inside the body. </p>
<br>
<p>Hence, our ideation was a step-by-step stacking of small improvements, which finally brought our project in the present form. </p>
    </section>




    <div
      @click="
        synbio = true;
        console.log(synbio);
      "
      class="mt-4 wireframe2 relative left-2/4 -translate-x-2/4"
    >
      <span class="text-4xl courierprime cursor-pointer"> Wet Lab </span>
    </div>

    <div
      @click="
        synbio = false;
        console.log(synbio);
      "
      class="mt-4 wireframe2 relative left-2/4 -translate-x-2/4"
    >
      <span class="text-4xl courierprime cursor-pointer"> Dry Lab </span>
    </div>

    <Scrollspy
      class="ss-synbio"
      :currentPage="currentPage"
      initialSection="trans"
    >
      <div class="grid grid-cols-12 gap-4 p-8">
        <div class="col-span-3 max-md:hidden">
          <nav class="sticky top-16 border-r-8 py-8">
            <ul>
              <li>
                <div
                  class="class-trans cursor-pointer text-2xl"
                  ref="transButton"
                >
                  Transformation
                </div>
              </li>
              <li>
                <div class="class-pe cursor-pointer text-2xl" ref="peButton">
                  Protein Expression
                </div>
              </li>
              <li>
                <div class="class-oil cursor-pointer text-2xl" ref="oilButton">
                  OIL8 Plasmid Strain Selection
                </div>
              </li>

              <li>
                <div
                  class="class-plasm cursor-pointer text-2xl"
                  ref="plasmButton"
                >
                  Plasmid Extraction
                </div>
              </li>

              <li>
                <div
                  class="class-pefa cursor-pointer text-2xl"
                  ref="pefaButton"
                >
                  Protein Expression for Anti-IL8
                </div>
              </li>
              <li>
                <div class="class-lnp cursor-pointer text-2xl" ref="lnpButton">
                  Lipid Nanoparticle Formulation and Characterization
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-span-9 max-md:col-span-12 text-justify text-xl">
          <section>
            <h1>Key</h1>
            <span
              class="inline-block w-80 bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >Design</span
            ><br />
            <span
              class="inline-block w-80 bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >Build</span
            ><br />
            <span
              class="inline-block w-80 bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >Test</span
            ><br />
            <span
              class="inline-block w-80 bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >Learn</span
            >
            <br /><br />
          </section>
          <section id="trans">
            <h1>Transformation</h1>
            <h2>
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                Preparation of Competent E. coli TG1 cells using CaCl2 solution
                and Heat shock Transformation with GFP plasmid.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                <a
                  href="https://static.igem.wiki/teams/4829/wiki/pdf/transformation.pdf"
                  class="underline"
                  >Link to protocol for transformation.</a
                >
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                Plating of transformed and non-transformed control bacteria in
                ampicillin plates. Successful Transformation was achieved.
                However, the plates have lawns.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                The transformation efficiency seems to be quite high and hence
                the incubation or/and the volume of solution must be reduced.
              </h2>
              <br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                Same Protocol, with lower incubation and halving the volume of
                transformant cells to be plated.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                Same as mentioned in the above cycle.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                Plating of transformed and non-transformed control bacteria in
                kanamycin plates. Individual colonies of transformed bacteria
                were obtained.
              </h2>
              <br />

              <b>Motivation</b>
              <br />
              A lab session with our instructors led us to a new realization: a
              combination of MgCl2 and CaCl2 is more potent for competency and
              is more stable compared to simple CaCl2 competency, due to the
              larger atomic size of Mg2+.
              <br /><br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                Preparation of competent cells with MgCl2 at first suspension
                and CaCl2 in the second suspension. Transformation as usual.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                Same as mentioned in the above cycle.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                Plating of transformed and non-transformed control bacteria in
                kanamycin agar plates. Successful, with marked increase in the
                number of single colonies.
              </h2>
            </h2>
          </section>

          <section id="pe">
            <h1>Protein Expression</h1>
            <h2>
              The gene of interest (anti-IL-8) in the plasmid is regulated by
              the lac operon. IPTG (Isopropyl β-d-1-thiogalactopyranoside), a
              molecular mimic of allolactose can act as the promoter and is
              often used because it is not metabolized but as a con, it also has
              a toxic effect on cells.

              <br /><br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                IPTG Induction of transformed bacteria.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                1mM concentration of IPTG was used to induce E. coli BL21
                transformed with GFP AmpR plasmid, cultured to mid-log phase.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                The cells are pelleted down, and the supernatant is used to run
                a western blot (Since the protein is extracytoplasmic). Low
                expression observed.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                <ul class="list-disc ml-10">
                  <li>IPTG concentration is not enough.</li>
                  <li>IPTG is not the best inducer in this case.</li>
                  <li>
                    The stock IPTG is too old to promote good enough expression.
                  </li>
                </ul>
              </h2>

              <br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                Induction with lactose (skimmed milk) instead of IPTG.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                Use Skimmed Milk Broth (1% peptone + 1% NaCl + 0.5% Yeast
                Extract + 1% Skimmed milk powder in MilliQ water) as a culture
                medium cum inducer - since allolactose can directly induce lac
                operons.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                Curdling of Milk is seen when autoclaved.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                Skimmed Milk broth can be sterilized after preparation; we have
                to prepare the media in a sterile environment.
              </h2>
              <br />

              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                Skimmed Milk broth/ Lactose Induction
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                Autoclave LB solution and add 1% sterile skimmed milk powder.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                The cells are pelleted down, and the supernatant is used to run
                a western blot (Since the protein is extracytoplasmic), which
                showed almost negligible induction.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                Skimmed Milk is not a good promoter.
              </h2>

              <br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                We try a gradient of IPTG concentrations on different cultures
                to optimize induction. Fresh IPTG stocks (100mM) were procured.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                <a
                  href="https://static.igem.wiki/teams/4829/wiki/pdf/protein-expression.pdf"
                  class="underline"
                  >Link to Optimization of Expression under protein expression
                  in experiments.</a
                >
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                The cells are pelleted down, and the supernatant is used to run
                a western blot (Since the protein is extracytoplasmic) which
                shows sufficient induction at 1mM.
                <br />
                A piece of paper in a clear plastic container
                <br />
                Description automatically generated
              </h2>

              <br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                We now varied the temperature of final incubation to optimize
                the temperature requirements of our plasmid.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                Prepare cultures, induce with 1mM IPTG, and incubate for 12-14
                hours at 10°, 15°, 20°, 25°, 30°, 37°C.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                We again ran a western blot with all types of supernatants and
                got the strongest signal at 25°C.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                The optimized conditions for our plasmid to produce proteins in
                bacterial BL21 chassis is 1mM IPTG at 25°C at 230 rpm.
              </h2>
            </h2>
          </section>

          <section id="oil">
            <h1>OIL8 Plasmid Strain Selection</h1>
            <h2>
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                We compared TG1 and BL21 strains of E. coli to choose a chassis
                for protein expression. Both were transformed with OIL-8
                plasmid.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                We induced transformed cultures of both strains with the same
                concentration of IPTG at the same conditions.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                BL21 showed considerably high expression in the Western Blot
                with cell lysates from both cultures.
                <br />
                A blue and yellow paint on a white surface
                <br />
                Description automatically generated
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                BL21 was chosen as the chassis for protein production.
              </h2>
            </h2>
          </section>
          <section id="plasm">
            <h1>Plasmid Extraction</h1>
            <h2>
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                Kit-free Extraction to isolate plasmid from E. coli DH5-alpha
                bacteria containing OIL-8 plasmid (provided by AddGene).
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                <a
                  href="https://static.igem.wiki/teams/4829/wiki/pdf/plasmidisolation.pdf"
                  class="underline"
                  >Link to Alkaline Lysate Protocol </a
                >.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                No pellet was left over at the end of the protocol.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                The isopropanol necessary to precipitate the plasmid is
                light-sensitive, also the reason why it is kept in colored
                bottles. So, the very old stocks we had were possibly quite
                ineffective.
              </h2>

              <br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                Same as before, with new isopropanol procured from the chemistry
                lab.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                Same as mentioned in the above cycle.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                No pellet is obtained, leading to a search for better procedures
                since our experience meant we didn’t have optimally pure
                reagents or conditions necessary to carry out the process with
                enough precision to give us a workable yield.
              </h2>

              <br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                We resort to using ThermoFisher MiniPrep Kit for plasmid
                extraction.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                <a
                  href="https://static.igem.wiki/teams/4829/wiki/pdf/plasmidisolation.pdf"
                  class="underline"
                  >Link to MiniPrep Kit Protocol</a
                >.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                Successful, with viable concentrations under Nanodrop - about
                25µg/mL.
              </h2>
            </h2>
          </section>
          <section id="pefa">
            <h1>Protein Expression for Anti-IL8</h1>
            <h2>
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                Since this was a secreted protein, buffers used in training runs
                wouldn't have good efficiency with the exact same composition.
                So, we needed the buffer selection runs.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                pI= 5.7 &rightarrow; pH > pI
                <br />
                Trial Buffers: Phosphate (pH=8), Tris Cl (pH=8), PBS (pH=7.4)
                <br />
                Additives: PMSF [Protease Inhibition], β-mercaptoethanol
                [Reducing Agent], Glycerol [10%]
                <br />
                Comparison: Yield [Nanodrop], Purity [SDS Page], Stability
                [Aggregation]
                <br />
                Salt: NaCl
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                We ran SDS PAGE's with 1. Varying buffers, 2. Varying salt
                concentrations
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                Unclear data. Salt concentration chosen 300mM.
              </h2>
              <br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                Western Blot.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                We run the cell lysate to see if the protein is produced.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                The gel is successful: visible bands are formed at 31kDa.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                Protein is successfully produced by plasmid.
              </h2>

              <br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design and Build</b>
                <br />
                We decided to carry out ELISA with our Antibody as a secondary
                and IL8 as primary, using HRP conjugation to quantify the
                interactions between IL8 and O-IL8-15.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                Unsuccessful, with no color changes.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                Ineffective protein folding might be the reason for failure. So,
                we looked into literature, and concluded there could be two
                issues: one, disulfide linkages not being formed properly; two,
                protein being secreted in the form of Inclusion Bodies.
              </h2>

              <br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                Ammonium Sulphate Precipitation to concentrate supernatant.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                <a
                  href="https://static.igem.wiki/teams/4829/wiki/pdf/protein-purification.pdf"
                  class="underline"
                  >Link to ammonium sulphate precipitation protocol</a
                >.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                Ran the above at varying concentrations to find the optimum
                saturation.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                70% saturation was found to be best.
              </h2>
              <br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                BLI with Tris Cl as a buffer.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                BLI gives us a quantitative measure of the binding affinity of
                IL8 and Anti IL8.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                We get unclear data.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                The buffer might have led to improper binding. Hence, we change
                the buffer to PBS.
              </h2>

              <br />

              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                BLI with PBS as buffer.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                Quantitative test of binding affinity of IL8 and Anti IL8.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                Worse binding compared to Tris-Cl.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                Ineffective folding might be the issue. We changed our buffer
                back to Tris-Cl. All further steps used Tris-Cl pH 7.4, unless
                mentioned.
              </h2>
              <br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                Urea precipitation to check presence of protein in IBs.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                <a
                  href="https://static.igem.wiki/teams/4829/wiki/pdf/protein-purification.pdf"
                  class="underline"
                  >Link to urea precipitation protocol.</a
                >.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                SDS-PAGE showed no presence of protein in purified pellet.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                Protein may not have been properly produced, due to the lack of
                formation of disulfide linkages. Should either use shuffle cells
                or target protein to the periplasmic space using PelB signal
                peptide.
              </h2>

              <br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                Switch to SHuffle Cells. We transfect SHuffle Cells using the
                original plasmid as well as we have. These cells are designed to
                produce necessary disulfide linkage as and where required, thus
                solving our issue.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                To Be Done
              </h2>
              <br />
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                We designed a new plasmid with PelB signaling peptide instead of
                OmpA.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                We intend to transform the chassis with the modified plasmid to
                send the protein first to the periplasmic space, to render the
                necessary disulfide bonds.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                To Be Done
              </h2>
            </h2>
          </section>
          <section id="lnp">
            <h1>Lipid Nanoparticle Formulation and Characterization</h1>
            <h2>
              <h2
                class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Design</b>
                <br />
                LNPs with the below composition were fabricated using the iLNP chip at flow rate ratio (mRNA:lipid) =3:1 i.e 240 and 80 ul/min using a 20 baffle mixer. Nishant, a PhD mentor, suggested that we use a 20 baffle mixer (instead of 30 or 10) since they were pre-optimised for 100nm LNPs.
Based on our inputs from Dr. Pradipta, the LNPs were formulated with four lipids: ALC-0315, mal-PEG 2000, cholesterol and DSPC. ALC-0315 was the cationic lipid. It was necessary as RNA is negatively charged and the cationic lipid helps in the uptake of the RNA. The molar ratios used were ionizable cationic lipid: neutral lipid: cholesterol: PEG-ylated lipid:: 50: 10: 38.5: 1.5. 
DSPC is the neutral lipid.
              </h2>
              <h2
                class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Build</b>
                <br />
                <a
                  href="https://static.igem.wiki/teams/4829/wiki/pdf/lnp-formulation.pdf"
                  class="underline"
                  >Link to protocol</a
                >.
              </h2>
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                DLS (Dynamic Light Scattering) analysis of the first LNP batch
                yielded results showing a radius of around 180nm.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                Tested LNPs are close to required characteristics. Nishanth, who
                helped us in this process, advised us to redo the fabrication of
                the LNPs at high speed to reduce the LNP sizes to near about
                100nm.
              </h2>
              <br />
              <h2
                class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Test</b>
                <br />
                Second run of DLS yielded LNP sizes of about 500nm.
              </h2>
              <h2
                class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1"
              >
                <b>Learn</b>
                <br />
                The high speeds used could have damaged the microfluidic device,
                resulting in a larger average radius due to improper mixing. We
                hypothesized the cause for the radius mismatch as lack of
                information and optimization of the speed necessary for the LNP.
              </h2>
            </h2>
          </section>
        </div>
      </div>
    </Scrollspy>

    <Scrollspy
      class="ss-endo hidden"
      :currentPage="currentPage"
      initialSection="spmc"
    >
      <div class="grid grid-cols-12 gap-4 p-8">
        <div class="col-span-3 max-md:hidden">
          <nav class="sticky top-16 border-r-8 py-8">
            <ul>
              <li>
                <div
                  class="class-spmc cursor-pointer text-2xl"
                  ref="spmcButton"
                >
                  Signal Peptide for Mammalian Cells
                </div>
              </li>
              <li>
                <div class="class-dab cursor-pointer text-2xl" ref="dabButton">
                  dAb Design
                </div>
              </li>

              <li>
                <div class="class-pk cursor-pointer text-2xl" ref="pkButton">
                  PK/QSP
                </div>
              </li>
              <li>
                <div class="class-had cursor-pointer text-2xl" ref="hadButton">
                  Homology and docking
                </div>
              </li>
              <li>
                <div class="class-pd cursor-pointer text-2xl" ref="pdButton">
                  Primer Design
                </div>
              </li>
              <li>
                <div class="class-bb cursor-pointer text-2xl" ref="bbButton">
                  Biobricks
                </div>
              </li>
              <li>
                <div class="class-te cursor-pointer text-2xl" ref="teButton">
                  Toxicity estimation
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-span-9 max-md:col-span-12 text-justify text-xl">
          <section id="spmc" ref="spmc">
            <h1>Signal Peptide for Mammalian Cells</h1>

            <h2>
              <h2 class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1">
  <b>Design</b>
  <br>
  Use TPA as a mammalian signal peptide, as it is the mostly used in genetic constructs.
</h2>
<h2 class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1">
  <b>Test</b>
  <br>
  Use SignalP 6.0 to check efficiency of signaling.
</h2>
<h2 class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1">
  <b>Learn</b>
  <br>
  tPA shows good secretion probability on SignalP 6.0.
</h2>
<br>
<h2 class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1">
  <b>Design</b>
  <br>
  Based on feedback from PhD students and on literature review, we decided to investigate the multiple signal peptides.
</h2>
<h2 class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1">
  <b>Build</b>
  <br>
  We moved our focus to using CD33 as a mammalian signal peptide.
</h2>
<h2 class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1">
  <b>Test</b>
  <br>
  We used SignalP 6.0 to check efficiency of signaling, along with a few other signal peptides:
  <br />
  <table class="text-sm">
  <tr>
    <td class="border border-black">Leader sequence Name</td>
    <td class="border border-black">Sequence</td>
  </tr>
  <tr>
    <td class="border border-black">Human OSM</td>
    <td class="border border-black">MGVLLTQRTLLSLVLALLFPSMASM</td>
  </tr>
  <tr>
    <td class="border border-black">VSV-G</td>
    <td class="border border-black">MKCLLYLAFLFIGVNC</td>
  </tr>
  <tr>
    <td class="border border-black">Mouse Ig Kappa</td>
    <td class="border border-black">METDTLLLWVLLLWVPGSTGD</td>
  </tr>
  <tr>
    <td class="border border-black">Mouse Ig Heavy</td>
    <td class="border border-black">MGWSCIILFLVATATGVHS</td>
  </tr>
  <tr>
    <td class="border border-black">BM40</td>
    <td class="border border-black">MRAWIFFLLCLAGRALA</td>
  </tr>
  <tr>
    <td class="border border-black">Secrecon</td>
    <td class="border border-black">MWWRLWWLLLLLLLLWPMVWA</td>
  </tr>
  <tr>
    <td class="border border-black">Human IgKVIII</td>
    <td class="border border-black">MDMRVPAQLLGLLLLWLRGARC</td>
  </tr>
  <tr>
    <td class="border border-black">CD33</td>
    <td class="border border-black">MPLLLLLPLLWAGALA</td>
  </tr>
  <tr>
    <td class="border border-black">tPA</td>
    <td class="border border-black">MDAMKRGLCCVLLLCGAVFVSPS</td>
  </tr>
  <tr>
    <td class="border border-black">Human Chymotrypsinogen</td>
    <td class="border border-black">MAFLWLLSCWALLGTTFG</td>
  </tr>
  <tr>
    <td class="border border-black">Human trypsinogen-2</td>
    <td class="border border-black">MNLLLILTFVAAAVA</td>
  </tr>
  <tr>
    <td class="border border-black">Human IL-2</td>
    <td class="border border-black">MYRMQLLSCIALSLALVTNS</td>
  </tr>
  <tr>
    <td class="border border-black">Gaussia luc</td>
    <td class="border border-black">MGVKVLFALICIAVAEA</td>
  </tr>
  <tr>
    <td class="border border-black">Albumin(HSA)</td>
    <td class="border border-black">MKWVTFISLLFSSAYS</td>
  </tr>
  <tr>
    <td class="border border-black">Influenza Haemagglutinin</td>
    <td class="border border-black">MKTIIALSYIFCLVLG</td>
  </tr>
  <tr>
    <td class="border border-black">Human insulin</td>
    <td class="border border-black">MALWMRLLPLLALLALWGPDPAAA</td>
  </tr>
  <tr>
    <td class="border border-black">Silkworm Fibroin LC</td>
    <td class="border border-black">MKPIFLVLLVVTSAYA</td>
  </tr>
</table>

  <figure class="grid grid-cols-2 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/pages-photos/engineering/signalpeptide.jpg" alt="image description">
  <figcaption class="mt-2 text-sm">The probability of secretion is highest with CD33.</figcaption>
</figure>
</h2>
<h2 class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1">
  <b>Learn</b>
  <br>
  Good efficiency is seen for CD33, significantly higher than in tPA. So we selected it as our signal peptide for mammalian protein expression.
</h2>

            </h2>
          </section>

          <section id="dab" ref="dab">
            <h1>dAb Design</h1>

            <h2>
              
              <h2 class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1">
  <b>Design</b>
  <br>
  The standard procedure Camelization i.e. removal of the entirely of the sequence except the VH (Variable head), followed by the replacement of four hydrophobic with more hydrophilic amino acids to avoid the exposure of such a sizeable hydrophobic region to solvent, and other similar changes to increase stability. <a href="/modeling" class="underline">Link to modeling.</a>
</h2>
<h2 class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1">
  <b>Build</b>
  <br>
  To make a preliminary version of such a molecule, do the following:
  <br>
  <ul class="list-disc ml-10">
    <li>Take the VH and VL regions and go through the sequences. Change the amino acid positions to the ones mentioned above if it is not already this.</li>
    <li>Join the 2 sequences with a linker: GGGGSGGGGSGGGGS.</li>
  </ul>
  This simple change is all it takes to get a preliminary scFv!
</h2>
<h2 class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1">
  <b>Test</b>
  <br>
  Checked our results with docking and GRAMM, which gave very good results!
</h2>

            </h2>
          </section>
          <section id="pk" ref="pk">
            <h1>PK/QSP</h1>

            <h2>
              <h2>
  <b>Aim of PK/PD</b>
  <br>
  To determine the movement of the LNP-based drug through the body and determine the body’s biological response to it.
</h2>
<h2 class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1">
  <b>Design and Build</b>
  <br>
  We designed a lipid nanoparticle which would carry the mRNA inside the endometrial cells. We determined the characteristics of the LNPs prepared. We further use this data to run a simulation.
</h2>
<h2 class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1">
  <b>Test</b>
  <br>
  Using the PK-Sim software on Open Systems Pharmacology, we get data regarding concentrations of the drug in the endometrial tissue over time.
</h2>
<h2 class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1">
  <b>Learn</b>
  <br>
  We use this data to optimize the characteristics of the lipid nanoparticle.
</h2>

            </h2>
          </section>
          <section id="had" ref="had">
            <h1>Homology and Docking</h1>
            <h2>           <h2>
  <b>Aim of Docking</b>
  <br>
  Aim of docking: To determine the structural interactions between
              IL-8 and Anti IL-8, between the Aptide and the Fibronectin EDB,
              between PD1 and anti-PD1, IL6 and anti-IL6 and nanobody versions
              of all antibodies.
            </h2>
            <h2 class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1">
  <b>Design</b>
  <br>
  We determined the sequences of all the required proteins and collected the relevant data for the models from the respective PDB files. One protein was to be the ligand and the other the receptor. The ligand and receptor files were combined to form a complex.pdb file.
</h2>
<h2 class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1">
  <b>Build</b>
  <br>
  We ran the ligand and receptor files through GRAMM web docking server and got 10 different models of possible docking orientations. We combined the first ligand model with the receptor model to get a ligand-receptor complex model.
</h2>
<h2 class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1">
  <b>Test</b>
  <br>
  We used PRODIGY to determine the ‘predicted binding affinity’ of the proteins.
</h2>
<h2 class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1">
  <b>Learn</b>
  <br>
  The data obtained can be used as reference for wet labs. We also plan to try out all the 10 different models received to figure out which gives results most relevant to the wet lab results.
</h2></h2>



     
          </section>
          <section id="pd" ref="pd">
            <h1>Primer Design</h1>

            <h2>

              <h2>
  <b>Motivation</b>
  <br>
  Our interaction with Debajyoti, a PhD at Prof. Raghavan’s lab,
              made us realize that we had a finite stock of DNA, if we weren’t
              using a plasmid. On further feedback from seniors and mentors, we
              decided to go ahead with PCR.
</h2>         <h2 class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1">
  <b>Design</b>
  <br>
  Taking aid from Addgene’s handbook (plasmids 101) and their primer design website, we set out to design a plasmid with the following properties:
  <ul class="list-disc ml-10">
    <li>Length of 18-24 bases.</li>
    <li>40-60% G/C content.</li>
    <li>Start and end with 1-2 G/C pairs.</li>
    <li>Melting temperature (Tm) of 50-60°C.</li>
    <li>Primer pairs should have a Tm within 5°C of each other.</li>
    <li>Primer pairs should not have complementary regions.</li>
  </ul>
</h2>
<h2 class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1">
  <b>Build</b>
  <br>
  The primer sequence was arrived at by using SnapGene.
  <table class="text-sm">
  <tr>
    <th class="border border-black">Primers</th>
    <th class="border border-black">Sequence</th>
    <th class="border border-black">Tm (as predicted by Snapgene, in °C)</th>
  </tr>
  <tr>
    <td class="border border-black">fwd CD36 without Restriction sites</td>
    <td class="border border-black">GAATTCGCGGCCGCTTCTA</td>
    <td class="border border-black">58</td>
  </tr>
  <tr>
    <td class="border border-black">bkwd CD36 with Restriction sites (Spe1, Drd1)</td>
    <td class="border border-black">TGACTCACTAGTCCACTCAGACTTTATTCAAAGACC</td>
    <td class="border border-black">55</td>
  </tr>
  <tr>
    <td class="border border-black">Bkwd IL8 without Restriction sites</td>
    <td class="border border-black">ACTAGTGCCGCCCACTCAGA</td>
    <td class="border border-black">58</td>
  </tr>
  <tr>
    <td class="border border-black">Fwd IL8 without Restriction sites</td>
    <td class="border border-black">GAATTCGCGGCCGCTTCTA</td>
    <td class="border border-black">59</td>
  </tr>
</table>

<figure class="grid grid-cols-2 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/pages-photos/engineering/primer1.jpg">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/pages-photos/engineering/primer2.jpg">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/pages-photos/engineering/primer3.jpg">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/pages-photos/engineering/primer4.jpg">
  <figcaption class="mt-2 text-sm">Melting points and other properties were analysed.</figcaption>
</figure>
</h2>
<h2 class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1">
  <b>Learn</b>
  <br>
  SnapGene cannot check for secondary structures, and hence, we were suggested to try out <a href="https://www.bioinformatics.org" class="underline">bioinformatics.org</a>.
</h2>
<br>
<h2 class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1">
  <b>Test</b>
  <br>
  The sequence was assessed using <a href="https://www.bioinformatics.org" class="underline">bioinformatics.org</a>.
  <br>
  <figure class="grid grid-cols-2 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/pages-photos/engineering/primer5.jpg">
  <figcaption class="mt-2 text-sm">Anti-IL8 primers</figcaption>
</figure>
  <figure class="grid grid-cols-2 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8">
  <img class="h-auto w-3/4" src="https://static.igem.wiki/teams/4829/wiki/pages-photos/engineering/primer6.jpg">
  <figcaption class="mt-2 text-sm">CD36 primers</figcaption>
</figure>
</h2>
<h2 class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1">
  <b>Learn</b>
  <br>
  The primer sequence seems to be perfect for manufacturing, based on these online tools.
</h2>

            </h2>
          </section>
          <section id="bb" ref="bb">
            <h1>Biobricks</h1>

            <h2>
              <h2 class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1">
  <b>Design</b>
  <br>
  Can we scrap data from biobricks pages to generate descriptions?
</h2>
<h2 class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1">
  <b>Build</b>
  <br>
  Write a script to scrape part pages and parse their content to extract a "description."
</h2>
<h2 class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1">
  <b>Test</b>
  <br>
  A rule-based approach is not practical due to the variety of parts and the lack of consistency in parts pages.
</h2>
<h2 class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1">
  <b>Learn</b>
  <br>
  We can use AI to create a more generalized solution in the absence of well-defined rules.
</h2>
<br>
<h2 class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1">
  <b>Design</b>
  <br>
  Can we use few-shot learning to make LLMs?
  Use the parts page summary as an input for generating descriptions?
</h2>
<h2 class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1">
  <b>Build</b>
  <br>
  We select good and poor descriptions and use few-shot prompting using good descriptions and corresponding summaries to generate for poor descriptions.
</h2>
<h2 class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1">
  <b>Test</b>
  <br>
  Since we were limited to open-sourced models like TS, the prompt space is too small for adding more than a couple of examples. Very unsatisfactory results due to noisy and repetitive completions.
</h2>
<h2 class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1">
  <b>Learn</b>
  <br>
  We can fine-tune the model if few-shot prompting is not feasible.
</h2>
<br>
<h2 class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1">
  <b>Design</b>
  <br>
  Can we fine-tune the model using “good” descriptions?
</h2>
<h2 class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1">
  <b>Build</b>
  <br>
  We fine-tune the model with “good” descriptions and corresponding summaries.
</h2>
<h2 class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1">
  <b>Test</b>
  <br>
  We get better results, but the output is still somewhat noisy and repetitive.
</h2>
<h2 class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1">
  <b>Learn</b>
  <br>
  We should make the criteria for "good" less strict so that we have many more examples for fine-tuning.
</h2>
<br>
<h2 class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1">
  <b>Design</b>
  <br>
  Can we use the part pages to directly generate descriptions?
</h2>
<h2 class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1">
  <b>Build</b>
  <br>
  We use an LLM for summarizing the content from the parts pages.
</h2>
<h2 class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1">
  <b>Test</b>
  <br>
  The quality of descriptions is poor since there is a lot of verbosity in the descriptions; many good descriptions are now worse.
</h2>
<br>
<h2 class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1">
  <b>Test</b>
  <br>
  The results obtained were improved in terms of relevance and coverage, based on feedback by team members.
</h2>
<h2 class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1">
  <b>Learn</b>
  <br>
  We need more realistic data on what descriptions are good. This data can later also be used to train a model for reinforcement learning.
</h2>

            </h2>
          </section>
          <section id="te" ref="te">
            <h1>Toxicity Estimation</h1>

            <h2>
              <h2 class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1">
  <b>Design</b>
  <br>
  Firstly, we decide what software to use and what toxicities to check. Collect all data regarding the proteins, including its mRNA sequence, components of the LNP, and relevant structural data.
</h2>
<h2 class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1">
  <b>Build</b>
  <br>
  We decide on using toxicity estimation software tools. We try to input our components and check their toxicities.
</h2>
<h2 class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1">
  <b>Test</b>
  <br>
  On trying to input, we first fail as the TEST does not present an option to enter our mRNA sequence. Further, we are unable to incorporate structural features of our protein and LNP.
</h2>
<h2 class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1">
  <b>Learn</b>
  <br>
  We learn the limitations of the software and decide to break down our composite LNP-mRNA into its components and analyze them piecewise.
</h2>
<br>
<h2 class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1">
  <b>Design</b>
  <br>
  We now look for programs that may analyze the toxicity of our protein/mRNA sequences. We find CSM-toxin as relevant software for our purpose.
</h2>
<h2 class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1">
  <b>Build</b>
  <br>
  We input our mRNA sequence into CSM-Toxin. Meanwhile, we input various components of our LNPs into the TEST software to estimate individual toxicities.
</h2>
<h2 class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1">
  <b>Test</b>
  <br>
  CSM-Toxin verifies that our protein is non-toxic. TEST reveals various results for components of our LNP in terms of immunogenicity, developmental toxicity, LD50, etc.
</h2>
<h2 class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1">
  <b>Learn</b>
  <br>
  We see that TEST is unable to directly analyze some components of the LNP, and we must find similar, known components to analyze.
</h2>
<br>
<h2 class="bg-yellow-300 border-l-4 border-yellow-800 pl-1 pr-1 pb-1 pt-1">
  <b>Design</b>
  <br>
  We utilize TEST's existing database to find molecules similar to our LNP's components to analyze them.
</h2>
<h2 class="bg-green-300 border-l-4 border-green-800 pl-1 pr-1 pb-1 pt-1">
  <b>Build</b>
  <br>
  We run in-depth checks for all similar molecules.
</h2>
<h2 class="bg-red-300 border-l-4 border-red-800 pl-1 pr-1 pb-1 pt-1">
  <b>Test</b>
  <br>
  Similar molecules return a variety of results that we document and save on our Git-Repo.
</h2>
<h2 class="bg-blue-300 border-l-4 border-blue-800 pl-1 pr-1 pb-1 pt-1">
  <b>Learn</b>
  <br>
  Despite individual analyses, TEST and CSM-Toxin fail to analyze the toxicity of our mRNA-LNP as a whole.
</h2>


              <br />
              Beyond this, a plan remains to find more comprehensive ways to
              check the toxicity of our composite mRNA-LNP based on even more
              parameters and come up with an upper limit for the safe dosage of
              our therapeutic into the human body. On a more ambitious scale, in
              silico and in vivo methods could be run simultaneously to check
              the accuracy of all these computational toxicity prediction tools
              and give inputs for further improvements based on in vivo data.
            </h2>
          </section>
        </div>
      </div>
    </Scrollspy>

    <div
      @click="
        synbio = true;
        console.log(synbio);
        scrollTo('trans');
      "
      class="mt-4 wireframe2 relative left-2/4 -translate-x-2/4"
    >
      <span class="text-4xl courierprime cursor-pointer"> Wet Lab </span>
    </div>

    <div
      @click="
        synbio = false;
        console.log(synbio);
        scrollTo('spmc');
      "
      class="mt-4 wireframe2 relative left-2/4 -translate-x-2/4"
    >
      <span class="text-4xl courierprime cursor-pointer"> Dry Lab </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: "education",
      synbio: true,
    };
  },
  watch: {
    synbio(newSynbio, oldSynbio) {
      scrollTo;
      let ssSyn = document.getElementsByClassName("ss-synbio")[0];
      let ssEndo = document.getElementsByClassName("ss-endo")[0];
      if (newSynbio) {
        ssSyn.style.display = "block";
        ssEndo.style.display = "none";
      } else {
        ssSyn.style.display = "none";
        ssEndo.style.display = "block";
      }
    },
  },
  methods: {
    scrollTo(id) {
      console.log(id);
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    },
  },
  mounted() {
    // this.$refs.abstractButton.addEventListener("click", ()=>{this.scrollTo("abstract")})
    //this.$refs.nameButton.addEventListener("click", ()=>{this.scrollTo("name")})
  },
};
</script>

<style scoped>
.title-text {
  font-family: CourierPrimeBold;
}
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
