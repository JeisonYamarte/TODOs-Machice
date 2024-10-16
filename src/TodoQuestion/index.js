import React from 'react'
import OpenAI from 'openai';
import { TodoContext } from '../TodoContext'

function TodoQuestion() {
    const {
        viewSelect,
        activeQuestion,
    } = React.useContext(TodoContext);
    const [response, setResponse] = React.useState('')

    const API_KEY = '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'

    React.useEffect(()=>{
        
    const question = async ()=>{
        try{
            const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    {
                        role: "user",
                        content: viewSelect.text,
                    },
                ],
            });

           
            
            setResponse(completion.choices[0].message.content);
        } catch (error){
            console.error('Error al enviar la solicitud a OpenAI', error);
            setResponse('Error al conectar con la api');
        }
    };

    question();
    },[activeQuestion]);

  return (
    <div>{response}</div>
  )
}

export {TodoQuestion}