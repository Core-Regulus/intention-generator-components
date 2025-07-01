import { FetchChannel } from "../fetchChannel/fetchChannel.js";

export class JSONFetchChannel extends FetchChannel {
  async #getResponse(resp) {
    return await resp.json();    
  }

  async send(data) {
    this.headers['Content-Type'] = 'application/json';    
    const resp = await super.send(data);          
    const res = await this.#getResponse(resp);
    this.sendMessage(res);
    return res;
  }
}