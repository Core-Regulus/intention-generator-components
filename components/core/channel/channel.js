export class ChannelError extends Error {
  constructor(message, channel) {
    super(message);
    this.channel = channel;
  }
}

export class ChannelEvent extends Event {
  #channel;
  #data;

  get data() {
    return this.#data;
  }

  get channel() {
    return this.#channel;
  }
  
  constructor(message, data, channel) {
    super(message);
    this.#data = data;
    this.#channel = channel;
  }

}

export class Channel extends EventTarget {
  async send(data) {
    throw new ChannelError('Send is not implemented', this);
  }
  sendMessage(data) {
    const msg = new ChannelEvent('message', data, this);    
    this.dispatchEvent(msg);
  }
  on = {
    message: (handler) => {
      this.addEventListener(this, 'message', handler);
    }
  }
  off = {
    message: (handler) => {
      this.removeEventListener(this, 'message', handler);
    }
  }

}