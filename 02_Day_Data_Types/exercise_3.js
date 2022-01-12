let word = "JavaScript"

let random_number = Math.floor(Math.random()*word.length)

console.log(random_number)

console.log(word.charAt(random_number))

console.log(
    `
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    `)

let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

sentence = sentence.replace(/@/g,"")
sentence = sentence.replace(/%/g,"")
sentence = sentence.replace(/&/g,"")
sentence = sentence.replace(/#/g,"")
sentence = sentence.replace(/$/g,"")

console.log(sentence)
