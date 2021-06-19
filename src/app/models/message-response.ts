import { Message } from "./../models/message";

export class MessageResponse {
  statusCode?: number;
  responseMessage?: string;
  body?: Message;
}
