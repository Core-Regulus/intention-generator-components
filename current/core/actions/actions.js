export class Actions {  
  #application = null;

  constructor(application) {
    this.#application = application;
  }

  async dispatch(element, action) {
    if (action == null) return;    
    if (this.#application == null) return;
    return await this.#application[action]?.(element);
  }
}