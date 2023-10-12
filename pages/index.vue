<template>
  <div class = "test overflow-hidden relative -top-8">
    <video playsinline muted autoplay>
      <source src="landing.mp4" type="video/mp4">
    </video>
  </div>
  
  <div class = "w-screen align-centre relative left-2/4 -translate-x-2/4 bg-gradient-to-b from-white to-violet-950">
  
    <div class = "grid w-2/4 gap-4 grid-cols-2 grid-rows-5  relative left-2/4 -translate-x-2/4">
      <img src  ="p1.png" class = "border-black border-4">
      <img src  ="p2.png" class = "border-black border-4">
      <img src  ="p3.png" class = "border-black border-4">
      <img src  ="p4.png" class = "border-black border-4">
      <img src  ="p5.png" class = "border-black border-4">
      <img src  ="p6.png" class = "border-black border-4">
      <img src  ="p8.png" class = "border-black border-4">
      <img src  ="p9.png" class = "border-black border-4">
    </div>

    <div class = "text-violet-950 font-bold text-8xl max-md:text-7xl text-transparent text-center title-text">
      Endometriosis affects
    </div>

    <div class = "w-2/4 aspect-square gap-4 grid grid-cols-2 grid-rows-2 relative left-2/4 -translate-x-2/4">
      <div class = "affect1 bg-gray-500 p-2 text-center shadow-2xl border-4 border-black">
          <div class = "mt-8 violet-500 text-4xl courierprime">
            1 in 10 women of reproductive age
          </div>
      </div>      
      
      <div class = "affect2 p-2 text-center shadow-2xl border-4 border-black">
        <div class = "mt-8 violet-500 text-4xl courierprime">
          247 Million Women Worldwide
        </div>
      </div>

      <div class = "affect3 p-2 text-center shadow-2xl border-4 border-black">
        <div class = "mt-8 violet-500 text-4xl courierprime">
            42 Million Women in India
          </div>
      </div>
      <div class = "affect4 bg-gray-500 p-2 text-center shadow-2xl border-4 border-black">
        <div class = "mt-8 violet-500 text-4xl courierprime">
          35% of all women with subfertility
        </div>  
      </div>

    </div>

    <div class = "mt-16 surgery-container aspect-square w-2/4 grid grid-flow-col relative left-2/4 -translate-x-2/4">
      <div class="surgery text-center text-4xl pt-16 px-4 courierprimebold row-span-2 col-span-1  border-4 border-black p-2">
        What about Surgery?
      </div>

      <div class = "col-span-1 row-span-1 courierprime  border-4 border-black p-2 bg-white">
        <div class = "courierprimebold text-2xl">
          It's <mark>Expensive</mark>
        </div>
        <br/>
        <div class = "courierprime text-md">
          Cost of Surgery in India:
        </div>
        <div class = "courierprimebold text-2xl">
          USD 3000-3700
        </div>
        <br/>
        <div class = "courierprime text-md">
          Median Indian Household Income
        </div>
        <div class = "courierprimebold text-2xl">
          USD 2466
        </div>
      </div>

      <div class ="col-span-1 row-span-1 border-4 border-black p-2 bg-white">
        <div class = "courierprimebold text-lg">
          It doesn't end there.
        </div>
        <div class = "courierprime text-lg">
          Surgeries have a recurrence rate of up to
        </div>
        <div class = "courierprimebold text-xl">
          50%
        </div>

        <div class = "courierprime text-lg">
          Multiple surgeries are required
        </div>
      </div>
    </div>


    <div class = "courierprime text-white font-bold text-8xl max-md:text-7xl text-center">
      Our Solution
    </div>

    <div class = "courierprime w-1/2 h-64 p-2 bg-white border-black border-4 text-2xl relative left-2/4 -translate-x-2/4">
      <div>
        We designed an mRNA-based therapy that blocks the chemokine interleukin-8 (CXCL8), which has been proven to promote the progression of endometriosis.
      </div>
      <div class = "mt-4 wireframe2 relative left-2/4 -translate-x-2/4">
        <span class = "text-4xl courierprime cursor-pointer">
          Learn More
        </span>
    </div>
    </div>



    <div class = "courierprime text-white font-bold text-8xl max-md:text-7xl text-center">
      Our Components
    </div>

    <div class = "grid component-container grid-rows-4 w-3/4 gap-x-2 gap-y-4 relative left-2/4 -translate-x-2/4">
      <div class = "col-span-2 bg-white border-black border-4 p-2">
        <div class = "courierprimebold text-6xl">mRNA</div>

        <div class = "courierprimebold text-3xl">
          A Crucial Molecule involved in the process of Gene Expression
        </div>

        <div class = "courierprime text-xl">
          It carries genetic information from the DNA in the cell's nucleus to the ribosomes in the cytoplasm, where it serves as a template for protein synthesis. To make the mRNA we produce by IVT stable, improve its efficiency, and reduce its immunogenicity, we use modified nucleotides ~like N1-methyl pseudouridine~ and cap the mRNA with cap analogues.
        </div>
      </div>
      <div class = "aspect-square bg-white border-black border-4">
      </div>

      <div class = "aspect-square bg-white border-black border-4">
      </div>

      <div class = "col-span-2 bg-white border-black border-4 p-2">
        <div class = "courierprimebold text-6xl">LNP</div>

        <div class = "courierprimebold text-3xl">
          A Versatile and promising Delivery System
        </div>

        <div class = "courierprime text-xl">
          Composed of lipids arranged in a spherical structure, LNPs can encapsulate and protect therapeutic molecules such as drugs or nucleic acids. This protective coating enhances the stability and bioavailability of the cargo molecules, allowing them to be efficiently delivered to target cells or tissues.
        </div>
      </div>

      <div class = "col-span-2 bg-white border-black border-4 p-2">
        <div class = "courierprimebold text-6xl">Aptide</div>

        <div class = "courierprimebold text-3xl">
          An exciting new class of high affinity peptides.
        </div>

        <div class = "courierprime text-xl">
          Aptides have gained attention in various biomedical applications, including targeted drug delivery, diagnostic imaging, and therapeutic interventions. Their unique properties make them a promising tool in developing precision medicine and personalised therapeutics.  The small size of the aptide makes it have excellent application in targeted drug delivery, especially as this means that it can be conjugated easily to lipids of LNPs.
        </div>
      </div>

      <div class  = "aspect-square bg-white border-black border-4">
      </div>
    </div>
  </div>
</template>


<style scoped>
  .test{
    height: 50vw;
    width: 100vw;
    background-color: #4ebbff;
    background-color: #ffffff;
  }

  .affect1{
    background-image: url("women.png");
    background-size: 100% 100%;
  }
  .affect2{
    background-image: url("world.png");
    background-size: 100% 100%;
  }
  .affect3{
    background-image: url("india.png");
    background-size: 100% 100%;
  }
  .affect4{
    background-image: url("womanpain.png");
    background-size: 100% 100%;
  }

  .title-text{
  font-family: CourierPrimeBold;
}

.surgery-container{
  grid-template-columns: 50% 50%;
}
.surgery{
  background-image: url("surgery.png");
  background-size: 100% 100%;

}

.component-container{
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 33% 33% 33%;
}
</style>