
const trees = ["Elm", "Oak", "Maple", "Pine"]
const errorMess = document.querySelector(".error")
const displayResult = document.querySelector(".displayResults")
const displayResult1 = document.querySelector(".displayResults1")
const tree3 = document.querySelector(".tree3")
const tree4 = document.querySelector(".tree4")


const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += ` ${tree} `
    })
    displayResult.innerHTML = `${treeList}  = ${trees.length} elements long`
}
 
listTrees()


document.querySelector(".add_redwood").onclick = () => {
    trees.push("Redwood")
    listTrees()
}
document.querySelector(".add_pear").onclick = () => {
    trees.unshift("Pear")
    listTrees()
}

/*--------------------------------------------------------------------*/


document.querySelector(".lowCase").onclick = () => {
    treeLi = ''
    trees.forEach(tree => {
        treeLi += ` ${tree} `
        console.log(tree)
    })
    displayResult.innerHTML = `${treeLi.toLowerCase()}  = ${trees.length} elements long`
      
}



/*--------------------------------------------------------------------*/


document.querySelector(".remove_first").onclick = () => {
    if(trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        errorMess.textContent = "error"
    }
    
}


document.querySelector(".remove_last").onclick = () => {
    if(trees.length > 0) {
        trees.pop()
        listTrees()
    } else {
        errorMess.textContent = "error"
    }
}


document.querySelector(".remove_second").onclick = () => {
    if(trees.length > 0) {
        pos = 1
        trees.splice(pos, 1)
        listTrees()
    } else {
        errorMess.textContent = "error"
    }
}


/*-----------------------------------------------------------------*/
document.querySelector(".sort").onclick = () => {
    if(trees.length > 0) {
      trees.sort(function(a, b) {
            return a === b ? 0 : a > b ? 1 : -1
        })
  
        
        listTrees()
    } else {
        errorMess.textContent = "error"
    }
}
/*-----------------------------------------------------------------*/


document.querySelector(".showTree3").onclick = () => {
  
  //  var index = trees.indexOf(3);
  if (trees.length >= 3) {
    pos = 2
    var index = trees.splice(pos, 1)
    tree3.textContent = ` the third tree is ${index}`
  } else {
    errorMess.textContent = "there are less then three trees"
  }
}

document.querySelector(".showTree4").onclick = () => {
  
    //  var index = trees.indexOf(3);
    if (trees.length >= 4 ) {
      pos = 3
      var index = trees.splice(pos, 1)
      tree4.textContent = `the fourth tree is ${index}`
    } else {
        errorMess.textContent = "there are less then 4 trees"
    }
  }