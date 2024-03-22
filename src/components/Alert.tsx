import {useEffect} from "react";

type AlertProps = {
  name: string
  flag: boolean | undefined
  closeAlert: Function
}

function Alert({name = '', closeAlert = Function.prototype, flag}: AlertProps) {

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 1000);
    return () => clearTimeout(timerId);
  }, [name]);

  return (
    <div id="toast-container">
      {flag ? <div className="toast">{name} <br/> добавлено!</div> : <div className="toast">{name} <br/> удалено!</div>}
    </div>
  );
}

export {Alert};
