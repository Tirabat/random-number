let c = 1
let live = 10
while (c == 1){
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const f = +prompt('Ведите до скольки компютер сможет загадывать')
    const secretNumber = getRandomInt(1, f);
    while (true){
        const b = +prompt(`Угадайте число которое загадал компьютер от 1 до ${f}`)
        if (b < 1 || b > f){
            alert('Написано не то число, попробуйте снова')
            continue
        }
        else{
            alert(`Ты написал ${b}`)
            if (b != secretNumber){
                live = live - 1
                alert(`Ты не угадал, осталось ${live} жизней`)
                continue
            }
            else{
                alert(`Вы угадали, оставшиеся жизни: ${live}`)
                break
            }
        }
    }
    const a = prompt('Вы хотите продолжить?')
    if (a == 'Да' || a == 'Yes' || a == 'да' || a == 'yes'){
        continue
    }
    else{
        c = c - 1
    }
}