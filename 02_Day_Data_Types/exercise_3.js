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


console.clear()

let sentence2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(sentence2.match(/love/gi)) 


let sentence3 = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence3.match(/because/gi)) 

console.clear()


const sentence4 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence4.replace(/[#$%&@!;]/gi,''))


const txt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let total = txt.match(/\d+/g)

let totalMoney = 0;
totalMoney +=+total[0]
totalMoney +=+total[1]
totalMoney +=+total[2]
console.log(totalMoney)

