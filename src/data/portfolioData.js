const portfolioData = [
  {
    id: 9,
    img: './assets/xray.png',
    title: 'Fill-in-the-blank Medical Report',
    desc: `Automatic filling of medical report from chest X-ray scans using CNN-LSTM
    architecture. Worked under Dr. Li Cheng and Hoang Nguyen.`,
    category: 'Original',
    demo: ``,
    code: `https://github.com/dimassudjito/med-caption`,
    tools: 'PyTorch, Pandas'
  },
  {
    id: 6,
    img: './assets/quora.png',
    title: 'Quora clone',
    desc: `A full clone of quora.com, a questions and answers application, based on
    GraphQL. Equipped with a classifier API to detect insincere questions.`,
    category: 'Forgery',
    demo: `https://rankify.netlify.com`,
    code: `https://github.com/dimassudjito/quora-clone`,
    tools:
      'Scikit-learn, Flask, MongoDB, Mongoose, Apollo Server, Vue.js, Vuetify'
  },
  {
    id: 5,
    img: './assets/campfire.png',
    title: 'Campfire',
    desc: `A public space where users can read and write scary stories anonymously`,
    category: 'Original',
    demo: `https://campfire-story.netlify.com`,
    code: `https://github.com/dimassudjito/`,
    tools: 'PostgreSQL, node.js, express.js, react, bootstrap, heroku'
  },
  {
    id: 1,
    img: './assets/bang.jpg',
    title: 'bang!',
    desc: `A Kinect-like duel game where the players make the gun motion to pull the
    trigger. The player who shoots faster wins.`,
    category: 'Original',
    demo: `https://bang-game.netlify.app/`,
    code: `https://github.com/dimassudjito/bang`,
    tools: 'js, ml5, p5, teachable machine'
  },
  {
    id: 8,
    img: './assets/d3ja-vue.png',
    title: 'd3ja-vue',
    desc: `A vue component library for data visualization with d3.js`,
    category: 'Original',
    demo: `https://www.npmjs.com/package/d3ja-vue`,
    code: `https://github.com/dimassudjito/d3ja-vue`,
    tools: 'Vue.js, D3.js'
  },
  {
    id: 10,
    img: './assets/titanic.jpg',
    title: 'Titanic Predictor',
    desc: `See whether you will survive the titanic using this classifier API`,
    category: 'Original',
    demo: ``,
    code: `https://github.com/dimassudjito/titanic-flask`,
    tools: 'Scikit-learn, Flask'
  },
  {
    id: 4,
    img: './assets/rankify.png',
    title: 'Rankify',
    desc: `A suite of decision-making tools built with react and bootstrap. Currently hosts two tools: sports brackets and QuickSelect.`,
    category: 'Original',
    demo: `https://rankify.netlify.com`,
    code: `https://github.com/dimassudjito/rankify`,
    tools: 'react, bootstrap'
  },
  {
    id: 2,
    img: './assets/congklak.jpg',
    title: 'congklak',
    desc: `It simulates a game of congklak for two players. It contains all the rules and it will move the seed automatically, so the players can focus on the game.`,
    category: 'Original',
    demo: `https://devpost.com/software/congklak`,
    code: `https://github.com/dimassudjito/congklak`,
    tools: 'python, pygame'
  },
  {
    id: 3,
    img: './assets/permika.png',
    title: 'Permika website clone',
    desc: `Website for the Indonesian Student Association in Edmonton. The original website is built with wix and we want to avoid the premium fee.`,
    category: 'Forgery',
    demo: `https://permika.netlify.com`,
    code: `https://github.com/dimassudjito/permika-clone`,
    tools: 'react, bootstrap'
  },
  {
    id: 7,
    img: './assets/sagaline.png',
    title: 'Sagaline 1.0',
    desc: `Timeline-based history lesson with interactive quiz`,
    category: 'Original',
    demo: `https://sagaline.bubbleapps.io/`,
    code: `https://devpost.com/software/sagaline`,
    tools: 'bubble.io'
  }
]
export default portfolioData
