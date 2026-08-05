import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.tsx", // Указывает точку входа приложения

  output: {
    filename: "bundle.js", // Результат сборки будет в папке dist в файле bundle.js.
    clean: true, // Очищает папку перед новой сборкой
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Позволяет импортировать файлы без указания расширения (например, импортировать компонент как ./App )
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/, // Файлы с расширением .ts .tsx обрабатываются через ts-loader, который передает их в Typescript
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      // HtmlWebpackPlugin создает новый HTML-файл на основе шаблона из public/index.html и автоматически подключает bundle.js
      template: "./public/index.html",
    }),
  ],

  devServer: {
    // Запускает локальный сервер разработки на порту 3000 и автоматически открывает браузер
    port: 3000,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
