// Problem 2 — Active User Filter
const filterActiveUsers = (users) => {
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid"
    }

    if (users.some(user => !('isActive' in user))) {
        return "Invalid"
    }
    return users.filter(user => user.isActive === true);
}

const result = [{name:"A", isActive:true},{name:"B", isActive:false}]
console.log(filterActiveUsers(result));