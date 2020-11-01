const bookmarks = [
  {
    id: 1,
    subject: "how to create react app",
    notes: `"npx create-react-app <app-name>", must be in all lowercase`,
    link: "https://reactjs.org/docs/create-a-new-react-app.html"
  },
  {
    id: 2,
    subject: "Tech Industry Media Resources List",
    notes: "tech media link list",
    link: "https://docs.google.com/document/d/1lfK2M3fCUzgBKpMD9fFIbkecpAPx3sMk\
      -lUTm4xAfaE/edit"
  },
  {
    id: 3,
    subject: "html structure",
    notes: () => {
      return (
        `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>repl.it</title>
            <link href="style.css" rel="stylesheet" type="text/css" />
          </head>
          <body>
            <script src="script.js"></script>
          </body>
        </html>`
      )
    },
    link: ""
  },
  {
    id: 4,
    subject: "Border Box",
    notes: `* {
      box-sizing: border-box;
    } you can also do this, which is a slightly bettter practice html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }`,
    link: ""
  },
  {
    id: 5,
    subject: "CSS Resets",
    notes: "To normalize CSS accross browsers.",
    link: "https://necolas.github.io/normalize.css/",
    link2: "https://meyerweb.com/eric/tools/css/reset/reset.css"
  },
  {
    id: 6,
    subject: "CSS Select by element and attribute.",
    notes: `
    Exact match: element[attribute=value]
    Match pattern anywhere in value: element[attribute*=value]
    Match pattern at beginning of value: element[attribute^=value]
    Match pattern at end of value: element[attribute$=value]
  `,
    link: ""
  },
  {
    id: 7,
    subject: "Use headers with <h1>",
    notes: "Need to use <header> for proper semantics, and they have to go in \
      order, can only have 1 <h1> and they must be in sequence.",
    link: ""
  },
  {
    id: 8,
    subject: "Forms",
    notes: `Enter method and action in forms <form class="demo-form" \
      action="/some-server-endpoint" method ="post">`,
    link: ""
  },
  {
    id: 9,
    subject: "Flex grow, Flex shrink",
    notes: `For responsiveness, if you set these proprerties they will grow in \
      proportion to eachtother, by the value given.   .menu > .name { \
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: 120px;
    }
    .menu > .name {
      flex: 0 0 120px;
    }`,
    link: ""
  },
  {
    id: 10,
    subject: "Complexity of Algorythms",
    notes: "messurement of efficiency for algorythims",
    link: "www.bigocheatsheet"
  },
  {
    id: 11,
    subject: "Features supported by browsers",
    notes: "Site that tells you what features are availabe on each browser.",
    link: "https://caniuse.com/"
  },
  {
    id: 12,
    subject: "Strict mode",
    notes: "This ensures that no global variables are allowed to be created.",
    link: ""
  },
  {
    id: 13,
    subject: "Arrow functions",
    notes: "const add = (a+b) => a + b, only need {return} when it is a multi \
      line function. When defining an arrow function with only one parameter, \
      the () are optional. So const hello = name => alert(name) is ok.",
    link: ""
  },
  {
    id: 14,
    subject: "Escape characters",
    notes: "You can escape characters with \. \"hello\" like in this example. \
      the backslash eliminates the error and you can use the quote marks. You \
      can also do a new line \n or a tab \t.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/\
      Global_Objects/String#Escape_notation"
  },
  {
    id: 15,
    subject: "Math Object operators",
    notes: "Javascript has built in object for mathmatical operations. Details in Link.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math"
  },
  {
    id: 16,
    subject: "False vs True",
    notes: "If it's not false, \"\", 0, null, undefined, or NaN, it evaluates \
      to true. If using && and both are true, the expression returns the second \
      value" ,
    link: ""
  },
  {
    id: 17,
    subject: "Truthy",
    notes: " truthy values (that is to say, the boolean value of 1 is true) \
      == is truthy (it coerces the value is being compared), while === is \
      strict which means it also compares data type",
    link: ""
  },
  {
    id: 18,
    subject: "View property of object",
    notes: "console.dir(object) lets you see all the properties of an object.",
    link: ""
  },
  {
    id: 19,
    subject: "Array methods",
    notes: "Different methods to use on arrays.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods"
  },
  {
    id: 20,
    subject: "Vertical and Horizontal centering",
    notes: "How to vertical center h1",
    link: "w3.org/style/examples/007/center.en.html"
  },
  {
    id: 21,
    subject: "Install Git Bash on Windows",
    notes: "How to install git bach on windows",
    link: "https://courses.thinkful.com/dev-environment-v1/checkpoint/2"
  },
  {
    id: 22,
    subject: "How to load seed files to server database.",
    notes: "cat <file_name> | heroku pg:psql",
    link: "https://medium.com/@ronmartin89/heroku-how-to-seeding-a-postgresql-database-with-node-js-742bcf034d3e"
  },
  {
    id: 23,
    subject: "mkdir create all folders",
    notes: "How to create a entire file path and folders with CLI: mkdir -p test/cats/dogs/bears",
    link: "https://courses.thinkful.com/dev-environment-v1/checkpoint/2"
  },
  {
    id: 24,
    subject: "CLI Cycle through previous commands",
    notes: "YOu can cycle to previous CLI commands on bash by using up and down array keys",
    link: ""
  },
  {
    id: 25,
    subject: "CLI hide and view hidden files",
    notes: `to create just user a ".", touch .hidden.txt, or mkdir ./.file/.hidden.txt. to view use ls -a. For windows you do it by setting attribute.`,
    link: "https://courses.thinkful.com/dev-environment-v1/checkpoint/2"
  },
  {
    id: 26,
    subject: "deleting folders on CLI",
    notes: "use the i to prompt for approval. rm -i -rf <somefile>.",
    link: ""
  },
  {
    id: 27,
    subject: "Move or Copy a file.",
    notes: "to move: mv foo.txt bar.txt (this renames file), mv ./test/foo.txt \
      ./test/bar.txt (this moves to new folder). to copy: cp ./test/foo.txt \
      ./test/bar.txt.",
    link: ""
  },
  {
    id: 28,
    subject: "VS Code shortcuts.",
    notes: "Shortcuts for vscode.",
    link: "for mac: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf\
      for windows: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf"
  },
  {
    id: 29,
    subject: "Update changes automatially if not on React",
    notes: "You can update changed automatically if working on regular html \
      files, much like you can with react.",
    link: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
  },
  {
    id: 30,
    subject: "Set up Git",
    notes: "How to set up Git",
    link: "https://courses.thinkful.com/dev-environment-v1/checkpoint/4"
  },
  {
    id: 31,
    subject: "Git Command",
    notes: "Common commands for git and branches.",
    link: "https://courses.thinkful.com/dev-environment-v1/checkpoint/6"
  },
  {
    id: 32,
    subject: "Merging branches",
    notes: "When merging branches use git merge --no-ff. It keeps a history of \
      the commits and merges instead of just branching.",
    link: "https://courses.thinkful.com/dev-environment-v1/checkpoint/6"
  },
  {
    id: 33,
    subject: "Client sourse URL file linking to html docs",
    notes: "When you need to link <img> or <video> url to static paths instead \
      of using a server to serve them.",
    link: "https://dev.to/sofiajonsson/image-relative-path-in-react-3fci"
  },
  {
    id: 34,
    subject: "",
    notes: "",
    link: ""
  },
  {
    id: 35,
    subject: "",
    notes: "",
    link: ""
  },
  {
    id: 36,
    subject: "",
    notes: "",
    link: ""
  },{
    id: 37,
    subject: "",
    notes: "",
    link: ""
  },

]