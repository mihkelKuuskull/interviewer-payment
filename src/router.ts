import { handler as PingHandler } from "./routes/ping.get";
import { handler as StartDepositHandler } from "./routes/start-deposit.post";

export const routes = [
    { url: '/ping', method: 'get', handler: PingHandler },
    { url: '/start-deposit', method: 'post', handler: StartDepositHandler },
];
