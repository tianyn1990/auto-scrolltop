module.exports = (api) => {
    api.cache(true);
    return {
        plugins: [
            [
                '@babel/plugin-transform-runtime',
            ]
        ],
        presets: [
            [
                '@babel/preset-env',
                {
                    corejs: 2,
                    targets: [
                        '> 0.25% in CN',
                        'last 2 versions',
                        'ios >= 6',
                        'android >= 4',
                        'ie >= 9',
                        'not dead',
                    ],
                    forceAllTransforms: true,
                    useBuiltIns: 'usage',
                    debug: true,
                },
            ],
        ],
    };
};