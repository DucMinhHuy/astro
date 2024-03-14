function common(context: any) {
  context.keys().forEach(context)
}

common(require.context('./modules/', true, /\.ts$/))



