import PreviewView from './previewView';

class ResultsView extends PreviewView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found! Please try again.';
  _message = '';
}

export default new ResultsView();
