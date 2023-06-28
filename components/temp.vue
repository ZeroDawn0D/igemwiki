<template>
  <div>
    <div class = "h-64">
      text
    </div>
    <Scrollspy :currentPage="currentPage" initialSection="abstract">
      <div class = "grid grid-cols-12 gap-4 p-8">
        <div class = "col-span-3 bg-violet-300 ">
          <nav class = "sticky top-0">
            <ul>
              <li>
                <h1 class = "class-abstract" ref = "abstractButton">Abstract</h1>
              </li>
              <li>
                <h1  class = "class-lipsum">Lorem Ipsum</h1>
              </li>
              <li>
                <h1  class = "class-lipsum2">Lorem Ipsum 2</h1>
              </li>
            </ul>
          </nav>  
        </div>

        <div class = "col-span-9">
          <section id = "abstract" ref = "abstract">
            <h1>
              Abstract
            </h1>
            MetraMorpheus is our attempt to treat endometriosis, which affects approximately 190 million women worldwide and causes debilitating pain and bleeding. The present treatments are either complication-prone (surgery) or ineffective and associated with an increased risk of breast cancer (hormonal therapy).
            <br />
            That changes now.
            <br />
            In a first to improve the lives of these women, we intend to develop not one, but TWO mRNA-based approaches to treat endometriosis. 
            First, we aim to express the downregulated CD36 on the membranes of peritoneal macrophages to induce the clean-up of ectopic tissue, which was impaired, almost certainly due to the downregulation of CD36.
            Next, we aim to target the chemokine Interleukin-8 (IL-8), which stimulates the adhesion of fibronectin to endometrial cells, is pro-inflammatory, and is potently angiogenic. Several studies (including one as recent as early 2023) have shown that targeting IL8 significantly reduces endometriotic tissue volume
            <br />
             Phasellus gravida, velit suscipit lobortis sollicitudin, ante quam euismod orci, eu viverra quam sapien vitae magna. Donec feugiat orci diam, at lacinia turpis pulvinar sit amet. Sed eu tellus aliquam, consequat ligula vitae, elementum dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In odio lacus, ultricies ut molestie in, laoreet nec leo. Donec commodo facilisis metus, quis scelerisque dolor ultrices aliquet. Praesent porttitor luctus magna. Mauris quis sagittis diam. Suspendisse eget quam ut ligula faucibus aliquet vitae ut augue. Vestibulum eu pulvinar risus. Donec condimentum dui eget metus gravida tempus. Mauris ut maximus leo.

            Aliquam erat volutpat. Sed tincidunt lacus id arcu hendrerit auctor. Morbi dictum, felis vel molestie finibus, magna massa ornare lectus, ac ultrices tellus orci vestibulum nisi. Donec dui massa, tempor eu dolor vel, semper varius enim. Morbi consequat neque nisl, a gravida arcu pharetra eget. Donec sodales neque nec metus ultricies facilisis. Nam porttitor varius lectus eget condimentum. Maecenas vehicula magna vel risus ultricies dapibus. Sed sit amet maximus nulla. Fusce id cursus tortor. 
          </section>

          <section id = "lipsum">
            <h1>
              Lorem Ipsum
            </h1>


              Here, Metra implies uterus,  but in this context, it stands for Endometriosis affecting the entire reproductive system
              Morpheus is the Greek God of dreams and sleep.
              Essentially, our therapy endeavours to soothe and heal an inflamed reproductive system.
              Together, it invokes ‘metamorphosis’, the change we intend to see in the disease process and in the patient's quality of life.
          </section>
          <section id = "lipsum2">
                        <h1>
              Lorem Ipsum 2
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac lectus vulputate, ornare massa a, rhoncus massa. Suspendisse pulvinar ultricies accumsan. Nulla porttitor metus lectus. Donec eu nunc nulla. Fusce faucibus ligula nisi, et rutrum erat sagittis rhoncus. Maecenas tincidunt dignissim elit eget consectetur. In sit amet sem at magna lacinia porttitor eu non eros. Phasellus cursus consequat risus, ac ullamcorper sem feugiat vel. Cras at sollicitudin sem, vitae semper mi. Vivamus ex lorem, cursus vestibulum volutpat nec, tristique vel libero. Mauris at diam nec sapien accumsan bibendum. Aenean dapibus, ipsum eu fringilla eleifend, ligula velit tristique erat, ut consectetur lorem metus ut nulla. Fusce consectetur luctus arcu id eleifend. Proin tincidunt orci ac est elementum, vitae sagittis turpis accumsan. Aliquam tortor neque, tincidunt id nisi eget, tempus scelerisque nisl. Maecenas vehicula lorem lorem, in rutrum nisi lacinia quis.

            Nullam iaculis ex ligula, at aliquet libero sodales ac. Aliquam erat volutpat. Proin sit amet pretium quam. Donec id fermentum justo. Maecenas gravida dapibus rutrum. Morbi mattis dui sed convallis sollicitudin. Aliquam ac erat tellus. Sed sapien nunc, congue quis sodales vitae, convallis ut metus. Mauris quis ultricies magna. Fusce interdum lorem non faucibus lobortis. Nam lobortis, dolor vitae sollicitudin auctor, ligula arcu dictum velit, tempor auctor mauris tortor a odio. Suspendisse ligula neque, ultrices sit amet ipsum sed, dictum dapibus risus. Sed et lectus tortor. Nunc eget odio elementum urna egestas pellentesque. Vivamus faucibus maximus consequat. Sed pretium iaculis iaculis.

            Praesent non blandit erat, nec sagittis lorem. Suspendisse eget euismod neque, id sollicitudin dui. Cras sed rhoncus lacus. Phasellus fringilla magna placerat nisi rutrum, id scelerisque metus scelerisque. Phasellus congue scelerisque dui, in pharetra risus volutpat sit amet. Nunc in consectetur ipsum, in aliquet libero. Vivamus neque dolor, tincidunt bibendum justo quis, commodo fermentum tellus. Etiam ut ipsum consectetur, lobortis ipsum nec, hendrerit velit. Ut dapibus vestibulum libero ac blandit. Cras eleifend felis ut tortor fringilla efficitur. Quisque non rutrum ante. Duis varius dolor et dolor vehicula tincidunt. Nam est nisi, lacinia a tincidunt a, gravida ac velit. Sed a consequat nisi, sed bibendum nisl.

            Praesent accumsan purus eu nulla fringilla luctus eget at ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus id elit sapien. Nulla tristique consectetur eros pharetra vehicula. Sed mattis malesuada vestibulum. Nullam at augue eget felis varius faucibus. Donec posuere, tortor vehicula tempus bibendum, neque risus posuere mi, nec rhoncus lectus augue id tortor. Donec vehicula diam sem. Phasellus luctus elit et nisi commodo, vitae ultrices ex tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum mi bibendum facilisis imperdiet. Aenean sed metus mauris.

            Aliquam erat volutpat. Suspendisse a erat eu augue auctor imperdiet. Curabitur egestas nec est facilisis volutpat. Etiam pretium ligula nibh, vitae condimentum enim hendrerit nec. Aenean quis sapien iaculis dolor tincidunt euismod ac eget neque. Nullam suscipit est eget pharetra semper. Aenean vitae leo eros. Phasellus cursus augue ac dolor fermentum condimentum. Maecenas sed tincidunt tortor. Phasellus sed lacus sit amet quam blandit sodales. Cras nec interdum massa. Etiam maximus porta magna eu ultrices. Suspendisse ut sapien ac mauris molestie tempus nec a eros.

            Duis aliquam orci eget libero efficitur, eget hendrerit diam placerat. Integer in sagittis lorem. Quisque vel quam quis nunc blandit aliquet in eget mauris. Cras ac justo sapien. Ut interdum efficitur velit, eu tempus ante malesuada id. Integer vel cursus ante, nec tincidunt ligula. Suspendisse sed tellus tellus. Morbi tempor ullamcorper eros, nec consequat sem. Proin ac cursus quam, id iaculis ligula.

            Curabitur suscipit sapien diam, ac facilisis est facilisis vitae. Nulla semper justo ut lacus sodales posuere. Sed tincidunt sem non turpis lobortis molestie. Aenean tristique arcu orci, sit amet sodales metus consectetur quis. Integer id justo libero. Nam eu tortor et sem porta scelerisque sit amet eget mauris. Fusce sagittis vulputate sodales. Proin a purus vehicula, scelerisque urna eu, tempor lorem. Suspendisse faucibus, tortor quis euismod varius, lacus lectus fermentum diam, non iaculis metus elit a magna. Donec blandit mi orci, a imperdiet quam rhoncus non.

            Sed turpis ex, posuere vitae finibus et, bibendum vitae lectus. Nam id erat imperdiet, tempus ligula eu, volutpat ipsum. Fusce non sapien in nunc eleifend sollicitudin eu vel orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque lacinia, lectus ac malesuada euismod, lacus enim malesuada purus, ac ornare justo orci sit amet sem. Morbi id nisi semper ante dictum aliquet luctus eget urna. In mollis euismod sapien malesuada rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor sit amet mi id interdum. Quisque at aliquet odio, vitae egestas mauris. Phasellus iaculis nec urna pretium dictum. Nulla blandit risus sed sollicitudin interdum. Praesent quis turpis mi. Nunc ac tellus sodales, rhoncus libero nec, aliquet mi.

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
            currentPage: "description"
        };
    },
    methods:{
      scrollTo(id){
        console.log(id)
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
      }
    },
    mounted(){
      console.log("added")
      this.$refs.abstractButton.addEventListener("click", ()=>{this.scrollTo("abstract")})
  
    }
}
</script>