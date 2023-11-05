

const posts = [];
let lastActivityTime = new Date();

function createPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            resolve(post);
        }, 1000);
    });
}

function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(formatDate(lastActivityTime));
        }, 1000);
    });
}

// Simulate a user creating a post
createPost({ title: "New Post 1" }).then(() => {
    return updateLastUserActivityTime();
}).then((formattedDate) => {
    console.log(`username: Lohith, lastSeen: ${formattedDate}`);
    // console.log("All Posts:", posts);
}).catch((error) => {
    console.log("Error:", error);
});
