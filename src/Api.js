function token() {
  return localStorage.getItem('token');
}
export const API = {
  Get: setTodoList => {
    const uri = `${process.env.REACT_APP_URL}/todos`;
    const options = {
      method: 'GET',
      headers: { Authorization: `Bearer ${token()}` },
    };

    fetch(uri, options)
      .then(res => res.json())
      .then(data => setTodoList([...data]));
  },

  Post: (bodyData, setTodoList) => {
    const uri = `${process.env.REACT_APP_URL}/todos`;
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    };

    fetch(uri, options)
      .then(res => res.json())
      .then(data => setTodoList(prev => [...prev, data]));
  },

  Update: (id, todo, isCompleted) => {
    const updateUri = `${process.env.REACT_APP_URL}/todos/${id}`;
    const options = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todo: todo, isCompleted: isCompleted }),
    };
    fetch(updateUri, options).then(({ ok }) => {
      if (ok) {
        alert('수정되었습니다.');
      }
    });
  },

  Delete: async id => {
    const deleteUri = `${process.env.REACT_APP_URL}/todos/${id}`;
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token()}`,
        'Content-Type': 'application/json',
      },
    };
    fetch(deleteUri, options).then(({ ok }) => {
      if (ok) {
        alert('삭제되었습니다');
      }
    });
  },
};
