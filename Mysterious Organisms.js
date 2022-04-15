// Returns a random DNA base

const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand;
}

//factory function
let pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    
    //mutate method
    mutate () {
      let randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      //while  - to make sure newBase isn't replacing itself
      while (this.dna[randIndex] === newBase) {
        newBase === returnRandBase();
      }
      //return
      return this.dna[randIndex] = newBase;
      return this.dna
    },
    
    //method to compare objects
    compareDNA (obj) {
        let numMatch = 0;
        for (let i = 0; i <= this.dna.length - 1; i++);
        if (obj.dna[i] === this.dna[i] ) {
          numMatch += 1;
        };
        let percMatch = numMatch/this.dna.length * 100;
        console.log(`These DNA strands are ${percMatch}% in common.`)
    },
    
    //method to determine survival
    willLikelySurvive () {
      let cArray = this.dna.filter(base => base === 'C');
      let gArray = this.dna.filter(base2 => base2 === 'G');
      if ((cArray.length) + (gArray.length) >= 9 ) {
        return true
      } else {
        return false
      }
    }
    }
  };
  let arrayOfpAequor = [];
  for (let i = 0; i < 30; i++) {
    arrayOfpAequor.push(pAequorFactory(i + 1, mockUpStrand))
  };
  









