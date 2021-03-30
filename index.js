/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName:  array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrays) {
    return arrays.map(function(array) {
        return createEmployeeRecord(array)
    })
}

function createTimeInEvent(dateStamp) {
    let date = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(date[1], 10),
        date: date[0]
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    let date = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(date[1], 10),
        date: date[0]
    })
    return this
}

function hoursWorkedOnDate(dateString) {
    let timeIn = this.timeInEvents.find(function(time) {
        return time.date === dateString
    })
    let timeOut = this.timeOutEvents.find(function(time) {
        return time.date === dateString
    })
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(dateString) {
    let wages = hoursWorkedOnDate.call(this, dateString)
    return wages * this.payPerHour    
}


function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function (array) {
        return array.firstName === firstName
    })
}

function calculatePayroll(srcArray) {
    return srcArray.reduce(function(payroll, array) {
        return payroll + allWagesFor.call(array)
    }, 0)
}