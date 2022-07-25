import React from 'react';
import {createContext, useState} from 'react';
import {Alert} from 'react-native';
import {v4 as uuidv4} from 'uuid';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState([]);
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
  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
