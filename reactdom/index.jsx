const container=document.getElementById('root');
console.log(container);
const root=ReactDOM.createRoot(container);
// const h2=React.createElement('h2',{style:{color:'red',backgroundColor:'yellow'}},'Welcome to React App Development');
// const h1=React.createElement('h1',{style:{color:'blue',backgroundColor:'green'}},'Abes Engineering College');
// const img=React.createElement('img',{src:'https://images.unsplash.com/photo-1682685790910-1e7f3c8d5b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sfGVufDB8fDB8fHww&w=1000&q=80',alt:'school',style:{width:'300px',height:'200px'}});
// root.render(React.createElement('div', null, h1, h2));/

// const div=React.createElement('div',{style:{border:'2px solid black'}},h1,h2);

const h21=<h2>Hello World</h2>
const h22=<h2>ABES Engineering College</h2>
const div=<div>{h21},{h22}</div>;

const wrapper=<div style={{border:'2px solid blue'}}>
{div}
<h2>Hey There</h2>
</div>

root.render(wrapper);