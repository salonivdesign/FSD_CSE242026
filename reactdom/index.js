const container=document.getElementById('root');
console.log(container);
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red',backgroundColor:'yellow'}},'Welcome to React App Development');
const h1=React.createElement('h1',{style:{color:'blue',backgroundColor:'green'}},'Abes Engineering College');
// root.render(React.createElement('div', null, h1, h2));/

const div=React.createElement('div',{style:{border:'2px solid black'}},h1,h2);
// const h21=<h2>Hello World</h2>


root.render(div);