import React, { useEffect, useState } from "react";
import { Todo } from "../ToDo.model";
import { Button, ScaleFade, useDisclosure } from '@chakra-ui/react'

export const ToDo = (props: any) => {
  const [firstRender, setFirstRender]=useState(true);
const { isOpen, onToggle, onOpen } = useDisclosure({defaultIsOpen: true});

  const onEditClickHandler = (item: Todo) => {
    props.onEditClick(item)
  };
  const onDeleteClickHandler = async () => {

    onToggle();
    // setFirstRender(false);
    // props.onDeleteClick(id);

  }

  useEffect(() => {
    if (isOpen === false)
      props.onDeleteClick(props.item.id);
  }, [isOpen]);

  return (
    <ScaleFade initialScale={0.9} in={isOpen}>
        <div
      key={props.item.id}
      className={`${props.item.completed ? "completed" : "pending"}`}
    >
      {props.item.title}
      <Button
        colorScheme='blue'
        onClick={onDeleteClickHandler}
        disabled={props.isEdit}
      >
        Complete
      </Button>
      <Button
        colorScheme='blue'
        onClick={() => {
            onEditClickHandler(props.item)
        }}
        disabled={props.isEdit}
      >
        Edit
      </Button>
    </div>
    </ScaleFade>
    
  );
};
