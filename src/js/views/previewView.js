import View from './View';

export default class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    return this._data.reduce(
      (acc, cur) =>
        (acc += `
        <li class="preview">
            <a class="preview__link ${
              cur.id === id ? 'preview__link--active' : ''
            }" href="#${cur.id}">
            <figure class="preview__fig">
                <img src="${cur.image}" alt="${cur.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${cur.title}</h4>
                <p class="preview__publisher">${cur.publisher}</p>
            </div>
            </a>
        </li> 
        `),
      ''
    );
  }
}