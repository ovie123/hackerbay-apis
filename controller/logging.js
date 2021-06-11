import path from 'path';
import fileSystem from 'fs';
import express from 'express';

const logging = (req, res) => {
  res.set('content-type', 'text/plain');
  const data = fileSystem.readFileSync(
    path.join(process.cwd(), '/logs/app.log')
  );
  return res.status(200).send(data);
};

export default logging;
