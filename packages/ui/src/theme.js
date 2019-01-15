export const fontSizes = [14, 16, 18, 24, 32, 48, 64]
export const fontFamilies = {
  sans: `
    system-ui,
    -apple-system, BlinkMacSystemFont,
    Roboto, "Helvetica Neue", "Segoe UI",
    Oxygen, Ubuntu, Cantarell, "Open Sans",
    sans-serif
  `,
  mono: `
    Consolas,
    "Liberation Mono", Menlo,
    Courier,
    monospace
  `
}
export const fontWeights = {
  light: 300,
  normal: 400,
  bold: 500
}
export const lineHeights = {
  solid: 1,
  title: 1.1,
  copy: 1.6
}

export const maxWidths = {
  container: 1028,
  measure: 512,
  measureWide: 720,
  measureNarrow: 360
}

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const colors = {
  // Base
  black: '#000',
  white: '#fff',
  gray: '#fafafa',
  blue: '#0367d8',

  // Scales
  grays: [
    '#f8f9f9',
    '#ebedee',
    '#dee1e3',
    '#cfd3d6',
    '#bec4c8',
    '#acb4b9',
    '#97a1a7',
    '#7f8a93',
    '#5f6e78',
    '#374047'
  ],
  blues: [
    '#e4f0f9',
    '#c6e1f3',
    '#a5cfed',
    '#7db9e5',
    '#4a9eda',
    '#0077cc',
    '#006bb7',
    '#005da0',
    '#004d84',
    '#00365d'
  ],
  indigos: [
    '#eaebfa',
    '#d2d5f6',
    '#b7bbf0',
    '#959ce9',
    '#6872e0',
    '#0011cc',
    '#000fb7',
    '#000da0',
    '#000a83',
    '#00075c'
  ],
  violets: [
    '#f0e9fa',
    '#e1d2f6',
    '#ceb6f0',
    '#b894e9',
    '#9966e0',
    '#5500cc',
    '#4c00b8',
    '#4300a1',
    '#370084',
    '#27005e'
  ],
  fuschias: [
    '#f9e9fa',
    '#f2d1f5',
    '#ebb5f0',
    '#e293e9',
    '#d665e0',
    '#bb00cc',
    '#a900b8',
    '#9400a2',
    '#7b0086',
    '#580061'
  ],
  pinks: [
    '#fae9f3',
    '#f5d1e6',
    '#f0b6d8',
    '#e994c6',
    '#e066ad',
    '#cc0077',
    '#b8006b',
    '#a2005e',
    '#86004e',
    '#610038'
  ],
  reds: [
    '#faeaeb',
    '#f6d2d5',
    '#f0b7bc',
    '#ea969d',
    '#e16973',
    '#cc0011',
    '#b8000f',
    '#a2000d',
    '#86000b',
    '#610008'
  ],
  oranges: [
    '#f9ede4',
    '#f3d9c6',
    '#ecc2a4',
    '#e4a87c',
    '#da864a',
    '#cc5500',
    '#b84c00',
    '#a04300',
    '#843700',
    '#5e2700'
  ],
  yellows: [
    '#f8f6de',
    '#f1ecba',
    '#e9e293',
    '#e0d668',
    '#d7c938',
    '#ccbb00',
    '#b8a900',
    '#a29400',
    '#867b00',
    '#615800'
  ],
  limes: [
    '#eef8df',
    '#dcf1bd',
    '#c7ea97',
    '#b1e16c',
    '#96d73b',
    '#77cc00',
    '#6bb800',
    '#5ea200',
    '#4e8600',
    '#386100'
  ],
  greens: [
    '#e5f9e4',
    '#c9f3c6',
    '#a9eca3',
    '#84e47b',
    '#54da48',
    '#11cc00',
    '#0fb800',
    '#0da200',
    '#0b8600',
    '#086100'
  ],
  teals: [
    '#e3f9ec',
    '#c5f3d8',
    '#a2ecc1',
    '#79e4a6',
    '#46da84',
    '#00cc55',
    '#00b84c',
    '#00a243',
    '#008638',
    '#006128'
  ],
  cyans: [
    '#e3f9f7',
    '#c4f3ef',
    '#a0ece5',
    '#77e3da',
    '#44d9cd',
    '#00ccbb',
    '#00b8a9',
    '#00a294',
    '#00867b',
    '#006159'
  ]
}

const themeColors = {
  mdx: {
    h1: colors.black,
    h2: colors.black,
    h3: colors.black,
    h4: colors.black,
    h5: colors.black,
    h6: colors.grays[8],
    p: colors.black,
    a: colors.blue
  }
}

/**
 * Global theme
 */
export default {
  fontSizes,
  fontFamilies,
  fontWeights,
  lineHeights,
  maxWidths,

  space,

  colors: { ...colors, ...themeColors }
}
