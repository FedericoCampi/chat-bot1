import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  response: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { message } = req.body;

  // Respuestas simples basadas en palabras clave
  if (message.includes('a')) {
    res.status(200).json({ response: "¡Estoy bien! ¿Y tú?" });
  } else {
    res.status(200).json({ response: "¡Esa es una buena pregunta!" });
  }
}