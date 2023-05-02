import "./style.css";
import { connectToServer } from "./socket-client.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2>Websocket - client</h2>

    <input id="jwt-token" placeholder="jwt" />
    <button id="jwtConnect">connect</button>
    <br/>
    <span id="server-status">Offline</span>
    <ul id="clients-ul"></ul>
    <form id="message-form">
      <input placeholder="message" id="message-input" />
    </form>
    <h3>Message</h3>
    <ul id="messages-ul"></ul>
  </div>
`;


const jwtToken = document.querySelector<HTMLInputElement>('#jwt-token')!;
const btnConnect = document.querySelector<HTMLButtonElement>('#jwtConnect')!;

btnConnect.addEventListener('click', () => {

  if ( jwtToken.value.trim().length <= 0 ) return alert('Enter a valid JWT');

  connectToServer( jwtToken.value.trim() );

})