let choixIA =  document.getElementById('choixIA')
let choixUser =document.getElementById('choixUser')
let resultat = document.getElementById('Resultat')
let arme = ['pierre' , 'papier' , 'ciseaux','ciseaux','pierre','papier' ]
let win = false ; let loose = false ; let equality = false ;

function armeIA(){
    let indexArme = Math.floor(Math.random()*5)
    return arme[indexArme]
}


function game(nb){

  let ia = armeIA() ; 
  let user = arme[nb] ;
  choixIA.innerHTML = document.getElementById(`${ia}`).innerHTML
  choixUser.innerHTML = document.getElementById(`${user}`).innerHTML

  if ((user === 'pierre' &&  ia === 'ciseaux') || (user === 'papier' &&  ia === 'pierre')|| (user === 'ciseaux' &&  ia === 'papier')){   
        win = true
        loose = false 
        equality = false
        score() 
        resultat.textContent = 'YOU WINE!'
        resultat.style.backgroundColor = 'rgb(14, 155, 14)'
    } else 
    if(user === ia ){
      equality = true 
      win = false
        loose = false
        score() 
        resultat.textContent = 'EQUAL :('
        resultat.style.backgroundColor = 'black'
        resultat.style.color = 'white'
    }else{
      loose = true
      equality = false 
      win = false
      score()
      resultat.textContent = 'YOU LOOSE'
      resultat.style.backgroundColor = 'rgba(220, 32, 32, 0.785)'
    }

}
let iaScore =0 ; let userScore = 0 ;
function score(){
 if(win === true){
    userScore++ ;
    document.getElementById('scoreUser').textContent = userScore 
 }else if(loose === true){
    iaScore ++ ;
    document.getElementById('scoreIA').textContent = iaScore
 }
}