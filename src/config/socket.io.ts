import { io } from "socket.io-client";
import store from "./redux";

const socket = io("https://server-domain.com");

socket.onAny((eventName, ...args) => {
    store.dispatch({
        type: eventName,
        payload: args,
    });
});
