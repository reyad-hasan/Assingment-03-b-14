// Problem 1 — Student Introduction Generator
const studentIntroduction = (student) => {
    if (typeof student !== 'object' || Array.isArray(student)) {
        return "Invalid"
    }

    const keys = Object.keys(student);
    if (!keys.includes('name') ||
        !keys.includes('age') ||
        !keys.includes('course')
    ) {
        return "Invalid"
    }

    const { name, age, course } = student;
    return `My name is ${name}. I am ${age} years old. I am learning ${course}.`
}



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
