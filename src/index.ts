import { Hono } from 'hono';

const app = new Hono();

const wait = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

app.get('/default', async (c) => {
  console.log('\n----------------------- Default -----------------------\n');
  await wait(3000);
  const now = new Date().toISOString();
  return c.json({ now });
});

app.get('/ssr', async (c) => {
  console.log('\n----------------------- SSR -----------------------\n');
  await wait(3000);
  const now = new Date().toISOString();
  return c.json({ now });
});

app.get('/ssg', async (c) => {
  console.log('\n----------------------- SSG -----------------------\n');

  await wait(3000);
  const now = new Date().toISOString();
  return c.json({ now });
});

app.get('/isr', async (c) => {
  console.log('\n----------------------- ISR -----------------------\n');
  await wait(3000);
  const now = new Date().toISOString();
  return c.json({ now });
});

app.get('/dynamic-function', async (c) => {
  console.log(
    '\n----------------------- Dynamic Function -----------------------\n'
  );
  await wait(3000);
  const now = new Date().toISOString();
  return c.json({ now });
});

app.get('/params', async (c) => {
  console.log('\n----------------------- Params -----------------------\n');
  const params = [1, 2, 3, 4, 5];

  return c.json({ params });
});

app.get('/params/:id', async (c) => {
  await wait(3000);
  const id = c.req.param('id');

  return c.json({ id });
});

export default app;
