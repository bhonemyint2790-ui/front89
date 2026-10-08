module.exports = function (api) {
  api.cache(true);

  // Prefer `babel-preset-expo` when available (standard for Expo projects).
  // If it's not installed in the current environment (e.g. readonly workspace
  // or partial install), fall back to the metro preset so bundling can proceed.
  let preset = "babel-preset-expo";
  try {
    require.resolve(preset);
  } catch (e) {
    preset = "module:metro-react-native-babel-preset";
  }

  return {
    presets: [preset],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./",
          },
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
