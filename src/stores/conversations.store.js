import {writable} from "svelte/store";
import {messages} from "../lib/ChatView/Messages.constant.js";

export const activeConversationIndex = writable(0)

export const conversation = writable(messages)

export const user = writable({
	userName: "John doe",
	avatar: "https://randomuser.me/api/portraits/men/30.jpg",
})
