let c = 1
let scoreUser = 0
let scoreMachine = 0
while (c == 1){
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const secretNumber = getRandomInt(1, 5);
    while (true){
        const b = +prompt('Угадайте число которое загадал компьютер')
        if (b < 1 || b > 5){
            alert('Написано не то число, попробуйте снова')
            continue
        }
        else{
            alert(`Ты написал ${b}`)
            if (b != secretNumber){
                scoreMachine += 1
                alert(`Ты не угадал, счет: ${scoreMachine} : ${scoreUser}`)
                continue
            }
            else{
                scoreUser += 1
                alert(`Вы угадали, счет: ${scoreMachine} : ${scoreUser}`)
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