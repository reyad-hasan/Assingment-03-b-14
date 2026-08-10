// Problem 4 — Bonus Score Calculator
const bonusScore = (scores) => {
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid"
    }

    for (const score of scores) {
        if (typeof score !== 'number') {
            return "Invalid";
        }
    }

    const bonusScore = scores.map(score => score + 10);
    return bonusScore.reduce((total, value) => total + value, 0);
}
