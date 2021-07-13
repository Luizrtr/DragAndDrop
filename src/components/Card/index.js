import React from 'react';
import { useDrag } from 'react-dnd';

import { Container, Label } from './styles';


export default function Card({ data }){
  const [{ isDragging } , dragRef] = useDrag({ //dragRef coloca no elemento que seja arrastável
    type: 'CARD', // Todo item arrastável precisa ter um tipo
    collect: monitor => ({ //Coletar informações sobre o Drag.
      isDragging: monitor.isDragging(),
    }),
  }); 
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