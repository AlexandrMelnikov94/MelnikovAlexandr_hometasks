var john = {
    bills: [124, 48, 268, 180, 42],
    tipCalculator() {
        this.tips = [];
        this.finalValue = [];

        var percentage;
        for (var i = 0; i < this.bills[i]; i++) {
            if (this.bills[i] < 50) {
                percentage = 0.2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }

            this.tips[i] = this.bills[i] * percentage;
            this.finalValue[i] = this.bills[i] + this.tips[i];
        }
    }
}

var mark = {
    bills: [77, 375, 110, 45],
    tipCalculator() {
        this.tips = [];
        this.finalValue = [];

        var percentage;
        for (var i = 0; i < this.bills[i]; i++) {
            if (this.bills[i] < 100) {
                percentage = 0.2;
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                percentage = 0.10;
            } else {
                percentage = 0.25;
            }

            this.tips[i] = this.bills[i] * percentage;
            this.finalValue[i] = this.bills[i] + this.tips[i];
        }
    }
}

john.tipCalculator();
mark.tipCalculator();

console.log('John', john);
console.log('Mark', mark);

function averageTips(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return (sum / tips.length);
}

var averageTipsJohn = averageTips(john.tips);
var averageTipsMark = averageTips(mark.tips);

console.log('Johns average tips', averageTipsJohn);
console.log('Marks average tips', averageTipsMark);

if (averageTipsJohn > averageTipsMark) {
    console.log('Johns family paid more tips');
} else if (averageTipsJohn < averageTipsMark) {
    console.log('Marks family paid more tips');
} else {
    console.log('The same tips');
}