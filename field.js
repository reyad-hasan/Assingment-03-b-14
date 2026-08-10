// Problem 5 — Debugging Challenge: AI Leaderboard Generator
/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }
    if (students.length === 0) {
        return "Invalid";
    }

    for (const student of students) {
        const keys = Object.keys(student);
        if (!keys.includes('name') ||
            !keys.includes('score') ||
            typeof student.name !== 'string' ||
            typeof student.score !== 'number'
        ) {
            return "Invalid";
        }
    }

    const qualified = students.filter(student => student.score >= 70);
    const names = qualified.map(name => name.name.toUpperCase());

    return names.slice(0, 3);
}
const result = [{ name: "Rafi", score: 90 }, { name: "Sadia", score: 65 }, { name: "Karim", score: 85 }, { name: "Nafis", score: 75 }]
console.log(generateLeaderboard(result));
