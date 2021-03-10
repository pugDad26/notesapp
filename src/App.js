import logo from './logo.svg';
import './App.css';

import 
  React
    , {
    useEffect, 
    useReducer
} from 'react';

import { API } from 'aws-amplify';

//import { List } from 'antd';
import 'antd/dist/antd.css';

import { listTodos } from './graphql/queries';

import { v4 as uuid } from 'uuid';

import { 
  List, 
  Input, 
  Button 
} from 'antd';

import { createTodo as CreateTodo } from './graphql/mutations';

const CLIENT_ID = uuid()

const initialState = {
  notes: [],
  loading: true,
  error: false,
  form: { 
    name: '', 
    description: '' 
  }
}
//No need for break when you are returning
const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_NOTES':
      return {
        ...state,
        notes: action.notes,
        loading: false
      };
      //break;

    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true
      };
      //break;

      case 'ADD_NOTE':
        return { 
          ...state,
           notes: [
             action.note,
              ...state.notes
            ]
          };
          //break;

      case 'RESET_FORM':
        return { 
          ...state, 
          form: initialState.form 
        };
        //break;

      case 'SET_INPUT':
        return { 
          ...state, 
          form: { 
            ...state.form, 
            [action.name]: action.value 
          } 
        };
          //break;

    default:
      return { 
        ...state 
      };
      //break;
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchNotes = async () => {
    try {
      const notesData = await API.graphql({
        query: listTodos
      });

      dispatch({
        type: "SET_NOTES", 
        notes: notesData.data.listTodos.items
      })
    }

    catch (err) {
      console.error(err);
      dispatch({
        type: "ERROR"
      });
    }
  } 

  useEffect(
    () => {
      fetchNotes();
    },
    [] 
  );

  const styles = {
    container: {
      padding: 20
    },
    input: {
      marginBottom: 10
    },
    item: { 
      textAlign: 'left' 
    },
    p: { 
      color: '#1890ff' 
    }
  };

const createNote = async () => {
  //Destructuring
  const { form } = state

  //Lame form validation...but, good enough
  if (!form.name || !form.description) {
    return alert('please enter a name and description');
  }

  const note = { 
    ...form, clientId: CLIENT_ID, 
    completed: false, 
    id: uuid() 
  };
  
  //Optimistic Dispatch
  dispatch({ 
    type: 'ADD_NOTE', 

    //shorthand for note: note
    note 
  });

  dispatch({ 
    type: 'RESET_FORM'
  });

  try {
    await API.graphql({
      query: CreateTodo,
      variables: { input: note }
    });

    console.log('successfully created note!');

    } catch (err) {
      console.error("error: ", err);
    }
  };

  const onChange = (e) => {
    dispatch({ 
      type: 'SET_INPUT', 
      name: e.target.name, 
      value: e.target.value 
    });
  };

  const renderItem = (item) => {
    return (
      <List.Item 
        style={styles.item}
      >
        <List.Item.Meta
          title={item.name}
          description={item.description}
        />
      </List.Item>
    );
  }

  return (
    <div 
      style={styles.container}>
      <Input
        onChange={onChange}
        value={state.form.name}
        placeholder="Note Name"
        name='name'
        style={styles.input}
      />
      <Input
        onChange={onChange}
        value={state.form.description}
        placeholder="Note description"
        name='description'
        style={styles.input}
      />
      <Button
        onClick={createNote}
        type="primary"
      >Create Note</Button>
      <List
        loading={state.loading}
        dataSource={state.notes}
        renderItem={renderItem}
      />
    </div>
  );

}

export default App;
