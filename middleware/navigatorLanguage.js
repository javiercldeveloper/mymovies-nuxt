export default function (context) {
  context.language = process.server
    ? 'es-ES'
    : navigator.language
}
