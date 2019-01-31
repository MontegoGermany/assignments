var form = document.words

function madLib (event){
    event.preventDefault()
    var noun = form .noun.value
    var adverb = form.adverb.value 
    var verb = form.verb.value
    alert(`The ${noun} did ${adverb} ${verb} in`) 

   form.noun.value = ''
   form.adverb.value = ''
   form.verb.value = ''

}

form.addEventListener('submit', madLib)