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