<template>
  <div>
    <div class="">
      <div
        class="courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32"
      >
        MODELLING
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
            </ul>
          </nav>
        </div>

        <div class="col-span-9 max-md:col-span-12 text-justify text-xl">
          <section>
            <h1>scFv Structure Modelling</h1>
            We make all data available for analysis in our
            <a href="https://github.com/iGEMIISc/scFv-Modelling"
              >GitHub repository</a
            >.
            <h3>A bit on Interleukin-8</h3>
            <p>
              Interleukin-8 (IL-8) plays a crucial role in protein binding by
              facilitating interactions with chemokine receptors, particularly
              CXCR1. IL-8 is a small globular protein with defined structural
              regions. It possesses binding sites primarily in its N-loop and
              40s loop regions. These regions contain specific charged and
              hydrophobic residues that are essential for receptor recognition.
              When IL-8 encounters CXCR1, these binding sites on IL-8 engage
              with complementary sites on the receptor's N-terminal domain, such
              as ND-CXCR1(1–38). These interactions create a stable
              protein-protein complex, which serves as a signaling mechanism to
              initiate cellular responses, such as chemotaxis and immune cell
              activation, ultimately aiding in immune responses and the
              regulation of inflammation.
            </p>
            <p>
              This section lays out our process of predicting the structure for
              the anti-IL8 scFv format antibody. The amino acid sequence for the
              antibody has the following parts.
            </p>
            <ol>
              <li>
                A signal peptide sequence to ensure that the antibody is
                secreted from the cell.
                <p class="seq">MPLLLLLPLLWAGALA</p>
              </li>
              <li>
                The variable heavy chain (VH) of the antibody.
                <p class="seq">
                  EVQLLESGGGLVQPGGSLRLSCAASGFTFSYYGMGWVRQAPGKGLEWVSGISYSGSGTYYADSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCARDYVGNLDYWGQGTLVTVSS
                </p>
              </li>
              <li>
                A linker sequence to connect the VH and VL chains.
                <p class="seq">GGGGSGGGGSGGGGS</p>
              </li>
              <li>
                The variable light chain (VL) of the antibody.
                <p class="seq">
                  DIQMTQSPSSLSASVGDRVTITCRASQSISSYLNWYQQKPGKAPKLLIYAASSLQSGVPSRFSGSGSGTDFTLTISSLQPEDFATYYCQQSDTPSTFGQGTKLEIK
                </p>
              </li>
              <li>
                A 3xFLAG and a 6xHis-tag sequence to facilitate purification of
                the antibody.
                <p class="seq">RTDYKDHDGDYKDHDIDYKDDDDKAAALPETGGHHHHHH</p>
              </li>
            </ol>
            <p>
              Therefore, the full amino acid sequence that we will work with is
            </p>
            <p class="seq">
              MPLLLLLPLLWAGALAEVQLLESGGGLVQPGGSLRLSCAASGFTFSYYGMGWVRQAPGKGLEWVSGISYSGSGTYYADSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCARDYVGNLDYWGQGTLVTVSSGGGGSGGGGSGGGGSDIQMTQSPSSLSASVGDRVTITCRASQSISSYLNWYQQKPGKAPKLLIYAASSLQSGVPSRFSGSGSGTDFTLTISSLQPEDFATYYCQQSDTPSTFGQGTKLEIKRTDYKDHDGDYKDHDIDYKDDDDKAAALPETGGHHHHHH
            </p>
            <p>
              Note that we keep the signal peptide and the tags attached during
              the modelling process, because we do not know whether (and how)
              they interact with Interleukin-8 during docking.
            </p>
            <h3>AlphaFold2</h3>
            <p>
              AlphaFold2 is a deep learning system that predicts protein
              structures from amino acid sequences. We used the open-source
              distribution of AlphaFold2,
              <a href="https://github.com/sokrypton/ColabFold">ColabFold</a> to
              predict the structure of the antibody. We used the
              <a
                href="https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb"
                >AlphaFold2_mmseqs2</a
              >
              notebook. This notebook differs from full AlphaFold2 and
              AlphaFold2 Colab in that it uses MMseqs2 (Many-against-Many
              sequence searching) in place of homology detection and MSA
              pairing.
            </p>
            <p>
              We used ColabFold with two different schemes: one without
              templates, and one with PDB70 as a database for templates. We also
              relaxed the top structure in either scheme with AMBER.
            </p>
            <h4>With PDB70</h4>
            <figure
              class="grid grid-cols-2 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8"
            >
              <img
                class="h-auto w-3/4"
                src="https://static.igem.wiki/teams/4829/wiki/pages-photos/modelling-upto-docking/pdb-70.png"
              />
              <figcaption class="mt-2 text-sm">
                The structure generated with PDB70 is available
                <a
                  href="https://raw.githubusercontent.com/iGEMIISc/scFv-Modelling/main/AlphaFold%20with%20PDB70/scFvModellingwithAlphaFoldwithpdb70_ee5cb_relaxed_rank_001_alphafold2_ptm_model_4_seed_000.pdb"
                  >here</a
                >.
              </figcaption>
            </figure>
            <h4>Without Templates</h4>
            <figure
              class="grid grid-cols-2 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8"
            >
              <img
                class="h-auto w-3/4"
                src="https://static.igem.wiki/teams/4829/wiki/pages-photos/modelling-upto-docking/without-templates.png"
              />
              <figcaption class="mt-2 text-sm">
                The structure generated without templates is available
                <a
                  href="https://raw.githubusercontent.com/iGEMIISc/scFv-Modelling/main/AlphaFold%20Without%20Template/scFvModellingwithAlphaFoldnotemplate_ee5cb_relaxed_rank_001_alphafold2_ptm_model_4_seed_000.pdb"
                  >here</a
                >.
              </figcaption>
            </figure>
            <p>
              Both of these have very similar average predicted aligned errors,
              as well as predicted lDDT scores. For both, folding is poor near
              the ends where the signal peptide and flags were attached, and in
              the middle where the linker is present.
            </p>
            <table class="w-full">
              <tr>
                <th>With PDB70</th>
                <th>Without Templates</th>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://static.igem.wiki/teams/4829/wiki/pages-photos/modelling-upto-docking/with-pdb-70-1.png"
                    alt="Image 1"
                    class="max-w-3/4"
                  />
                </td>
                <td>
                  <img
                    src="https://static.igem.wiki/teams/4829/wiki/pages-photos/modelling-upto-docking/without-templates-1.png"
                    alt="Image 2"
                    class="max-w-3/4"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://static.igem.wiki/teams/4829/wiki/pages-photos/modelling-upto-docking/with-pdb-70-2.png"
                    alt="Image 3"
                    class="max-w-3/4"
                  />
                </td>
                <td>
                  <img
                    src="https://static.igem.wiki/teams/4829/wiki/pages-photos/modelling-upto-docking/without-templates-2.png"
                    alt="Image 4"
                    class="max-w-3/4"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://static.igem.wiki/teams/4829/wiki/pages-photos/modelling-upto-docking/with-pdb-70-3.png"
                    alt="Image 5"
                    class="max-w-3/4"
                  />
                </td>
                <td>
                  <img
                    src="https://static.igem.wiki/teams/4829/wiki/pages-photos/modelling-upto-docking/without-templates-3.png"
                    alt="Image 6"
                    class="max-w-3/4"
                  />
                </td>
              </tr>
            </table>
            <h3>Interpretation of AlphaFold Results</h3>
            <h4>Predicted Local Distance Difference Test (pLDDT)</h4>
            <p>
              AlphaFold produces a per-residue estimate of its confidence on a
              scale from 0 – 100 . This confidence measure is called pLDDT and
              corresponds to the model’s predicted score on the lDDT-Cα metric.
              It is stored in the B-factor fields of the mmCIF and PDB files
              available for download (although unlike a B-factor, higher pLDDT
              is better). pLDDT is also used to colour-code the residues of the
              model in the 3D structure viewer. The following rules of thumb
              provide guidance on the expected reliability of a given region:
            </p>
            <ul>
              <li>
                Regions with pLDDT > 90 are expected to be modelled to high
                accuracy. These should be suitable for any application that
                benefits from high accuracy (e.g. characterising binding sites).
              </li>
              <li>
                Regions with pLDDT between 70 and 90 are expected to be modelled
                well (a generally good backbone prediction).
              </li>
              <li>
                Regions with pLDDT between 50 and 70 are low confidence and
                should be treated with caution.
              </li>
              <li>
                The 3D coordinates of regions with pLDDT &lt; 50 often have a
                ribbon-like appearance and should not be interpreted. We show in
                our paper that pLDDT &lt; 50 is a reasonably strong predictor of
                disorder, i.e. it suggests such a region is either unstructured
                in physiological conditions or only structured as part of a
                complex.
              </li>
              <li>
                Structured domains with many inter-residue contacts are likely
                to be more reliable than extended linkers or isolated long
                helices.
              </li>
              <li>
                Unphysical bond lengths and clashes do not usually appear in
                confident regions. Any part of a structure with several of these
                should be disregarded.
              </li>
            </ul>

            <p>
              The pLDDT per position is also given as a plot for the five models
              made in every run and gives a simpler overview:
            </p>
            <figure
              class="grid grid-cols-2 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8"
            >
              <img
                class="h-auto w-3/4"
                src="https://static.igem.wiki/teams/4829/wiki/pages-photos/modelling-upto-docking/predicted-iddt-per-position.png"
              />
              <figcaption class="mt-2 text-sm">
                We see prediction models of a protein presented in pLDDT graph.
                Most of the graph has pLDDT score above 75-80 and hence it has a
                high confidence level on the structure and relative inter atomic
                distances. Different models have different pLDDT scores and
                Model 1 has on average the highest level. Hence model 1 is the
                best predicted Structure.
              </figcaption>
            </figure>
            <h4>Predicted Aligned Error (PAE)</h4>
            <p>
              Our protein clearly has 2 domains. We use the Predicted Aligned
              Error (PAE) plot provided by AlphaFold. PAE is a 2D plot.
            </p>

            <p>
              The colour at (x, y) corresponds to the expected distance error in
              residue x’s position, when the prediction and true structure are
              aligned on residue y. Dark Blue is good (low error), red is bad
              (high error). For example, aligning on residue 150: 
            </p>
            <ul>
              <li>We’re confident in the relative position of residue 100</li>
              <li>
                We’re not confident in the relative position of residue 200
              </li>
            </ul>
            <figure
              class="grid grid-cols-2 w-3/4 relative relative left-2/4 -translate-x-2/4 my-8"
            >
              <img
                class="h-auto w-3/4"
                src="https://static.igem.wiki/teams/4829/wiki/pages-photos/modelling-upto-docking/aligned-residue-scored-residue.png"
              />
              <figcaption class="mt-2 text-sm">
                The two low-error squares correspond to the two domains.
              </figcaption>
            </figure>
            <p>
              AlphaFold produces a per-residue confidence score (pLDDT) between
              0 and 100. Some regions with low pLDDT may be unstructured in
              isolation.
            </p>
            <ul>
              <li>Dark blue- Very High pLDDT (MORE CONFIDENCE)</li>
              <li>Light Blue-Confident (pLDDT level moderate)</li>
              <li>White-red- Low (pLDDT level low)</li>
              <li>Red- Very low (pLDDT levels very low)</li>
            </ul>
            <h4>AlphaFold Database</h4>

            <ol>
              <li>365 K predicted for proteins from 21 model organisms.</li>
              <li>
                For the organisms currently covered, predicted structures are
                available for the sequences in the UniProt reference proteome
                that are between 16 and 2700 amino acids long and contain only
                standard amino acids.
              </li>
            </ol>

            <p>
              They use mmCIF files from the model archive extension to get
              resources and information of predicted proteins. It contains
              molecular description, Taxonomy id, Quality measures, per residue
              quality.
            </p>

            <p>Impact of structural bioinformatics:</p>
            <ol>
              <li>Predicting complexes between macromolecules.</li>
              <li>
                About intrinsically disordered proteins and structures of
                protein-protein, protein-nucleic acid complexes.
              </li>
              <li>
                Provide information on protein dynamics, i.e., relevant
                conformation states.
              </li>
              <li>Ligand Predictions.</li>
              <li>It will accelerate Structural Biology.</li>
              <li>
                The structural studies and its uses in mechanizing reactions of
                biomolecules.
              </li>
            </ol>
            <h4>Multiple sequence alignment (MSA)</h4>
            <p>
              Alpha fold predicts various possible structures for a given
              sequence of amino acids. So, one of the tools developed are the
              MSA graphs. Here we can take two different alignments and combine
              them based on requirements, organism and other information. We can
              pair and unpair them to get better results, which depends on the
              sequences and how well the software predicts on each of them.  
            </p>
            <p>
              Here we can see for unpaired MSA case, we have possible sequence
              counts and their positions and based on it, the software well
              developed 1 graph which has minimum error in relative positions.
              While in the case of Paired MSA, we have mostly all better than
              Unpaired case but their quality is decreasing.  
            </p>
            <p>
              Thus combining proteins to form a bigger one can help us determine
              structures and relative inter atomic distances of that protein
              better. 
            </p>
            <p>
              The MSA help us to even determine structural accuracy of bigger
              proteins. For example, we want to determine the PAE graph for a
              protein P which is made of 2 copies of protein A, 1 copy of B and
              2 copies of C, we can create MSA sequence of each and using the
              graphs we can create multiple possible structure of P with
              respective PAE graphs and choose the best one. Hence this
              simplifies and increase information regarding protein analysis.   
            </p>
          </section>
          <section>
            <h1>Citations</h1>
            <ol>
              <li>
                O-IL8-15 Biological Probe, in Structural Genomics Consortium:
                <a href="http://thesgc.org/biological-probes/il-8"
                  >thesgc.org/biological-probes/il-8</a
                >
              </li>
              <li>
                Mirdita, M., Schütze, K., Moriwaki, Y., Heo, L., Ovchinnikov,
                S., & Steinegger, M. (2022). ColabFold: Making Protein folding
                accessible to all. Nature Methods.
              </li>
              <li>
                Mirdita, M., Steinegger, M., & Söding, J. (2019). MMseqs2
                desktop and local web server app for fast, interactive sequence
                searches. Bioinformatics, 35(16), 2856–2858.
              </li>
              <li>
                Mirdita, M., Driesch, L., Galiez, C., Martin, M., Söding, J., &
                Steinegger, M. (2017). Uniclust databases of clustered and
                deeply annotated protein sequences and alignments. Nucleic Acids
                Res., 45(D1), D170–D176.
              </li>
              <li>
                Mitchell, A., Almeida, A., Beracochea, M., Boland, M., Burgin,
                J., Cochrane, G., Crusoe, M., Kale, V., Potter, S., Richardson,
                L., Sakharova, E., Scheremetjew, M., Korobeynikov, A., Shlemov,
                A., Kunyavskaya, O., Lapidus, A., & Finn, R. (2019). MGnify: the
                microbiome analysis resource in 2020. Nucleic Acids Res.
              </li>
              <li>
                Steinegger, M., Meier, M., Mirdita, M., Vöhringer, H.,
                Haunsberger, S., & Söding, J. (2019). HH-suite3 for fast remote
                homology detection and deep protein annotation. BMC Bioinform.,
                20(1), 473.
              </li>
              <li>
                Berman, H., Henrick, K., & Nakamura, H.. (2003). Announcing the
                worldwide Protein Data Bank.
              </li>
              <li>
                Eastman, P., Swails, J., Chodera, J., McGibbon, R., Zhao, Y.,
                Beauchamp, K., Wang, L.P., Simmonett, A., Harrigan, M., Stern,
                C., Wiewiora, R., Brooks, B., & Pande, V. (2017). OpenMM 7:
                Rapid development of high performance algorithms for molecular
                dynamics. PLOS Comput. Biol., 13(7).
              </li>
            </ol>
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
h4 {
  font-family: courierprimebold;
}
nav {
  font-family: courierprime;
}

li > div {
  display: inline;
}
p {
  margin-bottom: 10px;
}

ol {
  list-style: decimal;
  margin: 25px;
}
ul {
  list-style: disc;
  margin: 25px;
}
.seq {
  font-family: monospace;
  background-image: linear-gradient(to right, #ff5733, #00a99d);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 20px;
  font-weight: bold;
  word-wrap: break-word;
}

a {
  color: #0b70b3;
}
</style>
