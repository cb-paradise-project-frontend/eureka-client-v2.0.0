import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';

import styles from './Browse.module.scss';

import TaskList from './TaskList';
import TaskDetail from './TaskDetail';

const testData = {
  title: 'Roof repair',
  status: 'open',
  budget: '120',
  poster: {
    name: 'Tifa',
    avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAKcklEQVR4XuVbe4wdVRn/fWfutoWCRaV0OzNn7ralFQtUpTwLxgaUFDAFYixKLFA0qISEPxAij2Akihok0RgDaGqVBh9EY6losaY+ArUKXUDAaqWPvXNmZnfbhhRKn7tzPnPunXs7e3t3770zdzclnKTZ7c73+H2/OXPmnO/7hvAuH/Qujx8TTQB5njdfa+0R6ZkAzazcAO5nFv1CDJd8f+A/5g8TdWMmggDhefZlzHQtgKUAnCbBhQDWEvFvfT/aAECPJxnjSoCUtgn4QYDOzBjEa0R8j+9Hv8uo31RtXAhwHGeeEFgJ4JKmCFoTeE5rfD4Mw/+1Jt66VMcJkNK+HKBfATilAYw3mPF7IbAR4IjZ6jcyRLFZD2ytcTERrgLwvga6ewG+TqlofevhNZfsKAGua99GRN8DYNW5fh4Q9yulzDM93ARWQUp5GaAfAHB+nWwM8O1KRT9sHlprEh0jwPOcTzPD3Pm0zUEi3Ob74a9bgzNSKrH5AwAzUleYCMuy2qzH0RECikX7I1rTcwBOrDpgxkta89VRFKkswVd1bNuWhQKtZcaHU3YOCMGXlErRS3lslx+/vAZs2z7Rssi8u72jtujZONZLoig6kNe+0U98/DG9qDKjpDXPz+sjNwFSOvcC+EbqzpeGh+PzBgYGdnci+KqN7u7u6YWC9QIRiim79yoVPpjHTy4CbNs+1bLEdoDfk4CIhdDnl0r9L+YBNZpusTjzHK3FCwBERYbeimM9J4qiPVn95SJASsewf3fK+SqlwpuzgmlFT0pnFYCbUrLfUiq8pxXdRjJ5CXgdwOmJ4UNaY24YhkFWMK3oOY7jCgHjd0oiv02pcG4ruh0lwPO8M5nj11IL3xqlArPfH/chpbsG4KurjojiM31/YEsWx5lngOc5dzObfX7yNBJu8v3wZ1lAtKsjpWMeAfMoVFYCort9P/h2u3bKulmUjI7nOauZ8bmq/qRJwzO2bx/cldVeO3pz5sw47ciRwmBVhxmrgyC8oR0bNfKyKBkd13U2EOHSRH+/UuFJWW1l0ZPS2V/deDFjQxCEH89iJ/MMkNIxz9wHE6evKxXOywIgq46UTmoBpi1KBZmO3DkIsPsB6q4EwJuVis7LGkwWPSntFwA6N9HtVyq0s9jJQYCzFUD1riulwtRWOAuU9nSkdMwZw60sgtjq++EZ7VmoSOchYBOACxOnQ0qFkycwlyekdA4DKCQEbPL9cNEEE+CuBLi264tjPiOKIjMrxn3Ytv0By6L/HnVEK5UKvpDFcY4ZYN8KUC0xwcx3BUH0UBYQ7eq4rn0XEX0npXerUuEj7drJ9Qi4rjuXiGs5Omb8PQjCi7OAaFfHdZ2NRKhNeWaaFwSBeSu0PTLPAONJSqcXwDlVr1pjURiGZm0Yt1Es2ou0po0pB71KhdW3Qdt+cxHgec4XmfFoyutzSoUfbRtFGwpSOibzVJtpRPiS74ePtWFihGguAubPnz9p3743t5nJcNQq36xUVNunZwXWSE9KewVAP0ldUyefPO30LVu2HMnqJxcBxqnnOcuZ8XgKwGGtsTgMw39kBdVIz3Gci4TAXwCY1215EOEG3w9X5/GTm4BkLfgDgCtSs2CAWVweBMGrecBVdV3XPZtIrz+68yxfWadUeGVe+x0hoKenpzuOh/45MjGKtwFerlS0Jg9I13WvJWIzw2qHLZMQLRS6Luzr6xvIY7s8i/IaqOpLKc8C9LN1FSEGaBUz7g+CwBQ9Wx6u6zpEeADgFXU49xJZl/i+/++WjY0h2DECjA/XdRcQ8TMAkrJ3zfNBZvzIsvjJUikya8NoFV9RLNoXxjEtI8ItAE6ow97PTEuCIHilE8F3dAZUAc2aNbMYx+IXzLhoFJCDAG0yPQEAyrXBCmE0k5kXEeG0RnpE2GRZ+rM7d/aXOhX8uBCQzASHiJ8CsLBDYHsBsVQpFXXIXs1Mxx4BKeV5gL6GGVcQlctYHbOdoGVmvEyEdYBYo5Qy9YHcIxdIU7ISQlxPxF9Ob4lzo2rNwIvM9IjW+ud5ymOZCOjp6ZkSx0N3APjKKH0A6RBMv892c/eEoB0A72XmN5nFXsviN41gHNM0In0KEU0D6BSteXYyi+a0MJP2AviuZXU93NfXd6g17o5KtU2AlPZngPJRdLQMUMyMvwlBawG9+eDBoX/t3r377XaBGfnp06efdMIJXR8CxLla81IifKxB70HZtNkbEPFXlYp+2Y6vlgnwPO+9Wserkw6ORj7+xExPaq3X5KnVjQXe1CKFENcQ8TIAn2gky4ynC4Wu5X19fWZmNB0tEVCp/4vfADzrWIv0lBD6652o1TdFmxJIMH0tXSFKXd6hNT4VhuHLzWw2JaBYdC7VGk/Xb0pMLt6y+M6JDrw+IENEHNNDRLis7tpBrXFVGIbmADXqGJOA5NX25/Q+HMAQM9+XpL8mrKGxyZ0k17XvJCLTp9BVlSXCPmZxqVJq82j6oxLged5s5vh5AO9PKfvMtCwIAnPwOe6G67oXEPGTdQv0HiLrAt/3dzQCPCoBdaUvs8ruIhKLlFLbj7vIU4Bc1z0dYJMzrG2pxyqdNSTA85wbmfHT9FQi0ovHq/Oj04SaThJm8VdmnJyK4UbfD9OJm/KlRgRYSdWldqIjwnW+H5qp9Y4ZUtrXAZTeE5jymUndxekgjiHAdd0lRLwuJfSiUmGnDjUTSSBJ6ZjFr5a1BsQSpZTpNquNYwiQ0n4CoOurEsx0VRAEJuX1jhuu615BxDXsRPyE70e1noaGj4CUjsncVCutO5QKzX78HTukdMyiPTsJIFQqLBdUa2tD+j8LFy7s2rVrwBwoym1oeTovjhfGXNd5nAjLEzw6KeLW+pVHPAI9Pd09cWztTIH/plLhfcdLMFlwSOmYzZFp5iyPQkH3pLNKIwg4turKm4eG9JWd7vrMEkgWnUojp0mg1BopUF/Frl8EhZTutrpDzxvM/H1ArGw3s5sFdCd0TIO1EFhBRLeP/PaAdioVmL7GWlJ2tNegOfzU9/zHAG2ovCLj9Vn78joRYCMbSd/iEmZcSYTFR9tpa9IxM30yCAKTtW68CFb/WvnWh0zPX6OvPqpi5luAXoA2m8RHHNPW7u7unb29vUPjFaSxaxbqwcHBHiH0GYBYqDWfSwRTHU5/U1APwXxtcpNSkUnUjhijngWKxeJMrYfvMPn59JaySXBmlvgAm4KpyeDuIaI9WuvdRDANzQeZxRFmPlwo6MPMXabNBURDk4eHxWQimkykJ5mjNzNM8mM6M58K4NTkE7u5AJtMVP3sHAUWvQXwj4UoPFwqlaop+NYIqErNnj172pEjh24hIvMqOXs8724Hbb/KzKunTDn02LZtb7w1lt2mCZG0smlUJiKzVTaFUFOjH2vadTCepqZM1+hGZlrHzM+007DdFgH1MEzL6tCQtYCZFgA4ixkeUblXwPyrL2s1jaKJwEEAihmKCD4A803hK11d8St5WnRzETAWYPMOLhQKM7TWU01Lq2XxVGZMZa78FEKUf6+sAbRfa72fCPvN7+ZnHJNphT0ghNg/PDw8OF6J1nEjIO/tnij9dz0B/wfKmOxuXn/6sQAAAABJRU5ErkJggg=="
  },
  location: 'Kurunjang VIC 3337, Australia',
  due: 'Monday, 24th Aug 2020',
  details: `-remove existing bamboo fence - supply and install new fence (open for ideas)
            - install synthetic turf
            - landscaping design and install
            - remove and upgrade existing waterfall feature into the pool`,
};

function createData(size, data) {
  const dataArray = [];
  for(let i = 0; i < size; i ++) {
    const newData = {...data};
    newData.id = `${i}`;
    dataArray.push(newData);
  }
  return dataArray;
}

const dataArray = createData(10, testData);
dataArray[1].title = 'Wall repair';
dataArray[1].status = 'assigned';
dataArray[2].status = 'completed';
dataArray[3].status = 'expired';



function Browse({ match }) {

  //eslint-disable-next-line
  const [taskList, setTaskList] = useState(dataArray);

  return(
    <div className = {styles.browse} >
      <TaskList taskList={taskList} />
      <Route path={`${match.path}/:taskId`} >
        <TaskDetail taskList={taskList} />
      </Route>
    </div>
  );
}

export default withRouter(Browse);