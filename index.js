function findMatching(drivers, driverName) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === driverName.toLowerCase();
    })
};

function fuzzyMatch (drivers, driverName) {
    const driverNameLength = driverName.length
    return drivers.filter(function(driver){
        return driver.slice(0, driverNameLength) === driverName
    })
};

function matchName (drivers, driverName) {
    const result = drivers.filter(driver => driver.name === driverName)
    return result
}