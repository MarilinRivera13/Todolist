import React from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';

const TodoItem = ({ text, completed, onToggle, onDelete }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
      <Checkbox checked={completed} onChange={onToggle} />
      <div style={{ flex: 1, marginLeft: '10px', textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </div>
      <Icon name="trash" onClick={onDelete} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default TodoItem;
