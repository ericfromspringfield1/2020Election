class SuperTuesday {
    constructor(state, delegates) {
        this.state = state;
        this.delegates = delegates;

    }
    
    winnerDeclaration() {
       return `Super Tuesday was won by ${biden.name} with a total of ${total.delegates} delegates `
    }
    
}


class Candidate {
    constructor(name, delegatesWon) {
        this.name = name;
        this.delegatesWon = delegatesWon;
        //totals will be a total of state.delegates * (percent won)... FOR EACH?    
    }
    
}

const alabama = new SuperTuesday('Alabama', 52)
const americaSamoaCaucus = new SuperTuesday('America Samoa', 6)
const arkansas = new SuperTuesday('Arkansas', 31)
const california = new SuperTuesday('California', 415)
const colorado = new SuperTuesday('Colorado', 67)
const democratsAbroad = new SuperTuesday('Democrats Abroad', 13)
const maine = new SuperTuesday('Maine', 24)
const massachusetts = new SuperTuesday('Massachusetts', 91)
const minnesota = new SuperTuesday('Minnesota', 75)
const northCarolina = new SuperTuesday('North Carolina', 110)
const oklahoma = new SuperTuesday('Oklahoma', 37) 
const tennessee = new SuperTuesday('Tennessee', 64)
const texas = new SuperTuesday('Texas', 228)
const utah = new SuperTuesday('Utah', 29)
const vermont = new SuperTuesday('Vermont', 16)
const virginia = new SuperTuesday('Virginia', 99)

const bernie = new Candidate('Bernie Sanders', Math.ceil(`${
    (vermont.delegates * 0.507) +
    (colorado.delegates * 0.363) + 
    (utah.delegates * 0.346) +
    (california.delegates * 0.336) +
    (alabama.delegates * 0.166) +
    (tennessee.delegates * 0.250) +
    (arkansas.delegates * 0.224) +
    (oklahoma.delegates * 0.254) +
    (virginia.delegates * 0.231) +
    (northCarolina.delegates * 0.241) +
    (minnesota.delegates * 0.299) +
    (massachusetts.delegates * 0.267) +
    (texas.delegates * 0.299) + 
    (maine.delegates * 0.329) 

}`))

const biden = new Candidate('Joe Biden', Math.ceil(`${
    (virginia.delegates * 0.533) + 
    (northCarolina.delegates * 0.430) + 
    (alabama.delegates * 0.844) +
    (massachusetts.delegates * 0.334) +
    (tennessee.delegates * 0.417) +
    (oklahoma.delegates * 0.387) +
    (arkansas.delegates * 0.404) +
    (minnesota.delegates * 0.386) +
    (texas.delegates * 0.343) + 
    (maine.delegates * 0.340) +
    (vermont.delegates * 0.220) +
    (utah.delegates * 0.174) +
    (colorado.delegates * 0.245) +
    (california.delegates * 0.252) 


    }`))
const warren = new Candidate('Elizabeth Warren', Math.ceil(`${(colorado.delegates * 0.00) 

}`))
const bloomberg = new Candidate('Mike Bloomberg', Math.ceil(`${(americaSamoaCaucus.delegates * 0.499) 

}`))

document.getElementById('biden')
.innerHTML = (`${biden.name} wins ${virginia.state}, 
${northCarolina.state}, 
${alabama.state},
${massachusetts.state},
${tennessee.state}, 
${oklahoma.state}, 
${arkansas.state}, 
${minnesota.state},
${texas.state},
${maine.state}, 
and finished in the top 15% in
${vermont.state},
${colorado.state},
${utah.state},
${california.state}. These Super Tuesday results are added in for a total of ${biden.delegatesWon} delegates`)

document.getElementById('bernie')
.innerHTML = (`${bernie.name} wins ${vermont.state},
${colorado.state},
${california.state}
${utah.state}, 
and finished in the top 15% in  
${alabama.state},
${tennessee.state}, 
${massachusetts.state},
${oklahoma.state},
${arkansas.state},
${minnesota.state},
${texas.state},
${maine.state},
${virginia.state},
${northCarolina.state},
These Super Tuesday results are added in for a total of ${bernie.delegatesWon} delegates`)

/////////////////////////////////////////////////////////
console.log(`${biden.name} wins 
${virginia.state}, 
${northCarolina.state}, 
${alabama.state},
${massachusetts.state},
${tennessee.state}, 
${oklahoma.state}, 
${arkansas.state}, 
${minnesota.state}
${texas.state},
${maine.state}, 
and finished in the top 15% in
${vermont.state},
${colorado.state},
${utah.state},
${california.state},
for a total of ${biden.delegatesWon} delegates`)


console.log(`${bernie.name} wins 
${vermont.state},
${colorado.state},
${california.state}
${utah.state}, 
and finished in the top 15% in  
${alabama.state},
${tennessee.state}, 
${massachusetts.state},
${oklahoma.state},
${arkansas.state},
${minnesota.state},
${texas.state},
${maine.state},
${virginia.state},
${northCarolina.state},
for a total of ${bernie.delegatesWon} delegates`)

console.log(arkansas.delegates * 0.776)

