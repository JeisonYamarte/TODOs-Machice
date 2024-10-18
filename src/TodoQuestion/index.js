import React from 'react'
import './TodoQuestion.css'
import { TodoContext } from '../TodoContext'
import { TodosLoading } from '../TodosLoading';

function TodoQuestion() {
    const {
        viewSelect,
        activeQuestion,
    } = React.useContext(TodoContext);
    const [loading, setLoading] = React.useState(true)
    const [response, setResponse] = React.useState('')

    const API_KEY = '59ATHNM9m8qUkrgj7kiBfUaYh5ifjl2a4aU6qK07'

    React.useEffect(()=>{
        const input = viewSelect.text;
        console.log('input', input)
    const question = async ()=>{
        try{
            const res = await fetch('https://api.cohere.ai/generate',{
                method: 'POST',
                headers: {
                   'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'command-xlarge-nightly',
                    prompt: `un pequeño dato sobre, solo el dato que sea corto. ${input} `,
                    max_tokens: 100,
                })
            });

            if (!res.ok) {
                throw new Error('Error en la solicitud');
            }
           
            const data = await res.json();

            console.log('data', data)
            setResponse(data.text);
            setLoading(false);

        } catch (error){
            console.error('Error al enviar la solicitud a OpenAI', error);
            setResponse('Error al conectar con la api');
            setLoading(false);
        }
    };

    question();
    },[activeQuestion]);

    const renderResponse = ()=>{
        return(
            <p className='renderResponse'>
                {response}
            </p>
        )
    }

    const renderView = loading === true ? <TodosLoading /> : renderResponse();

  return (
    <>{renderView}</>
  )
}

export {TodoQuestion}