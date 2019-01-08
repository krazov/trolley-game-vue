module.exports = {
    pages:{
        index: {
            entry: './src/main.ts',
            title: 'Trolley Dilemma: The Game',
        },
    },
    lintOnSave: process.env.NODE_ENV !== 'production',
};
