import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { Container, Label } from './styles';


export default function Card({ data }){
  const ref = useRef();
  
  const [{ isDragging } , dragRef] = useDrag({ //dragRef coloca no elemento que seja arrastável
    type: 'CARD', id: data.id, // Todo item arrastável precisa ter um tipo
    collect: monitor => ({ //Coletar informações sobre o Drag.
      isDragging: monitor.isDragging(),
    }),
  }); 
  
  const [, dropRef ] = useDrop({
    accept: 'CARD', //quais tipos de elementos que ele pode receber o drop
    hover(item, monitor) { // quando eu passar um card por cima de outro
      console.log(item);
    }
  })

  dragRef(dropRef(ref));

  return(
  <Container ref={dragRef} isDragging={isDragging}>
    <header>
      {data.labels.map(label => <Label key={label} color={label} />)}      
    </header>
    <p>{data.content}</p>
    { data.user && <img src={data.user} alt="" />}
  </Container>
  );
}