//napisati modul za brojanje koraka i exportati modul

var stepCounter = {
    steps: 0,
    walk: function () {
        this.steps++;
    },
    getTotalSteps: function () {
        return this.steps;
    }
};

module.exports = stepCounter;