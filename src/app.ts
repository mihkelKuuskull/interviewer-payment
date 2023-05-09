
import express from 'express';
import { routes } from './router';
import localtunnel from 'localtunnel';

(async () => {
    const app = express();
    routes.forEach((route) => {
        app[route.method](route.url, async (req, res) => {
            const response = await route.handler(req);
            res.json(response);
        })
    });
    const tunnel = await localtunnel({ port: 3001, subdomain: 'giant-parks-dance' });
    console.log(tunnel.url);
    app.listen(3001);
  })();