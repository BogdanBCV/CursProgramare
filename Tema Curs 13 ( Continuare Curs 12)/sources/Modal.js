class Modal {
  htmlEl = null;
  title = "";
  submitButtonLabel = "";
  cancelButton = null;
  submitButton = null;
  modalEl = null;

  constructor(onSubmit, title, submitButtonLabel) {
    this.onSubmit = onSubmit;
    this.title = title;
    this.submitButtonLabel = submitButtonLabel;
  }

  init(modalEl) {
    this.modalEl = modalEl;
    this.htmlEl = document.querySelector("html");
    this.cancelButton = document.querySelector("#article-modal-cancel");
    this.cancelButton.addEventListener(
      "click",
      this._onCancelButton.bind(this)
    );
    this.submitButton = document.querySelector("#article-modal-submit");
    this.submitButton.addEventListener(
      "click",
      this._onSubmitButton.bind(this)
    );

    this.fillModalEl();
  }

  fillModalEl() {
    this.modalEl.querySelector("h3").innerText = this.title;
    this.submitButton.innerText = this.submitButtonLabel;
  }

  show() {
    this.htmlEl.classList.add("no-overflow");
    this.modalEl.classList.remove("hidden");
  }

  hide() {
    this.htmlEl.classList.remove("no-overflow");
    this.modalEl.classList.add("hidden");
  }
  
  resetModal () {
    document.getElementById('article-modal-title').value = ''
    document.getElementById('article-modal-descr').value = ''

}
  _onCancelButton() {
    this.hide();
    this.resetModal();
  }

  _onSubmitButton() {
    const articleTitle = document.getElementById('article-modal-title').value;
    const articleDescription = document.getElementById('article-modal-descr').value;
    this.onSubmit(articleTitle, articleDescription);
    this.hide();
    console.log(articleTitle, articleDescription);
  }
}