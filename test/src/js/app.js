function common(context) {
  context.keys().forEach(context)
}

common(require.context('./modules/', true, /\.js$/))

