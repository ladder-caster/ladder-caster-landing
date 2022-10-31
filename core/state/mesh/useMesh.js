import { useEffect, useState } from 'react';
import mesh from './mesh';
import { nanoid } from 'nanoid';

export const useMesh = (key, selector) => {
  const unique_id = nanoid();
  // Get Initial State First
  const source = mesh.getSource(key);

  // Store the current state
  const [value, setValue] = useState(source?.getValue());

  // Create an observer for the current state
  const observer = {
    id: unique_id,
    next(next_value) {
      if (String(next_value !== value)) setValue(next_value);
    },
    complete() {
      setValue(undefined);
    },
  };

  // Subscribe to the current state
  useEffect(() => {
    source?.subscribe(observer);
    return () => {
      source?.unsubscribe(observer);
    };
  }, []);

  // Update observable on setValue
  const updateSource = (next_value) => {
    console.log('update', key, next_value);
    if (source) source.next(next_value);
  };

  return [value, updateSource];
};
