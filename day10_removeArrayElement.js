const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    // write your solution here

    let item = array.filter(element => element.field === filterField)[0];
    let index = array.indexOf(item);
    if (index > -1) {
        return [...array.slice(0, index), ...array.slice(index + 1)];
    }
    return array;
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)