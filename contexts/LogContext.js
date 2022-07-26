import React from 'react';
import {createContext, useState} from 'react';
import {Alert} from 'react-native';
import {v4 as uuidv4} from 'uuid';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState(
    Array.from({length: 10}).map((_, index) => ({
      id: uuidv4(),
      title: `Log ${index}`,
      body: `Log ${index}`,
      date: new Date().toISOString(),
    })),
  );
  const onCreate = ({title, body, date}) => {
    if (title !== '' || body !== '') {
      const log = {
        id: uuidv4(),
        title,
        body,
        date,
      };
      setLogs([log, ...logs]);
    } else {
      Alert.alert('오류', '제목이나 내용을 입력후 저장해주세요.', [
        {text: '확인', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  const onModify = modified => {
    const nextLogs = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLogs);
  };

  const onRemove = id => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };
  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
