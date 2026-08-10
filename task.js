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

    for (const user of users) {
        if (!user.hasOwnProperty('isActive')) {
            return "Invalid";
        }
    }

    return users.filter(user => user.isActive === true);
}



// Problem 3 —Trending Hashtag Counter
const countHashtags = (caption) => {
    if (typeof caption !== 'string') {
        return "Invalid"
    }

    const words = caption.split(' ');
    const hashtagCounts = words.filter(word => word.startsWith('#'));
    let longestTag = '';
    hashtagCounts.forEach(hashtagCount => {
        const tag = hashtagCount.slice(1);
        if (tag.length > longestTag.length) {
            longestTag = tag
        }
    });

    return { hashtagCount: hashtagCounts.length, longestTag: longestTag }
}