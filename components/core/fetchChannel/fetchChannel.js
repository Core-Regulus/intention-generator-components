import { Channel, ChannelError } from "../channel/channel.js";

export class FetchChannel extends Channel {
  #url = null;
  #headers = {};
  #method = 'POST';
  #status = null;
  #response = null;

  get url() {
    return this.#url;
  }
  set url(value) {
    this.#url = value;
  }
  
  get headers() {
    return this.#headers;
  }

  set headers(value) {
    this.#headers = value;
  }

  get method() {
    return this.#method;
  }

  set method(value) {
    this.#method = value;
  }

  get response() {
    return this.#response;
  }

  async send(data) {
    if (this.#url == null) throw new Error('url is not set');
    this.#response = await fetch(this.#url, {
      headers: this.#headers,
      method: this.#method,
      body: data
    });
    this.#status = resp.status;    
    if (!resp.ok) {
      throw new ChannelError(`Response from ${this.#url} error. Status code is ${this.#status}`, this);    
    }
    return this.#response;
  }
}