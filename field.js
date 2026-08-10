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