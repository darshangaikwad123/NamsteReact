/*
 *
 *;<div id="root">
  <div id="chlid">
    <h1>Hello world</h1>
  </div>
   <div id="chlid">
    <h1>Hello world</h1>
  </div>
</div>
 *
 *
 */

const heading = React.createElement('div', { id: 'parent' }, [
  React.createElement(
    'div',
    { id: 'chlid' },
    React.createElement('h1', {}, 'hello world'),
  ),
  React.createElement(
    'div',
    { id: 'chlid1' },
    React.createElement('h1', {}, 'hello world'),
  ),
])
//heading not tag is a object
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)
//render method take object put in root tag
