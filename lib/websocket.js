// lib/websocket.js

/*class WebSocketClient {
  constructor(url) {
    this.url = url;
    this.ws = null;
    this.listeners = {};
  }

  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(listener => listener(data));
    }
  }

  connect() {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      console.log('WebSocket connection established');
      this.emit('open', {});
    };

    this.ws.onmessage = (message) => {
      console.log('Message from server ', message.data);
      // Assume the message data is JSON and includes a type property.
      const data = JSON.parse(message.data);
      this.emit(data.type, data);
    };

    this.ws.onclose = () => {
      console.log('WebSocket connection closed');
      this.emit('close', {});
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error: ', error);
      this.emit('error', error);
    };
  }

  sendMessage(message) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(message);
    } else {
      console.error('WebSocket is not connected.');
    }
  }

  close() {
    if (this.ws) {
      this.ws.close();
    }
  }
}

export default WebSocketClient;*/
