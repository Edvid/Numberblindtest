export default class Counter {
    constructor(item, isUp, speed){

        const speedInSeconds = 1.0 / Math.abs(speed) * 1000;

        item.innerHTML = Math.floor(Math.random()*10);
        setInterval(() => { this.changeNum(item, isUp) }, speedInSeconds);
    }

    async changeNum(item, isUp){
        const currentNum = item.innerHTML;
        item.innerHTML = isUp ? this.rollUp(currentNum) : this.rollDown(currentNum);
    }

    rollUp (num) {
        switch (+num) {
            case 9: return 0;
            default: return +num + 1;
        }
    }
    
    rollDown (num) {
        switch (+num) {
            case 0: return 9;
            default: return +num - 1;
        }
    }
}