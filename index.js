var customerName = "bob";
const leastFavoriteCustomer = "john";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob";
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
    return bestCustomer;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "scott";
    return leastFavoriteCustomer;
}

