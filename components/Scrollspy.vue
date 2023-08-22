<template>
    <main>
      <div class="container">
          <slot/>
      </div>
    </main>
</template>

<script>
export default {
  props: {
    currentPage: {type: String},
    initialSection: {type: String}
  },
  data() {
    return {
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        rootMargin: '-35% 0% -35% 0%',
        threshold: 0
      },
      currentlyActiveSection: this.initialSection,
      currentlyActiveSubsection: "",
    };
  },
  methods: {
    setClass: function (id, isScrolled) {
      console.log(`.class-${id}`)
        const a = document.querySelector(`.class-${id}`).classList
        //console.log(a)
        if (isScrolled) {
          a.add("scrolled");
          return;
        }
        a.remove("scrolled");
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      //console.log(entries)
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          if (this.currentlyActiveSubsection != "") {
            this.setClass(this.currentlyActiveSubsection, false)
          }
          this.setClass(this.currentlyActiveSection, false)
          
          /*if (document.querySelector(`.class-${id}`).hasAttribute("parent")) {
            idParent = id.replace(/[0-9]/g, '');

            this.currentlyActiveSection = idParent
            this.currentlyActiveSubsection = id;
          } else {
            this.currentlyActiveSection = id;
            this.currentlyActiveSubsection = "";
          }
          */
          let idParent = id.replace(/[0-9]/g, '');
          if(idParent==id){
            this.currentlyActiveSection = id
            this.currentlyActiveSubsection = ""

          }else{
            this.currentlyActiveSection = idParent
            this.currentlyActiveSubsection = id
          }
        }

        console.log("active section: " + this.currentlyActiveSection)

        console.log("active subsection: " + this.currentlyActiveSubsection)
        if (this.currentlyActiveSubsection != "") {
            this.setClass(this.currentlyActiveSubsection, true)
        }
        this.setClass(this.currentlyActiveSection, true)
      });   
    }, this.observerOptions);   
    
    document
      .querySelectorAll("section[id]")
      .forEach(section => {
        this.observer.observe(section);
      });
  },
  beforeDestroy() {
    this.observer.disconnect();
  }
};
</script>
