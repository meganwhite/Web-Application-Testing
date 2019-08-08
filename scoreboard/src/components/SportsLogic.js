
let strikes = 0;
let balls = 0;
let fouls = 0;
let hits = 0;


const strike = (strikes)=> {
    if (strikes >= 3) {
        return 0;
    }
    else {
        return strikes += 1;
    }
}

const ball = (balls) => {
    if (balls >= 4) {
        return 0;
    }
    else {
        return balls += 1;
    }
}

const foul = (strikes) => {
    if (strikes < 2) {
        return strikes += 1;
    }
}

const hit = (strikes, balls) => {
    strikes = 0;
    balls = 0;
    return strikes, balls;
}