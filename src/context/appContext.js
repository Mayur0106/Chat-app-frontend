import {io} from "socket.io-client";
import React from "react";
const SOCKET_URL = `${process.env.REACT_APP_CHAT_APP_SERVER_URL}`;
export const socket = io(SOCKET_URL);

export const AppContext = React.createContext();
