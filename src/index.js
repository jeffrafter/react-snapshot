import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';

export const render = (rootComponent, domElement) => {
  if (navigator.userAgent.match(/Node\.js/i)) {
    domElement.innerHTML = ReactDOMServer.renderToString(rootComponent)
    Helmet.renderStatic()
  } else {
    ReactDOM.render(rootComponent, domElement)
  }
}
