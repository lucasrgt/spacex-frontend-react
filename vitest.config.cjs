const react = require("@vitejs/plugin-react");
const config = {
    plugins: [react()],
    test: {
        environment: 'jsdom',
        setupFiles: ['./test/setup.ts'],
        testMatch: ['./test/**/*.test.tsx'],
        globals: true
    }
};

module.exports = config;
